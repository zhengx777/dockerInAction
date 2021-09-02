const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World123456';
});

app.listen(3000);
console.log("listen 3000 port")