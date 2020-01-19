export default async ({ route, req, error }) => {
    let level = 0;
    let path = route.path;
    switch (path) {
        case '/':
            break
    }
    let ctx = req.ctx;
    let passport = ctx.session.passport;
    if (passport && JSON.stringify(passport) != "{}") {
        if (passport.power < level) {
            error('权限不足')
        }
    }
}