<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <div class="user">
            <img :src="userImg" alt="" />
            <div class="userinfo">
              <p class="username">Jace</p>
              <p class="access">管理员</p>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="login-info">
            <p>上次登录时间：<span>2019-12-30</span></p>
            <p>上次登录地点：<span>上海</span></p>
          </div>
        </el-card>
        <el-card shadow="hover" style="height: 538px; margin-top:12px">
          <el-table :data="tableData">
            <el-table-column
              v-for="(val, key) in tableLabel"
              :key="key"
              :prop="key"
              :label="val"
              show-overflow-tooltip
            ></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div class="data-list">
          <el-card
            shadow="hover"
            v-for="item in testData"
            :key="item.name"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i
              :class="`el-icon-${item.icon}`"
              :style="{ background: item.color }"
            ></i>
            <div class="details">
              <p class="price">￥ {{ item.value }}</p>
              <p class="title">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
        <el-card shadow="hover">
          <echart style="height:280px" :chartData="echartData.order"></echart>
        </el-card>
        <div class="chart">
          <el-card shadow="hover">
            <echart :chartData="echartData.user" style="height: 260px"></echart>
          </el-card>
          <el-card shadow="hover">
            <echart
              :chartData="echartData.video"
              style="height: 260px"
              :isAxisChart="false"
            ></echart>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Echart from '../../components/Echart'
export default {
  components: {
    Echart
  },
  data() {
    return {
      userImg: require('../../assets/images/user.jpg'),
      testData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#555'
        },
        {
          name: '明日支付订单',
          value: 1234,
          icon: 'success',
          color: '#555'
        },
        {
          name: '昨日支付订单',
          value: 1234,
          icon: 'success',
          color: '#555'
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#555'
        },
        {
          name: '上月支付订单',
          value: 1234,
          icon: 'success',
          color: '#555'
        },
        {
          name: '今年支付订单',
          value: 1234,
          icon: 'success',
          color: '#555'
        }
      ],
      tableData: [],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {
          series: []
        }
      }
    }
  },
  methods: {
    getChartData() {
      this.$http.get('/home/getData').then(res => {
        res = res.data
        this.tableData = res.data.tableData
        // 订单折线图
        const order = res.data.orderData
        this.echartData.order.xData = order.date
        // 第一步取出series中的name部分——键名
        let keyArray = Object.keys(order.data[0])
        // 第二步，循环添加数据
        keyArray.forEach(key => {
          this.echartData.order.series.push({
            name: key === 'wechat' ? '小程序' : key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })
        // 用户柱状图
        this.echartData.user.xData = res.data.userData.map(item => item.date)
        this.echartData.user.series.push({
          name: '新增用户',
          data: res.data.userData.map(item => item.new),
          type: 'bar'
        })
        this.echartData.user.series.push({
          name: '活跃用户',
          data: res.data.userData.map(item => item.active),
          type: 'bar',
          barGap: 0
        })
        // 视频饼图
        this.echartData.video.series.push({
          data: res.data.videoData,
          type: 'pie'
        })
      })
    }
  },
  mounted() {},
  created() {
    this.getChartData()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/home';
</style>
