// Obtenir l'element HTML qui affiche le compte à rebours
const countdown = document.getElementById("countdown");

// Définir la durée du compte à rebours en secondes
const duration = 60 * 60; // 60 minutes en secondes = 3600 secondes

// Fonction pour mettre à jour le compte à rebours
// diminue la variable time de 1 toutes les secondes
// et met à jour le contenu de l'élément countdown avec le temps restant formaté
function updateTime() {
  if (localStorage.getItem("timeRemaining")) {
    let timeRemaining = localStorage.getItem("timeRemaining");
    time = parseInt(timeRemaining);
  } else {
    time = duration;
  }
  console.log("je suis le temps de départ : " + time);
  const intervalId = setInterval(() => {
    time--;
    let timeRemaining = time;
    console.log("je suis le temps restant : " + timeRemaining);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    countdown.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`; // une chaine littérale,
    localStorage.setItem("timeRemaining", timeRemaining); // Sauvegarder timeRemaining dans le stockage local
    if (time === 0) {
      clearInterval(intervalId);
      localStorage.removeItem("timeRemaining");
    }
  }, 1000); // Mettre à jour le compteur toutes les secondes
}

// Démarrer le compte à rebours
updateTime();
