var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ñ=0
var w=0
var muro1 = createSprite(190, 120, 250, 3);
var muro2 = createSprite(190, 260, 250, 3);
var muro3 = createSprite(67, 145, 3, 50);
var muro4 = createSprite(67, 235, 3, 50);
var muro5 = createSprite(313, 145, 3, 50);
var muro6 = createSprite(313, 235, 3, 50);
var muro7 = createSprite(41, 170, 50, 3);
var muro8 = createSprite(41, 210, 50, 3);
var muro9 = createSprite(337, 210, 50, 3);
var muro10 = createSprite(337, 170, 50, 3);
var muro11 = createSprite(18, 190, 3, 40);
var muro12 = createSprite(361, 190, 3, 40);

var jugador = createSprite(40, 190, 13, 13);
jugador.shapeColor = "red";
var e1 = createSprite(100, 130, 10, 10);
var e2 = createSprite(215, 130, 10, 10);
var e3 = createSprite(165, 250, 10, 10);
var e4 = createSprite(270, 250, 10, 10);
e1.shapeColor = "blue"
e2.shapeColor = "blue"
e3.shapeColor = "blue"
e4.shapeColor = "blue"

e1.velocityY =  8.5
e2.velocityY = 8
e3.velocityY = -8
e4.velocityY = -8.5





function draw() {
background("white");
textSize(35);
text("kill "+ñ,74,31);
text("wins "+w,262,29)
strokeWeight(0)
fill("lightblue")
rect(18,170,52,40);
fill("yellow");
rect(308,170,52,40);
  drawSprites();

e1.bounceOff(muro1);
e1.bounceOff(muro2);
e2.bounceOff(muro1);
e2.bounceOff(muro2);
e3.bounceOff(muro1);
e3.bounceOff(muro2);
e4.bounceOff(muro1);
e4.bounceOff(muro2);
jugador.collide(muro11)


if (keyDown("right")) {
jugador.velocityX = 4
    
}

if (keyDown("left")) {
jugador.velocityX = -4
    
  
}
if (jugador.isTouching(e1)||
jugador.isTouching(e2)||
jugador.isTouching(e3)||
jugador.isTouching(e4)
) {
jugador.x = 40
jugador.y = 190
ñ = ñ+1;
}
if (jugador.isTouching(muro12)) {
 jugador.x = 40
jugador.y = 190
w = w+1; 
}




}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
