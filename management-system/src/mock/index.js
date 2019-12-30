import Mock from 'mockjs'
import homeAPI from './home'

//设置个延时，更像真的数据，o(∩_∩)o
Mock.setup({
  timeout: '200-1200'
})

Mock.mock(/\/home\/getData/, 'get', homeAPI.getStatisticalData)
