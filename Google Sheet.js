// https://script.google.com/macros/s/AKfycbwB0k1ATsAb31EhUCuuYl6GB88SN9Q3gp2jgHU5XKQ31JhOVMwgS-h3vmEoriERBJ6hOA/exec
const scriptURL = 'https://script.google.com/macros/s/AKfycbwB0k1ATsAb31EhUCuuYl6GB88SN9Q3gp2jgHU5XKQ31JhOVMwgS-h3vmEoriERBJ6hOA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})