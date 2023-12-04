export function preload() {
    this.load.image(
        "bg-underwater",
        "underwater-diving-files/underwater-diving-files/PNG/environment/background.png"
      );
      
      this.load.spritesheet(
        "player",
        "underwater-diving-files/underwater-diving-files/PNG/player/player-swiming.png",
        {
          frameWidth: 81,
          frameHeight: 80,
        }
      )
}
export function create(applyPhysics) {
    this.bg = this.add.tileSprite(0, 0, 1280, 720, "bg-underwater")
    .setOrigin(0, 0)
    .setScale(3);
    console.log(this.bg);
    this.player = this.physics.add.sprite(700, 350, 'player')

    this.anims.create({
      key: "player",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 6,
      }),
      frameRate: 6,
      repeat: -1,
    })

    this.player.anims.play('player', true)
}
export function update() {
    this.bg.tilePositionX += .7;
}