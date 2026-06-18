---
hide_table_of_contents: true
description: 删除演示文稿幻灯片中的所有形状。
tags: ["Docs", "Macros", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# 从幻灯片中移除形状

移除演示文稿中幻灯片上的形状。

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
      // 跳过占位符
      if (placeholder === null) {
        shape.Delete();
      }
    }
  }
})();
```

使用方法： [GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [Delete](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/Delete.md), [GetPlaceholder](../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetPlaceholder.md)

## 结果

<Video src="/assets/video/macros/presentation-editor/remove-shapes-from-slides" dark />
