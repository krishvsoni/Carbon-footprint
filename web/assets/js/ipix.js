document.getElementById("carbon-form").addEventListener("submit", function(event){
    event.preventDefault();
    
    var region = document.getElementById("region").value;
    var instanceType = document.getElementById("instance-type").value;
    var usage = document.getElementById("usage").value;
    
    var xhr = new XMLHttpRequest();
    var url = "'https://api.climatiq.io/v1/footprint/cloud'";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        document.getElementById("carbon-result").innerHTML = "Carbon produced: " + response.carbon + " kgCO2e";
      } else {
        document.getElementById("carbon-result").innerHTML = "Error getting carbon footprint";
      }
    };
    var data = JSON.stringify({
      "region": region,
      "instanceType": instanceType,
      "usage": usage
    });
    xhr.send(data);
  });