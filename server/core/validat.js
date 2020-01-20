import datalize from 'datalize';
const field = datalize.field;
datalize.set('autoValidate', true);


export let singupValidate = datalize([
    field('username', '用户名').required(),
    field('password', '密码').required(),
    field('vpassword', '确认密码').required().custom(async function (value, result, ctx) {
        let password = await result.password;
        console.log(password,value,typeof(await result.password))
        if (value != password.value) {
            throw new Error('两次密码不一致');
        }
    }),
    field('email', '邮箱').required().email(),
    field('code', '验证码').required(),
])