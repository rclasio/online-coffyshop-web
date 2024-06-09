(function () {
    emailjs.init("k6dBLs293aBh5kcSe");
  })();

  function sendemail() {
    var form = document.getElementById('booking');
    emailjs.sendForm('service_0p5uea9', 'template_588ju2j', form)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your booking has been sent successfully!');
        form.reset(); 
      }, function (error) {
        console.log('FAILED...', error);
        alert('Failed to send booking. Please try again later.'); 
      });
  }

  document.getElementById('booking').addEventListener('submit', function (event) {
    event.preventDefault();
    sendemail();
  });