function fetchQuote() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      let random = Math.floor(Math.random() * data.length);
      document.getElementById("quote").innerText = data[random].text;
      document.getElementById("author").innerText = data[random].author;
    });
}
