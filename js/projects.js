const projects = [
  { title: "Tameable Beasts", desc: "Mc mod that adds tameable mobs.", link: "tb_lore.html", 
    img: "./assets/images/tb_logo.png", color:"tb-text", w:3},
  
  { title: "The Digimod", desc: "Mc mod that adds digital creatures for you to rise.", link: "#", 
    img: "./assets/images/td_logo.png", color:"td-text", w:8},
  
  { title: "Model Portfolio", desc: "Compilation of the best Mc assets made by me.", link: "portfolio.html", 
    img: "./assets/images/p_logo.png", color:"p-text", w:5}
];


document.getElementById("projects-container").innerHTML = projects.map(p => `
  <a href="${p.link}" class="block rounded p-10 base-secondary-hoverable">
  <div class="flex items-center gap-4">
      <img src="${p.img}" alt="${p.title}" style="width: ${p.w}rem; height: auto;">
    <span class="font-bold truncate leading-normal ${p.color}" style="font-size: 5vh;">${p.title}</span>
  </div>
  <p class="truncate mt-6 line-clamp-2" style="font-size: 2vh;">${p.desc}</p>
</a>

`).join('');
