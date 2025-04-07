// creo una funzione per creare l'elemento photo da aggiungere in pagina
const createPhoto = (item) => {
    //destrutturo item per ricavarne delle variabili
    const { title, date, url } = item

    const photo = `<div class="photo col-12 col-md-6 col-lg-4">
                    <div class="content p-4 position-relative bg-light">
                        <img src="${url}" alt="" class="img-fluid mb-3 photo-img">

                    <p class="date fs-5 text-secondary">${date}</p>
                    <p class="description fs-4">${title}</p>

                    <div class="red-pin position-absolute m-auto">
                        <img src="./img/pin.svg" alt="">
                    </div>
                    </div>
                </div>`

    return photo
}

// creo la funzione per inserire in pagina le varie photo tramite una chiamata ajax
const insertPhoto = () => {
    // dichiaro una variabile che conterrà i vari elementi
    let board = ''

    // effettuo la chiamata ajax
    axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => {
        // creo una variabile che contenga i dati presi dalla chiamata
        const data = resp.data
        // creo un ciclo per aggiungere tutti gli elementi all'interno di board
        for (let i = 0; i < data.length; i++) {
            board += createPhoto(data[i])

        }

        console.log(data)

        document.getElementById('photo-board').innerHTML = board

        // recupero le photo dal dom
        const photos = document.querySelectorAll('.photo')

        // creo un ciclo per selezionare l'elemento dell'array sul quale voglio lavorare
        photos.forEach((elem) => {
            // aggiungo un event listener ad ogni elemento
            elem.addEventListener('click', function(){
                // rimuovo la classe 'd-none' all'overlay
                document.querySelector('.overlay').classList.remove('d-none')

                // recupero l'immagine dell'overlay
                const overlayImg = document.getElementById('overlay-image')

                //modifico la fonte dell'immagine
                overlayImg.src = elem.childNodes[1].childNodes[1].src

                console.log(elem.childNodes[1].childNodes[1].src)
            })
        })
    })
}

insertPhoto()

// aggiungo la classe 'd-none' all'overlay quando viene cliccato il bottone per chiuderlo
document.getElementById('overlay-button').addEventListener('click', function() {
    // aggiungo la classe 'd-none' all'overlay
    document.querySelector('.overlay').classList.add('d-none')
})