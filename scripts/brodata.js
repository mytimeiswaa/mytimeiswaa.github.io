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
    $.ajax({
      cache: false,
      dataType: "json",
      url: "https://mytimeiswaa.github.io/data/scores.json",
      success: function(data) {
        callback(data);
      }
    });
  });
}

var numberClasses = "mp-number-empty mp-number-0 mp-number-1 mp-number-2 mp-number-3 mp-number-4 mp-number-5 mp-number-6 mp-number-7 mp-number-8 mp-number-9";

function setScore(scorecard, score) {
  if ("stars" in score) {
    var stars = score.stars;
    var starCounters = scorecard.find(".star").removeClass(numberClasses);
    var index = 0;
    if (stars < 100) starCounters.eq(2).addClass("mp-number-empty");
    if (stars < 10)  starCounters.eq(1).addClass("mp-number-empty");
    var stringNumber = String(stars);
    while (index < stringNumber.length) {
      starCounters.eq(index).addClass("mp-number-"+stringNumber.charAt(index));
      index++;
    }
  }
  
  if ("coins" in score) {
    var coins = score.coins;
    var coinCounters = scorecard.find(".coin").removeClass(numberClasses);
    var index = 0;
    if (coins < 100) coinCounters.eq(2).addClass("mp-number-empty");
    if (coins < 10)  coinCounters.eq(1).addClass("mp-number-empty");
    var stringNumber = String(coins);
    while (index < stringNumber.length) {
      coinCounters.eq(index).addClass("mp-number-"+stringNumber.charAt(index));
      index++;
    }
  }
}

function escapeName(characterName) {
  return characterName.replace(" ", "-");
}