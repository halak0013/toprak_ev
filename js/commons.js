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

export const link = 'https://halak0013.github.io/toprak_ev'

//https://zeschpix.itch.io/pixel-foodfruitvegetables
export const res_player = new Image();
res_player.src = link + "/data/img/watermelon.png";

export const res_dark = new Image();
res_dark.src = link + "/data/img/dark.png";

export const res_o_dark = new Image();
res_o_dark.src = link + "/data/img/orange_dark.png";


//https://ldtk.io/
export const res_l1 = new Image();
res_l1.src = link + "/data/levels/l1/simplified/AutoLayers_advanced_demo/composite.png";

export const res_l2 = new Image();
res_l2.src = link + "/data/levels/l2/simplified/AutoLayers_advanced_demo/composite.png";

export const res_l3 = new Image();
res_l3.src = link + "/data/levels/l3/simplified/AutoLayers_advanced_demo/composite.png";


export const story1 = ["Yıllardan 2025.<br> Bir sabah kalmışsın ve bir anda tarlanda değilsin diğer çocuk karpuzlar gibi oyanamak yerine kendini yer altında bulmuşsun.",
    "Etrafta gezinirken dikkat et bir çok engel var. Bu engelleri aşmak için yön tuşlarını kullanabilirsin.",
    "Gittiğin konuma göre karpuzun bir anda görünmez olabilir veya çamura saplanabilirsin.",
    "Sana ve diğer karpuzla ne olduğunu bul ve onları kurtar."
]

export const story2 = ["Bir anda etraf karardı herhalde yer altındaki ışık kaynaklarını kesmişler, yetmezmiş gibi ışık için gerekli olan bitkilerin suyu da kesilmiş acele etmen lazım",
    "Mağarada bulunan su kaynaklarını bul ve sonrasında dik yamaçlardan çıkıp ışık kaynağını bul."]

export const story3 = ["En sonunda ışık kaynağını buldun ama burda bir sorun var. Işık rengi turuncu. Burda bir sıkıntı olabilir sona ulaşman için sadece 2 dakikan var.",
    "Acele etesen iyi olur. Işık kaynağını bul ve sona ulaş."]

export const story4 = ["Tebrikler sona ulaştın. Artık evine dönebilirsin. Hayatta bazen zorluklar çıkabilir. İnanırsan elbet bir gün başarırsın.",
    "Kaynaklar: <br> Karpuz görseli: https://zeschpix.itch.io/pixel-foodfruitvegetables <br> Arka plan: https://ldtk.io/ <br> Arka plan sesi: https://alkakrab.itch.io/free-12-tracks-pixel-rpg-game-music-pack",
    "Oyun Geliştiricisi ve tasarımcısı:<br> Muhammet Halak"]