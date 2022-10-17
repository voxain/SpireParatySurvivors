import MainScene from "./scenes/MainScene.js"

var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [MainScene]
};

new Phaser.Game(config);
