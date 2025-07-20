const username = "Kaevrin";
const container = document.getElementById("projectcontainer");

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
        container.innerHTML = "";

        repos.forEach(repo => {
            const section = document.createElement("section");
            section.className = "project";
            const titlecontainer = document.createElement("div");
            titlecontainer.className = "projectstyle";

            const link = document.createElement("a");
            link.href = repo.html_url;
            link.target = "_blank";

            const title = document.createElement("h2");
            title.className = "projecttitle";
            title.textContent = repo.name;
            link.appendChild(title);
            titlecontainer.appendChild(link)

            const infocontainer = document.createElement("div");
            infocontainer.className = "infocontainer";

            const desc = document.createElement("p");
            desc.textContent = repo.description || "No description available";

            const lang = document.createElement("p");
            if (repo.language && repo.html_url) {
                lang.innerHTML = `Coded in ${repo.language} - [<a class="projectlink" href="${repo.html_url}" target="_blank">${repo.html_url}</a>]`;
            } else {
                lang.textContent = "No language found";
            }

            infocontainer.appendChild(desc);
            infocontainer.appendChild(lang);

            section.appendChild(titlecontainer);
            section.appendChild(infocontainer);
            container.appendChild(section);
        });
    })
    .catch(error => {
        console.error("Error fetching repos:", error);
        document.getElementById("repo-list").innerText = "Failed to load repositories.";
    });