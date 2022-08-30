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
    },
    {
        id : 4,
        title : "Object 4 title",
        price : 1200,
        image : "image url",
        description : "This is a short description"
    },
    {
        id : 5,
        title : "Object 5 title",
        price : 475,
        image : "image url",
        description : "This is a short description"
    },
    {
        id : 6,
        title : "Object 6 title",
        price : 550,
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