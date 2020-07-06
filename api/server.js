const express = require('express')
const allRouter = require('./Router')

let app = express();

app.use(allRouter)
app.use(express.static('./'))

app.listen(1912,()=>{
    console.log('Server is runing in 1912')
})