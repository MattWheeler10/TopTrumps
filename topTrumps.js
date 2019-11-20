let playerHealth = 15;
let cpuHealth = 15;
let totalRounds = 0;

const currentCard = document.getElementById("card");

const rounds = document.getElementById("rounds");

const currentHealth = document.getElementById("health");

const information = document.getElementById("info")

const magicButton = document.getElementById("button1");
const weaknessesButton = document.getElementById("button2");
const courageButton = document.getElementById("button3");
const wisdomButton = document.getElementById("button4");
const evilnessButton = document.getElementById("button5");

currentHealth.innerHTML = ("You have "+playerHealth+" cards and the computer has "+cpuHealth)

let deck=[
    {name: "Vampire", magic:6, weaknesses:8, courage:8, wisdom: 8, evilness:6},
    {name: "Witch", magic:8, weaknesses:9, courage:8, wisdom:7, evilness:8},
    {name: "Zombie", magic:9, weaknesses:2, courage:5, wisdom:3, evilness:5},
    {name: "Mummy", magic:3, weaknesses:4, courage:8, wisdom: 6, evilness:7},
    {name: "Frankenstein", magic:2, weaknesses:3, courage:8, wisdom: 2, evilness:2},
    {name: "Grim Reaper", magic:3, weaknesses:9, courage:8, wisdom: 9, evilness:7},
    {name: "Pennywise", magic:10, weaknesses:1, courage:10, wisdom: 10, evilness:10},
    {name: "CandyMan", magic:9, weaknesses:4, courage:5, wisdom: 3, evilness:05},
    {name: "Demon", magic:4, weaknesses:8, courage:9, wisdom: 8, evilness:9},
    {name: "Devil", magic:9, weaknesses:8, courage:9, wisdom: 9, evilness:10},
    {name: "Skeleton", magic:2, weaknesses:3, courage:8, wisdom: 5, evilness:5},
    {name: "MJ Zombie", magic:8, weaknesses:6, courage:4, wisdom: 3, evilness:2},
    {name: "Scarecrow", magic:3, weaknesses:5, courage:8, wisdom: 6, evilness:9},
    {name: "Swamp Thing", magic:4, weaknesses:4, courage:8, wisdom: 9, evilness:3},
    {name: "Freddy Kruger", magic:0, weaknesses:9, courage:6, wisdom: 2, evilness:8},
]
let deck1=[
    {name: "Headless Horeseman", magic:9, weaknesses:6, courage:7, wisdom: 6, evilness:7},
    {name: "Banshee", magic:8, weaknesses:7, courage:9, wisdom: 7, evilness:9},
    {name: "Siren", magic:8, weaknesses:9, courage:7, wisdom: 9, evilness:7},
    {name: "Joker", magic:10, weaknesses:1, courage:10, wisdom: 10, evilness:10},
    {name: "Boogeyman", magic:7, weaknesses:8, courage:7, wisdom: 8, evilness:7},
    {name: "Annabelle", magic:8, weaknesses:7, courage:9, wisdom: 7, evilness:6},
    {name: "Goblin", magic:6, weaknesses:8, courage:8, wisdom: 7, evilness:7},
    {name: "Medusa", magic:8, weaknesses:9, courage:7, wisdom: 8, evilness:8},
    {name: "Ghost", magic:9, weaknesses:7, courage:9, wisdom: 7, evilness:9},
    {name: "Jigsaw", magic:7, weaknesses:9, courage:7, wisdom: 8, evilness:9},
    {name: "Invisible Man", magic:8, weaknesses:6, courage:9, wisdom: 8, evilness:7},
    {name: "Poltergeist", magic:7, weaknesses:9, courage:8, wisdom: 7, evilness:9},
    {name: "Chucky", magic:8, weaknesses:7, courage:9, wisdom: 8, evilness:9},
    {name: "Slenderman", magic:8, weaknesses:7, courage:9, wisdom: 8, evilness:8},
    {name: "No face", magic:7, weaknesses:9, courage:8, wisdom: 7, evilness:6},
]

rounds.innerHTML = ("You have had "+totalRounds+" rounds")

let cpuDeck;
let ranDeck;
function randomCard(){
    if (playerHealth==0){
        alert("The cpu is the winner unlucky    click the top trumps logo to play again");
    }else if (cpuHealth==0){
        alert("well done, You are the winner    click the top trumps logo to play again");
    }else{
    cpuDeck = deck1[Math.floor((Math.random()*14)+1)]
    ranDeck = deck[Math.floor((Math.random()*14)+1)]
    currentCard.innerHTML = ("Your card is "+ranDeck.name+"!  magic: "+ranDeck.magic+"  weaknesses: "+ranDeck.weaknesses+"  courage: "+ranDeck.courage+"  wisdom: "+ranDeck.wisdom+"  evilness: "+ranDeck.evilness+" -> What category would You like to pick?")
    }
}

