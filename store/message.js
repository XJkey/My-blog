const state = () => ({
    parentId: null,
    commentsId:null,
    articleTitle: null,
    articleId: null,
    type: '0',
    byCriticsName: null,
    byCriticsId: null
});

const mutations = {
    setArticleTitle(state, val) {
        state.articleTitle = val
    },
    setArticleId(state, val) {
        state.articleId = val
    },
    setType(state, val) {
        state.type = val
    },
    setByCriticsName(state, val) {
        state.byCriticsName = val
    },
    setByCriticsId(state, val) {
        state.byCriticsId = val
    },
    setParentId(state, val) {
        state.parentId = val
    },
    setCommentsId(state, val) {
        state.parentId = val
    }
}

export {
    state,
    mutations
}
