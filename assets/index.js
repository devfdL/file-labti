var testCount = 0;
var out = document.getElementById("output");
var x = document.getElementById("myVideo");

function go(){
  testCount++;
  switch (testCount) {
    case 1:
        document.getElementById("btn-a").style.display = "block";
        document.getElementById("myVideo").style.display = "block";
        x.autoplay = true;
        x.load();
        setTimeout(function() {
            $('#myVideo').fadeOut('fast');
        }, 10000); // <-- time in milliseconds
      break;

    default:
      out.innerHTML = 'file downloaded';
      break;
  }
}