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
    {
      img: "https://img.icons8.com/fluency/96/css3.png",
      title: "SEMANA 05",
      desc: "",
      links: [
        { name: "Paleta de colores", url: "https://coolors.co/" }
      ]
    },
    {
      img: "https://img.icons8.com/fluency/96/javascript.png",
      title: "SEMANA 06",
      desc: "Conexion",
      links: [
        { name: "Conexion Sql con Microsoft Azure", url: "http://docs.google.com/document/d/18yF7wg6ExwatzVnEvujcfgDikj09ibVrU8v7tzWwWTM/edit?pli=1&tab=t.0" }
      ]
    },
    {
      img: "https://img.icons8.com/fluency/96/github.png",
      title: "SEMANA 07",
      desc: "Manual",
      links: [
        { name: "Manual Microsoft Azure", url: "https://docs.google.com/document/d/1ClflV5KB83S19a_yis6aOMlByG3gK6kMlokuCn7RDmE/edit?tab=t.0" }
      ]
    },
    {
      img: "https://img.icons8.com/fluency/96/bug.png",
      title: "SEMANA 08",
      desc: "Manuales",
      links: [
        { name: "Manual Pagina Web en Azure", url: "https://docs.google.com/document/d/1kqhCZb21vZwizu6ky2RNgX10CwthtlEw5MytAchTkwk/edit?tab=t.0" },
         { name: "Manual Base de Datos en Azure", url: "https://docs.google.com/document/d/1kqhCZb21vZwizu6ky2RNgX10CwthtlEw5MytAchTkwk/edit?tab=t.0" }

      ]
    },
    {
      img: "https://img.icons8.com/fluency/96/server.png",
      title: "Examen Parcial",
      desc: "Sesiones a Realizar",
      links: [
        { name: "Sesion 01", url: "https://docs.google.com/document/d/1ClflV5KB83S19a_yis6aOMlByG3gK6kMlokuCn7RDmE/edit?tab=t.0" },
        { name: "Sesion 02", url: "https://docs.google.com/document/d/11ifMwB3YL5bXKuNffwv9u2YagSKe0SeR-KLKpYAOLDc/edit?tab=t.0" },
        { name: "Sesion 03", url: "https://docs.google.com/document/d/1JGhMfvB3LutjiojaiUtbrVViQ3hSDqEVO44nQyVqbCY/edit?tab=t.0" },
        { name: "Sesion 04", url: "https://docs.google.com/document/d/14CvIiN8rGtSx1824vNSC2jvIkfgdcW35BYU1Vw6wk40/edit?tab=t.0" },
        { name: "Sesion 05", url: "https://docs.google.com/document/d/1Fis2LFnucdBYXvIr2wEDz_GQfFt1_PrOB8ClI3ruGx0/edit?tab=t.0" },
        { name: "Sesion 06", url: "https://docs.google.com/document/d/1Fis2LFnucdBYXvIr2wEDz_GQfFt1_PrOB8ClI3ruGx0/edit?tab=t.0" }


      ]
    },
    {
      img: "https://img.icons8.com/fluency/96/bug.png",
      title: "SEMANA 10",
      desc: "Actividad",
      links: [
        { name: "ACTIVIDAD 01", url: "https://docs.google.com/document/d/1kMVq2QJCvcr_nlvWttTFUMbC2fKAwHp3yPtqd2wZ51w/edit?tab=t.0" },
       { name: "ACTIVIDAD 02", url: "https://docs.google.com/document/d/1CVCoVpQUEl65JyMMplDbBSbH5nPT0AUrE2y2pmEfDYg/edit?tab=t.0" }

      ]
    },
    {
      img: "https://img.icons8.com/fluency/96/php.png",
      title: "SEMANA 11",
      desc: "Consultas",
      links: [
        { name: "Base de Datos", url: "https://docs.google.com/document/d/1NSAzer5MgOHIZeDQ6q7fCOTbbsCd6Cdvo5c-fbT_RQU/edit?tab=t.0" },
        { name: "Modelo Grafico", url: "https://docs.google.com/document/d/1bWTgPjQr1vga6Gsy9rDPC8PxIhyGBMmmj7A2-RqvyAU/edit?tab=t.0" }

      ]
    },
    {
      img: "https://img.icons8.com/fluency/96/bug.png",
      title: "SEMANA 12",
      desc: "Diseño web responsivo",
      links: [
        { name: "Modulo 1", url: "https://docs.google.com/document/d/1nWgIF3HV47PYL_sN8s7pEa4IPf3yaJC7rYq6WU7NOPE/edit?tab=t.0" },
        { name: "Modulo 2", url: "https://docs.google.com/document/d/1UJ5nPwyJYItjiDNS-WN4EgQYSV88OWW5HhjEjTtQtr0/edit?tab=t.0" },
        { name: "Modulo 3", url: "https://docs.google.com/document/d/1ostMs69jrF4yzAcoM1GVLBJuZ84ep-813vbVnWHO_fA/edit?tab=t.0#heading=h.j5zxee8juoa" }

      ]
    },
    {
      img: "https://img.icons8.com/fluency/96/bootstrap.png",
      title: "SEMANA 13",
      desc: "Diseño con Bootstrap",
      links: [
        { name: "Modulo 4", url: "https://docs.google.com/document/d/1x3zSwmTm_sXTu0Bve8oC95Wn9Af8ZIDOxFYTnbL7iK4/edit?tab=t.0#heading=h.1jfg95ugitqm" },
       { name: "Modulo 5", url: "https://docs.google.com/document/d/1yCq3-OkgONgMDxK4mF79Jb6E2npeANMMGp1Eg_XleUQ/edit?tab=t.0" }

      ]
    },
    {
      img: "https://img.icons8.com/fluency/96/analytics.png",
      title: "SEMANA 14",
      desc: "Análisis de rendimiento",
      links: [
        { name: "Modulo 6", url: "https://docs.google.com/document/d/1watROCoA9yBditgzPizugqyBJjv15FpM1g4MMiAjOAc/edit?tab=t.0#heading=h.kq87pvk8blwv" },
        { name: "Modulo 7", url: "https://docs.google.com/document/d/1kjpIfJs1yrc7IMShAq0hM1xR2dSgfdax9iP4NE_6Fo0/edit?tab=t.0#heading=h.6fcs8ptkltez" }
                

      ]
    },
    {
      img: "https://img.icons8.com/fluency/96/bug.png",
      title: "SEMANA 15",
      desc: "Pruebas y debugging",
      links: [
        { name: "Modulo 8", url: "https://docs.google.com/document/d/18yF7wg6ExwatzVnEvujcfgDikj09ibVrU8v7tzWwWTM/edit?pli=1&tab=t.0" }
      ]
    },
    {
      img: "https://img.icons8.com/fluency/96/check-all.png",
      title: "SEMANA 16",
      desc: "Entrega y documentación final",
      links: [
        { name: "Informe final", url: "https://docs.google.com/" }
      ]
    }
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
