const username = "Kaevrin";
const container = document.getElementById("projectcontainer");

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
        container.innerHTML = "";

        repos.forEach(repo => {
            const section = document.createElement("section");
            section.className = "project"

            const link = document.createElement("a");
            link.href = repo.html_url;
            link.target = "_blank";

            const title = document.createElement("h2");
            title.className = "projecttitle";
            title.textContent = repo.name;
            link.appendChild(title)

            const desc = document.createElement("p")
            desc.textContent = repo.description || "No description available";

            section.appendChild(link);
            section.appendChild(desc)
            container.appendChild(section)
        });
    })
    .catch(error => {
        console.error("Error fetching repos:", error);
        document.getElementById("repo-list").innerText = "Failed to load repositories.";
    });