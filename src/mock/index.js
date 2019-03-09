/* eslint-disable */
import Mock from 'mockjs'
import {getCommentList} from './respone/comment'
import {getMusicList} from './respone/music'
Mock.mock('/music/getMusicList',getMusicList);
Mock.mock('/comment/getCommentList',getCommentList);
export default Mock