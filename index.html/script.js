const feedbacks = document.querySelectorAll('.feedback-client')
const sliderButtons = document.querySelectorAll('.slider-btn')
var atualSlide = 0
const form = document.getElementById('formContato')

emailjs.init("YFoMQMR41-nOf65WW")

function showSlide(index) {
    feedbacks.forEach(slide => {
        slide.classList.remove('active')
    })

    sliderButtons.forEach(slide => {
        slide.classList.remove('active')
    })

    feedbacks[index].classList.add('active')
    sliderButtons[index].classList.add('active')
    atualSlide = index
}

sliderButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        showSlide(index)
    })
})

form.addEventListener('submit',function(event){
  event.preventDefault()

  const nome = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const whatsapp = form.querySelector('input[type="tel"]').value;

  const parametros = {
    nome:nome,
    email:email,
    whatsapp: whatsapp
  }
  //            service ID gmail  ID DO TEMPLATE
  emailjs.send('service_f2c7him', 'template_2gqj0sr', parametros)
  .then(()=>{
    alert('Sua inscrição foi enviada com sucesso, Vamos te direcionar você para a empresa agora!')
    form.reset()
  })
  .catch((error)=>{
    console.log(error)
    alert('Ocorreu um erro ao enviar. Tente novamente mais tarde')
  })

})