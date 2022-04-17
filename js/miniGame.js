// CONST
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle,
    PLAYER_SPEED = 2,
    ZOMBIE_SPEED = 1.5,
    DAMAGE = 1;
    
// Define variables that might be used in more 
// than one function
let state, treasure, zombies, exit, player, dungeon, app, ifPause,
door, healthBar, message1, message2, message3, point1, point2, gameScene, gameOverScene, enemies, id;

function start() {  
  ifPause = 1;
  // object to display background
  app = new Application({ 
    width: 512, 
    height: 512,                       
    antialiasing: true, 
    transparent: false, 
    resolution: 1
  }
    )
    
    // display canvas
    document.body.appendChild(app.view);
  
  loader
  .add("img/treasureHunter.json")
  .load(setup);
}      

function setup() {
  // Make the game scene and add it to the stage
  gameScene = new Container();
  app.stage.addChild(gameScene);
  
  // Make the sprites and add them to the `gameScene`
  // Create an alias for the texture atlas frame ids
  id = resources["img/treasureHunter.json"].textures;
  
  // Dungeon
  dungeon = new Sprite(id["dungeon.png"]);
  gameScene.addChild(dungeon);
  
  // Door
  door = new Sprite(id["door.png"]); 
  door.position.set(32, 0);
  gameScene.addChild(door);
  
  // player
  player = new Sprite(id["explorer.png"]);
  player.x = 68;
  player.y = gameScene.height / 2 - player.height / 2;
  player.vx = 0;
  player.vy = 0;
  gameScene.addChild(player);
  
  // Treasure
  treasure = new Sprite(id["treasure.png"]);
  treasure.x = gameScene.width - treasure.width - 48;
  treasure.y = gameScene.height / 2 - treasure.height / 2;
  gameScene.addChild(treasure);
  
  // Make the zombies
  let numberOfzombies = 6,
  spacing = 48,
  xOffset = 150;
  
  // An array to store all the zombie monsters
  zombies = [];
  
  // Make as many zombies as there are `numberOfzombies`
  for (let i = 0; i < numberOfzombies; i++) {
    
    // Make a zombie
    let zombie = new Sprite(id["blob.png"]);
    
    // Space each zombie horizontally according to the `spacing` value.
    // `xOffset` determines the point from the left of the screen
    // at which the first zombie should be added
    let x = spacing * i + xOffset;
    
    // Give the zombie a random y position
    let y = randomInt(0, app.stage.height - zombie.height);
    
    // Set the zombie's position
    zombie.x = x;
    zombie.y = y;

    zombie.vx = 0;
    zombie.vy = ZOMBIE_SPEED;
    if (i % 2 == 0) zombie.vy = -zombie.vy;
    
    // Push the zombie into the `zombies` array
    zombies.push(zombie);
    
    // Add the zombie to the `gameScene`
    gameScene.addChild(zombie);
  }
  
  // Create the health bar
  healthBar = new Container();
  healthBar.position.set(app.stage.width - 170, 4)
  gameScene.addChild(healthBar);
  
  // Create the black background rectangle
  let innerBar = new Graphics();
  innerBar.beginFill(0x000000);
  innerBar.drawRect(0, 0, 128, 8);
  innerBar.endFill();
  healthBar.addChild(innerBar);
  
  // Create the front red rectangle
  let outerBar = new Graphics();
  outerBar.beginFill(0xFF3300);
  outerBar.drawRect(0, 0, 128, 8);
  outerBar.endFill();
  healthBar.addChild(outerBar);
  
  healthBar.outer = outerBar;
  
  // text description
  let style1 = new TextStyle({
    fontWeight: "bold",
    fontFamily: "Futura",
    fontSize: 16,
    fill: "red"
  });
  message1 = new Text("HP", style1);
  message1.position.set(app.stage.width - 200, 0)
  gameScene.addChild(message1);


  startScene = new Container();
  app.stage.addChild(startScene);
  // text description
  let style4 = new TextStyle({
    fontFamily: "Futura",
    fontSize: 24,
    fill: "white"
  });

  message5 = new Text("Tips:\n \"w\": up   \"a\": left  \"s\": down \"d\": right\n\n  \"space\": pause\n\nclick the button to resume", style4);
  message5.position.set(60, app.stage.height / 2 - 150);
  startScene.addChild(message5);
  message6 = new Text("Ready? Go!", style4);
  message6.position.set(app.stage.width/2 - 80, app.stage.height/2 + 25);
  startScene.addChild(message6);

  let point3 = new Graphics();
  point3.beginFill(0x0bef47);
  point3.drawRect(app.stage.width/2-125, app.stage.height/2+25, 30, 30);
  point3.endFill();
  point3.interactive = true;//响应交互
  point3.buttonMode = true;//鼠标变手型
  point3.on("pointerdown", driver);
  startScene.addChild(point3);
  
  // Create the `gameOver` scene
  gameOverScene = new Container();
  app.stage.addChild(gameOverScene);
  gameOverScene.visible = false;
  
  let style2 = new TextStyle({
    fontFamily: "Futura",
    fontSize: 40,
    fill: "Yellow"
  });

  message2 = new Text("Zombies ate your brain!", style2);
  message2.x = 80;
  message2.y = app.stage.height / 2 - 100;
  gameOverScene.addChild(message2);

  let style3 = new TextStyle({
    fontFamily: "Futura",
    fontSize: 30,
    fill: "white"
  });
  message3 = new Text("Try again!", style3);
  message3.x = app.stage.width/2 - 50;
  message3.y = app.stage.height/2;
  gameOverScene.addChild(message3);
  message4 = new Text("Next.", style3);
  message4.x = app.stage.width/2 - 50;
  message4.y = app.stage.height/2 + 75;
  gameOverScene.addChild(message4); 

  let point1 = new Graphics();
  point1.beginFill(0x0bef47);
  point1.drawRect(app.stage.width/2-105, app.stage.height/2+5, 30, 30);
  point1.endFill();
  point1.interactive = true;//响应交互
  point1.buttonMode = true;//鼠标变手型
  point1.on("pointerdown", retry);
  gameOverScene.addChild(point1);

  let point2 = new Graphics();
  point2.beginFill(0x0bef47);
  point2.drawCircle(app.stage.width/2-90, app.stage.height/2+90, 15);
  point2.endFill();
  point2.interactive = true;//响应交互
  point2.buttonMode = true;//鼠标变手型
  point2.on("pointerdown", next);
  gameOverScene.addChild(point2);
  
  // Capture the keyboard arrow keys
  let left = keyboard(65),
    up = keyboard(87),
    right = keyboard(68),
    down = keyboard(83),
    pause = keyboard(32);
      
  // "a" for left
  left.press = function() {
    
    // Change the player's velocity when the key is pressed
    player.vx = -PLAYER_SPEED;
  };
  
  left.release = function() {
    
    // If the left arrow has been released, and the right arrow isn't down,
    // and the player isn't moving vertically:
    // Stop the player
    if (!right.isDown) {
      player.vx = 0;
    }
  };
  
  // "w" for up
  up.press = function() {
    player.vy = -PLAYER_SPEED;
  };
  up.release = function() {
    if (!down.isDown) {
  player.vy = 0;
    }
  };
  
  // "d" for right
  right.press = function() {
    player.vx = PLAYER_SPEED;
  };
  right.release = function() {
    if (!left.isDown) {
      player.vx = 0;
    }
  };
  
  // "s" for down
  down.press = function() {
    player.vy = PLAYER_SPEED;
  };
  down.release = function() {
    if (!up.isDown) {
      player.vy = 0;
    }
  };
  
  // "space" for pause
  pause.press = function() {
    if (ifPause == 0) {
      startScene.visible = true;
      ifPause = 1;
    }
  };
  
  // Set the game state
  state = play;
  
  // Start the game loop 
  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){
  // Update the current game state:
  state(delta);
}

