const products = [
    {
        id : 1,
        title : "Object 1 title",
        price : 100,
        image : "image url",
        description : "This is a short description"
    },
    {
        id : 2,
        title : "Object 2 title",
        price : 75,
        image : "image url",
        description : "This is a short description"
    },
    {
        id : 3,
        title : "Object 3 title",
        price : 150,
        image : "image url",
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