courageButton.addEventListener('click', () => {
    if (ranDeck.courage>cpuDeck.courage){
        information.innerHTML = ("You win the enemies score was "+cpuDeck.name+": "+cpuDeck.courage)
        playerHealth+=1
        cpuHealth-=1
        totalRounds+=1
        currentHealth.innerHTML = ("You have "+playerHealth+" cards and the computer has "+cpuHealth)
        rounds.innerHTML = ("You have had "+totalRounds+" rounds")
        randomCard();
    }else if(ranDeck.courage==cpuDeck.courage){
        totalRounds+=1
        information.innerHTML = ("It's a draw try again")
        rounds.innerHTML = ("You have had "+totalRounds+" rounds")
        randomCard();
    }else{
        information.innerHTML = ("You lose the enemy score was "+cpuDeck.name+": "+cpuDeck.courage)
        playerHealth-=1
        cpuHealth+=1
        totalRounds+=1
        currentHealth.innerHTML = ("You have "+playerHealth+" cards and the computer has "+cpuHealth)
        rounds.innerHTML = ("You have had "+totalRounds+" rounds")
        randomCard();
    }
})


magicButton.addEventListener('click', () => {
    if (ranDeck.magic>cpuDeck.magic){
        information.innerHTML = ("You win the enemies score was "+cpuDeck.name+": "+cpuDeck.magic)
        playerHealth+=1
        cpuHealth-=1
        totalRounds+=1
        currentHealth.innerHTML = ("You have "+playerHealth+" cards and the computer has "+cpuHealth)
        rounds.innerHTML = ("You have had "+totalRounds+" rounds")
        randomCard();
    }else if(ranDeck.magic==cpuDeck.magic){
        totalRounds+=1
        information.innerHTML = ("It's a draw try again")
        rounds.innerHTML = ("You have had "+totalRounds+" rounds")
        randomCard();
    }else{
        information.innerHTML = ("You lose the enemy score was "+cpuDeck.name+": "+cpuDeck.magic)
        playerHealth-=1
        cpuHealth+=1
        totalRounds+=1
        currentHealth.innerHTML = ("You have "+playerHealth+" cards and the computer has "+cpuHealth)
        rounds.innerHTML = ("You have had "+totalRounds+" rounds")
        randomCard();
    }
})

evilnessButton.addEventListener('click', () => {
    if (ranDeck.evilness>cpuDeck.evilness){
        information.innerHTML = ("You win the enemies score was "+cpuDeck.name+": "+cpuDeck.evilness)
        playerHealth+=1
        cpuHealth-=1
        totalRounds+=1
        currentHealth.innerHTML = ("You have "+playerHealth+" cards and the computer has "+cpuHealth)
        rounds.innerHTML = ("You have had "+totalRounds+" rounds")
        randomCard();
    }else if(ranDeck.evilness==cpuDeck.evilness){
        totalRounds+=1
        information.innerHTML = ("It's a draw try again")
        rounds.innerHTML = ("You have had "+totalRounds+" rounds")
        randomCard();
    }else{
        information.innerHTML = ("You lose the enemy score was "+cpuDeck.name+": "+cpuDeck.evilness)
        playerHealth-=1
        cpuHealth+=1
        totalRounds+=1
        currentHealth.innerHTML = ("You have "+playerHealth+" cards and the computer has "+cpuHealth)
        rounds.innerHTML = ("You have had "+totalRounds+" rounds")
        randomCard();
    }
})

wisdomButton.addEventListener('click', () => {
    if (ranDeck.wisdom>cpuDeck.wisdom){
        information.innerHTML = ("You win the enemies score was "+cpuDeck.name+": "+cpuDeck.wisdom)
        playerHealth+=1
        cpuHealth-=1
        totalRounds+=1
        currentHealth.innerHTML = ("You have "+playerHealth+" cards and the computer has "+cpuHealth)
        rounds.innerHTML = ("You have had "+totalRounds+" rounds")
        randomCard();
    }else if(ranDeck.wisdom==cpuDeck.wisdom){
        totalRounds+=1
        information.innerHTML = ("It's a draw try again")
        rounds.innerHTML = ("You have had "+totalRounds+" rounds")
        randomCard();
    }else{
        information.innerHTML = ("You lose the enemy score was "+cpuDeck.name+": "+cpuDeck.wisdom)
        playerHealth-=1
        cpuHealth+=1
        totalRounds+=1
        currentHealth.innerHTML = ("You have "+playerHealth+" cards and the computer has "+cpuHealth)
        rounds.innerHTML = ("You have had "+totalRounds+" rounds")
        randomCard();
    }
})

weaknessesButton.addEventListener('click', () => {
    if (ranDeck.weaknesses<cpuDeck.weaknesses){
        information.innerHTML = ("You win the enemies score was "+cpuDeck.name+": "+cpuDeck.weaknesses)
        playerHealth+=1
        cpuHealth-=1
        totalRounds+=1
        currentHealth.innerHTML = ("You have "+playerHealth+" cards and the computer has "+cpuHealth)
        rounds.innerHTML = ("You have had "+totalRounds+" rounds")
        randomCard();
    }else if(ranDeck.weaknesses==cpuDeck.weaknesses){
        totalRounds+=1
        information.innerHTML = ("It's a draw try again")
        rounds.innerHTML = ("You have had "+totalRounds+" rounds")
        randomCard();
    }else{
        information.innerHTML = ("You lose the enemy score was "+cpuDeck.name+": "+cpuDeck.weaknesses)
        playerHealth-=1
        cpuHealth+=1
        totalRounds+=1
        currentHealth.innerHTML = ("You have "+playerHealth+" cards and the computer has "+cpuHealth)
        rounds.innerHTML = ("You have had "+totalRounds+" rounds")
        randomCard();
    }
})
randomCard();