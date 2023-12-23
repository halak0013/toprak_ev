import { c, canvas,  res_player, speed_ } from './commons.js';
import { readCSVFile } from './matrisPro.js'



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