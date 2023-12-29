export const canvas = document.querySelector('canvas');
export const c = canvas.getContext("2d")
canvas.width = innerWidth //
canvas.height = innerHeight //
export const speed_ = {
    speed_r: canvas.height / 2000,
    speed: canvas.height / 2000,
    gravity: 0.8 * (canvas.height / 2000),
}

export const levels = {
    l1: true,
    l2: false,
    l3: false,
    final: false,
}

export const link ='https://halak0013.github.io/toprak_ev'

//https://zeschpix.itch.io/pixel-foodfruitvegetables
export const res_player = new Image();
res_player.src = link+"/data/img/watermelon.png";

export const res_dark = new Image();
res_dark.src = link+"/data/img/siyah.png";

//https://ldtk.io/
export const res_l1 = new Image();
res_l1.src = link+"/data/levels/l1/simplified/AutoLayers_advanced_demo/composite.png";

export const res_l2 = new Image();
res_l2.src = link+"/data/levels/l2/simplified/AutoLayers_advanced_demo/composite.png";

export const res_l3 = new Image();
res_l3.src = link+"/data/levels/l3/simplified/AutoLayers_advanced_demo/composite.png";


