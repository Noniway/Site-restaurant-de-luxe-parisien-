function Filtre(categorie) {
  const divs = document.querySelectorAll('.item');
  
  divs.forEach(div => {
    if (categorie === 'all') {
      div.style.display = 'flex';
    } else if (div.classList.contains(categorie)) {
      div.style.display = 'flex';
    } else {
      div.style.display = 'none';
    }
  });
}