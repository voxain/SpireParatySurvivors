import CardBase from "/js/classes/CardBase.js";
import ActionCards from "/js/classes/CardBase.js";

export default class MainScene extends Phaser.Scene{
    constructor(){
        super('MainScene');
    }

    preload(){
        this.load.image('cardBase', '/assets/img/cards/cardBase.png');
        this.load.image('card-img-1', '/assets/img/cards/reaper.png');
        this.load.image('card-img-2', '/assets/img/cards/weapon.png');
        this.load.image('map', '/assets/img/bg/map.jpg');
        this.load.image('wizzard_m', '/assets/img/characters/wizzard_m/wizzard_m_idle_anim_f0.png');
        /*this.load.spritesheet('dude', 
            'assets/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );*/
    }

    create(){
        //this.add.image(0, 0, 'map').setOrigin(0, 0).setScale(7)
        //this.add.image(0, 0, 'card').setOrigin(0, 0).setScale(.5)
        new CardBase(this, 0, 0, 1)
        new CardBase(this, 675, 0, 2)

        //this.cards = []
    }
}