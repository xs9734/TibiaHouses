$(document).foundation()
var dataContainer =  document.getElementById("house-info");
var occupiedFilter = document.getElementById("exampleCheckboxSwitch").checked;
function loadAb(){
  clearBox();
  abDendriel();
}
function loadAn(){
    clearBox();
    ankrahmun();
}
function loadCa(){
    clearBox();
    carlin();
}
function loadDa(){
    clearBox();
    darashia();
}
function loadEd(){
    clearBox();
    edron()
}
function loadFa(){
    clearBox();
    farmine();
}
function loadGr(){
    clearBox();
    grayBeach();
}
function loadIs(){
    clearBox();
    issavi();
}
function loadKa(){
    clearBox();
    kazordoon();
}
function loadLi(){
    clearBox();
    libertyBay();
}
function loadPo(){
    clearBox();
    portHope();
}
function loadRa(){
    clearBox();
    rathleton();
}
function loadSv(){
    clearBox();
    svargrond();
}
function loadTh(){
    clearBox();
    thais();
}
function loadVe(){
    clearBox();
    venore();
}
function loadYa(){
    clearBox();
    yalahar();
}
function abDendriel(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('AbDendriel homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function ankrahmun(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Ankrahmun.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('Ankrahmun homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function carlin(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Carlin.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('Carlin homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function darashia(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Darashia.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('Darashia homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function edron(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Edron.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('Edron homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function farmine(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Farmine.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('Farmine homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function grayBeach(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Gray%20Beach.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('Gray Beach homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function issavi(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Issavi.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('Issavi homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function kazordoon(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Kazordoon.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('Kazordoon homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function libertyBay(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Liberty%20Bay.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('Liberty Bay homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function portHope(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Port%20Hope.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('Carlin homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function rathleton(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Rathleton.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('Rathleton homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function svargrond(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Svargrond.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('Svargrond homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function thais(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Thais.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('Thais homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function venore(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Venore.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('Venore homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function yalahar(){  
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Yalahar.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('Yalahar homes Loaded Succesfully');
        var f = document.getElementById("exampleCheckboxSwitch").checked;
	      console.log("Status is currently" + f);
        console.log(data.houses.houses.length);
        allHomes = [];
        auctionedHomes = [];
        if (f == false){
		      var occupied = 0;
		      var empty = 0;
		      for (var i=0; i<data.houses.houses.length; i++){
	      	  console.log("Houses Checked:" + i);
			      console.log("Rented Homes Counter: " + occupied);
			      console.log("Auctioned Homes Counter: " + empty);
		        if(data.houses.houses[i].status !== "rented"){
		          auctionedHomes.push(data.houses.houses[i]);
		          console.log("array status:" + auctionedHomes[i]);
       	 	    var houseName = auctionedHomes[i].name;
          	  var houseRent = auctionedHomes[i].rent;
          	  var houseStatus = auctionedHomes[i].status;
          	  var badge = document.createElement('div');
              badge.className = 'badge large-12 cell';
              badge.innerHTML =
                '<h2 class="names">' + houseName + '</h2>' +
                '<h3 class="rents">' + houseRent + '</h3>' +
                '<p class="status">' + houseStatus + '</p>'
              ;
          	  dataContainer.appendChild(badge);
          	  console.log(`House ${i} - ${houseName} loaded succesfully`);
				      empty++;
		        }
		        else{
			     	  auctionedHomes.push(data.houses.houses[i]);
           	  console.log("House is Occupied");
			        occupied++;
		        }
          }
		      if (empty == 0){
            var badge = document.createElement('div');
            badge.className = 'badge small-12 medium-12 large-12 cell';
            badge.innerHTML =
            '<h2>' + "There are no available Homes" + '</h2>' +
            dataContainer.appendChild(badge);
		      }
		      else{
			      console.log("There are " + empty + " available");
		      }
        }
        else if (f == true) {
          for (var i=0; i < data.houses.houses.length; i++){
            console.log("Houses Loaded: " + i);
            allHomes.push(data.houses.houses[i]);
            var houseName = allHomes[i].name;
            var houseRent = allHomes[i].rent;
            var houseStatus = allHomes[i].status;
            var badge = document.createElement('div');
            badge.className = 'badge large-12 cell';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>'
            ;
            dataContainer.appendChild(badge);
            console.log(`House ${i} - ${houseName} loaded succesfully`);
            console.log("Checkmark Status is false. " + occupiedFilter);
          }
	      }
          
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function clearBox()
{
  dataContainer.innerHTML = "";
}
function addtextBox()
{
  console.log("text added");
}
