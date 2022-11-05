document.addEventListener("keypress", function (e) {
  fun(e.key);
  console.log(e);
});

for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document
    .querySelectorAll("button")
    [i].addEventListener("click", function (ev) {
      var inner = this.classList[0];
      fun(inner);
      console.log(ev);
    });
}

function Style(inner) {
  document.querySelector("." + inner).classList.toggle("pressed");
}
function fun(inner) {
  Style(inner);
  switch (inner) {
    case "w":
      window.open(
        "https://thingspeak.com/channels/1921442/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15",
        "_blank"
      );
      break;
    case "a":
      window.open(
        "https://thingspeak.com/channels/1921442/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15",
        "_blank"
      );
      break;
    case "s":
      window.open(
        "https://thingspeak.com/channels/1921442/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15",
        "_blank"
      );
      break;
    case "d":
      window.open(
        "https://thingspeak.com/channels/1921442/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15",
        "_blank"
      );
      break;
    case "j":
      window.open(
        "https://thingspeak.com/channels/1921442/charts/5?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15",
        "_blank"
      );
      break;
    case "k":
      window.open(
        "https://thingspeak.com/channels/1921442/charts/6?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15",
        "_blank"
      );
      break;
  }
  setTimeout(function () {
    Style(inner);
  }, 100);
}

function Get(yourUrl){
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET",yourUrl,false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

var json_obj = JSON.parse(Get('https://api.thingspeak.com/channels/1921442/feeds.json?api_key=PED2FQHBE0D353S2&results=1'));
document.querySelector('.w p').innerHTML = json_obj.feeds[0].field1;
document.querySelector('.a p').innerHTML = json_obj.feeds[0].field2;
document.querySelector('.s p').innerHTML = json_obj.feeds[0].field3;
document.querySelector('.d p').innerHTML = json_obj.feeds[0].field4;
document.querySelector('.j p').innerHTML = json_obj.feeds[0].field5;
document.querySelector('.k p').innerHTML = json_obj.feeds[0].field6;