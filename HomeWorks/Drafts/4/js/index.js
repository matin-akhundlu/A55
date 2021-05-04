const url = "https://json-fake-api.herokuapp.com/coders";

async function getUsers() {
  const result = await fetch(url);
  const data = await result.json();
  const container = document.querySelector(".container");

  const html = data.map((item) => {
    return `
        <div>
            <h3>name: ${item.id} </h3>
            <h3>email: ${item.first_name} </h3>
            <h3>email: ${item.job} </h3>
            <h3>email: ${item.email} </h3>
        </div>

        `;
  });

  container.innerHTML = html.join("");
}

getUsers();
