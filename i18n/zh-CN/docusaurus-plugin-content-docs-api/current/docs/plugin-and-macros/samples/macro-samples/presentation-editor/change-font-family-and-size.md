# 更改字体和字号

更改演示文稿中所有幻灯片的字体和/或字号。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
  let presentation = Api.GetPresentation();
  for (
    let slideIndex = 0;
    slideIndex < presentation.GetSlidesCount();
    slideIndex++
  ) {
    let slide = presentation.GetSlideByIndex(slideIndex);
    let shapes = slide.GetAllShapes();

    for (let shapeIndex = 0; shapeIndex < shapes.length; shapeIndex++) {
      let content = shapes[shapeIndex].GetDocContent();
      // 在继续操作前检查内容是否有效
      if (content) {
        let count = content.GetElementsCount();
        for (let elementIndex = 0; elementIndex < count; elementIndex++) {
          let element = content.GetElement(elementIndex);
          // 检查元素在使用前是否有效
          if (element) {
            element.SetFontSize(10);
            element.SetFontFamily("Comic Sans");
          }
        }
      }
    }
  }
})();
```

使用方法: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetElementsCount](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElementsCount.md), [GetElement](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md), SetFontSize, SetFontFamily

## 参考 Microsoft VBA 宏代码

<!-- code generated with AI -->

```vb
Sub ChangeFontOnAllSlides()
    Dim slide As slide
    Dim shape As shape

    ' 遍历演示文稿中的每一张幻灯片
    For Each slide In ActivePresentation.Slides
        ' 遍历幻灯片上的每一个形状
        For Each shape In slide.Shapes
            ' 检查该形状是否包含文本
            If shape.HasTextFrame Then
                If shape.TextFrame.HasText Then
                    With shape.TextFrame.TextRange
                        .Font.Name = "Arial"
                        .Font.Size = 20
                    End With
                End If
            End If
        Next shape
    Next slide

    MsgBox "Font updated on all slides!", vbInformation
End Sub
```

## 结果

<!-- imgpath -->

![Change font family and size](/assets/images/plugins/change-font-family-and-size.png#gh-light-mode-only)![Change font family and size](/assets/images/plugins/change-font-family-and-size.dark.png#gh-dark-mode-only)
