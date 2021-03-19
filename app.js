function hoverEvent(event){



  var selectElement = event.target.childNodes;

  for (var i = 0; i < selectElement.length; i++) {

    if(selectElement[i].className == "addBox"){
      selectElement[i].style.display = "block";
    }

  }

}
function hoverEventChild(event){

  var selectElement = event.target;
  var nextSibling = selectElement.nextSibling;
  while(nextSibling && nextSibling.nodeType != 1) {
      nextSibling = nextSibling.nextSibling;
      nextSibling.style.display = "block";
  }

}

function unHoverEvent(event){

  var select = document.querySelectorAll(".addBox");
  for (i = 0; i < select.length; i++) {
    select[i].style.display = "none";
  }


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

    var select = document.querySelectorAll(".addBox");
    for (i = 0; i < select.length; i++) {
      select[i].style.display = "none";
    }
}



function addRectangle(event){

    var CopyBlock = event.target.parentElement.parentNode.parentElement;
    var clonedElement = CopyBlock.cloneNode(true);
    var insertBlock = '<div class="Rectangle"> <div class="CommonRectangle"> <!-- <div class="insideRectangleOne"></div> <div class="insideRectangleTwo"></div> --> </div> <div class="insideRectangleThree" onmouseover="hoverEvent(event)" > <div class="buttonText" onmouseover="hoverEventChild(event)" > Add </div> <div class="addBox"> <div class="addBoxIn LongPress" onmouseup="PressUpEvent()" onclick="addBox(event)"> <div class="buttonText"> Box </div> </div> <div class="addBoxInTwo LongPress" onclick="addRectangle(event)"> <div class="buttonText"> Container </div> </div> </div> </div> </div>';

    var insideCommonRectangle = event.target.parentElement.parentNode.parentElement.parentNode.firstElementChild;
    insideCommonRectangle.innerHTML += insertBlock;

    var select = document.querySelectorAll(".addBox");
    for (i = 0; i < select.length; i++) {
      select[i].style.display = "none";
    }

}

// function addRectangle(event){
//
//     var CopyBlock = event.target.parentElement.parentNode.parentElement;
//     //console.log(CopyBlock.className);
//     var clonedElement = CopyBlock.cloneNode(true);
//     var insideCommonRectangle = event.target.parentElement.parentNode.parentElement.parentNode.firstElementChild;
//     insideCommonRectangle.appendChild(clonedElement);
// }

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
