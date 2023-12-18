import { Player, Platform, GenericObject, Background } from './js/objec.js';
import { c, canvas, res_plt, res_hill, res_backgr, res_smallTall, res_plt2 } from './js/commons.js';



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
    }
    else if ((keys.left.pressed && player.position.x > 200 && !background.checkCollision(-1, 0)) ||
        (keys.left.pressed && scrollOfSet === 0 && player.position.x > 0)) {
        player.velocity.x = -player.speed
    }
    else {
        player.velocity.x = 0
        if (keys.right.pressed && !background.checkCollision(+1, 0)) {
            scrollOfSet += player.speed
            player.position.abs_x += player.speed
            background.position.x -= player.speed

        } else if (keys.left.pressed && scrollOfSet > 0 && !background.checkCollision(-1, 0)) {
            scrollOfSet -= player.speed
            player.position.abs_x -= player.speed
            background.position.x += player.speed
            genericObjects.forEach(gobj => {
                gobj.position.x += player.speed * .66
            })
        }

    }

    /* platforms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >=
            platform.position.y && player.position.x + player.width >= platform.position.x
            && player.position.x <= platform.position.x + platform.width)
            player.velocity.y = 0
    }) */

    //background.checkCollision(0, 1);
    //background.checkCollision(0,-1);

    //win game
    if (scrollOfSet > 2000) {
        console.log('kazandın')
    }
}

animate()
function init() {
    //TODO: burda başlangıç değerleri eklencek
    player.position.x = 100
    player.position.y = 100
    player.velocity.x = 0
    player.velocity.y = 0
}
window.addEventListener('keydown', ({ keyCode }) => {
    //console.log(keyCode)
    switch (keyCode) {
        case 38://yukarı
            console.log(player.velocity.y)
            if (keys.up.pressed && player.velocity.y > -10) {
                player.velocity.y -= 20
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