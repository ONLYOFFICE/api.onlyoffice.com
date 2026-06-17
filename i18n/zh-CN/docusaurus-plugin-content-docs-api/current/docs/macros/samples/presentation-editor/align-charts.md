---
hide_table_of_contents: true
description: 对齐演示文稿幻灯片中的图表位置。
tags: ["Docs", "Macros", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# 对齐图表

将每张幻灯片上的图表和文本框进行垂直对齐。

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

使用方法： [GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllCharts](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllCharts.md), [GetAllShapes](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [SetPosition](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [GetHeight](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/GetHeight.md)

## 结果

<Video src="/assets/video/macros/presentation-editor/align-charts" dark />
