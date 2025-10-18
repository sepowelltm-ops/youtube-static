const videos = [
  { title: "How Much Weight Can a Spider Web Hold?", id: "Gdsg1P4Pv0ol-G57" },
  { title: "Relaxing Jazz Music", id: "Dx5qFachd3A" },
  { title: "Funny Cats Compilation", id: "J---aiyznGQ" },
  { title: "Calm Piano Music", id: "1ZYbU82GVz4" },
  { title: "Ocean Waves", id: "1ZYbU82GVz4" },
  { title: "Cute Dogs Playing", id: "tntOCGkgt98" },
  { title: "Space Documentary", id: "9d8aFZOM1OQ" },
  { title: "City Time Lapse", id: "kJQP7kiw5Fk" },
  { title: "Cooking Tutorial", id: "3JZ_D3ELwOQ" },
  { title: "Travel Vlog", id: "dQw4w9WgXcQ" },
  { title: "Tech Review", id: "oHg5SJYRHA0" },
  { title: "Music Video", id: "lY2yjAdbvdQ" },
  { title: "Fitness Routine", id: "3JZ_D3ELwOQ" },
  { title: "DIY Project", id: "dQw4w9WgXcQ" },
  { title: "Nature Walk", id: "oHg5SJYRHA0" },
  { title: "Art Tutorial", id: "lY2yjAdbvdQ" },
  { title: "Gaming Highlights", id: "3JZ_D3ELwOQ" },
  { title: "Unboxing Video", id: "dQw4w9WgXcQ" },
  { title: "Product Review", id: "oHg5SJYRHA0" },
  { title: "Educational Content", id: "lY2yjAdbvdQ" }
];

const grid = document.getElementById("video-grid");
const searchInput = document.getElementById("search");

function renderVideos(filtered) {
  grid.innerHTML = "";
  filtered.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${video.id}" allowfullscreen></iframe>
      <div class="video-title">${video.title}</div>
    `;
    grid.appendChild(card);
  });
}

// Initial render
renderVideos(videos);

// Search functionality
searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = videos.filter(v => v.title.toLowerCase().includes(term));
  renderVideos(filtered);
});
