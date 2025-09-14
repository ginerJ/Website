const pics = [
  {img: "allay_mage.png"},
  {img: "antlion.png"},
  {img: "chikote.png"},
  {img: "cornelius_croak.png"},
  {img: "croissant_dragon.png"},
  {img: "cultist.png"},
  {img: "illager_golem.png"},
  {img: "lib.png"},
  {img: "minions.png"},
  {img: "penguin.png"},
  {img: "pinocchi.png"},
  {img: "pontiff.png"},
  {img: "quadruped_shade.png"},
  {img: "racoon.png"},
  {img: "roly_poly.png"},
  {img: "sword_shade.png"},
  {img: "teddy.png"}
];

function renderPics() {
    const gap = 6;
    const size = Math.floor((window.innerWidth - 8 * gap) / 4);

    document.getElementById("pics-container").innerHTML = pics.map(p => `
    <div class="inline-block rounded w-fit">
        <div class="flex items-center">
            <img src="./assets/images/portfolio/${p.img}" style="width:${size}px; height:${size}px;">
        </div>
    </div>
    `).join('');
}

renderPics();
window.addEventListener("resize", renderPics);