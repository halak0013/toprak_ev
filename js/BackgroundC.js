import { c, canvas, link, res_dark, res_o_dark, speed_ } from './commons.js';
import { readCSVFile } from './matrisPro.js'



export class Background {
    constructor(x, y, image, csv) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.csv = csv
        this.matris = null

        this.ca_h = canvas.height
        let k = (this.ca_h / this.image.height)
        this.width = this.image.width * k
        this.height = this.image.height * k

        this.k_lw = null
        this.len_x = null
        this.player = null
        this.pw_2 = null
    }
    async init(player_o) {
        try {
            //ToprakEv/data/levels/l2/simplified/AutoLayers_advanced_demo
            const dosyaYolu = link + '/data/levels/' + this.csv + '/simplified/AutoLayers_advanced_demo/IntGrid_layer.csv';
            //const dosyaYolu = '../data/levels/l2/simplified/AutoLayers_advanced_demo/IntGrid_layer.csv'
            this.matris = await readCSVFile(dosyaYolu);
            this.len_x = this.matris[0].length;
            this.len_y = this.matris.length

            this.k_lw = this.len_x / this.width;
            this.k_lc = this.len_y / this.ca_h;


            this.player = player_o
            this.pw_2 = this.player.width / 2
            this.ph_2 = this.player.height / 2

        } catch (error) {
            console.error('CSV dosyasını okuma hatası:', error);
        }
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height - 15);
    }

    getCordinate() {
        let x = Math.floor((this.player.position.abs_x + this.pw_2) * this.k_lw)
        let y = this.len_y - Math.floor((this.ca_h - (this.player.position.y + this.ph_2)) * this.k_lc)
        return { x, y }
    }

    checkCollision(t_x, t_y) {
        if (this.matris === null) return
        let cor = this.getCordinate()
        let x = cor.x
        let y = cor.y

        //console.log("y_v: " + this.player.velocity.y, "y_p: " + this.player.position.y + " abs_x_p: " + this.player.position.abs_x + " x: " + x + " y: " + y + " ca: " + this.ca_h + " ca-y: " + (this.ca_h - y) + " matris: ")
        if (this.matris[y + t_y][x + t_x] == '1' || this.ca_h < this.player.position.y) {
            return true
        }
        if (this.matris[y + t_y][x + t_x] == '2') {
            //console.log("su")
            speed_.speed = speed_.speed_r / 4
            speed_.gravity = speed_.speed_r * 0.01

        } else {
            speed_.speed = speed_.speed_r
            speed_.gravity = speed_.speed_r * 0.8
        }
        return false
    }

    checkEnd() {
        let cor = this.getCordinate()
        let x = cor.x
        let y = cor.y

        if (this.matris[y][x] == '3') {
            console.log("son")
            return true
        }
        return false
    }

    checkLav() {
        let cor = this.getCordinate()
        let x = cor.x
        let y = cor.y

        if (this.matris[y][x] == '4') {
            console.log("fire")
            return true
        }
        return false
    }
}



export class DarkBackground {
    constructor(x, y) {
        this.position = {
            x,
            y
        }
        this.image_dark = res_dark
        this.width = (canvas.width * 2)
        this.height = (canvas.height * 2)
        this.h2 = this.height / 2
        this.w2 = this.width / 2
    }
    draw() {
        c.drawImage(this.image_dark,
            this.position.x - this.w2 + 10,
            this.position.y - this.h2 + 10, this.width, this.height);
    }
}

export class DarkOBackground {
    constructor(x, y) {
        this.position = {
            x,
            y
        }
        this.image_o = res_o_dark
        this.width = (canvas.width * 2)
        this.height = (canvas.height * 2)
        this.h2 = this.height / 2
        this.w2 = this.width / 2
        this.image_o.style.opacity = 0.5
    }
    draw() {
        c.drawImage(this.image_o,
            this.position.x - this.w2 + 10,
            this.position.y - this.h2 + 10, this.width, this.height);
    }
}