const express = require('express')

const app = express()

const products = [
    { id: 1, title: 'Leche', description: 'Sancor', price: 400, thumbnail: 'lecheSancor.jpg', code: 127, stock: 40 },
    { id: 2, title: 'Bebida Energetica', description: 'Monster', price: 390, thumbnail: 'energeticaMonster.jpg', code: 369, stock: 20 },
    { id: 3, title: 'Bizcochitos', description: 'Don Satur', price: 450, thumbnail: 'bizcochoDonSatur.jpg', code: 222, stock: 80 }
]

app.get('/products', (request, response) => {
 response.send({products})
})

app.get('/products', (request, response) => {
    const id = request.query.id
    
    const result = products.find(item => item.id == id)
    response.send(`${result.title}, ${result.description}, ${result.price}, ${result.stock},`)
})

app.listen(8080, () => console.log('Server Up'))