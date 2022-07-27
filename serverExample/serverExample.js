const http = require('http')
const server = http.createServer((req, res) => {

    const url=req.url

    if((url==='/index')||(url==='/about')||(url==='/contact')){ 
        res.write(`${url.slice(1)} sayfasina hosgeldiniz`)
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'})
        res.write("<h2>404 Sayfa bulunamadi</h2>")
    } 
    res.end()
})

const serverPort = 5000
server.listen(serverPort, () => {
    console.log(`Sunucu ${serverPort} 'ıncı portta başlatıldı`)
})