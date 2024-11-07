{
    type Circle = {
        shape: "circle";
        radius: number;
    }

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle

    const calculateShapeArea = (shape: Shape) => {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius
        } else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }        
    }

    console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
    console.log(calculateShapeArea({ shape: "rectangle", height: 4, width: 6 }));
    

}