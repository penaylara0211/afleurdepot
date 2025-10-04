let panier = [];

function ajouterAuPanier(nomProduit) {
  panier.push(nomProduit);
  afficherPanier();
}

function afficherPanier() {
  const liste = document.getElementById('liste-panier');
  liste.innerHTML = '';
  panier.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    liste.appendChild(li);
  });
}

function envoyerCommande() {
  const corps = encodeURIComponent("Bonjour, je souhaite commander les articles suivants :\n" + panier.join("\n"));
  window.location.href = "mailto:afleurdepot@gmail.com?subject=Commande fleurs&body=" + corps;
}
