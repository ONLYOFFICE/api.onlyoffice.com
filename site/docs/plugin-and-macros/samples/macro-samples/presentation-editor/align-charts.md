---
hide_table_of_contents: true
---

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

Methods used: Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllCharts](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllCharts.md), [GetAllShapes](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [SetPosition](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [GetHeight](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/GetHeight.md)

## Result

![ChartAligner](/assets/images/plugins/chart-aligner.png#gh-light-mode-only)
![ChartAligner](/assets/images/plugins/chart-aligner.dark.png#gh-dark-mode-only)
