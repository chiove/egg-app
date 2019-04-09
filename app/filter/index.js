
module.exports = (ctx, next) => {
    if(ctx.session.account && ctx.session.user_name){
        return next();
    }
    ctx.body = {
        message:'未登录或登录失效，请重新登录！'
    };
    // ctx.redirect('http://localhost:3000/login');
};
