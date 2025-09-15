const projects = [
  { title: "Tameable Beasts", desc: "Mc mod that adds tameable mobs.", link: "#", 
    img: "./assets/images/tb_logo.png", color:"tb-text", w:12 , h:24 },
  
  { title: "The Digimod", desc: "Mc mod that adds digital creatures for you to rise.", link: "#", 
    img: "./assets/images/td_logo.png", color:"td-text", w:28 , h:26 },
  
  { title: "Model Portfolio", desc: "Compilation of the best Mc assets made by me.", link: "portfolio.html", 
    img: "./assets/images/p_logo.png", color:"p-text", w:20 , h:20 }
];


document.getElementById("projects-container").innerHTML = projects.map(p => `
  <a href="${p.link}" class="block rounded p-10 base-secondary-hoverable">
  <div class="flex items-center gap-4">
    <img src="${p.img}" alt="${p.title}" class="w-${p.w} h-${p.h}">
    <span class="font-bold text-5xl truncate leading-normal ${p.color}">${p.title}</span>
  </div>
  <p class="mt-6 line-clamp-2">${p.desc}</p>
</a>

`).join('');
