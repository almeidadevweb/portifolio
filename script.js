const form = document.getElementById('contactForm')
const successMessage = document.getElementById('successMessage')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  successMessage.innerText = 'Mensagem enviada com sucesso!'

  form.reset()

  setTimeout(() => {
    successMessage.innerText = ''
  }, 4000)
})
