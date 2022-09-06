import modular1 from "../assets/images/modular1.jpg";
import modular2 from "../assets/images/modular2.jpg";
import modular3 from "../assets/images/modular3.jpg";
import ropero1 from "../assets/images/ropero1.jpg";
import ropero2 from "../assets/images/ropero2.jpg";
import ropero3 from "../assets/images/ropero3.jpg";
import ropero4 from "../assets/images/ropero4.jpg";
import silla1 from "../assets/images/silla1.jpg";
import silla2 from "../assets/images/silla2.jpg";
import silla3 from "../assets/images/silla3.jpg";
import silla4 from "../assets/images/silla4.jpg";
import sillon1 from "../assets/images/sillon1.jpg";
import sillon2 from "../assets/images/sillon2.jpg";
import sillon3 from "../assets/images/sillon3.jpg";
import sillon4 from "../assets/images/sillon4.jpg";

const products = [
    {
        id : 1,
        title : "Modular pino oscuro",
        category: "modulares",
        price : 10799,
        image : modular1,
        description : "This is a short description",
    },
    {
        id : 2,
        title : "Modular roble claro",
        category: "modulares",
        price : 18999,
        image : modular2,
        description : "This is a short description"
    },
    {
        id : 3,
        title : "Modular blanco y negro",
        category: "modulares",
        price : 12300,
        image : modular3,
        description : "This is a short description"
    },
    {
        id : 4,
        title : "Ropero barniz moderno",
        category: "roperos",
        price : 22480,
        image : ropero1,
        description : "This is a short description"
    },
    {
        id : 5,
        title : "Ropero rústico claro",
        category: "roperos",
        price : 19800,
        image : ropero2,
        description : "This is a short description"
    },
    {
        id : 6,
        title : "Ropero melamina",
        category: "roperos",
        price : 22300,
        image : ropero3,
        description : "This is a short description"
    },
    {
        id : 7,
        title : "Ropero Logan 200",
        category: "roperos",
        price : 26789,
        image : ropero4,
        description : "This is a short description"
    },
    {
        id : 8,
        title : "Silla comedor tapizada",
        category: "sillas",
        price : 7900,
        image : silla1,
        description : "This is a short description"
    },
    {
        id : 9,
        title : "Silla tapizada estudio",
        category: "sillas",
        price : 8600,
        image : silla2,
        description : "This is a short description"
    },
    {
        id : 10,
        title : "Silla elegante",
        category: "sillas",
        price : 9789,
        image : silla3,
        description : "This is a short description"
    },
    {
        id : 11,
        title : "Moderna silla plástico",
        category: "sillas",
        price : 5900,
        image : silla4,
        description : "This is a short description"
    },
    {
        id : 12,
        title : "Sillon azul basico",
        category: "sillones",
        price : 28999,
        image : sillon1,
        description : "This is a short description"
    },
    {
        id : 13,
        title : "Sillon apoyapies",
        category: "sillones",
        price : 36999,
        image : sillon2,
        description : "This is a short description"
    },
    {
        id : 14,
        title : "sillon con cubos y apoyapies",
        category: "sillones",
        price : 42300,
        image : sillon3,
        description : "This is a short description"
    },
    {
        id : 15,
        title : "sillon doble",
        category: "sillones",
        price : 24999,
        image : sillon4,
        description : "This is a short description"
    },


];

const getData = new Promise((res, rej) => {
    setTimeout(() => {
        res(products)
        rej(err => console.log('Hubo un error al obteer los productos: ', err))
    }, 2000)
});

export default getData;