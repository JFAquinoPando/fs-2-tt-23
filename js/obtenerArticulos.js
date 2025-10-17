/* const respuesta = await fetch("https://www.nasa.gov/wp-json/wp/v2/posts")
const articulos = await respuesta.json() */

/* import { default as confetti } from "./particulas.js"; */

axios.get("https://www.nasa.gov/wp-json/wp/v2/posts").then(
    function (respuesta) {
        console.log("R:", respuesta);
        const nuevo = respuesta.data.map(function (articulo) {
            /*  const { 
                 title: {
                     rendered: titulo
                 }, 
                 link, 
                 excerpt : {
                     rendered : extracto
                 }, 
                 parsely: {
                     meta: {
                         image : {
                             url: imagen
                         }
                     } 
                 }
             } = articulo */
            /* console.log("desde el map", titulo, link, extracto, imagen); */

            return `<article class="border border-white rounded-2xl p-3">
            <h3 class="font-bold">${articulo.title.rendered}</h3>
            <div class="my-5">
                <img src="${articulo.parsely.meta.image.url}" alt="${articulo.title.rendered}" class="w-full">
            </div>
            <div>
            ${articulo.excerpt.rendered}
            </div>
            <a class="text-yellow-300 font-bold" href="${articulo.link}" target="_blank" rel="noopener noreferrer">Leer más</a>
        </article>`
        })


        const seccionArticulos = document.querySelector("section")
        seccionArticulos.innerHTML = nuevo.join("")
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
        }, 2000);
    }
)


/* 
articulos.map(articulo => {
    return {}
})
 */


