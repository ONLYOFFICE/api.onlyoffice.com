---
hide_table_of_contents: true
description: Align chart positions across presentation slides.
tags: ["Docs", "Macros", "Presentations"]
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

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllCharts](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllCharts.md), [GetAllShapes](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [SetPosition](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [GetHeight](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/GetHeight.md)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/presentation-editor/align-charts.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/presentation-editor/align-charts.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
