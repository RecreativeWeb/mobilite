const withoutTicket = document.querySelector(".without-title");
const slectTicket = document.querySelector(".select-ticket");
const buy = document.querySelector(".without-title button");
const title = document.querySelector("header h1");
const footer = document.querySelector('footer');
const cruz = document.querySelector(".close");

////////////// SI PAS DE BILLET EN PAGE MES TITRES ////////////////

// button achat vers selection de billets

buy.addEventListener("click", () => {
    withoutTicket.style.display = "none";
    slectTicket.style.display = "block";
    footer.style.display = "none";
    title.innerHTML = `<span class="close">X</span>Acheter`;
    const cruz = document.querySelector(".close");
    cruz.style.display = "block";
    cruz.addEventListener("click", () => {
      withoutTicket.style.display = "block";
      slectTicket.style.display = "none";
      footer.style.display = "block";
      title.innerHTML = `E-tickets`;
    });
});


const basket = document.querySelector(".basket-tickets button");
const condition = document.querySelector(".accept-condition");
const check = document.querySelector(".accept-condition input[type='checkbox']");
const buyButton = document.querySelector(".accept-condition button");

// button acheter vers accepter les conditions

basket.addEventListener("click", () => {
    withoutTicket.style.display = "none";
    slectTicket.style.display = "none";
    condition.style.display = "block";
    title.innerHTML = `<span class="back">< Acheter</span>Paiement`;
    const back = document.querySelector(".back");
    back.style.display = "block";
    back.addEventListener('click', () => {
        slectTicket.style.display = "block";
        withoutTicket.style.display = "none";
        condition.style.display = "none";
        back.style.display = "none";
        title.innerHTML = `<span class="close">X</span>Acheter`;
        const cruz = document.querySelector(".close");
        cruz.style.display = "block";
        cruz.addEventListener("click", () => {
          withoutTicket.style.display = "block";
          slectTicket.style.display = "none";
          footer.style.display = "block";
          title.innerHTML = `E-tickets`;
        });
    });
    check.addEventListener("change", () => {
        if (check.checked == true) {
          buyButton.classList.add("checked");
        } else {
            buyButton.classList.remove("checked");
        }
    })
});
