import axios from 'axios'
// axios.defaults.baseURL = 'http://program.hndt.com'
/**
 * 全部直播列表
 * @return {[type]} [description]
 */
var getLiveItem = () => axios.get('http://program.hndt.com/get/live')
/**
 * 获取指定频率类别列表接口
 * @param  {[type]} classId [1：河南电台，2：网络电台；3：地市台]
 * @return {[type]}         [description]
 */
var getClassItem = (classId) => axios.get('http://program.hndt.com/get/live/class/' + classId)
/**
 * 获取指定频率列表接口
 * @param  {[type]} channelId [description]
 * @return {[type]}           [description]
 */
var getChannelItem = (channelId) => axios.get('http://program.hndt.com/get/live/channel/' + channelId)
/**
 * 点播接口
 * @param  {[type]} channelId [频率id]
 * @param  {[type]} time      [时间戳]
 * @return {[type]}           [description]
 */
var clickItem = (channelId, time) => axios.get('http://program.hndt.com/get/vod/' + channelId + '/' + time)

var apiOne = () => axios.get('http://api.hndt.com/api/page?template_id=155')

var apiTwo = () => axios.get('http://api.hndt.com/api/page?template_id=176&rows=9&page=1')
export {
  getLiveItem,
  getClassItem,
  getChannelItem,
  clickItem,
  apiOne,
  apiTwo
}
