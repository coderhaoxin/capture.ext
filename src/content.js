
import Resizable from 'resizable'

chrome.runtime.onMessage.addListener((message, request, sendResponse) => {
  const { action } = message

  if (action === 'capture') {
    $('body').append(`
      <div class="kiku-mask">
        <p class="kiku-view"></p>
        <button>确定</button>
      </div>
    `)

    const el = document.querySelector('p.kiku-view')
    const resizable = new Resizable(el, {
      within: 'parent',
      handles: 's, se, e',
      threshold: 10,
      draggable: false
    })

    resizable.on('resize', () => {
      console.debug('resize')
    })

    const done = document.querySelector('.kiku-mask > button')
    done.addEventListener('click', () => {
      const { height, width, left, top } = el.getBoundingClientRect()
      console.debug('send response')
      sendResponse({height, width, left, top})
    })
  }
})
