import express from 'express'
import productsRouter from './routers/products.router.js'
import cartsRouter from './routers/carts.router.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api', productsRouter)
app.use('/api', cartsRouter)

app.listen(8080, () => console.log('Server Up'))