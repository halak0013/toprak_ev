import { speed_, levels, canvas, c, link, story4 } from './js/commons.js';
import { Player } from './js/PlayerC.js'
import { Level1 } from './js/levels/level1.js'
import { Level2 } from './js/levels/level2.js'
import { Level3 } from './js/levels/level3.js'
import { Engine } from './js/engine.js'


const player = new Player()



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

const l1 = new Level1(player, keys)
const l2 = new Level2(player, keys)
const l3 = new Level3(player, keys)
const e = new Engine()
let end = false
e.playSound(link + '/data/sound/Pixel_3.mp3')

const btn_up = document.getElementById('btn_up')
btn_up.addEventListener('mousedown', () => {
    console.log(player.velocity.y)
    if (keys.up.pressed && player.velocity.y > -10) {
        player.velocity.y -= 20 * speed_.speed
        keys.up.pressed = false
    }
})
btn_up.addEventListener('mouseup', () => {
    keys.up.pressed = true
})


const btn_right = document.getElementById('btn_right')
btn_right.addEventListener('mousedown', () => {
    keys.right.pressed = true
})
btn_right.addEventListener('mouseup', () => {
    keys.right.pressed = false
})

const btn_left = document.getElementById('btn_left')
btn_left.addEventListener('mousedown', () => {
    keys.left.pressed = true
})
btn_left.addEventListener('mouseup', () => {
    keys.left.pressed = false
})

btn_left.style.left = canvas.width - 150 + 'px'
btn_right.style.left = canvas.width - 50 + 'px'
btn_up.style.top = canvas.height - 75 + 'px'
btn_right.style.top = canvas.height - 75 + 'px'
btn_left.style.top = canvas.height - 75 + 'px'



function animate() {
    requestAnimationFrame(animate)
    if (levels.l1) {
        l1.update();
    } else if (levels.l2) {
        l2.update();
    } else if (levels.l3) {
        l3.update();
    } else {
        if(!end){
            e.storyPart(story4)
            end = true
        }
    }
}

animate()

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