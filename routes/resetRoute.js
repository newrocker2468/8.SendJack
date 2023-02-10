import express from 'express'
const router = express.Router()

router.get('/reset', (req, res) => {
    res.render('reset')
})

export default router;