# 从幻灯片中移除形状

移除演示文稿中幻灯片上的形状。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
  let presentation = Api.GetPresentation();
  for (let i = 0; i < 10; i++) {
    let slide = presentation.GetSlideByIndex(i);
    let shapes  = slide.GetAllShapes();
    shapes[0].Delete();
  }
})();
```

使用方法: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md)

## 结果

![Remove shapes](/assets/images/plugins/remove-shapes.png#gh-light-mode-only)![Remove shapes](/assets/images/plugins/remove-shapes.dark.png#gh-dark-mode-only)
