const Koa = require('koa');
const path = require('path')
const koaNunjucks = require('koa-nunjucks-2')

const router = require('./app/router');

const app = new Koa();

app.use(koaNunjucks({
    ext: 'html', // 使用HTML后缀的模板
    path: path.join(__dirname, 'app', 'view'),   // 模板所在路径
    nunjucksConfig: {   // nunjucks的配置
        trimBlocks: true    // 去除标签后的换行
    }
}))

app.use(async (ctx, next) => {
    await next();
    if (ctx.status === 404) {
        await ctx.render('404', {
            link: 'http://localhost:3005/home',
            text: 'home'
        })
    }
})

app.use(router.routes()).use(router.allowedMethods)

app.listen(3005, () => {
    console.log('App started on http://localhost:3005')
})