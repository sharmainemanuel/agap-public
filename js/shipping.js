$(document).ready(function(){$.ajax({type:"GET",url:"http://m.weather.gov.ph/agaptest/shipping.php",async:!1,success:function(e){setTimeout(function(){$("#imgLoader").fadeOut();var o=e.result[0].synopsis,t=e.result[0].forecast;return $(".inner").html("<p>"+o+"</p><br><p>"+t+"</p><br>"),!1},1e3)},error:function(e,o,t){console.log(e.responseText),console.log(o),console.log(t)}})});