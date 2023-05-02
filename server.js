import express from 'express'
import productsRouter from './routers/products.router.js'
import cartsRouter from './routers/carts.router.js'
import { Server } from 'socket.io'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api', productsRouter)
app.use('/api', cartsRouter)

const httpServer = app.listen(8080, () => console.log('Server Up'))

const socketServer = new Server(httpServer)

socketServer.on('connection', () => {
    console.log('Socket client connected...')
})