const aldBtn = document.querySelector('button')

function buttonClick() {
    axios
        .get('https://swapi.dev/api/planets/2')
        .then((res) => {
            for (let i = 0; i < res.data.residents.length; i++) {
               axios.get(res.data.residents[i])
                    .then(((res) => {
                        const bodyElement = document.body;
                        const h2 = document.createElement('h2')
                        h2.textContent = `${res.data.name}`
                        bodyElement.appendChild(h2)
                    })
                )}
        })
        .catch(err => console.log(err))
}

aldBtn.addEventListener('click',buttonClick)

// () => {
//     document.createElement('h2')
//     h2.textContent = 
//     document.appendChild('h2')

