import { GenericObject } from './js/objec.js';
import { Background } from './js/BackgroundC.js';
import { c, canvas, res_hill, res_plt2, speed_ } from './js/commons.js';
import { Player } from './js/PlayerC.js'



const genericObjects = [new GenericObject(-1, -110, res_hill)]
const player = new Player()
const background = new Background(0, 0, res_plt2)
background.init(player).then(() => { });


const keys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false,
    },
    up: {
        pressed: true
    }
}

let scrollOfSet = 0

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)



    if (background.draw()) {
        console.log('draw')
        player.velocity.y = 0
    }
    /* genericObjects.forEach(gobj => {
        gobj.draw()
    }) */
    player.update(background)

    if (keys.right.pressed && player.position.x < 400 && !background.checkCollision(+1, 0)) {
        player.velocity.x = player.speed
        player.frame++
    }
    else if ((keys.left.pressed && player.position.x > 200 && !background.checkCollision(-1, 0)) ||
        (keys.left.pressed && scrollOfSet === 0 && player.position.x > 0)) {
        player.velocity.x = -player.speed
        player.frame--

    }
    else {
        player.velocity.x = 0
        if (keys.right.pressed && !background.checkCollision(+1, 0)) {
            scrollOfSet += player.speed
            player.position.abs_x += player.speed
            background.position.x -= player.speed
            player.frame++


        } else if (keys.left.pressed && scrollOfSet > 0 && !background.checkCollision(-1, 0)) {
            scrollOfSet -= player.speed
            player.position.abs_x -= player.speed
            background.position.x += player.speed
            genericObjects.forEach(gobj => {
                gobj.position.x += player.speed * .66
            })
            player.frame--
        }
    }

    //win game
    if (scrollOfSet > 2000) {
        console.log('kazandın')
        init()
    }
}

animate()
function init() {
    player.position.x = 100
    player.position.y = 450
    player.position.abs_x = 100
    player.velocity.x = 0
    player.velocity.y = 0
    background.position.x = 0
    background.position.y = 0
    scrollOfSet = 0
}
window.addEventListener('keydown', ({ keyCode }) => {
    //console.log(keyCode)
    switch (keyCode) {
        case 38://yukarı
            console.log(player.velocity.y)
            if (keys.up.pressed && player.velocity.y > -10) {
                player.velocity.y -= 20 * speed_.speed
                keys.up.pressed = false
            }
            break;
        case 39://sağ
            keys.right.pressed = true
            break;
        case 37://sol
            keys.left.pressed = true
            break;
        default:
            break;
    }
})

window.addEventListener('keyup', ({ keyCode }) => {
    //console.log(keyCode)
    switch (keyCode) {
        case 38://yukarı
            keys.up.pressed = true
            break;
        case 39://sağ
            keys.right.pressed = false
            break;
        case 37://sol
            keys.left.pressed = false
            break;
        default:
            break;
    }
})