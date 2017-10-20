import axios from 'axios'
// axios.defaults.baseURL = 'http://program.hndt.com'
/**
 * 全部直播列表
 * @return {[type]} [description]
 */
const getLiveItem = () => axios.get('http://program.hndt.com/get/live')
    /**
     * 获取指定频率类别列表接口
     * @param  {[type]} classId [1：河南电台，2：网络电台；3：地市台]
     * @return {[type]}         [description]
     */
const getClassItem = (classId) => axios.get('http://program.hndt.com/get/live/class/' + classId)
    /**
     * 获取指定频率列表接口
     * @param  {[type]} channelId [description]
     * @return {[type]}           [description]
     */
const getChannelItem = (channelId) => axios.get('http://program.hndt.com/get/live/channel/' + channelId)
    /**
     * 点播接口
     * @param  {[type]} channelId [频率id]
     * @param  {[type]} time      [时间戳]
     * @return {[type]}           [description]
     */
const clickItem = (channelId, time) => axios.get('http://program.hndt.com/get/vod/' + channelId + '/' + time)

const apiOne = () => axios.get('http://api.hndt.com/api/page?template_id=155')

const apiTwo = () => axios.get('http://api.hndt.com/api/page?template_id=176&rows=9&page=1')

/**
 * 获取频率视频
 * @param {Number} channel_id 频率id
 */
const getChannelVideo = (channel_id) => axios.get('http://api.hndt.com/api/page?template_id=204&channel_id=' + channel_id)

/**
 * 获取频率活动
 * @param {Number} channel_id 频率id
 */
const getChannelNews = (channel_id) => axios.get('http://api.hndt.com/api/page?template_id=205&channel_id=' + channel_id)
    /**
     * 获取频率主持人
     * @param {Number} channel_id 频率id
     */
const getChannelHost = (channel_id) => axios.get('http://api.hndt.com/api/page?template_id=206&channel_id=' + channel_id)

/**
 * 获取主持人信息
 * @param {Number} host_id 主持人id
 */
const getHostArticle = (fragment_id) => axios.get('http://api.hndt.com/api/page?template_id=216&fragment_id=' + fragment_id)

/**
 * 获取频率特色栏目
 * @param {Number} channel_id 频率id
 */
const getChannelColumn = (channel_id) => axios.get('http://api.hndt.com/api/page?template_id=207&channel_id=' + channel_id)

/**
 * 获取特色栏目列表数据
 * @param {Number} column_id 频率id
 */
const getColumnList = (column_id) => axios.get('http://api.hndt.com/api/page?template_id=209&channel_id=' + column_id)

/**
 * 获取正文
 * @param {Number} article_id 文章id
 */
const getArticle = (article_id) => axios.get('http://api.hndt.com/api/page?template_id=210&article_id=' + article_id)

/**
 * 频率页面获取音频播客
 * @param {Number} channel_id 频率id
 */
const getPodcast = (channel_id) => axios.get('http://api.hndt.com/api/page?template_id=208&channel_id=' + channel_id)

/**
 * 获取音频播客列表
 * @param {Number} podcast_id 音频播客id
 */
const getPodcastList = (podcast_id) => axios.get('http://api.hndt.com/api/page?template_id=211&channel_id=' + podcast_id)

export {
    getLiveItem,
    getClassItem,
    getChannelItem,
    clickItem,
    apiOne,
    apiTwo,
    getChannelVideo,
    getChannelNews,
    getChannelHost,
    getHostArticle,
    getChannelColumn,
    getColumnList,
    getArticle,
    getPodcast,
    getPodcastList
}