$(document).ready(function() {
  // всі <p>  змінити текст
  $('p').text('Змінений текст');

  // task1 + клас highlight.
  $('#task1').addClass('highlight');

  // елементи <li> -> їм клас list-item.
  $('li').addClass('list-item');

  // колір тексту 
  $('.highlight').css('color', 'red');

  // фон 
  $('.list-item').css('background-color', 'lightgray');

  //  анімаційний ефект 
  $('.highlight').fadeIn(2000); // Змініть 2000 на бажаний час анімації в мілісекундах.

  // заміна тексту останнього елемента <p> 
  $('#task1 p:last-child').text('Новий останній текст');

  //  обробник подій кнопки
  $('#removeButton').on('click', function() {
    $('.list-item').remove();
  });
});