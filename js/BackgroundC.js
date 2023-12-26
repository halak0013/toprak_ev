import { c, canvas,  res_dark, speed_ } from './commons.js';
import { readCSVFile } from './matrisPro.js'



export class Background {
    constructor(x, y, image,csv) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.csv=csv
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
            const dosyaYolue = '../data/levels/'+this.csv+'/simplified/AutoLayers_advanced_demo/IntGrid_layer.csv';
            const dosyaYolu='../data/levels/l2/simplified/AutoLayers_advanced_demo/IntGrid_layer.csv'
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

        console.log("y_v: " + this.player.velocity.y, "y_p: " + this.player.position.y + " abs_x_p: " + this.player.position.abs_x + " x: " + x + " y: " + y + " ca: " + this.ca_h + " ca-y: " + (this.ca_h - y) + " matris: ")
        if (this.matris[y + t_y][x + t_x] == '1' || this.ca_h < this.player.position.y) {
            return true
        }
        if (this.matris[y + t_y][x + t_x] == '2'){
            console.log("su")
            speed_.speed =speed_.speed_r/4
            speed_.gravity =speed_.speed_r*0.01
            
        }else{
            speed_.speed =speed_.speed_r
            speed_.gravity =speed_.speed_r*0.8
        }
        return false
    }

    checkEnd(){
        let cor = this.getCordinate()
        let x = cor.x
        let y = cor.y

        if (this.matris[y][x] == '3'){
            console.log("son")
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
        this.image = res_dark
        this.width=this.image.width*2
        this.height=this.image.height*2
        this.h2=this.height/2
        this.w2=this.width/2
    }
    draw() {
        c.drawImage(this.image,
            this.position.x-this.w2+10,
            this.position.y-this.h2+10, this.width, this.height);
    }
}

//export class Background2 {
//    constructor(x, y, image) {
//        this.position = {
//            x,
//            y
//        }
//
//        this.k = 2;
//        this.ca_h = canvas.height
//        this.ca_w = canvas.width
//        this.height = image.height * (this.ca_h * this.k / image.height)
//        this.width = image.width * (this.ca_h * this.k / image.height)//TODO: burası genişliğe göre değişebilir
//
//        this.image = image;
//        this.matris = null;
//
//    }
//
//    async init(player_o) {
//        try {
//            const dosyaYolu = '../data/csv/IntGrid_layer.csv';
//            this.matris = await readCSVFile(dosyaYolu);
//            this.len_x = this.matris[0].length;
//            this.len_y = this.matris.length;
//
//            this.player = player_o;
//
//            // Print matris with indices
//            /* for (let i = 0; i < this.len_y; i++) {
//                for (let j = 0; j < this.len_x; j++) {
//                    console.log(`matris[${i}][${j}]:`, this.matris[i][j]);
//                }
//            } */
//
//        } catch (error) {
//            console.error('CSV dosyasını okuma hatası:', error);
//        }
//    }
//    draw() {
//        c.drawImage(this.image, this.position.x, this.position.y - (this.ca_h * (this.k - 1)), this.width, this.height);
//    }
//
//    checkCollision(t_x, t_y) {
//        if (this.matris === null) return
//        let y = Math.floor(((this.ca_h * this.k) - this.player.position.y) * (this.len_y / (this.k * this.ca_h)))
//        let x = Math.floor(this.player.position.x * (this.len_x / (this.k * this.ca_h)))//TODO: burası genişliğe göre değişebilir
//
//        console.log("y_v: " + this.player.velocity.y, "y_p: " + this.player.position.y
//            + " abs_x_p: " + this.player.position.abs_x + " x: " + x + " y: " + y + " ca: "
//            + this.ca_h + " ca-y: " + (this.ca_h - y) + " len_y: " + this.len_y + " değer_y: " /* +(y + t_y) */)
//        if (this.matris[y + t_y][x + t_x] == '1' || this.ca_h < this.player.position.y) {
//            //this.player.velocity.y = 0
//            return true
//        }
//        if (this.matris[y + t_y][x + t_x] == '2') {
//            console.log("su")
//        }
//        return false
//    }
//
//
//}