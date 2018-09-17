<template>
  <section class="homeBox">
    <div class="logo">彼时</div>
    <ul class="eventBox">
      <li class="event" v-for="(event,index) in eventList" :key="index">
        <div class="name">{{event.name}}</div>
        <div class="deadLine">
          <div class="time">{{event.deadline.day}}<span>d</span></div> 
          <div class="time">{{event.deadline.hour}}<span>h</span></div> 
          <div class="time">{{event.deadline.minute}}<span>m</span></div> 
          <div class="time">{{event.deadline.second}}<span>s</span></div>
        </div>
      </li>
    </ul>
    <button class="add" @click="addEvent">+</button>
  </section>
</template>

<script>
import card from "@/components/card";
import store from "@/store/store";

export default {
  data() {
    return {
      motto: "Hello World",
      userInfo: {}
    };
  },
  computed: {
    eventList() {
      return store.state.eventList;
    }
  },
  components: {
    card
  },

  methods: {
    addEvent() {
      wx.navigateTo({
        url: "/pages/add/main"
      });
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo();
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.homeBox {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: white;
  position: relative;
  .logo {
    position: fixed;
    top: 5.5vh;
    height: 4vh;
    font-size: 20px;
  }
  .eventBox {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    border: 1px solid #333;
    margin-top: 11vh;
    flex-wrap: wrap;
    min-height: 15vh;
    .event {
      height: 15vh;
      width: 100vw;
      border: 1px solid #333;
      position: relative;
      display: flex;
      align-items: flex-end;
      .name {
        position: absolute;
        top: 5px;
        left: 10px;
        font-size: 25px;
      }
      .deadLine {
        position: absolute;
        right: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 5px;
        .time {
          font-size: 35px;
          color: #333;
        }
        span {
          margin: 0 10px;
          font-size: 20px;
        }
      }
    }
  }
  .add {
    width: 6vh;
    height: 6vh;
    border-radius: 50%;
    background: #333;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 5vh;
    right: 5vh;
  }
}
</style>

