
import { crop } from 'image.io'

document.querySelector('#toCapture').addEventListener('click', () => {
  chrome.tabs.query({
    currentWindow: true,
    active: true
  }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'capture'
    }, res => {
      console.log(res, 99)
      chrome.tabs.captureVisibleTab(null, {}, dataUrl => {
      })
    })
  })
})
