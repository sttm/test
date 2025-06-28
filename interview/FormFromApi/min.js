// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let currentIndex = 0;

function getPosts(btn) {
    fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
        .then(response => response.json())
        .then((json) => {
            // {
            //     "name": "Adeel Solangi",
            //     "language": "Sindhi",
            //     "id": "V59OF92YF627HFY0",
            //     "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
            //     "version": 6.1
            //   },

            if (btn == "om") {
                const items = json.slice(0, 10);
                let html = '<ul>';
                items.forEach(item => {
                    html += `<li>
                                <strong>name</strong><br>${item.name}<br>
                                <strong>language</strong><br>${item.language}<br>
                                <strong>id</strong><br>${item.id}<br>
                                <strong>bio</strong><br>${item.bio}<br>
                                <strong>version</strong><br>${item.version}<br>
                             </li>`;
                });
                html += '</ul>';
                modalBody.innerHTML = html;
                modal.style.display = "block";

            } else if (btn == "ac") {
                const container = document.getElementById("cardsContainer");
                const nextItems = json.slice(currentIndex, currentIndex + 10);

                nextItems.forEach(item => {
                    const card = document.createElement("div");
                    card.className = "card";
                    card.innerHTML = `
                                <h4>${item.name}</h4>
                                <p><strong>language:</strong> ${item.language}</p>
                                <p>${item.bio}</p>
                            `;
                    container.appendChild(card);
                });

                currentIndex += 10;

                // console.log(json)
            }

        }).catch(err => console.error('Ошибка загрузки:', err));
}
//   Закрытие модального окна
span.onclick = function () {
    modal.style.display = "none";
}

