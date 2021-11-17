let request = new XMLHttpRequest();
request.open('GET', "https://api.spotify.com");
request.responseType = 'text';
request.onload = function() {
    poemDisplay.textContent = request.response;
  };
  request.send();
