# Align charts

Align charts and text boxes on every slide.

```ts
(function () {
  try {
    const presentation = Api.GetPresentation();
    const slideCount = presentation.GetSlidesCount();
    const initialTop = 467200;
    const spacing = 50000;

    for (let i = 0; i < slideCount; i++) {
      const slide = presentation.GetSlideByIndex(i);

      const allElements = [...slide.GetAllCharts(), ...slide.GetAllShapes()];
      let currentTop = initialTop;

      allElements.forEach((element) => {
        element.SetPosition(608400, currentTop);
        currentTop = currentTop + element.GetHeight() + spacing;
      });
    }
  } catch (error) {
    console.error("An error occurred: " + error.message);
  }
})();
```

Methods used: Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllCharts](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllCharts.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [SetPosition](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [GetHeight](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/GetHeight.md)

## Result

![ChartAligner](/assets/images/plugins/chart-aligner.png#gh-light-mode-only)
![ChartAligner](/assets/images/plugins/chart-aligner.dark.png#gh-dark-mode-only)
