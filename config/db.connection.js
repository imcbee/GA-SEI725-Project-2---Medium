const mongoose = require('mongoose')

require('dotenv').config()

const connectionStr = process.env.MONGODB_URL

const connection = mongoose.connect(connectionStr || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE")

mongoose.connection.on('connected', ()=>console.log(
    `${new Date().toLocaleTimeString()}: MongoDB connected...✅ ✅ ✅`
))

mongoose.connection.on('error', (error)=>console.log(
    `${new Date().toLocaleTimeString()}: MongoDB error encountered...❌ ❌ ❌ \n ${{error}}`
))

mongoose.connection.on('disconnnected', ()=>console.log(
    `${new Date().toLocaleTimeString()}: MongoDB disconnected.`
))

module.exports = connection