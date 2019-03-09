import Mock from 'mockjs'
export const getCommentList = () => {
    return Mock.mock({
        'commentList|10': [{
            'id': '@id',
            'content': '@csentence(10,100)',
            'nickName': '@cname',
            'email': '@email',
            'time':'@date(yyyy-MM-dd)'
        }]
    })
}