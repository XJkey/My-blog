import Vue from 'vue';

Vue.prototype.changePage = function (index) {
    let query = this.$route.query;
    let hash = ''
    let pageNum = query.pageNum ? query.pageNum : 1
    if (index === '+1') {
        pageNum++
    } else if (index === '-1') {
        pageNum--
    } else {
        pageNum = index
    }
    query.pageNum = pageNum.toString();
    for (var item in query) {
        hash += item + '=' + query[item] + '&'
    }
    hash = hash.substring(0, hash.length - 1)

    window.location.href = 'http://' + window.location.host + '/?' + hash
}