import http from "http"
import mongoose from "mongoose"


const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("qaqa evdesen")
    } else if (req.url == "/about") {
        res.write("qaqa aboutdasan")
    } else {
        res.write("qaqa duz gelmemisen")
    }
    res.end()

})

const CONNECTION_URL = "mongodb+srv://Rahib123:rahib123@cluster0.f4uxu6j.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
mongoose.connect(CONNECTION_URL).then(() => {
    console.log("Connection DB");
})

server.listen(3000, () => {
    console.log("Server loading");
})