// init Isotope
var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.all-items').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });



  // filter items on active button click

    $('.all-items').on( 'click', 'li', function() {
        $(this).activeClass('actives').siblings.removeClass('actives');
     

  });
});







//   const inputs=document.querySelectorAll('.inp');
//   const submit=document.querySelector(".submit");
//   const hiddenMsg=document.querySelector('.hidden');

// //  console.log(submit)
// //  console.log(hiddenMsg)
// var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)


//   submit.addEventListener("submit",msg);


//   function msg(){
//     hiddenMsg.classList.add('active');
//   }