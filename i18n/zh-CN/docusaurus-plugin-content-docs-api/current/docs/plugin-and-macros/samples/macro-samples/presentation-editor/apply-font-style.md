# 应用字体样式

在所有幻灯片中统一应用同一字体样式。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    let presentation = Api.GetPresentation();
    let slidesCount = presentation.GetSlidesCount();

    // 指定所需的字体名称
    let fontName = "Georgia";

    // 遍历每一张幻灯片
    for (let i = 0; i < slidesCount; i++) {
        let slide = presentation.GetSlideByIndex(i);
        let shapes = slide.GetAllShapes();

        // 遍历幻灯片中的每个形状
        shapes.forEach(shape => {
            let content = shape.GetDocContent();
            let paragraphs = content.GetAllParagraphs();

            // 为每个段落设置字体
            paragraphs.forEach(paragraph => { paragraph.SetFontFamily(fontName); });
        });
    }
})();
```

使用方法: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [SetFontFamily](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetFontFamily.md)  

## 参考 Microsoft VBA 宏代码

<!-- code generated with AI -->

```vb
Sub ApplyConsistentFontStyle()
    Dim slide As Slide
    Dim shape As Shape
    Dim ppt As Presentation
    
    ' 设置当前幻灯片
    Set ppt = ActivePresentation
    
    ' 遍历所有幻灯片
    For Each slide In ppt.Slides
        ' 遍历幻灯片中的所有形状
        For Each shape In slide.Shapes
            ' 检查形状是否包含文本框
            If shape.HasTextFrame Then
                If shape.TextFrame.HasText Then
                    ' 应用字体样式
                    With shape.TextFrame.TextRange.Font
                        .Name = "Arial" ' 根据需要修改字体名称
                        .Size = 14     ' 根据需要修改字体大小
                        .Bold = msoTrue ' 根据需要设置加粗
                    End With
                End If
            End If
        Next shape
    Next slide
    
    ' 提示用户完成
    MsgBox "字体样式已成功应用到所有幻灯片！", vbInformation
End Sub
```

## 结果

<!-- imgpath -->

![Apply font style](/assets/images/plugins/apply-font-style.png#gh-light-mode-only)![Apply font style](/assets/images/plugins/apply-font-style.dark.png#gh-dark-mode-only)

