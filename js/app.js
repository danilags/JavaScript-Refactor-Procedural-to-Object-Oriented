// $(document).ready(function() {
//   $('#roller button.add').on('click', function() {
//     console.log('WHAT!');
//     $('.dice').append('<div class="die">0</div>')
//   })
//
//   $('#roller button.roll').on('click', function() {
//     $('.die').each(function(k, die) {
//       var value = Math.floor((Math.random() * 6) + 1)
//       $('.die').text(value)
//     })
//   })
//   $('.roller').css('background', 'red')
//   $('.roller').css('display', 'table')
//   $('.roll').click(function() {
//     $('.roller').css('background', 'blue')
//   })
//
//   $('.roller').mouseenter(function() {
//     $(this).css('background', 'white')
//   })
//   $('.roller').mouseleave(function() {
//     $(this).css('background', 'red')
//   })
// });

$(document).ready(function() {
  $('#roller button.add').on('click', testObject.getDice)
  $('#roller button.roll').on('click', testObject.setDice)
})

class Model {
  constructor() {

  }
}

class View {

  static createDice() {
    $('#roller').append('<div class="die">0</div>')
  }

  static getValue() {
    $('.die').each(function() {
      let value = testObject.randomNumber();
      $(this).text(value)
    })
  }
}

class Controller {

  getDice() {
    View.createDice()
  }

  setDice() {
    View.getValue()
  }

  randomNumber() {
    return Math.floor((Math.random() * 6) + 1)
  }

}

let testObject = new Controller()
