const scriptURL = 'https://script.google.com/macros/s/AKfycbynBm2dFWcoNVBJjlS4N1wxMIqOWYBpNYF4GenaxGGMQZnqSkLQLA3i7HtFpNkSzWV3/exec'
const form = document.forms['contact-from']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');


form.addEventListener('submit', e => {
  e.preventDefault();
    // ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      //tampilkn alert
      myAlert.classList.toggle('d-none');
      //reset formnya
      form.reset();
      console.log('Success!', response)
      })
    .catch(error => console.error('Error!', error.message))
})
