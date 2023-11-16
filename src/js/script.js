const open = document.querySelector('.offer-cont_btn-btn')
const close = document.querySelector('.offer-cont_btn-main')
const overlay = document.querySelector('.overlay')

const openModal = () => {
    overlay.classList.add('show')
    document.body.style.overflow = 'hidden';
}

const closeModal = () => {
    overlay.classList.remove('show')
    document.body.style.overflow = '';
}

open.addEventListener('click', openModal)
close.addEventListener('click', closeModal)

$('#consultation-form').validate();
$('#consultation form').validate({
    rules:{
        name: "reguired",
        phone: "reguired",
        email: {
            reguired: true,
            email: true
        }
    },
    messages: {
        name: "Будь-ласка, ведіть своє ім’я.",
        phone: "Не вірний формат даних.",
        email: {
          required: "Будь-ласка, ведіть свою почту.",
          email: ""
        }
      }

});
   $('input[name=phone]').mask("+38 (999) 999 9999 ");

   $('form').submit(function(e) {
    e.preventDefault();

    if(!$(this).valid()) {
        return;
    }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()

    }).done(function(){
        $(this).find("input").val("");


        $('form').trigget('reset');

    });
    return false;

   });
