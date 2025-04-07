//effettuo la chiamata ajax
axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => {
    console.log(resp.data[0])
})

//creo una funzione per creare l'elemento photo da aggiungere in pagina
const createPhoto = (item) => {
    //destrutturo item per ricavarne delle variabili
    const {title, date, url} = item

    const photo = `<div id="photo" class="col-12 col-md-6 col-lg-4">
                    <div class="content p-4 position-relative bg-light">
                        <img src="${url}" alt="" class="img-fluid mb-3">

                    <p class="date fs-5 text-secondary">${date}</p>
                    <p class="description fs-4">${title}</p>

                    <div class="red-pin position-absolute m-auto">
                        <img src="./img/pin.svg" alt="">
                    </div>
                    </div>
                </div>` 
}