function raffle(element){
    const h1 = document.getElementsByClassName("h1")[0];
    const raffleNames = ["Yohan Keisuke", "Tsukirin Keisuke", "Akeru Taeseki", "Kojojin Endou", "Myendyo Raijin"];
    const namesLength = raffleNames.length;
    const raffledNumber = Math.floor(Math.random() * namesLength);

    h1.innerHTML = raffleNames[raffledNumber];
};

