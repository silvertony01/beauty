   function scrollToForm() {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }

    function handleSubmit(event) {
      event.preventDefault();
      alert("Grazie! Ti contatteremo al più presto.");
    }