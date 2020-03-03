const state = () => ({
    newestMessage: [],
    randomArticles:[]
});

const mutations = {
    setNewestMessage(state, val) {
        state.newestMessage = val
    },
    setRandomArticles(state, val) {
        state.randomArticles = val
    }
}

export {
    state,
    mutations
}
