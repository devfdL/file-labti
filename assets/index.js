var testCount = 0;
var out = document.getElementById("output");
var x = document.getElementById("myVideo");
var y = document.getElementById("myVideo1");

function go(){
  testCount++;
  switch (testCount) {
    case 1:
        document.getElementById("btn-a").style.display = "block";
        document.getElementById("ads").style.display = "block";
        document.getElementById("myVideo").style.display = "block";
        x.autoplay = true;
        x.load();
        setTimeout(function() {
          $('#myVideo').fadeOut('fast');
        }, 20000); // <-- time in milliseconds
        
        setTimeout(function() {
          $('#ads').fadeOut('fast');
        }, 20000); // <-- time in milliseconds
      break;

      case 2:
        document.getElementById("btn-b").style.display = "block";
        document.getElementById("myVideo1").style.display = "block";
        y.autoplay = true;
        y.load();
        setTimeout(function() {
            $('#myVideo1').fadeOut('fast');
        }, 10000); // <-- time in milliseconds
      break;

    default:
      out.innerHTML = 'file downloaded';
      break;
  }
}