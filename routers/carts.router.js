import { Router } from "express";

const router = Router()

let carts = []

// localhost:8080/api/carts

router.get('/carts/:cid', (req, res) => {
    const cid = req.params.cid
    const result = carts.find(item => item.id == cid)
    res.send ({result})
})

router.post('/carts', (req, res) => {
    const cart = req.body
    carts.push(cart)
    res.send ({status: 'success'})
})



export default router