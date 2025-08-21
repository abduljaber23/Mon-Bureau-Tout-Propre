const form = document.querySelector(".form");
const surface = document.querySelector("#surface");
const frequence = document.querySelector("#frequence");
const options = document.querySelector("#options");
const msg = document.querySelector(".msg");

if (form) {
  form.addEventListener("submit", (e) => e.preventDefault());
}

const TVA = 0.2;

function computePrice() {
  const s = Number(surface?.value || 0);
  const f = Number(frequence?.value || 1);
  const opt = Number(options?.value || 0);

  if (!s || s <= 0) {
    msg.innerHTML = "Entrez une surface valide.";
    return;
  }

  const prixDeBase = s * 1.5;
  const multFreq = f;
  const multOpt = opt === 1 ? 1.1 : 1;

  const prixHT = prixDeBase * multFreq * multOpt;
  const montantTVA = prixHT * TVA;
  const prixTTC = prixHT + montantTVA;

  msg.innerHTML = `
    Prix HT : ${prixHT.toFixed(2)} € <br>
    TVA (20%) : ${montantTVA.toFixed(2)} € <br>
    Prix TTC : <strong>${prixTTC.toFixed(2)} €</strong>
  `;
}

[surface, frequence, options].forEach((el) => {
  if (!el) return;
  el.addEventListener("input", computePrice);
  el.addEventListener("change", computePrice);
});

computePrice();
