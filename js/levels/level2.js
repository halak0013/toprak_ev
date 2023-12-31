import { Background, DarkBackground } from '../BackgroundC.js';
import { canvas, res_l2 , story2} from '../commons.js';
import { Engine } from '../engine.js'

export class Level2 {
    constructor(player, keys) {
        this.player = player
        this.isInit = false
        this.ready = false
        this.darkBck = new DarkBackground(0, 0)
        this.keys = keys
        this.background = new Background(0, 0, res_l2, "l2")//
        this.background.init(this.player).then(() => { this.ready = true });//
        this.scrollOfSet = 0
        this.engine = new Engine()
    }
    
    
    update() {
        if (this.ready) {
            if (!this.isInit) {
                this.init()
                this.isInit = true;
                this.engine.storyPart(story2)
            }
            this.engine.movment(this.player, this.background, this.keys)
            this.darker()
            if (this.background.checkEnd())
                this.engine.nextLevel(2)
        }
    }
    darker() {
        this.darkBck.position.x = this.player.position.x
        this.darkBck.position.y = this.player.position.y
        this.darkBck.draw()
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







