const openSearch = document.getElementById("openSearch");
const barra = document.getElementById("barra");

openSearch.addEventListener("click", () => {
  barra.classList.toggle("aberta");
});

const input = document.getElementById("searchInput");

const rotas = {
  chevrolet: "/components/chevrolet.html",
  mitsubishi: "/components/mit.html",
  fiat: "/components/fiat.html",
  audi: "/components/audi.html"
};

input.addEventListener("input", () => {
  const termo = input.value.toLowerCase().trim();
  document.querySelectorAll(".botao").forEach(btn => {
    const nome = btn.querySelector("img").alt.toLowerCase();
    btn.style.display = nome.includes(termo) ? "block" : "none";
  });
});

document.getElementById("searchBtn").addEventListener("click", () => {
  const termo = input.value.toLowerCase().trim();
  if (rotas[termo]) {
    window.location.href = rotas[termo];
  } else if (termo !== "") {
    alert("Marca não encontrada.");
  }
});