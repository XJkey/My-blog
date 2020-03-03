const state = () => ({
    user: {}
});

const mutations = {
    setUser(state, val) {
        state.user = val
    }
}

export {
    state,
    mutations
}
