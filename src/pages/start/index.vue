<template>
     <div class="start">
        <div class="clock">
            <div class="hour-hand hand"></div>
            <div class="minute-hand hand"></div>
        </div>
        <p class="logo">彼时</p>
        <span class="logo e-logo">At that time</span>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      wx.navigateTo({
        url: "/pages/index/main"
      });
    }, 0);
  }
}
</script>

<style lang="less" scoped>
.start {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  .clock {
    border: 4px solid #333;
    height: 30vh;
    width: 30vh;
    border-radius: 50%;
    margin-top: 20vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .hour-hand {
      width: 10px;
      height: 12vh;
      background: #333;
      border-radius: 10px;
      margin-top: 3vh;
      transform-origin: 50% 100%;
    }
    .minute-hand{
        position: absolute;
        width: 10px;
        height: 10vh;
        background: #333;
        border-radius: 10px;
        margin-top: 5vh;
        transform-origin: 50% 100%;
        transform: rotate(-18deg);
    }
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    font-weight: bold;
    color: #333;
    font-weight: bold;
    width: 100vw;
    height: 20vh;
  }
  .e-logo {
    height: 10vh;
    font-size: 20px;
  }
}
</style>
