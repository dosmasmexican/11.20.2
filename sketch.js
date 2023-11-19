let emitters = [];

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
  }

  function mousePressed() {
    if (mouseButton === LEFT) {
      emitters.push(new Emitter(mouseX, mouseY));
    }
  }
}