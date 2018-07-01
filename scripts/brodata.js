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
    callback(data);
  }
}