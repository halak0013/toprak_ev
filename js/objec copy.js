import { c, canvas, gravity } from './commons.js';
import { readCSVFile } from './matrisPro.js'

export class Player {
    constructor() {
        this.position = {
            x: 100,
            abs_x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30
        this.height = 30
        this.speed = 5
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }


    update(bckg) {
        this.draw()
        this.position.x += this.velocity.x
        this.position.abs_x += this.velocity.x

        for (let i = 0; i <= this.velocity.y && bckg.checkCollision(0,-1); i++) {
            this.position.y+=1
        }
        
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        //else            this.velocity.y = 0
    }
}

export class Platform {
    constructor(x, y, color, image) {
        this.position = {
            x,
            y
        }
        this.image = image

        this.width = this.image.width
        this.height = this.image.height
        this.color = color
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}


export class Background {
    constructor(x, y, image) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.matris = null

        let k = canvas.height / this.image.height
        this.width = this.image.width * k
        this.height = this.image.height * k

        this.k_lw = null
        this.len_x = null
        this.player = null
        this.pw_2 = null
    }
    async init(player_o) {
        try {
            const dosyaYolu = '../data/csv/IntGrid_layer.csv';
            this.ca_h = canvas.height
            this.matris = await readCSVFile(dosyaYolu);
            this.len_x = this.matris[0].length;
            this.len_y = this.matris.length

            this.k_lw = this.len_x / this.width;
            this.k_lc = this.len_y / this.ca_h


            this.player = player_o
            this.pw_2 = this.player.width / 2
            this.ph_2 = this.player.height / 2

        } catch (error) {
            console.error('CSV dosyasını okuma hatası:', error);
        }
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
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
        if (this.matris[y + t_y][x + t_x] == '1'||this.ca_h<this.player.position.y) {
            this.player.velocity.y = 0
            return true
        }
        return false
    }



}


export class GenericObject {
    constructor(x, y, image) {
        this.position = {
            x,
            y
        }
        this.image = image

        this.width = this.image.width
        this.height = this.image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}