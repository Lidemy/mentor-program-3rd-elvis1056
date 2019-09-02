const q = (element) => {
  document.querySelector(element);
};

function makeLiveGameBlock(streamsLiveNow) {
  const newBlock = document.createElement('a');
  const streamLink = streamsLiveNow.channel.url;
  newBlock.classList.add('block', 'col-lg-3', 'col-md-4', 'col-sm-6', 'col-xs-12');
  newBlock.setAttribute('href', streamLink);
  newBlock.innerHTML = `
        <img class="view" src="${streamsLiveNow.preview.large}" />
        <div class="view-other">
            <img class="view-icon" src="${streamsLiveNow.channel.logo}" />
            <div class="view-detail">
                <div class="view-title">${streamsLiveNow.channel.display_name}</div>
                <div class="view-name">${streamsLiveNow.channel.name}</div>
            </div>
        </div>
    `;
  q('.container').appendChild(newBlock);
}

function getTopGames() {
  const request = new XMLHttpRequest();
  const limit = 10;
  request.open('GET', `https://api.twitch.tv/kraken/games/top?limit=${limit}`);
  request.setRequestHeader('Client-ID', 'xz6dj2rzycbnttjx1jeflood62ru70');
  request.send();
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const popularGameList = JSON.parse(request.responseText).top;
      for (let i = 0; i < 5; i += 1) {
        const newListLi = document.createElement('li');
        const newLink = document.createElement('a');
        newListLi.appendChild(newLink);
        newListLi.classList.add('nav-item');
        newLink.setAttribute('href', '#');
        newLink.classList.add('nav-link');
        newLink.innerText = popularGameList[i].game.name;
        q('.navbar-games').appendChild(newListLi);
      }
    } else {
      console.log('連線不穩定，請稍後再試');
    }
  };
}

function getGamesStream(gameUserClick) {
  const request = new XMLHttpRequest();
  const game = gameUserClick;
  const limit = 20;
  request.open('GET', `https://api.twitch.tv/kraken/streams?game=${game}&limit=${limit}`);
  request.setRequestHeader('Client-ID', 'xz6dj2rzycbnttjx1jeflood62ru70');
  request.send();
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const streamsLiveNow = JSON.parse(request.responseText).streams;
      for (let i = 0; i < streamsLiveNow.length; i += 1) {
        makeLiveGameBlock(streamsLiveNow[i]);
      }
    } else {
      console.log(request.status);
    }
  };
}

window.onload = () => {
  getTopGames();
  q('.navbar-games').addEventListener('click', (e) => {
    if (e.target.innerText.length < 50) {
      q('.container').innerHTML = '';
      const gameUserClick = e.target.innerText;
      getGamesStream(gameUserClick);
      q('.gameTitle').innerText = e.target.innerText;
    }
  });
  q('.gameTitle').innerText = 'League of Legends';
  getGamesStream('League of Legends');
};
