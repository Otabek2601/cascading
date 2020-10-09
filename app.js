let allCards = document.querySelectorAll('.g-card');
allCards.forEach(function(card) {
    card.addEventListener('dragstart', handleCardDragStart, false);
    card.addEventListener('dragend', handleCardDragEnd, false);
});

// let allPads = document.querySelectorAll('.g-card.pad');
// allPads.forEach(function(pad) {
//     pad.addEventListener('dragend', handleCardPads, false)
// });

// function handleCardPads(a) {
//     a.dataTransfer.setData("padId", a.target.id)
//     a.target.setAttribute('style', 'border: red');
// }

function allowDrop(e){
    e.preventDefault();

}

function drop(event) {
    e.target.preventDefault();  
    var drop_target = e.target;
    var drag_target_id = e.dataTransfer.getData('target_id');
    var drag_target = $('#'+drag_target_id)[0];
    var tmp = document.createElement('span');
    tmp.className='hide';
    drop_target.before(tmp);
    drag_target.before(drop_target);
    tmp.replaceWith(drag_target);
  }

function handleCardDragStart(e) {
    e.dataTransfer.setData("cardId", e.target.id);
    e.target.parentElement.style.border = "dashed #cccccc";
}

function handleCardDragEnd(e) {
    e.dataTransfer.setData("cardId", e.target.id);
  //  p.getElementById("pads").setAttribute("pads", "");
    
}
function allowDrop(e) {
    'use strict';
    if (e.target.id === 'dz') {
        e.preventDefault();
    }
}

let board_rows = document.querySelectorAll('.g-board__cell');

board_rows.forEach(function(item) {
    item.addEventListener('dragover', itemOnDragOver);
    item.addEventListener('drop', itemOnDrop);
});

function itemOnDragOver(e) {
    e.preventDefault();
}

function itemOnDrop(e) {
    e.preventDefault();
    //e.target.setAttribute('atrName', 'value');

    var draggedCardId = e.dataTransfer.getData("cardId");
    var draggedCard = document.getElementById(draggedCardId);

    e.target.appendChild(draggedCard);
}