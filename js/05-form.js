let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  console.log("********* Form Submission *********")
  console.log("Username:", form.name.value);
  console.log("Email:", form.email.value);
  console.log("Newsletter:", form.signup.value);
  console.log("Date:", form.date.value);
  event.preventDefault();
}
