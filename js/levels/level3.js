import { Background, DarkOBackground } from '../BackgroundC.js';
import { res_l3, canvas, story3 } from '../commons.js';
import { Engine } from '../engine.js'

export class Level3 {
    constructor(player, keys) {
        this.player = player
        this.isInit = false
        this.ready = false
        this.darkBck = new DarkOBackground(0, 0)
        this.keys = keys
        this.background = new Background(0, 0, res_l3, "l3")//
        this.background.init(this.player).then(() => { this.ready = true });//
        this.scrollOfSet = 0

        this.engine = new Engine()
        this.bt_reload =document.getElementById('reload')
        this.bt_reload.addEventListener('click',()=>{this.init()})
        this.time = 0
    }


    update() {
        if (this.ready) {
            if (this.time < 120) {
                if (!this.isInit) {
                    this.init()
                    this.isInit = true;
                    this.engine.storyPart(story3)
                }
                this.engine.movment(this.player, this.background, this.keys)
                this.darker()
                if (this.background.checkEnd())
                    this.engine.nextLevel(3)
                if (this.background.checkLav())
                    this.init()
            }
            else {
                this.init()
            }
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
        this.time = 0
        let timer = document.getElementById('timer')
        setInterval(() => { this.time++; timer.innerText = this.time }, 1000)
        //this.engine.playSound('../../data/sound/Pixel_3.mp3')
    }
}







