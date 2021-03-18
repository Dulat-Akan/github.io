function hoverEvent(){
  document.querySelector(".addBox").style.display = "block";
}

function unHoverEvent(){
  document.querySelector(".addBox").style.display = "none";
}

function addBox(event){
    var element = event.target.parentElement.parentNode.parentElement.parentNode;

    for (var i = 0; i < element.childNodes.length; i++) {
        if (element.childNodes[i].className == "CommonRectangle") {
          var findElement = element.childNodes[i];
          var newElem = '<div class="insideRectangleOne"></div>';
          findElement.innerHTML += newElem;
        }
    }
}

function addContainer(event){
  var element = event.target.parentElement.parentNode.parentElement.parentNode;

  for (var i = 0; i < element.childNodes.length; i++) {
      if (element.childNodes[i].className == "CommonRectangle") {
        var findElement = element.childNodes[i];
        var newElem = '<div class="insideRectangleTwo"></div>';
        findElement.innerHTML += newElem;
      }
  }
}

function addRectangle(){
    var El = document.querySelector(".insertNewBlock");
    while(El.firstChild){
        El.removeChild(El.firstChild);
    }
    var CopyBlock = document.querySelector(".Rectangle");
    var clonedElement = CopyBlock.cloneNode(true);
    clonedElement.style.width = "92%";
    clonedElement.style.height = "92%";
    clonedElement.style.marginTop = "0px";
    clonedElement.style.marginLeft = "0px";
    document.querySelector(".insertNewBlock").appendChild(clonedElement);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setColor(element){

  var selectedElement = element;
  var colorArray = ["#f8e8d1","#dbe6d6","#ebd0cd"];
  selectedElement.style.backgroundColor = colorArray[getRandomInt(3)];

}
//long press event

function PressUpEvent(){
// Create variable for setTimeout
      var delay;

      // Set number of milliseconds for longpress
      var longpress = 1300;

      var listItems = document.getElementsByClassName('LongPress');
      var listItem;

      for (var i = 0, j = listItems.length; i < j; i++) {
        listItem = listItems[i];

        listItem.addEventListener('mousedown', function (e) {
          var _this = this;
          delay = setTimeout(check, longpress);

          function check() {
              _this.classList.add('is-selected');

                setColor(_this);
              console.log("selected");
          }

        }, true);

        listItem.addEventListener('mouseup', function (e) {
          // On mouse up, we know it is no longer a longpress
          clearTimeout(delay);
        });

        listItem.addEventListener('mouseout', function (e) {
          clearTimeout(delay);
        });

      }

}

PressUpEvent();
//long press event
