import Game from './object/Game.js';
import validateForm from './form-validation.js'

let gameName = document.querySelector("#game_name");
let gameRelease = document.querySelector("#game_release");
let gamePegi = document.querySelector("#game_pegi");
let gameDeveloper = document.querySelector("#game_developer");
let gameGenre = document.querySelector("#game_genre");
let sortUp = true;

let games = [];
let idGame = 0;

document.querySelector('#btn-addGame').addEventListener('click', () => {
    if(!isRepeat() && validateForm()){
        idGame = ++idGame;
        let releaseSplited = gameRelease.value.split('-');
        let releaseGame = releaseSplited[2] + "/" + releaseSplited[1] + "/" + releaseSplited[0]; 
        let nGame = new Game(idGame, gameName.value, releaseGame, gamePegi.value, gameDeveloper.value, gameGenre.value);
        games.push(nGame);
        printGames();
    } else {
        document.querySelector('#error').innerHTML = "Nom repetit";
    }
})

function isRepeat() {
    for (let i = 0; i < games.length; i++) {
        if(gameName.value === games[i].name){
            return true;
        }
    }
    return false;
}

function printGames(){
    let table = document.querySelector('#gamelist');
    table.innerHTML = "";
    games.map((item) => {
        table.innerHTML += 
        `<tr>
            <td scope="row">${item.id}</td>
            <td>${item.name}</td>
            <td>${item.developer}</td>
            <td>${item.date}</td>
            <td>${item.pegi}</td>
            <td>${item.category}</td>
            <td><i class="fas fa-trash-alt" style="color:red" data-game-id="${item.id}"></i></td>
        </tr>`
    })
}

document.querySelector('#gamelist').addEventListener('click', (e) => {
    if (e.target.dataset.gameId) {
        games = games.filter(game => game.id != Number.parseInt(e.target.dataset.gameId))
        printGames();
    }
})

document.querySelector('i.fa.fa-fw.fa-sort').addEventListener('click', () => {
    games.sort((a, b) => (sortUp) ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
    sortUp = !sortUp;
    printGames();
})

