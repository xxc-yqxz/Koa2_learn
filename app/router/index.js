const fs = require('fs');   // 引入fs
const Router = require('koa-router');   // 引入koa-router

const router = new Router({
    // 可以传递参数配置路由前缀
});

/**
 * 从app/view目录读取HTML文件
 * @param {string} page 路由指向的页面
 * @returns {Promise<any>}
 */
function readPage(page) {
    return new Promise((resolve, reject) => {
        const viewUrl = `./app/view/${page}`;
        fs.readFile(viewUrl, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

router.get('/', async (ctx, next) => {
    ctx.type = 'html'; // 这里设置返回的类型是html
    ctx.body = await readPage('index.html');
})
router.get('/index', async (ctx, next) => {
    ctx.type = 'html'; // 这里设置返回的类型是html
    ctx.body = await readPage('index.html');
})
router.get('/home', async (ctx, next) => {
    ctx.type = 'html'; // 这里设置返回的类型是html
    ctx.body = await readPage('home.html');
})

module.exports = router;