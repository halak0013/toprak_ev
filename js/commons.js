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
    l1: false,
    l2: true,
    l3: false,
    final: false,
}


export const res_player = new Image();
res_player.src = "../data/img/watermelon.png";

export const res_dark = new Image();
res_dark.src = "../data/img/siyah.png";

export const res_l1 = new Image();
res_l1.src = "../data/levels/l1/simplified/AutoLayers_advanced_demo/_composite.png";

export const res_l2 = new Image();
res_l2.src = "../data/levels/l2/simplified/AutoLayers_advanced_demo/_composite.png";

export const res_l3 = new Image();
res_l3.src = "../data/levels/l3/simplified/AutoLayers_advanced_demo/_composite.png";


