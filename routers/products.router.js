import { Router } from "express";

const router = Router()

let products = [
    { id: 1, title: 'Leche', description: 'Sancor', price: 400, thumbnail: 'lecheSancor.jpg', code: 127, stock: 40 },
    { id: 2, title: 'Bebida Energetica', description: 'Monster', price: 390, thumbnail: 'energeticaMonster.jpg', code: 369, stock: 20 },
    { id: 3, title: 'Bizcochitos', description: 'Don Satur', price: 450, thumbnail: 'bizcochoDonSatur.jpg', code: 222, stock: 80 }
]

let generateID = () => {
    if (this.events.length === 0) return 1
    return this.events [this.events.length-1].id + 1
}

// localhost:8080/api/products

router.get('/products', (req, res) => {
    const limit = req.query.limit
    res.send({
        message: 'success',
        data: products.slice(0, limit)
    })
   })

router.get('/products/:pid', (req, res) => {
    const pid = req.params.pid
    const result = products.find(item => item.id == pid)
    res.send(`${result.title}, ${result.description}, ${result.price}, ${result.stock},`)
    })

router.post('/products', (req, res) => {
    const id = this.generateID()
    // const product = { id, title, description, price, thumbnail, code, stock }
    const product = req.body
    // if (!title || !description || !price || !code || !stock) {
    //     throw new Error ('you must complete all camps')
    // } else {
        products.push(product)
        res.send ({status: 'success'})
    // }
    })

router.put('/products/:pid', (req, res) => {
    const pid = req.params.pid
    const newData = req.body
    const productIndex = products.findIndex(item => item.id == pid)
    products[productIndex] = { ...products[productIndex], ...newData}
    res.send('success')
})

router.delete('/products/:pid', (req, res) => {
    const pid = req.params.pid
    products = products.filter(item => item.id !== +pid)
    res.send(products)
})

export default router