const Koa = require('koa');

const app = new Koa();

// x-response-time

// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     // 向响应头中添加数据
//     ctx.set('X-Response-Time', `${ms}ms`);
// });

// // logger

// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });

// // ctx:context（上下文）
// app.use(ctx => {
//     ctx.response.body = 'hello world';
// })

app.use((ctx, next) => {
    console.log(1)
    next(); // next不写会报错
    console.log(5)
});

app.use((ctx, next) => {
    console.log(2)
    next();
    console.log(4)
});

app.use((ctx, next) => {
    console.log(3)
    // 此处的ctx.body与ctx.response.body是同一个东西。
    ctx.body = 'Hello World';
});

app.listen(3005, () => {
    console.log('App started on http://localhost:3005')
})