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
        description : "Mueble modular realizado de Madera de pino, de tonos oscuros. Posee un peso ligero, lo que permite su facil movilidad, ideal para realizar cambios en el diseño de tu habitación.",
    },
    {
        id : 2,
        title : "Modular roble claro",
        category: "modulares",
        price : 18999,
        image : modular2,
        description : "Mueble modular realizado con madera de Roble Americano, la cual se destaca por sus colores claros y gran duracion. Con un diseño minimalista, este modular otorga modernidad y comodidad a tus habitaciones. Principalmente utilizado para colocar tanto televisores, como también libros y adornos."
    },
    {
        id : 3,
        title : "Modular blanco y negro",
        category: "modulares",
        price : 12300,
        image : modular3,
        description : "Modular moderno en tonos blanco y negro. Este gran producto se utiliza en comedores, salas de estar y livings. Su principal funcion es para colocar un televisor aunque se le puede dar cualquier uso que se desee."
    },
    {
        id : 4,
        title : "Ropero barniz moderno",
        category: "roperos",
        price : 22480,
        image : ropero1,
        description : "Este ropero moderno esta diseñado para cualquier tipo de habitación, ya que por su pequeño tamaño puede ser ubicado en muchos lugares."
    },
    {
        id : 5,
        title : "Ropero rústico claro",
        category: "roperos",
        price : 17800,
        image : ropero2,
        description : "Ropero de línea económica, disponible en 2 tonos, claro y oscuro. Ideal para el guardado de utilerías y artículos de uso diario"
    },
    {
        id : 6,
        title : "Ropero melamina",
        category: "roperos",
        price : 29300,
        image : ropero3,
        description : "Gran ropero de 2 cuerpos, con puertas corredizas. Diseñado especialmente para habitaciones, posee una gran capacidad y comodidad para el guardado de ropa y demás artículos que uno desee tener a mano en su dormitorio. Su material duradero, hace que no se hinche con humedad y o filtraciones de agua."
    },
    {
        id : 7,
        title : "Ropero Logan 200",
        category: "roperos",
        price : 26789,
        image : ropero4,
        description : "Ropero ideal para departamentos. El modelo Logan 200 trae consigo una gran relación entre el espacio que ocupa en la habitación y su capacidad de guardado de prendas. Nuestros clientes lo utilizan en espacios pequeños así como también en habitaciones de niños y niñas."
    },
    {
        id : 8,
        title : "Silla comedor tapizada",
        category: "sillas",
        price : 7900,
        image : silla1,
        description : "Silla con total comodidad, equipada con asiento con almohadon tapizado y respaldar tipo reja hecha de madera. Ideal para comedores de casas de campo y/o quinchos. Disponible con tapizado de varios colores, este producto ofrece una gran comodidad y una muy buena relación precio/calidad."
    },
    {
        id : 9,
        title : "Silla tapizada estudio",
        category: "sillas",
        price : 8600,
        image : silla2,
        description : "Silla de madera, con asiendo y respaldar acolchados con tapizados de cuerina fina. Este producto presenta una gran comodidad y ergonomía, lo que la hace una silla ideal para realizar trabajos de escritorio, así como tambien lectura y pasar varias horas sentado sin sentir cansancio en la espalda y piernas."
    },
    {
        id : 10,
        title : "Silla elegante",
        category: "sillas",
        price : 9789,
        image : silla3,
        description : "Silla de comedor tapizada, con asiento acolchado y una elegante terminación. Gracias a estas características, es de las mas utilizadas para lujosos comedores de hoteles y restaurantes, así como tambien para casas de uso particular."
    },
    {
        id : 11,
        title : "Moderna silla plástico",
        category: "sillas",
        price : 5900,
        image : silla4,
        description : "La silla de plástico, de un precio inmejorable, es una silla liviana, perfecta para uso en departamentos y habitaciones chicas. Su peso permite su facil movilidad y transporte, para utilizar en cualquier parte de la casa. Al ser de plástico y madera barnizada, presenta mayor durabilidad a la humedad y al agua que las demás."
    },
    {
        id : 12,
        title : "Sillon azul basico",
        category: "sillones",
        price : 28999,
        image : sillon1,
        description : "Sillon de 3 cuerpos, tapizado con cuerina azul marino. Este sillon presenta un diseño estándar, ideal para salas de espera, halls, y salas de estar. Sus patas reforzadas lo hacen resistente al peso. Incluye 2 mini almohadones para sus corneras."
    },
    {
        id : 13,
        title : "Sillon con apoyapies",
        category: "sillones",
        price : 36999,
        image : sillon2,
        description : "Sillon de tres cuerpos con apoyapies adicional. Ideal para familias numerosas, o para recostarse a ver peliculas o series. Es de gran comodidad ya que sus almohadones estan hechos de espuma de poliuretano, lo que le da gran resistencia a las deformaciones."
    },
    {
        id : 14,
        title : "Sillon con cubos y apoyapies",
        category: "sillones",
        price : 42300,
        image : sillon3,
        description : "Sillon de tres cuerpos, con apoyapies integrado y dos cubos extras. Es el mas grande en su gama, ideal para livings y sals de estar grandes. Posee una calidad superior a los demas ya que tanto su manufactura se realiza con materiales de primera mano, disponible en tres colores y con dos almoadones adicionales sin costo."
    },
    {
        id : 15,
        title : "Sillon doble",
        category: "sillones",
        price : 24999,
        image : sillon4,
        description : "Sillon de dos cuerpos, de gran comodidad. Este mueble encaja perfectamente en habitaciones acogedoras, ya que ocupa poco tamaño, pero tanto su comodidad como calidad son de primera. Posee respaldar y apoyabrazos rígidos para darle una mayor estructura."
    },


];

const getData = new Promise((res, rej) => {
    setTimeout(() => {
        res(products)
        rej(err => console.log('Hubo un error al obteer los productos: ', err))
    }, 2000)
});

export default getData;