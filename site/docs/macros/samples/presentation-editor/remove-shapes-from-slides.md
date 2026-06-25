---
hide_table_of_contents: true
description: Remove all shapes from presentation slides.
tags: ["Docs", "Macros", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# Remove shapes from slides

Removes shapes from slides in a presentation.

```ts
(function () {
  let presentation = Api.GetPresentation();
  let slidesCount = presentation.GetSlidesCount();
  for (let i = 0; i < slidesCount; i++) {
    let slide = presentation.GetSlideByIndex(i);
    if (!slide) continue;
    let shapes = slide.GetAllShapes();
    for (let j = shapes.length - 1; j >= 0; j--) {
      let shape = shapes[j];
      let placeholder = shape.GetPlaceholder();
      // Skip placeholders
      if (placeholder === null) {
        shape.Delete();
      }
    }
  }
})();
```

Methods used: [GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [Delete](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/Delete.md), [GetPlaceholder](../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetPlaceholder.md)

## Result

<Video src="/assets/video/macros/presentation-editor/remove-shapes-from-slides" dark />
