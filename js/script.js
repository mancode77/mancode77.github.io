$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

//! scroll bar
const progress = document.getElementById('progerssbar');
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = `${progressHeight}%`;
}
//! end scrollbar

//!body background
const colors = [
  '#2196f3',
  '#e91e63',
  '#ffeb3b',
  '#74ff1d'
];

const hdr = document.querySelector('header'); 

function createSquare() {
  // const hdr = document.querySelector('header'); //section
  const square = document.createElement('div');
  square.setAttribute('calss', 'square');

  let size = Math.random() * 50;

  square.style.width = `${3 * size}px`;
  square.style.height = `${3 * size}px`;
  
  square.style.top = `${Math.random() * innerHeight}px`;
  square.style.left = `${Math.random() * innerWidth}px`;
  
  const bg = colors[Math.floor(Math.random() * colors.length)];
  square.style.background = bg;

  hdr.appendChild(square);
  
  hdr.style.overflow = 'hidden';

  square.style.position = 'absolute';
  square.style.pointerEvents = 'none';
  square.style.animation = 'bg 5s linear infinite';
  square.style.zIndex = '-1';

  setTimeout(() => square.remove(), 5000);

}

setInterval(createSquare, 150);
//!end body background
