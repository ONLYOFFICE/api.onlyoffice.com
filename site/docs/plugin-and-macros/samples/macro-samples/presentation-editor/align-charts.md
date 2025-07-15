# Align charts

Aligns charts and text boxes on every slide.

```ts
(function () {
  let presentation = Api.GetPresentation();
  let slideCount = presentation.GetSlidesCount();
  let initialTop = 467200;
  let spacing = 50000;

  for (let i = 0; i < slideCount; i++) {
    let slide = presentation.GetSlideByIndex(i);

    let allElements = [...slide.GetAllCharts(), ...slide.GetAllShapes()];
    let currentTop = initialTop;

    allElements.forEach((element) => {
      element.SetPosition(608400, currentTop);
      currentTop = currentTop + element.GetHeight() + spacing;
    });
  }
})();
```

Methods used: Methods used: [GetPresentation](/site/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](/site/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](/site/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllCharts](/site/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllCharts.md), [GetAllShapes](/site/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [SetPosition](/site/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [GetHeight](/site/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/GetHeight.md)

## Result

![ChartAligner](/assets/images/plugins/chart-aligner.png#gh-light-mode-only)
![ChartAligner](/assets/images/plugins/chart-aligner.dark.png#gh-dark-mode-only)
