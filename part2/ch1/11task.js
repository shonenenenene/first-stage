// 1

let coo = elem.getBoundingClientRect()

let upLeftOut = [
    coo.left, coo.top]

let bottomRightOut = [
    coo.right, coo.bottom]

let upLeftInside = [
    coo.left + field.clientLeft, coo.top + field.clientTop]

let bottomRightInside = [
    coords.left + elem.clientLeft + elem.clientWidth,
    coords.top + elem.clientTop + elem.clientHeight]


// 2

function positionAt(anchor, position, elem) {

    let anchorCoords = anchor.getBoundingClientRect();

    switch (position) {
      case "top":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
        break;

      case "right":
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "bottom":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
        break;
    }

}


  



