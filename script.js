const input = document.querySelector("input");
var search_word = "";

const container = document.getElementById("imageContainer");

const images = [
  {name: 'スカイ', src: 'https://raw.githubusercontent.com/06091210/KimiToSkyCardGame/refs/heads/main/images/4318BD7A-7C6D-4D20-9DC5-E55B592C9567.jpg'},
  {name: 'ツヴァイクリスタ　ナギ', src: 'https://raw.githubusercontent.com/06091210/KimiToSkyCardGame/refs/heads/main/images/3E34B679-9EDF-4284-99A3-2804996E31A9.jpg'},
  {name: '天地英明！サカタリクシ', src: 'https://raw.githubusercontent.com/06091210/KimiToSkyCardGame/refs/heads/main/images/tenchiemeSakatarikushi.jpg'},
];

function search(word) {
  container.replaceChildren();
  images.forEach(src => {
    if (src.name.includes(word)) {
      const img = document.createElement("img");
      img.src = src.src;
      img.alt = src.name;
      img.onclick = click(src.name);

      img.height = 300;

      container.appendChild(img);
    }
  });
}

function click(name) {
  console.log(name);
}

input.addEventListener("input", (e) => {
  search_word = e.target.value;
  search(search_word);
});

search("");
