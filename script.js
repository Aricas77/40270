document.addEventListener("DOMContentLoaded", () => {
  fetch("pizzas.xml")
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, "text/xml");
      const pizzas = xml.getElementsByTagName("pizza");
      const tbody = document.querySelector("#tabla-pizzas tbody");

      Array.from(pizzas).forEach((pizza) => {
        const nombre = pizza.getElementsByTagName("nombre")[0].textContent;
        const ingredientes = pizza.getElementsByTagName("ingredientes")[0].textContent;
        const precio = pizza.getElementsByTagName("precio")[0].textContent;

        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${nombre}</td>
          <td>${ingredientes}</td>
          <td>$${precio}</td>
        `;
        tbody.appendChild(fila);
      });
    })
    .catch((error) => console.error("Error al cargar el XML:", error));
});
