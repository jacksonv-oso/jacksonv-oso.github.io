document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("mainHeader").onclick = function () {
          this.style.color='aquamarine' ;
        }
      })
$( document ).ready(function() {
  $( "#fade" ).click(function() {
    $( "#fade" ).fadeOut( "slow", function() {
    });
  });
});