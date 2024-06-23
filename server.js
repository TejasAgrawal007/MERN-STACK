const express = require('express')
const app = express()
const port = 3000

const authRouter = require('./router/auth-router')

app.use(authRouter)



app.listen(port, () => {
    console.log(`Example app listening on port port`)
})