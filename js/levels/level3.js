import { Background, DarkBackground } from '../BackgroundC.js';
import { res_l3, canvas } from '../commons.js';
import { Engine } from '../engine.js'

export class Level3 {
    constructor(player, keys) {
        this.player = player
        this.isInit = false
        this.ready = false
        this.darkBck = new DarkBackground(0, 0)
        this.keys = keys
        this.background = new Background(0, 0, res_l3, "l3")//
        this.background.init(this.player).then(() => { this.ready = true });//
        this.scrollOfSet = 0

        this.engine = new Engine()
    }


    update() {
        if (this.ready) {
            if (!this.isInit) {
                this.init()
                this.isInit = true;
            }
            this.engine.movment(this.player, this.background, this.keys, false)
            if (this.background.checkEnd())
                this.engine.nextLevel(3)
        }
    }

    init() {
        this.player.position.x = canvas.width / 100
        this.player.position.y = canvas.height / 200
        this.player.position.abs_x = canvas.width / 100
        this.player.velocity.x = 0
        this.player.velocity.y = 0
        this.background.position.x = 0
        this.background.position.y = 0
        this.scrollOfSet = 0
        //this.engine.playSound('../../data/sound/Pixel_3.mp3')
    }
}







