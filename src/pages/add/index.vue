<template>
  <section class="addBox">
    <i class="iconfont back" @click="backToHome">&#xe641;</i>
    <div class="inputBox">
      <div class="inputName">事件名称</div>
      <input type="text" class="input" placeholder="event name" v-model="name">
      <div class="inputName">截止时间</div>
      <picker mode="date" :value="date" start="2018-9-15" end="2100-1-1" @change="bindDateChange">
        <view class="picker">
           <input type="text" class="input" placeholder="deadline" :value="deadline">
        </view>
      </picker>
     
    </div>
    <div class="importance">
      <div class="color white"></div>
      <div class="color black"></div>
      <div class="color pink"></div>
      <div class="color green"></div>
      <div class="color yellow"></div>
    </div>
    <div class="contorolBox">
      <div class="notificationBox">
        <div class="name">消息推送</div>
        <div class="switchBox" v-bind:class="{'fill':notification}">
          <div class="switch" @click="changeSwitch" v-bind:class="{'on':notification,'off':!notification}"></div>
        </div>
      </div>
    </div>
    <div class="submit" @click="submit">提交</div>
  </section>
</template>

<script>
import store from "@/store/store";

export default {
  data() {
    return {
      name: "",
      deadline: "",
      date: "",
      notification: false,
      importance: "",
      deadlineData: {}
    };
  },
  methods: {
    backToHome() {
      wx.navigateTo({
        url: "/pages/index/main"
      });
    },
    bindDateChange(e) {
      let nowTime = new Date();
      let targetTime = new Date(e.target.value.split('-').join('/'));
      let timeDifference = (targetTime - nowTime) / 1000;
      let day = Math.floor(timeDifference / 86400);
      let hour = Math.floor((timeDifference % 86400) / 3600);
      let minute = Math.floor(((timeDifference % 86400) % 3600) / 60);
      let second = Math.ceil(((timeDifference % 86400) % 3600) % 60);
      this.deadlineData = {
        day: day,
        hour: hour,
        minute: minute,
        second: second
      };
      this.deadline = e.target.value;
    },
    changeSwitch() {
      this.notification = !this.notification;
    },
    submit() {
      console.log(this.name)
      store.commit("addEvent", {
        name: this.name,
        notification: this.notification,
        deadline: this.deadlineData,
        importance: this.importance
      });
      this.backToHome();
    }
  },
  mounted() {
  },
};
</script>


<style lang="less" scoped>
@font-face {
  font-family: "iconfont"; /* project id 835239 */
  src: url("//at.alicdn.com/t/font_835239_ftha0svtpc8.eot");
  src: url("//at.alicdn.com/t/font_835239_ftha0svtpc8.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_835239_ftha0svtpc8.woff") format("woff"),
    url("//at.alicdn.com/t/font_835239_ftha0svtpc8.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_835239_ftha0svtpc8.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
@keyframes on {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 3.5vh;
  }
}
@keyframes off {
  0% {
    margin-left: 3.5vh;
  }
  100% {
    margin-left: 0px;
  }
}
.addBox {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 8vw;
  .back {
    width: 6vh;
    height: 6vh;
    margin-top: 11vh;
    font-size: 25px;
    margin-bottom: 4vh;
  }
  .inputBox {
    .inputName {
      font-size: 20px;
      margin-bottom: 3vh;
    }
    .input {
      font-size: 30px;
      margin-bottom: 8vh;
    }
    .input:placeholder {
      color: #bfc1c9;
    }
  }
  .importance {
    width: 92vw;
    height: 10vh;
    display: flex;
    align-items: center;
    .color {
      width: 5vh;
      height: 5vh;
      border-radius: 50%;
      margin: 0 4vw;
    }
    .white {
      box-shadow: 0px 4px 42px -9px rgba(0, 0, 0, 0.75);
    }
    .black {
      background: #41465e;
    }
    .pink {
      background: #ede1e1;
    }
    .green {
      background: #c8ddcc;
    }
    .yellow {
      background: #efdcc7;
    }
  }
  .notificationBox {
    margin-top: 5vh;
    width: 92vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    .switchBox {
      width: 6.5vh;
      height: 2.5vh;
      display: flex;
      align-items: center;
      border-radius: 1.5vh;
      position: absolute;
      right: 10vw;
      box-shadow: inset 0px 0px 5px -1px rgba(0, 0, 0, 0.75);
      .switch {
        position: absolute;
        width: 4vh;
        height: 4vh;
        background: white;
        border-radius: 50%;
        box-shadow: 0px 4px 42px -7px rgba(0, 0, 0, 0.75);
      }
      .on {
        animation: on 0.3s linear forwards;
      }
      .off {
        animation: off 0.3s linear forwards;
      }
    }
    .fill {
      background: #41465e;
    }
  }
  .submit {
    position: absolute;
    bottom: 5vh;
    right: 5vh;
    background: #333;
    width: 18vw;
    height: 5.5vh;
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
