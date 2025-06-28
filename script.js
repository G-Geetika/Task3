function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      const joke = `${data.setup} — ${data.punchline}`;
      document.getElementById("jokeDisplay").textContent = joke;
    })
    .catch(() => {
      document.getElementById("jokeDisplay").textContent = "Oops! Joke API failed.";
    });
}
