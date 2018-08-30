const Koa = require('koa');
const static = require('koa-static');
const app = new Koa();
const port = process.env.PORT || 3000;

app.use(static('./public'));

app.listen(port, () => console.log(`listening at port ${port}`));
