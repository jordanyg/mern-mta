import express from 'express'
import userRoute from './routes/userRoute.js'
import orgRoute from './routes/orgRoute.js'
import { config } from 'dotenv'
import connectDb from './config/db.js'
import { notFound ,errorHandler } from './middleware/errorMiddleware.js'



config()
connectDb()

const app = express()


const port = process.env.PORT || 8001
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/api/users' , userRoute)
app.use('/api/organizations' , orgRoute)
app.use(notFound)
app.use(errorHandler)


app.listen( port , ()=>{
    console.log(`server started listening at port ${port}`)
})

