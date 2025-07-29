# 统计形状数量

通过遍历所有幻灯片，统计演示文稿中的形状总数，并在一张新建幻灯片上显示该数量。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    let presentation = Api.GetPresentation();
    let totalSlides = presentation.GetSlidesCount();
    let shapeCount = 0;

    // 遍历每一张幻灯片并统计形状数量
    for (let slideIndex = 0; slideIndex < totalSlides; slideIndex++) {
        let currentSlide = presentation.GetSlideByIndex(slideIndex);
        let shapes = currentSlide.GetAllShapes();
        shapeCount = shapeCount + shapes.length;
    }
    /* 
    Just show it on console
    console.log(shapeCount);
    */

    // 创建一张新幻灯片，并在其中显示统计结果
    let newSlide = Api.CreateSlide();
    let rectangleShape = Api.CreateShape("rect", 100 * 36000, 50 * 36000);
    rectangleShape.SetPosition(608400, 1267200);

    let paragraph = Api.CreateParagraph();
    paragraph.AddText("Number of shapes: " + shapeCount.toString());
    paragraph.SetColor(0, 0, 0);

    let content = rectangleShape.GetDocContent();
    content.Push(paragraph);
    newSlide.AddObject(rectangleShape);
    presentation.AddSlide(newSlide);
})();
```

使用方法: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [CreateSlide](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateSlide.md), [CreateShape](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [SetPosition](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [CreateParagraph](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [AddText](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [Push](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md), [AddObject](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [AddSlide](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md)

## 参考 Microsoft VBA 宏代码

<!-- code generated with AI -->

```vb
Sub CountShapesInPresentation()
    Dim slide As slide
    Dim shape As shape
    Dim count As Integer
    count = 0

    ' 遍历每张幻灯片并统计所有形状数量
    For Each slide In ActivePresentation.Slides
        count = count + slide.Shapes.Count
    Next slide

    ' 添加新幻灯片并显示统计结果
    Dim newSlide As slide
    Set newSlide = ActivePresentation.Slides.Add(ActivePresentation.Slides.Count + 1, ppLayoutText)

    Dim textBox As shape
    Set textBox = newSlide.Shapes.AddTextbox(msoTextOrientationHorizontal, 100, 100, 400, 50)
    textBox.TextFrame.TextRange.Text = "Number of shapes: " & count
End Sub
```

## 结果

![CountNumberOfShapes](/assets/images/plugins/count-number-of-shapes.png#gh-light-mode-only)![CountNumberOfShapes](/assets/images/plugins/count-number-of-shapes.dark.png#gh-dark-mode-only)