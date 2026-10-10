const form = document.getElementById('contactForm')
const messageField = document.getElementById('message')
const whatsappNumber = '5531971493965'

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const message = messageField.value.trim()
  if (!message) {
    messageField.focus()
    return
  }

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  window.location.assign(whatsappUrl)
})
