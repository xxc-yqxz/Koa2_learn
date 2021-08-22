const Koa = require('koa');
const path = require('path')
const koaNunjucks = require('koa-nunjucks-2')

const log4js = require('log4js')
log4js.configure({
    // 指定输出文件类型和文件名
    appenders: { cheese: { type: "file", filename: "cheese.log" }, xxc: { type: "file", filename: "xxc.log" } },
    // appenders 指定了日志追加到 cheese
    // level 设置为 error
    categories: { default: { appenders: ["cheese"], level: "error" }, xxc: { appenders: ["xxc"], level: "debug" } }
})
const logger = log4js.getLogger();  // 此处getLogger()不传参数，则代表使用categories中的default
// logger.level = 'error'; // 此时设置日志等级后，之后下一行的代码只能输出比设置等级高的日志
logger.error('输出日志');
const xxcLogger = log4js.getLogger('xxc')
xxcLogger.debug('hahaha')

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