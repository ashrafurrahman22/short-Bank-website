function setPlayerStyle(player){
    player.style.border = '1px solid black';
    player.style.borderRadius = '15px';
    player.style.margin = '25px';
    player.style.padding = '25px';
}


const players = document.getElementsByClassName('player');
for(const player of players){
        setPlayerStyle(player);
        player.addEventListener('click', function(){
            player.style.backgroundColor = 'yellow';
        })

} 

const title = document.getElementById('player-title');
title.style.textAlign = 'center';
title.style.color = 'blue';
title.style.marginTop = '5px';

// queryselector used for complex css styles
/* #players .player:first-child{
            background-color: lightblue;
        } */
// document.querySelector('#players .player:first-child')`


// add player by clicking button 
function addPlayer(){
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New player</h4>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quaerat consectetur officia labore laborum, repellendus nesciunt iure at perspiciatis voluptas repellat nisi facere cum dolorem ea, eaque molestias? Qui, ea?</p>
    `;

    console.log(player);

    playersContainer.appendChild(player);
}

/* document.getElementById('add-button').addEventListener('click', function(){

    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New player</h4>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quaerat consectetur officia labore laborum, repellendus nesciunt iure at perspiciatis voluptas repellat nisi facere cum dolorem ea, eaque molestias? Qui, ea?</p>
    `;

    console.log(player);

    playersContainer.appendChild(player);
}); */