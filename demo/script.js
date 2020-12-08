let intBoard = new Board();

let screen = {
    width: document.body.offsetWidth,
    height: document.body.offsetHeight,
}

intBoard.canvas.setWidth(screen.width);
intBoard.canvas.setHeight(screen.height);

document.querySelector('.add-rect-btn').onclick = () => {
    intBoard.addFigure('rect');
}

document.querySelector('.add-circle-btn').onclick = () => {
    intBoard.addFigure('circle');
}

document.querySelector('.add-triangle-btn').onclick = () => {
    intBoard.addFigure('triangle');
}

document.querySelector('.add-line-btn').onclick = () => {
    intBoard.addFigure('line');
}

intBoard.deleteHandler();