function driver(){
  startScene.visible = false;
  app.ticker.start();
  ifPause = 0;
}

// game logic
function play(delta) {
  if (ifPause == 1) app.ticker.stop();
  
  // use the player's velocity to make it move
  player.x += player.vx;
  player.y += player.vy;
  
  // Contain the player inside the area of the dungeon
  contain(player, {x: 28, y: 10, width: 488, height: 480});
  // contain(player, stage);
  
  
  
  let damage = false, sin, cos;
  // Loop through all the sprites in the `enemies` array
  zombies.forEach(function(zombie, index) {
    if (index == 3){
      sin = (player.y - zombie.y) / Math.sqrt(Math.pow((player.x - zombie.x), 2) + Math.pow((player.y - zombie.y), 2));
      cos = (player.x - zombie.x) / Math.sqrt(Math.pow((player.x - zombie.x), 2) + Math.pow((player.y - zombie.y), 2));
      zombie.vx = ZOMBIE_SPEED * cos;
      zombie.vy = ZOMBIE_SPEED * sin;
    }
    else{
      let ifCollided = contain(zombie, {x: 28, y: 10, width: 488, height: 480});
      
      if (ifCollided == "top" || ifCollided == "bottom") zombie.vy = -zombie.vy;
    } 
    
    // Move the zombie
    zombie.x += zombie.vx;
    zombie.y += zombie.vy;
    
    // Test for a collision. If any of the enemies are touching
    // the player, set `playerHit` to `true`
    if(hitTestRectangle(player, zombie)) {
      damage = true;
    }
  });
  
  // If the player is hit...
  if(damage) {
    
    // Make the player semi-transparent
    player.alpha = 0.5;
    
    // Reduce the width of the health bar's inner rectangle by 1 pixel
    healthBar.outer.width -= DAMAGE;
    
  } else {

    // Make the player fully opaque (non-transparent) if it hasn't been hit
    player.alpha = 1;
  }

  // Check for a collision between the player and the treasure
  if (hitTestRectangle(player, treasure)) {

    // If the treasure is touching the player, center it over the player
    treasure.x = player.x + 8;
    treasure.y = player.y + 8;
  }

  // lost
  if (healthBar.outer.width < 0) {
    state = end;
  }

  // win
  if (hitTestRectangle(treasure, door)) {
    state = end;

    message2.text = "Winner!";
    message2.x += 80;
  } 
}

