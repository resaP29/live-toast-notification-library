// import Toast from "./Toast.js"

// document.querySelector("button").addEventListener("click", () => {
//   const toast = new Toast({
//     text: "Hello",
//     position: "top-right",
//     pauseOnHover: true,
//     pauseOnFocusLoss: true,
//   })
// })

const button = document.querySelector("button")
button.addEventListener("click", () => {
  Notification.requestPermission().then(parm => {
    if (parm === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification('Notification with ServiceWorker');
      });
      let notification = new Notification('Notification', {
        body: 'This is a test',
        data: { hello: "word" },


      })
      notification.addEventListener("error", e => {
        alert("error")
      })
    }
  })

})

// let notification
// let interval
// document.addEventListener("visibilitychange", () => {
//   if (document.visibilityState == "hidden") {
//     const leaveDate = new Date()
//     interval = setInterval(() => {
//       notification = new notification("come back please", {
//         body: `PLEASSEEEEE  ${Math.round(
//           (new Date() - leaveDate) / 1000
//         )} second`,
//         tag: "come back",
//       })
//     }, 100)
//   } else {
//     clearInterval(interval)
//     if (notification) notification.close()
//   }
// })



