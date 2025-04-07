//effettuo la chiamata ajax
axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => {
    console.log(resp.data[0])
})