// show the ending UI
function end() {
  startScene.visible = false;
  gameScene.visible = false;
  gameOverScene.visible = true;
}

// reload the game
function retry() {
  app.ticker.destroy();
  document.body.removeChild(app.view);
  loader.reset();
  start();
}

// go to next level
function next() {
  document.body.removeChild(app.view);
  recoverScreen();
  currentScene = graph[currentScene];
  display(currentScene);
}

// return information if a sprite runs into boundaries
function contain(sprite, container) {

  let collision = undefined;

  // Left
  if (sprite.x < container.x) {
    sprite.x = container.x;
    collision = "left";
  }

  // Top
  if (sprite.y < container.y) {
    sprite.y = container.y;
    collision = "top";
  }

  // Right
  if (sprite.x + sprite.width > container.width) {
    sprite.x = container.width - sprite.width;
    collision = "right";
  }

  // Bottom
  if (sprite.y + sprite.height > container.height) {
    sprite.y = container.height - sprite.height;
    collision = "bottom";
  }

  // Return the `collision` value
  return collision;
}

// return information if two sprites hit
function hitTestRectangle(r1, r2) {

  // Define the variables we'll need to calculate
  let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

  // hit will determine whether there's a collision
  hit = false;

  // Find the center points of each sprite
  r1.centerX = r1.x + r1.width / 2; 
  r1.centerY = r1.y + r1.height / 2; 
  r2.centerX = r2.x + r2.width / 2; 
  r2.centerY = r2.y + r2.height / 2; 

  // Find the half-widths and half-heights of each sprite
  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  // Calculate the distance vector between the sprites
  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  // Figure out the combined half-widths and half-heights
  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  // Check for a collision on the x axis
  if (Math.abs(vx) < combinedHalfWidths) {

    // A collision might be occuring. Check for a collision on the y axis
    if (Math.abs(vy) < combinedHalfHeights) {

      // There's definitely a collision happening
      hit = true;
    } else {

      // There's no collision on the y axis
      hit = false;
    }
  } else {

    // There's no collision on the x axis
    hit = false;
  }

  // `hit` will be either `true` or `false`
  return hit;
};

// return a random intgeter in given range
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// keyboard handler
function keyboard(keyCode) {
  var key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  // The `downHandler`
  key.downHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };
  // The `upHandler`
  key.upHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  // Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}