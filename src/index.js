const init = () => {
  const inputForm = document.querySelector("form");
  const title = document.querySelector("section#movieDetails h4");
  const summary = document.querySelector("section#movieDetails p");
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = e.target.children[1];

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("ERO");
          title.textContent = "Error";
          summary.textContent = `A movie with an id of ${input.value} does not exist`;
        }
      })
      .then((data) => {
        title.textContent = data.title;
        summary.textContent = data.summary;
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
