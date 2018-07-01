function getBros(callback)
{
  $(document).ready(function() {
    $.ajax({
      type: "GET",
      url: "https://mytimeiswaa.github.io/data/bros.txt",
      dataType: "text",
      success: function(data) {parseBroData(data);}
    });
  });
  
  function parseBroData(data)
  {
    var values = data.split(",");
    var fullNames = [],
        names = [],
        characters = [];
        
    for (var i = 0; i < values.length; i++) {
      var value = values[i];
      fullNames.push(value.split("=")[0]);
      names.push(value.split("=")[0].split(" ")[0]);
      characters.push(value.split("=")[1]);
    }
    callback(fullNames, names, characters);
  }
}

function getScores(callback) {
  $(document).ready(function() {
    $.getJSON("https://mytimeiswaa.github.io/data/scores.json", function(data, stat) {
      alert("ASD");
      callback(data);
    });
  });
}