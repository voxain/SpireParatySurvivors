import { Cards } from "/js/databases/Cards.js";

export default class CardBase extends Phaser.GameObjects.Container{
    constructor(scene, x, y, cardID){
        let card = Cards[cardID]

        let spriteCard = new Phaser.GameObjects.Sprite(scene, 0, 0, "cardBase").setOrigin(0, 0);
        let spriteImage = new Phaser.GameObjects.Sprite(scene, 42, 162, "card-img-" + cardID).setOrigin(0, 0);
        let textName = new Phaser.GameObjects.Text(scene, 50, 40, card.name, { fontFamily: '"PP Right Gothic"', fontSize: '58px' })
        let textManaCost = new Phaser.GameObjects.Text(scene, 580, 40, card.manaCost, { fontFamily: '"PP Right Gothic"', fontSize: '58px', shadow: {blur: 4} })
        let textDescription = new Phaser.GameObjects.Text(scene, 50, 540, card.description, { fontFamily: '"PP Right Gothic"', fontSize: '46px', shadow: {blur: 4}, wordWrap: { width: 575 } })
        
        super(scene, x, y, [spriteCard, spriteImage, textName, textManaCost, textDescription]);

        this.scene.add.existing(this);
    }
}