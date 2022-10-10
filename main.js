const fact = document.getElementById('fact');

fetch("https://catfact.ninja/fact")
  .then((response) => response.json())
  .then((data) => {
    fact.textContent = data.fact;
  });