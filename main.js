var dataContainer =  document.getElementById("house-info");











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
  console.log("ank sucks");
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
function rathletion(){
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
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
function yalahar(){
}


function clearBox()
{
    dataContainer.innerHTML = "";
}
function addtextBox()
{
    dataContainer.innerHTML = "hello world!";
}
