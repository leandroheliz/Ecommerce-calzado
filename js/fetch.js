        
    const tulook = document.getElementById('tulook');
    const recomendados = document.getElementById('recomendados');
    const productsCategory = document.getElementById('productsCategory');

    function showZapatos() {
        fetch('./zapato.json')
        .then((response) => response.json())
        .then((data) => {

            for (let i = 0; i < 4; i++) {
            tulook.innerHTML += productTemplate(data[i]);
            }

            const newArray = data.slice(4, 8)

            for (let i = 0; i < 4; i++) {
            recomendados.innerHTML += productTemplate(newArray[i], false);
            }
        });
    }

    if(tulook || recomendados){
        showZapatos();
    }

    function showZapatosInCategory(){
        fetch('./zapato.json')
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < 9; i++) {
            productsCategory.innerHTML += productTemplate(data[i], false, true);
            }
        });
    }

    if(productsCategory){
        showZapatosInCategory()
    }

    function productTemplate(zapatos, isButton = true, isFav = false) {

        const showButton = (isButton) ? `<a href="#" class="btn btn-primary">Agregar al carrito</a>` : '';

        const showFav = isFav ? `<div class="d-flex justify-content-end">
                            <i class="fas fa-heart heart icon-fav"></i>
                        </div>` : '';

        return `<div class="col">
            <div class="card">
                ${showFav}
                <img src="img/${zapatos.foto}" style="object-fit:contain; height: 12rem" class="card-img-top" alt="${zapatos.nombre}">
                <ul class="product-gallery-card">
                    <li>
                        <img class="fotoZapato" src="./img/9.jpg" alt="">
                    </li>
                    <li>
                        <img class="fotoZapato" src="./img/10.jpg" alt="">
                    </li>
                    <li>
                        <img class="fotoZapato" src="./img/11.jpg" alt="">
                    </li>
                </ul>
                <div class="card-body">
                    <h5 class="card-title">${zapatos.nombre}</h5>
                    <p>${zapatos.precio}$</p>
                    ${showButton}
                </div>
                </div>
            </div>
        `
    }



// function zapatos(){

// fetch('./zapatos.json')
//     .then(response => response.json())
//     .then(data => {
//         for(zapatos of data) {

//             products.innerHTML += `
//             <div class="row">
//             <div class="card" style="width: 18rem"; >
//                 <img src="${zapatos.foto}" class="card-img-top" alt="${zapatos.nombre}">
//                 <div class="card-body">
//                     <h5 class="card-title">${zapatos.referencia}</h5>
//                     <p>${zapatos.precio}$</p>
//                     <a href="#" class="btn btn-primary">Agregar al carrito</a>
//                 </div>
//             </div>
//             </div>` } })

//         }
// zapatos();

