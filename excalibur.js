function raffle(element){
    const h1 = document.getElementById("h1");
    const raffleNames = ["Yohan Keisuke", "Tsukirin Keisuke", "Akeru Taeseki", "Kojojin Endou", "Myendyo Raijin"];
    const namesLength = raffleNames.length;
    const raffledNumber = Math.floor(Math.random() * namesLength);

    h1.innerHTML = raffleNames[raffledNumber];
};

