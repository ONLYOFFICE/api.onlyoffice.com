# Change font family and size

Changes the font family and/or size on all the slides in your presentation.

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
      // Check if content is valid before proceeding
      if (content) {
        let count = content.GetElementsCount();
        for (let elementIndex = 0; elementIndex < count; elementIndex++) {
          let element = content.GetElement(elementIndex);
          // Check if element is valid before using it
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

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetElementsCount](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElementsCount.md), [GetElement](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md), SetFontSize, SetFontFamily

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

```vb
Sub ChangeFontOnAllSlides()
    Dim slide As slide
    Dim shape As shape

    ' Loop through each slide in the presentation
    For Each slide In ActivePresentation.Slides
        ' Loop through each shape on the slide
        For Each shape In slide.Shapes
            ' Check if the shape has text
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

## Result

<!-- imgpath -->

![Change font family and size](/assets/images/plugins/change-font-family-and-size.png#gh-light-mode-only)![Change font family and size](/assets/images/plugins/change-font-family-and-size.dark.png#gh-dark-mode-only)
