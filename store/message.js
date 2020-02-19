/*
 * @Author: your name
 * @Date: 2020-02-19 19:42:28
 * @LastEditTime: 2020-02-19 19:49:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/store/message.js
 */
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
        state.commentsId = val
    }
}

export {
    state,
    mutations
}
