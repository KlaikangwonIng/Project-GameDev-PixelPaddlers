import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import InputClass from './scenes/InputClass';

const config = {
    type : Phaser.AUTO,
    width : 1280, 
    height : 720,
    parent : 'content',
    backgroundColor : '#000',
    physics : {
        default : 'arcade',
        arcade : {
            // gravity: {y:300},
            debug : false
        }
    },
    scene : [
        GameScene,
        InputClass
    ]
}
let game = new Phaser.Game(config);
