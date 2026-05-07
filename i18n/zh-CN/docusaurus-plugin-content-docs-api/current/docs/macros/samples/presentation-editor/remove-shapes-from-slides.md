---
hide_table_of_contents: true
---

# 从幻灯片中移除形状

移除演示文稿中幻灯片上的形状。

``` ts
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

使用方法: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes), [Delete](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/Delete), [GetPlaceholder](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetPlaceholder)

## 结果

![Remove shapes](/assets/images/plugins/remove-shapes.png#gh-light-mode-only)![Remove shapes](/assets/images/plugins/remove-shapes.dark.png#gh-dark-mode-only)
