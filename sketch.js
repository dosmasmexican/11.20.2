let emitters = [];
let repellers = [];

function setup() {
  createCanvas(640, 240);
}

function draw() {
  background(255);
  for (let emitter of emitters) {
    emitter.run();
    let gravity = createVector(0, 0.1);
    emitter.applyForce(gravity);
    emitter.addParticle();
    for (let repeller of repellers) {
      repeller.show();
    }
  }

  function mousePressed() {
    if (mouseButton === LEFT) {
      emitters.push(new Emitter(mouseX, mouseY));
    } else if (mouseButton === RIGHT) {
      repellers.push(new Repeller(mouseX, mouseY));
    }
  }
}