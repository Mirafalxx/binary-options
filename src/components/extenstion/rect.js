const rect = {
  name: "rect",
  totalStep: 3,
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  createPointFigures: (p) => {
    if (p.coordinates.length > 1) {
      return [
        {
          type: "polygon",
          attrs: {
            coordinates: [
              p.coordinates[0],
              { x: p.coordinates[1].x, y: p.coordinates[0].y },
              p.coordinates[1],
              { x: p.coordinates[0].x, y: p.coordinates[1].y },
            ],
          },
          styles: { style: "stroke_fill" },
        },
      ];
    }
    return [];
  },
};

export default rect;
