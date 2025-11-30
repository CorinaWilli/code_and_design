/**
 * HandPose Boilerplate mit ml5.js
 * 
 * Dieses Sketch erkennt Hände über die Webcam und zeichnet die erkannten Keypoints.
 * Es dient als Ausgangspunkt für eigene Hand-Tracking-Projekte.
 * 
 * Dokumentation: https://docs.ml5js.org/#/reference/handpose
 * 
 * Jede Hand hat 21 Keypoints (0-20):
 * - 0: Handgelenk
 * - 1-4: Daumen
 * - 5-8: Zeigefinger
 * - 9-12: Mittelfinger
 * - 13-16: Ringfinger
 * - 17-20: Kleiner Finger
 */

// Globale Variablen
let handpose;           // Das ml5.js HandPose-Modell
let video;              // Die Webcam
let hands = [];         // Array mit allen erkannten Händen
let ratio;              // Skalierungsfaktor zwischen Video und Canvas
let isModelReady = false; // Flag, ob das Modell geladen und Hände erkannt wurden

/**
 * Lädt das HandPose-Modell vor dem Setup
 * Diese Funktion wird automatisch vor setup() ausgeführt
 */
function preload() {
  handpose = ml5.handPose();
}

/**
 * Initialisiert Canvas und Webcam
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1); // Performanceoptimierung

  // Webcam einrichten
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide(); // Versteckt das Standard-Video-Element

  // Berechne Skalierungsfaktor für Video-zu-Canvas-Anpassung
  ratio = width / video.width;

  // Starte Hand-Erkennung
  handpose.detectStart(video, gotHands);
}

/**
 * Hauptzeichnungs-Loop
 */
function draw() {
  background(0, 200, 0, 10);

  // Spiegle die Darstellung horizontal (für intuitivere Interaktion)
  push();
  translate(width, 0);
  scale(-1, 1);

  //Zeige das Video (optional)
  // image(video, 0, 0, video.width * ratio, video.height * ratio);

  // Zeichne nur, wenn das Modell bereit ist und Hände erkannt wurden
  if (isModelReady) {
    drawHandPoints();

    // HIER KÖNNEN EIGENE/Andere ZEICHNUNGEN Oder Interaktionen HINZUGEFÜGT WERDEN

  }

  pop();
}

/**
 * Callback-Funktion für HandPose-Ergebnisse
 * Wird automatisch aufgerufen, wenn neue Hand-Daten verfügbar sind
 * 
 * @param {Array} results - Array mit erkannten Händen
 */
function gotHands(results) {
  hands = results;

  // Setze Flag, sobald erste Hand erkannt wurde
  if (hands.length > 0) {
    isModelReady = true;
  }
}

/**
 * Zeichnet alle erkannten Hand-Keypoints
 * Jede Hand hat 21 Keypoints (siehe Kommentar oben)
 */
