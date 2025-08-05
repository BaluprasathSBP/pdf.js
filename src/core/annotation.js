class RectangleAnnotation extends MarkupAnnotation {
    constructor(parameters) {
        super(parameters);
        this.data.annotationType = AnnotationType.SQUARE;
        this.data.hasOwnCanvas = this.data.noRotate;
        this.data.noHTML = false;
    }

    getBorderWidth() {
        return this.borderStyle.width;
    }

    static createNew(rect, color) {
        return {
            type: 'Square',
            rect: rect,
            color: color,
            borderStyle: {
                width: 1
            },
            flags: 4
        };
    }
}