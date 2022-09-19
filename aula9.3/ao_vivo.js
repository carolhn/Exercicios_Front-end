const fetch = require('node-fetch')

function fetchUser() {
    const url = 'https://api.github.com/users/MurilloWolf ';
    fetch(url)
    .then( response => response.json())
    .then( data => console.log(data));
}
fetchUser()