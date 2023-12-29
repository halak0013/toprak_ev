import { c, canvas, levels } from './commons.js';

export class Engine {

    constructor() {
        this.scrollOfSet = 0
        this.audio;
    }

    movment(player, background, keys, is_coustom) {
        c.fillStyle = 'black'
        c.fillRect(0, 0, canvas.width, canvas.height)

        if (background.draw()) {
            console.log('draw')
            player.velocity.y = 0
        }
        player.update(background)

        if (!is_coustom) {
            if (keys.right.pressed && player.position.x < 400 && !background.checkCollision(+1, 0)) {
                player.velocity.x = player.speed
                player.frame++
            }
            else if ((keys.left.pressed && player.position.x > 10 && !background.checkCollision(-1, 0)) ||
                (keys.left.pressed && this.scrollOfSet === 0 && player.position.x > 0)) {
                player.velocity.x = -player.speed
                player.frame--

            }
            else {
                player.velocity.x = 0
                if (keys.right.pressed && !background.checkCollision(+1, 0)) {
                    this.scrollOfSet += player.speed
                    player.position.abs_x += player.speed
                    background.position.x -= player.speed
                    player.frame++


                } else if (keys.left.pressed && this.scrollOfSet > 0 && !background.checkCollision(-1, 0)) {
                    this.scrollOfSet -= player.speed
                    player.position.abs_x -= player.speed
                    background.position.x += player.speed
                    player.frame--
                }
            }
        }
    }
    //https://alkakrab.itch.io/free-12-tracks-pixel-rpg-game-music-pack
    playSound(track) {
        this.audio = new Audio(track);

        this.audio.play();

        // Tarayıcı penceresi kapandığında duraklat
        window.addEventListener('beforeunload', function () {
            this.audio.pause();
        });
    }

    nextLevel(current) {
        switch (current) {
            case 1:
                levels.l1 = false
                levels.l2 = true
                break;
            case 2:
                levels.l2 = false
                levels.l3 = true
            case 3:
                levels.l3 = false
                levels.final = true
            default:
                break;
        }
    }
}