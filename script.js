fetch('https://valorant-api.com/v1/weapons/skins')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => mostrar_vandais(data['data']))
    .catch(error => console.log("Erro na requisição:", error.message));

function mostrar_vandais(data) {
    const lista = document.getElementById('resultados');
    
    if (!lista) {
        console.error("Elemento #resultados não encontrado.");
        return;
    }

    lista.innerHTML = ''; 

    for (const dado of data) {
        if (dado['assetPath'].includes("ShooterGame/Content/Equippables/Guns/Rifles/AK")) {
            const item = document.createElement('li');

            if (dado['displayIcon']) {
                const imagem = document.createElement('img');
                imagem.src = dado['displayIcon'];
                imagem.alt = dado['displayName'];
                imagem.style.width = '50px';
                item.appendChild(imagem);
            } else{
                const imagem = document.createElement('img');
                imagem.src = dado['chromas'][0]['displayIcon'];
                imagem.alt = dado['displayName'];
                imagem.style.width = '50px';
                item.appendChild(imagem);
            }

            const nomeTexto = document.createTextNode(dado['displayName']);
            item.appendChild(nomeTexto);
            
            lista.appendChild(item);

            console.log(dado['displayName']);
        }
    }
}
