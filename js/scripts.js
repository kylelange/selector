// Buisiness Logic




// User Interface Logic
// alert("hello4")
$(document).ready(function(){
  $("form").submit(function(event){
    var q1 = $("#q1").val();
    var q2 = $("#q2").val();
    var q3 = $("#q3").val();
    // var q4 = $("#q4").val();
    // var q5 = $("#q5").val();




    if (q1 === "1-yes" && q2 === "2-yes" && q3 === "3-yes"){
      alert("hello1");
      $("#css-d").hide();
      $("#php-ruby").hide();
      $("#c-java").show();
      // event.preventdefault();
    }
      else if (q1 === "1-no" && q2 === "2-no" && q3 === "3-no"){
        alert("hello2");
        $("#php-ruby").hide();
        $("#c-java").hide();
        $("#css-d").show();
        // event.preventdefault();
      }
      else {
        alert("hello3");
        $("#c-java").hide();
        $("#css-d").hide();
        $("#php-ruby").show();
        // event.preventdefault();
      }

    event.preventdefault();


  });
});

console.log("Program Complete!");
