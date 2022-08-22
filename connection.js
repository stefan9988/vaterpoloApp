function getText(){
  // read text from URL location
  var request = new XMLHttpRequest();
  request.open('GET', 'http://www.club4.co.rs/csv/games_list.txt', true);
  request.send(null);
  request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
          var type = request.getResponseHeader('Content-Type');
          if (type.indexOf("text") !== 1) {
              return request.responseText;
          }
      }
  }
}
//http://www.club4.co.rs/csv/Srbija_Italija_12_8_2022_10-37-1.txt
console.log(getText())