// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    eventList: [
      {
        name: 'aaa',
        notification: true,
        deadline: {
          day: 1,
          hour: 3,
          minute: 43,
          second: 23,
        },
        importance: 1
      },
      {
        name: 'aaa',
        notification: true,
        deadline: {
          day: 1,
          hour: 3,
          minute: 43,
          second: 23,
        },
        importance: 1
      },
      {
        name: 'aaa',
        notification: true,
        deadline: {
          day: 1,
          hour: 3,
          minute: 43,
          second: 23,
        },
        importance: 1
      },
    ],
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    },
    addEvent: (state, payload) => {
      state.eventList.push(payload)
      setInterval(function () {
        if (payload.deadline.second === 0) {
          if (payload.deadline.minute === 0) {
            if (payload.deadline.hour === 0) {
              if (payload.deadline.day === 0) {
                console.log('success')
              } else {
                payload.deadline.day = payload.deadline.day - 1
                payload.deadline.hour = 23
              }
            } else {
              payload.deadline.hour = payload.deadline.hour - 1
              payload.deadline.minute = 59
            }
          } else {
            payload.deadline.minute = payload.deadline.minute - 1
            payload.deadline.second = 59
          }
        } else {
          payload.deadline.second = payload.deadline.second - 1
        }
      }, 1000)
    },
    countDown: (state) => {
      for (const event of state.eventList) {
        setInterval(function () {
          if (event.deadline.second === 0) {
            if (event.deadline.minute === 0) {
              if (event.deadline.hour === 0) {
                if (event.deadline.day === 0) {
                  console.log('success')
                } else {
                  event.deadline.day = event.deadline.day - 1
                  event.deadline.hour = 23
                }
              } else {
                event.deadline.hour = event.deadline.hour - 1
                event.deadline.minute = 59
              }
            } else {
              event.deadline.minute = event.deadline.minute - 1
              event.deadline.second = 59
            }
          } else {
            event.deadline.second = event.deadline.second - 1
          }
        }, 1000)
      }
    }
  }
})

export default store
