// Função pra gerar cards dinamicamente
function createCards(numCards) {

    var cardContainer = document.getElementById("cardContainer");

    cardContainer.innerHTML = "";

    fetch('servicos.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then(data => {
            for (var i = 0; i < data.length; i++) {
                var card = document.createElement("div");
       
                card.innerHTML = `
                    <div class="card mb-3" style="width:100%;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src=${data[i].img_src} class="img-fluid rounded-start" alt="..." style="height: 100%;">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${data[i].name}</h5>
                                    <p class="card-text">Contato 1: ${data[i].number_1} <br> Contato 2: ${data[i].number_2} </p>
                                    <p class="card-text"><small class="text-body-secondary"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">${data[i].website}</a></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                cardContainer.appendChild(card);
            }
        })
        
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

}