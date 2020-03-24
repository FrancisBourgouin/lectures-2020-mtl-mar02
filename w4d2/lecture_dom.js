//$ or jQuery => Call jQuery
//() => selector (using css or JS variables)
//action => name of the action
// empty () => read
// content in () => write

// $(selector).action('optional for write')

$(document).ready(() => {
  console.log($('h1').text())
  console.log($('h1').html())
  $('h1').text('HEY THERE LHL <strong>STRONG</strong>')
  $('h1').html('HEY THERE LHL <strong>STRONG</strong>')



  console.log($('section.intro').css('background'))
  $('section.intro').css('background', 'red')
})
