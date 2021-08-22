const Koa = require('koa');

const router = require('./app/router');

const app = new Koa();

app.use(async (ctx, next) => {
    await next();
    if (ctx.status === 404) {
        ctx.body = '404';
    }
})

app.use(router.routes()).use(router.allowedMethods)

app.listen(3005, () => {
    console.log('App started on http://localhost:3005')
})