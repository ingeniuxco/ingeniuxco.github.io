// Movimiento del pinguino

function myMove() {
  var $element1 = $("#pinguino").eq(0);
  var $element2 = $("#linea").eq(0);

  var mySequence = [
    { e: $element1, p: { translateY: [ 30, -1000 ] },  o: { duration:  800 } },
    { e: $element1, p: { translateY: -30, scaleX: 1.03, scaleY: 1.03  },  o: { duration:  400 } },
    { e: $element1, p: { translateY: +20, scaleX: 1, scaleY: 1  },  o: { duration:  600 } },
    { e: $element1, p: { translateY: -5, scaleX: 0.99, scaleY: 0.99 },  o: { duration:  600 } },
    { e: $element1, p: { scaleX: 1, scaleY: 1, translateY: +5 },  o: { duration:  600 } },
    { e: $element2, p: { opacity: 0, display: "none"},  o: { duration:  600 } }
  ];
  $("#pinguino").show();
  $.Velocity.RunSequence(mySequence);
}
