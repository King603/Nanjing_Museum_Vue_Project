<template>
  <div class="info">
    <h6>开放时间</h6>
    <p v-html="info.text1"></p>
    <h6>安全须知</h6>
    <p v-html="info.text2"></p>
    <h6>注意事项</h6>
    <p v-html="info.text3"></p>
    <p>
      <strong
        ><a :href="info.yuyue.wangzh" target="_blank" class="wangzhan top"
          >网站预约请点击此处</a
        ></strong
      >
    </p>
    <p>
      <strong
        ><a :href="info.yuyue.weixin" target="_blank" class="weixin top"
          >微信预约请点击此处</a
        ></strong
      ><strong><br /></strong>
    </p>
    <div class="date">{{ info.date }}</div>
  </div>
</template>

<script>
export default {
  name: "page-2",
  data() {
    return {
      info: {
        text1:
          "4月30日零时起，北京突发卫生公共事件响应机制调为二级，根据相应防控策略，结合当前实际，首都博物馆决定自5月1日起恢复开放。<br />开放时间暂定为每天10:00-16:00（15：00停止入馆），周一例行闭馆，暂不安排延时开放。开馆期间社会车辆进馆时间为9：30-15:00。<br />开放区域暂定为方形展厅一至五层所有展厅。<br />开放方式为预约参观。每位观众均须提前在首都博物馆微信公众号和官方网站进行实名预约，非经预约无法入馆，暂不接受团体预约、电话预约和现场预约。开放期间每日预约1000人，预约分上下午，每半天各预约500人，上午预约入馆：10:00-13：00,下午预约入馆13:00—15:00，请须按照预约场次到馆，否则无法入馆。",
        text2:
          "观众须在车场入口或北广场入口处完成<br />（一）体温检测<br />（二）北京市（健康宝）健康码检查<br />（三）携带本人二代身份证验证预约信息并领取门票，方可进入馆区。存在体温大于等于37.3摄氏度、北京市（健康宝）健康码显示异常、未预约这三种情况中任一种情况的观众，暂不得进入馆区。外籍人员预约到馆参观需携带护照，并出示“HealthKit（健康宝）”。",
        text3:
          "观众进入馆区后，北门入馆参观。参观须全程佩戴口罩，未戴口罩谢绝参观。<br />观众在排队、安检、参观、乘扶梯、休息时均须自觉与其他观众保持1.5米间距，避免聚集。<br />若您参观时出现发热或身体不适等情况，请及时联系就近工作人员。工作人员将帮助您前往“隔离区”进行休息隔离。<br />为了避免聚集，我们将暂停人工讲解服务，提供扫码支付押金的自助租借语音导览。<br />使用轮椅、婴儿车或行动不便的观众，如需乘坐直梯，请联系咨询台工作人员。<br />参观过程中，为了给您提供良好服务并确保您的健康，请您自觉遵守参观要求并听从工作人员的疏导。<br />首都博物馆将严格落实各项疫情防控措施，确保有序安全的开放环境。最终战胜疫情是我们与您的共同追求，在此感谢各位亲爱的观众，感谢您对抗疫的支持和对首博服务工作的配合。",
        yuyue: {
          wangzh: "https://sdbwg.hdwbcloud.com/#/personal/index",
          weixin: "https://mp.weixin.qq.com/s/5cegzbUW3UIL2KgmjDdJjw",
        },
        date: "2020年4月29日",
      },
    };
  },
};
</script>

<style scpped>
.info {
  padding: 30px 80px;
  color: blue;
}
.wangzhan {
  color: purple;
}
.weixin {
  color: #36f;
}
.date {
  text-align: right;
}
.top {
  line-height: 500%;
}
h6 {
  font-size: 18px;
  line-height: 200%;
}
</style>