const Router = require('koa-router')
const lists = require('api/lists/routes')

const router = Router()
router.get('/', async ctx =>{
    ctx.status = 200
})

// router.get('/test', async ctx => {
//     console.log(await db.query('SELECT * FROM Items'))
//     ctx.body = 'test'
//     ctx.body = await db.query('SELECT 1+1 AS result')
//         .then(c => c.rows[0].result)
// })

router.use('/lists', lists.routes())

module.exports = router
