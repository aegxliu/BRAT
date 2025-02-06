let wosText = "WOS TEXT.txt"; // Placeholder for loaded text
let phrasesToDetect = [
  "Yet the knowledge, the explanation, never quite fits the sight.",
  "we are aware, however slightly,",
  "the marks he makes on the canvas or paper.",
  "It would be rash to try to date this last development precisely. But certainly in Europe such consciousness has existed since the beginning of the Renaissance.",
  "privileged minority",
  "retrospectively justify the role of the ruling classes",
  "As a book of specialized art history it is no better and no worse than the average.",
  "Hals, an old man of over eighty, was destitute.",
  "he obtained three loads of peat on public charity, otherwise he would have frozen to death.",
  "Those who now sat for him were administrators of such public charity.",
  "The art historian fears such direct judgement",
  "almost seduce us into believing that we know the personality traits and even the habits of the men and women portrayed.",
  "It is nothing less than the paintings working upon us.",
  "tipped slouch hat, which hardly covers any of his long, lank hair,",
  "This, he suggests, is a libel. He argues that it was a fashion at that time to wear hats on the side of the head. He cites medical opinion to prove that the Regent's expression could well be the result of a facial paralysis. He insists that the painting would have been unacceptable to the Regents if one of them had been portrayed drunk. One might go on discussing each of these points for pages.",
  "destitute old painter",
  "lost his reputation and lives off public charity",
  "eyes of a pauper who must nevertheless try to be objective",
  "must try to surmount the way he sees as a pauper.",
  "This is the drama of these paintings.",
  "He did in pictorial terms what Balzac did two centuries later in literature.",
  "which enriches our consciousness of our fellow men and heightens our awe for the ever-increasing power of the mighty impulses that enabled him to give us a close view of life's vital forces.",
  "In order to avoid mystifying the past (which can equally well suffer pseudo-Marxist mystification)",
  "The visible world is arranged for the spectator as the universe was once thought to be arranged for God.",
  "who, unlike God, could only be in one place at a time.",
  "Every drawing or painting that used perspective proposed to the spectator that he was the unique centre of the world.",
  "one can go to the National Gallery to look at the original and there discover what the reproduction lacks.",
  "Alternatively one can forget about the quality of the reproduction and simply be reminded, when one sees the original, that it is a famous painting of which somewhere one has already seen a reproduction.",
  "entirely bogus religiosity.",
  "sophisticated culture of art experts for whom the National Gallery catalogue is written.",
  "legal squabbles,",
  "It became famous because an American wanted to buy it for two and a half million pounds.",
  "Now it hangs in a room by itself. The room is like a chapel.",
  "It has become impressive, mysterious, because of its market value.",
  "bogus religiosity",
  "The majority of the population do not visit art museums.",
  "The majority take it as axiomatic",
  "An allegorical figure becomes a portrait of a girl.",
  "The words have quoted the paintings to confirm their own verbal authority.",
  "Logically, these boards should replace museums.",
  "archaic Greek head,",
  "thanks to reproductions,",
];

let margin = 30;
let charSize = 10;
let hoverText = ""; // For "brat" animation

function preload() {
  // Load WOS TEXT.txt dynamically
  wosText = loadStrings("WOS TEXT.txt", (text) => {
    wosText = text.join("\n");
  });
}

function setup() {
  let cnv = createCanvas(1080, 1080);
  cnv.mouseOver(showBrat) 
  cnv.mouseOut(hideBrat)
  textFont("Arial");
  textSize(charSize);
  noLoop();
  
}

function draw() {
  console.log("Mouse X is:" + mouseX);
  background(204, 255, 0); // Lime green background
  fill(0);
  noStroke();

  // Draw the text, leaving a margin
  let x = margin;
  let y = margin + charSize;
  for (let i = 0; i < wosText.length; i++) {
    let char = wosText[i];
    text(char, x, y);

    x += textWidth(char);
    if (x > width - margin) {
      x = margin;
      y += charSize + 5; // Line spacing
    }
  }

}

function showBrat() {
  console.log("mouse over")
    background('rgba(204, 255, 0, 0.7)'); // Lime green background
    textSize(200);
    textAlign(CENTER, CENTER);
    fill(0);
    text("brat", mouseX, mouseY);
 
}

function hideBrat() {
  console.log("mouse out")
  setup()
  draw()
}