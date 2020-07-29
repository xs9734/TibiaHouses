var dataContainer =  document.getElementById("house-info");

//jump to venore for functional call









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
function loadKr(){
    clearBox();
}
function loadLi(){
    clearBox();
    krailos();
}
function loadPo(){
    clearBox();
    portHope();
}
function loadRa(){
    clearBox();
    rathleton();
}
function loadRo(){
    clearBox();
    roshamuul();
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
  console.log("Ab sucks");
  dataContainer.innerHTML = "Ab sucks";
}
function ankrahmun(){
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Ankrahmun.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log('Ankrahmun homes Loaded Succesfully');
        
        console.log(data.houses.houses.length);
        allHomes = [];
          for (var i=0; i < data.houses.houses.length; i++){
          console.log("Houses Loaded: " + i);
          allHomes.push(data.houses.houses[i]);
          var houseName = allHomes[i].name;
          var houseRent = allHomes[i].rent;
          var houseStatus = allHomes[i].status;
          var badge = document.createElement('div');
            badge.className = 'badge';
            badge.innerHTML =
              '<h2 class="names">' + houseName + '</h2>' +
              '<h3 class="rents">' + houseRent + '</h3>' +
              '<p class="status">' + houseStatus + '</p>' ;
            dataContainer.appendChild(badge);
          console.log(`House ${i} - ${houseName} loaded succesfully`);
        }
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}
function carlin(){
}
function darashia(){
}
function edron(){
}
function farmine(){
}
function grayBeach(){
}
function issavi(){
}
function kazordoon(){
}
function krailos(){
}
function libertyBay(){
}
function portHope(){
}
function rathleton(){
}
function roshamuul(){
  
}
function svargrond(){
}
function thais(){
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Thais.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log('Thais homes Loaded Succesfully');
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
function venore(){
  fetch('https://api.tibiadata.com/v2/houses/Nefera/Venore.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log('Venore homes Loaded Succesfully');
        
        console.log(data.houses.houses.length);
        allHomes = [];
          for (var i=0; i < data.houses.houses.length; i++){
          console.log("Houses Loaded: " + i);
          allHomes.push(data.houses.houses[i]);
          var houseName = allHomes[i].name;
          var houseRent = allHomes[i].rent;
          var houseStatus = allHomes[i].status;
          var badge = document.createElement('div');
            badge.className = 'badge';
            badge.innerHTML =
              '<h2>' + houseName + '</h2>' +
              '<h3>' + houseRent + '</h3>' +
              '<p>' + houseStatus + '</p>' ;
            dataContainer.appendChild(badge);
          console.log(`House ${i} - ${houseName} loaded succesfully`);
        }
      });
    }
  )
  .catch(function(err) { console.log('Fetch Error :-S', err);});
}


function yalahar(){
}


function clearBox()
{
    dataContainer.innerHTML = "";
}
function addtextBox()
{

}
