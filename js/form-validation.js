// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  window.addEventListener('load', function  () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())

export default function validateForm() {
  const elements = document.querySelectorAll('#frm-game input');
  document.querySelector('#error').innerHTML = "";

  for(let i of elements){
    if((i.type === "text" || i.type === "date" || i.type === "number") && i.value === "" || !i.value){
      document.querySelector('#error').innerHTML = "Camps buids";
      return false;
    }
  }

  let pegi = Number.parseInt(document.querySelector('#game_pegi').value);
  if(Number.isInteger(pegi)){
    switch(pegi) {
      case 3:
        break;
      case 7:
        break;
      case 12:
        break;
      case 16:
        break;
      case 18:
        break;
      default: 
        document.querySelector('#error').innerHTML = "Edad pegi 3, 7, 12, 16, 18";
        return false;
    }
  } else {
    document.querySelector('#error').innerHTML = "Edad pegi ha de ser un nombre";
    return false;
  }
  return true;
}
