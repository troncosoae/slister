const Koa = require('koa')
const router = require('routing')
const ResponseTime = require('koa-response-time')
const Morgan = require('koa-morgan')
const db = require('db')

const app = new Koa()

app.use(ResponseTime())
app.use(Morgan('combined'))
app.use(router.routes())

exports.start = async function() {
    try {
        await db.start()
        console.log('Database connected')
        this.server = await app.listen(3000)
        console.log('Listening to PORT 3000')
    } catch (error) {
        console.log(error)
    }
}

exports.close = async function() {
    await this.server.close()
    await db.close()
}
