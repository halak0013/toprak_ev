import { speed_, levels } from './js/commons.js';
import { Player } from './js/PlayerC.js'
import { Level1 } from './js/levels/level1.js'
import { Level2 } from './js/levels/level2.js'
import { Level3 } from './js/levels/level3.js'


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


function animate() {
    requestAnimationFrame(animate)
    if (levels.l1) {
        l1.update();
    }else if(levels.l2){
        l2.update();
    }else if(levels.l3){
        l3.update();
    }else{
        
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