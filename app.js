'use strict';

const eventBoxElement = document.querySelectorAll(".eventBoxElement");
const eventInfoElement = document.querySelector(".eventInfoElement")

let counter = [];
    counter.length = 10;
    counter.fill(0);

/*
       Mouse Events
       ============
      Event	  Occurs When
----------------------------------------------------------------
      click   The user clicks on an element
contextmenu   The user right-clicks on an element
   dblclick   The user double-clicks on an element
  mousedown   A mouse button is pressed over an element
 mouseenter   The pointer is moved onto an element
 mouseleave   The pointer is moved out of an element
  mousemove   The pointer is moving over an element
   mouseout   The mouse pointer moves out of an element
  mouseover   The mouse pointer is moved over an element
    mouseup   The mouse button is released over an element
*/

const mouseEvents = [
    "click", 
    "contextmenu", 
    "dblclick", 
    "mousedown", 
    "mouseenter", 
    "mouseleave", 
    "mousemove", 
    "mouseout", 
    "mouseover", 
    "mouseup"
];

const createSpanEventInfoElement = (index, Event) => {
    const spanElement = document.createElement("span");
    spanElement.classList.add("eventInfoElement__eventInfo-span");
                               
    const spanTextContent = `Mouse Event type: ${Event.type} -> triggered ${++counter[index]}x`;
    spanElement.textContent = spanTextContent;

    return spanElement;
};

const createEventInfoElement = (index, Event) => {
    const eventInfoElement = document.createDocumentFragment();
    const divElement = document.createElement("div");
    const spanElement = createSpanEventInfoElement(index, Event);

    divElement.append(spanElement);             
    eventInfoElement.append(divElement);        
    
    return eventInfoElement;                    
};

eventBoxElement.forEach((element, index) => {
    element.dataset.eventname = mouseEvents[index];

    element.addEventListener((mouseEvents[index]).toString(), (Event) => {
        Event.preventDefault();

        eventInfoElement.innerHTML = "";
        eventInfoElement.append(
            createEventInfoElement(index, Event)
        );
    });
});


