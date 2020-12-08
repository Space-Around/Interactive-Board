class Board {
    constructor() {
        this.config = {
            addNewBoard: {
                isThere: true,
                elemHTML: 0
            },
            background: {
                isThere: true,
                elemHTML: 0
            },
            move: {
                isThere: true,
                elemHTML: 0
            },
            pointer: {
                isThere: true,
                elemHTML: 0
            },
            brush: {
                isThere: true,
                elemHTML: 0
            },
            erase: {
                isThere: true,
                elemHTML: 0
            },
            text: {
                isThere: true,
                elemHTML: 0
            },
            figures: {
                isThere: true,
                elemHTML: 0
            },
            coordinates: {
                isThere: true,
                elemHTML: 0
            },
            color: {
                isThere: true,
                elemHTML: 0
            },
            width: {
                isThere: true,
                elemHTML: 0
            },
            addImg: {
                isThere: true,
                elemHTML: 0
            },
            undo: {
                isThere: true,
                elemHTML: 0
            },
            return: {
                isThere: true,
                elemHTML: 0
            },
            copy: {
                isThere: true,
                elemHTML: 0
            },
            past: {
                isThere: true,
                elemHTML: 0
            }
        }
        // this.figures = {
        //     rect: '<canvas id="c" width="400" height="300" style="border:1px solid #ccc"></canvas>',
        //     circle: '',
        //     triangle: '',
        //     line: '',
        //
        // }

        this.canvas = new fabric.Canvas('canvas-board');
    }

    setConfig(configParam) {
        this.config = configParam;
    }

    addFigure(figureNameParam) {
        switch(figureNameParam) {
            case "rect": {

                let rect = new fabric.Rect({
                    left: 100,
                    top: 50,
                    fill: '',
                    width: 50,
                    height: 50,
                    strokeWidth: 2,
                    stroke: "#000000",
                    // rx: 10,
                    // ry: 10,
                    angle: 0,
                    // scaleX: 3,
                    // scaleY: 3,
                    hasControls: true
                });

                this.canvas.add(rect);
                break;
            }
            case "circle": {
                let circle = new fabric.Circle({
                    radius: 65,
                    fill: '',
                    left: 0,
                    stroke: 'black',
                    strokeWidth: 2
                });

                this.canvas.add(circle);

                break;
            }
            case "triangle": {
                let triangle = new fabric.Triangle({
                    fill: '',
                    left: 0,
                    stroke: 'black',
                    strokeWidth: 2
                });

                this.canvas.add(triangle);
                break;
            }
            case "line": {
                let cursorPos = {
                    x: 0,
                    y: 0
                };


                let line = new fabric.Line({
                    fill: 'black',
                    x1: 10,
                    y1: 10,
                    x2: 40,
                    y2: 40,
                    left: 0,
                    stroke: 'black',
                    strokeWidth: 2
                });

                this.canvas.add(line);
                break;
            }
        }
    }

    deleteHandler(callback) {
        let instance = this;

        document.onkeydown = function() {
            var key = event.keyCode || event.charCode;

            if( key == 8 || key == 46 ) {

                let targets = instance.canvas.getActiveObjects();

                for (let i = 0; i < targets.length; i++) {
                    instance.canvas.remove(targets[i]);
                    instance.canvas.requestRenderAll();
                }
            }
        };
    }
}
