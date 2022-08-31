import imageManzana from "../assets/images/manzana1.jpg";
import imageNaranja from "../assets/images/naranja1.jpg";
import imageLimon from "../assets/images/limon1.jpg";
import imagePera from "../assets/images/pera.jpg";
import imageUva from "../assets/images/uva.jpg";
import imageDurazno from "../assets/images/durazno.jpg";

const products = [
    {
        id : 1,
        title : "Object 1 title",
        price : 100,
        image : imageManzana,
        description : "This is a short description"
    },
    {
        id : 2,
        title : "Object 2 title",
        price : 75,
        image : imageLimon,
        description : "This is a short description"
    },
    {
        id : 3,
        title : "Object 3 title",
        price : 150,
        image : imageDurazno,
        description : "This is a short description"
    },
    {
        id : 4,
        title : "Object 4 title",
        price : 1200,
        image : imageNaranja,
        description : "This is a short description"
    },
    {
        id : 5,
        title : "Object 5 title",
        price : 475,
        image : imagePera,
        description : "This is a short description"
    },
    {
        id : 6,
        title : "Object 6 title",
        price : 550,
        image : imageUva,
        description : "This is a short description"
    }
];

const getData = new Promise((res, rej) => {
    setTimeout(() => {
        res(products)
        rej(err => console.log('Hubo un error al obteer los productos: ', err))
    }, 2000)
});

export default getData;