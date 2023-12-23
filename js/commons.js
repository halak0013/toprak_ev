export const canvas = document.querySelector('canvas');
export const c = canvas.getContext("2d")
canvas.width =  innerWidth //
canvas.height = innerHeight //
export const speed_ = {
    speed_r: canvas.height/2000,
    speed: canvas.height/2000,
    gravity: 0.8*(canvas.height/2000),
}


export const res_plt = new Image();
res_plt.src = "../data/img/platform.png";
export const res_hill = new Image();
res_hill.src = "../data/img/hills.png";
export const res_backgr = new Image();
res_backgr.src = "../data/img/background.png";

export const res_smallTall = new Image();
res_smallTall.src = "../data/img/platformSmallTall.png";

export const res_plt2 = new Image();
res_plt2.src = "../data/img/_composite.png";

export const res_player = new Image();
res_player.src = "../data/img/watermelon.png";
