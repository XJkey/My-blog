
const actions = {
    async nuxtServerInit({
        commit
    }, {
        req, app
    }) {
        let { status, data: { username, power } } = await app.$axios.get('/users/getUser');
        commit('user/setUser', status === 200 ? { username, power } : { username: '', power: 0 })


        let { status: status1, data: data1 } = await app.$axios.get('/message/newestList');
        commit('side/setNewestMessage', status1 === 200 ? data1.data : [])
        let { status: status2, data: data2 } = await app.$axios.get('/blogs/getRandomBlogs');
        commit('side/setRandomArticles', status2 === 200 ? data2.data : [])
    }
}

export {
    actions
}
