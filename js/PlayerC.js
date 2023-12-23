import { c, canvas,  res_player as res_player, speed_ } from './commons.js';


export class Player {
    constructor() {
        this.position = {
            x: canvas.width/100,
            abs_x: canvas.width/100,
            y: canvas.height/200
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.res_player=res_player
        
        console.log(this.res_player.width)
        this.width = ((this.res_player.width)/(16))
        this.height = this.res_player.height

        this.w2=this.width*(canvas.height/1000)
        this.h2=this.height*(canvas.height/1000)
        this.h3=this.height*(canvas.height/1300)
        
        this.speed = 5 * speed_.speed


        this.frame = 0
    }

    draw() {
        c.drawImage(this.res_player,
            this.width*this.frame,
            0,
            this.width,
            this.height,
            this.position.x,
            this.position.y+this.h3, this.w2, this.h2);
    }

    calculatePlayerHeight() {
        // Calculate a scale factor based on the current canvas height
        const scaleFactor = canvas.height / 480; // Adjust 480 to the original height of the player image
        return this.res_player.height * scaleFactor;
    }


    update(bckg) {
        //this.frame++;
        if (this.frame > 16) this.frame = 1
        if (this.frame <= 0) this.frame = 15

        this.draw()
        this.position.x += this.velocity.x
        this.position.abs_x += this.velocity.x

        //console.log("chck1 " + bckg.checkCollision(0, 1) + " chck-1 " + bckg.checkCollision(0, -1) + " vel_y " + this.velocity.y + "pos_y " + this.position.y + " can_h " + canvas.height)
        for (let i = 0; i >= this.velocity.y; i--) {
            if (!bckg.checkCollision(0, -1) && (this.position.y + this.height) > 50) { //yukarı engel kontrolü ve canvas aşım engeli
                this.position.y += Math.sign(this.velocity.y);
            }
        }

        if (bckg.checkCollision(0, 1)) {
            this.velocity.y = 0
        } else {
            this.velocity.y += speed_.gravity
        }

        for (let i = 0; i <= this.velocity.y; i++) {
            if (!bckg.checkCollision(0, 1)) {
                this.position.y += Math.sign(this.velocity.y);
            }
        }


    }
}