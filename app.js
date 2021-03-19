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
          var newElem = document.createElement("div")
          newElem.className = "insideRectangleOne";
          setColor(newElem);
          findElement.appendChild(newElem);
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
    var insertBlock = '<div class="Rectangle"> <div class="CommonRectangle"> </div> <div class="insideRectangleThree" onmouseover="hoverEvent(event)" > <div class="buttonText" onmouseover="hoverEventChild(event)" > Add </div> <div class="addBox"> <div class="addBoxIn LongPress" onmouseup="PressUpEvent()" onclick="addBox(event)"> <div class="buttonText"> Box </div> </div> <div class="addBoxInTwo LongPress" onclick="addRectangle(event)"> <div class="buttonText"> Container </div> </div> </div> </div> </div>';

    var insideCommonRectangle = event.target.parentElement.parentNode.parentElement.parentNode.firstElementChild;
    insideCommonRectangle.innerHTML += insertBlock;

    var select = document.querySelectorAll(".addBox");
    for (i = 0; i < select.length; i++) {
      select[i].style.display = "none";
    }

}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setColor(element){

  var selectedElement = element;
  var colorArray = ["#f8e8d1","#dbe6d6","#ebd0cd"];
  selectedElement.style.backgroundColor = colorArray[getRandomInt(3)];

}