function drawHandPoints() {
  // Durchlaufe alle erkannten Hände (normalerweise max. 2)
  if (hands.length === 0) return;

  // Bestimme zuerst, welche erkannte Hand die linke Hand ist.
  // Wenn das Modell eine handedness/label liefert, verwende diese. Sonst: Heuristik.
  let leftHandIndex = -1;

  // Versuche modellseitige Information (unterschiedliche Versionen liefern unterschiedliche Keys)
  for (let i = 0; i < hands.length; i++) {
    let h = hands[i];
    if (h.handedness && (String(h.handedness).toLowerCase().includes('left'))) {
      leftHandIndex = i;
      break;
    }
    if (h.label && (String(h.label).toLowerCase().includes('left'))) {
      leftHandIndex = i;
      break;
    }
  }

  // Falls noch keine handedness gefunden wurde:
  if (leftHandIndex === -1) {
    if (hands.length === 1) {
      // Nur eine Hand sichtbar -> nehmen wir an, das ist die linke Hand (Annahme)
      leftHandIndex = 0;
    } else {
      // Mehrere Hände: nutze Heuristik basierend auf Handgelenks-x (kleinerer x = linke Seite des Bildes)
      let minX = Infinity;
      for (let i = 0; i < hands.length; i++) {
        let wrist = hands[i].keypoints[0]; // Keypoint 0 ist das Handgelenk
        if (wrist && wrist.x < minX) {
          minX = wrist.x;
          leftHandIndex = i;
        }
      }
    }
  }

  // Zeichne Keypoints; hebe Daumen-Spitze (4) mit Kreis und Zeigefinger-Spitze (8) mit Rechteck hervor
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];

      // Basis-Keypoints (helles Grün, kleiner)
      fill(0, 200, 0, 180);
      noStroke();
      circle(keypoint.x * ratio, keypoint.y * ratio, 8);
    }

    // Wenn diese Hand die linke Hand ist, berechne Distanz zwischen Daumen(4) und Zeigefinger(8)
    if (i === leftHandIndex) {
      let kpThumb = hand.keypoints[4];
      let kpIndex = hand.keypoints[8];

      if (kpThumb && kpIndex) {
        // Distanz in Canvas-Pixeln (mit ratio skaliert)
        let tx = kpThumb.x * ratio;
        let ty = kpThumb.y * ratio;
        let ix = kpIndex.x * ratio;
        let iy = kpIndex.y * ratio;
        let d = dist(tx, ty, ix, iy);

        // Mappe Distanz auf Größenbereich: nahe -> klein, weit -> groß
        // Annahme: typische Distanzbereich auf Canvas zwischen ~10 und ~300
        let minD = 8;
        let maxD = max(width, height) * 0.6; // adaptiv
        let thumbSize = constrain(map(d, minD, maxD, 12, 100), 6, 140);
        let indexW = constrain(map(d, minD, maxD, 10, 110), 6, 160);
        let indexH = constrain(map(d, minD, maxD, 8, 70), 4, 120);

        // Zeichne gelben, noStroke Kreis auf dem Daumen (größenabhängig)
        // Entscheide, ob die Finger als "nah" gelten. Threshold ist pixelbasiert.
        let closeThreshold = min(80, max(width, height) * 0.08);
        let isClose = d <= closeThreshold;

        if (isClose) {
          // Nähe: starker Halo / Glow, kleine Hauptform, sichtbare Verbindung
          // Halo für Daumen
          for (let k = 5; k >= 1; k--) {
            let a = map(k, 5, 1, 30, 200);
            fill(255, 230, 80, a);
            noStroke();
            circle(tx, ty, thumbSize + k * 12);
          }
          // Haupt-Kugel (etwas kleiner bei Nähe)
          noStroke();
          fill(255, 220, 0, 255);
          circle(tx, ty, max(6, thumbSize * 0.45));

          // Halo für Zeigefinger-Rechteck
          for (let k = 5; k >= 1; k--) {
            let a = map(k, 5, 1, 30, 200);
            fill(170, 80, 210, a);
            noStroke();
            rectMode(CENTER);
            rect(ix, iy, indexW + k * 10, indexH + k * 6, 8);
          }
          // Haupt-Rechteck (kleiner bei Nähe)
          noStroke();
          fill(150, 50, 200, 255);
          rect(ix, iy, max(6, indexW * 0.5), max(4, indexH * 0.5), 6);

          // Verbindungslinie als visueller Hinweis (helles Gelb)
          stroke(255, 220, 80, 200);
          strokeWeight(3);
          line(tx, ty, ix, iy);
          noStroke();
        } else {
          // Weit: größere, aber mattere Formen (weniger Glow)
          noStroke();
          fill(255, 220, 0, 220); // gelb
          circle(tx, ty, thumbSize);

          noStroke();
          fill(150, 50, 200, 200); // violett
          rectMode(CENTER);
          rect(ix, iy, indexW, indexH, 6);
        }
      }
    }
  }
}

