---
hide_table_of_contents: true
description: Change font family and size across all slides.
tags: ["Docs", "Macros", "Presentations"]
---

# Change font family and size

Changes the font family and/or size on all the slides in your presentation.

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

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetElementsCount](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElementsCount.md), [GetElement](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md), [SetFontSize](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFontSize.md), [SetFontFamily](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFontFamily.md)

## Reference Microsoft VBA macro code

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

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/presentation-editor/change-font-family-and-size.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/presentation-editor/change-font-family-and-size.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
