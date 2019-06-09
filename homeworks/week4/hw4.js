const request = require('request');

const options = {
  url: 'https://api.twitch.tv/helix/games/top',
  headers: {
    'Client-ID': 'xz6dj2rzycbnttjx1jeflood62ru70',
  },
};

function callback(error, response, body) {
  const topGamesData = JSON.parse(body).data;
  for (let i = 0; i < topGamesData.length; i += 1) {
    console.log(`${topGamesData[i].name}${' '}${topGamesData[i].id}`);
  }
}

request(options, callback);
