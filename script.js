document.addEventListener("DOMContentLoaded", () => {
  let projects = [
    {
      img: "https://img.icons8.com/fluency/96/code.png",
      title: "SEMANA 01",
      desc: "Diagrama y Práctica",
      links: [
        { name: "Ver Miro", url: "https://miro.com/app/board/uXjVIFahQhU=/?share_link_id=310199185276" },
        { name: "Resumen", url: "https://www.canva.com/design/DAGji3nxKrI/gE5sHO90rC7vXzM64YdERA/view?utm_content=DAGji3nxKrI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8c3996c150" }
      ]
    },
    {
      img: "https://img.icons8.com/fluency/96/database.png",
      title: "SEMANA 02",
      desc: "Modelado Relacional",
      links: [
        { name: "Enunciado 01", url: "https://www.canva.com/design/DAGlTfZnLSI/4ZpuomfXtzUozUnNe0RKXg/edit" },
        { name: "Enunciado 02", url: "https://www.canva.com/design/DAGlU11ERj4/fnumjxzASonyIXjkmCXBsw/edit" }


      ]
    },
    {
      img: "https://img.icons8.com/fluency/96/api.png",
      title: "SEMANA 03",
      desc: "Tablas",
      links: [
        { name: "Tabla Relacional", url: "https://docs.google.com/spreadsheets/d/1Sk12gSpmH-5YUzsZd6j6cFm_DnRaNpFguwDB6bbgcEo/edit?gid=627531248#gid=627531248" }
      ]
    },
    {
      img: "https://img.icons8.com/fluency/96/html-5.png",
      title: "SEMANA 04",
      desc: "Tablas 2",
      links: [
        { name: "Tablas", url: "https://docs.google.com/spreadsheets/d/1aK6Or0g157QAtJsptAKmK1gWxZpa1d3j5TaqiSx7tk8/edit?gid=195376030#gid=195376030" }
      ]
    },
  ];

  const container = document.getElementById("projects-container");

  const renderProjects = () => {
    container.innerHTML = "";
    projects.forEach((proj, index) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const linksHTML = proj.links.map(link => `
        <a href="${link.url}" target="_blank">${link.name}</a>
      `).join("");

      card.innerHTML = `
        <img src="${proj.img}" alt="Icono">
        <h2>${proj.title}</h2>
        <p>${proj.desc}</p>
        ${linksHTML}
        <button class="delete-btn" onclick="deleteProject(${index})">Eliminar</button>
      `;
      container.appendChild(card);
    });
  };

  window.deleteProject = (index) => {
    const password = prompt("Ingrese la contraseña para eliminar (números):");
    if (password === "76760219") {
      projects.splice(index, 1);
      renderProjects();
    } else {
      alert("Contraseña incorrecta. No se eliminó la semana.");
    }
  };

  renderProjects();

  // Modal logic
  const modal = document.getElementById("modal");
  const linkInputs = document.getElementById("linkInputs");

  document.getElementById("addProjectBtn").addEventListener("click", () => {
    modal.style.display = "flex";
    resetModal();
  });

  document.getElementById("closeModal").addEventListener("click", () => {
    modal.style.display = "none";
  });

  document.getElementById("addLinkBtn").addEventListener("click", () => {
    const row = document.createElement("div");
    row.classList.add("link-row");
    row.innerHTML = `
      <input type="text" placeholder="Nombre del enlace" class="link-name">
      <input type="text" placeholder="URL" class="link-url">
    `;
    linkInputs.appendChild(row);
  });

  document.getElementById("saveProject").addEventListener("click", () => {
    const title = document.getElementById("weekTitle").value.trim();
    const desc = document.getElementById("weekDesc").value.trim();
    const img = document.getElementById("weekImg").value.trim() || "https://img.icons8.com/ios-filled/100/command-line.png";

    const links = [];
    const names = document.querySelectorAll(".link-name");
    const urls = document.querySelectorAll(".link-url");

    for (let i = 0; i < names.length; i++) {
      const name = names[i].value.trim();
      const url = urls[i].value.trim();
      if (name && url) {
        links.push({ name, url });
      }
    }

    if (title && links.length) {
      projects.push({ img, title, desc, links });
      renderProjects();
      modal.style.display = "none";
    } else {
      alert("Debes completar el título y al menos un enlace válido.");
    }
  });

  function resetModal() {
    document.getElementById("weekTitle").value = "";
    document.getElementById("weekDesc").value = "";
    document.getElementById("weekImg").value = "";
    linkInputs.innerHTML = `
      <div class="link-row">
        <input type="text" placeholder="Nombre del enlace" class="link-name">
        <input type="text" placeholder="URL" class="link-url">
      </div>
    `;
  }
});
