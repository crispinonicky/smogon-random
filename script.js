let allPokes = [];
let chosenPokes = [];
let totalPokes = document.querySelector("#container > div > main > div > section:nth-child(5) > div").childElementCount + 1;
let numberOfPokes = prompt("How many Pokemon do you want?");
let poke;
let title = document.createElement("h1");
title.appendChild(document.createTextNode("Here are your randomly selected Pokemon:"));

document.querySelector("#container > div > main > div > div.LangSwitcher-HeaderContainer").innerText = "";
document.querySelector("#container > div > main > div > div.LangSwitcher-HeaderContainer").appendChild(title);
document.querySelector("#container > div > main > div > div.LangSwitcher-HeaderContainer").style.display = "block";

for (let i = 1; i < totalPokes; i++) { 
    allPokes.push(document.querySelector("#container > div > main > div > section:nth-child(5) > div > div:nth-child(" + i + ") > div.PokemonAltRow-name > a > span > span:nth-child(2)").innerText)
}

//console.log(allPokes); // Uncomment out to view all Pokemon in tier

for (let i = 0; i < numberOfPokes; i++) { 
    let randomPoke = Math.floor(Math.random() * allPokes.length)
    chosenPokes.push(allPokes[randomPoke]);

    poke = document.createElement("li");
    poke.appendChild(document.createTextNode(allPokes[randomPoke]));
    document.querySelector("#container > div > main > div > div.LangSwitcher-HeaderContainer").appendChild(poke);

    allPokes.splice(randomPoke, 1);
}

console.log(chosenPokes);
