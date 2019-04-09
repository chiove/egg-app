const request = require('sync-request');
const cheerio = require('cheerio');
module.exports = (ctx, next) => {
    let arr = [];
   for (let i=1;i<=495;i++) {
       let url = `http://www.audio69.com/book/393/${i}.html`;
       let html = request('GET', url).getBody().toString();
       const $ = cheerio.load(html);
       let video = {
           num:i,
           src:$('source').attr('src')
       };
       arr.push(video);
    }
    ctx.body = arr;
};
