const circle = {
  // name
  name: "sampleCircle",

  // Three steps are required to complete the drawing of a circle
  totalStep: 3,

  // Create the graphic information corresponding to the point
  createPointFigures: ({ coordinates }) => {
    if (coordinates.length === 2) {
      const xDis = Math.abs(coordinates[0].x - coordinates[1].x);
      const yDis = Math.abs(coordinates[0].y - coordinates[1].y);
      // Determine the coordinates of the circle generated by the corresponding point
      const radius = Math.sqrt(xDis * xDis + yDis * yDis);
      // The chart has built-in basic graphics 'circle', which can be used directly
      return {
        key: "sampleCircle",
        type: "circle",
        attrs: {
          ...coordinates[0],
          r: radius,
        },
        styles: {
          // Select the border and fill it, other selections use the default style
          style: "stroke_fill",
        },
      };
    }
    return [];
  },
};

export default circle;
