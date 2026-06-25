---
hide_table_of_contents: true
description: Apply a font style to all text on slides.
tags: ["Docs", "Macros", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# Apply font style

Applies a consistent font style across all the slides.

```ts
(function () {
    let presentation = Api.GetPresentation();
    let slidesCount = presentation.GetSlidesCount();

    // Declare the desired unique font family
    let fontName = "Georgia";

    // Iterate through each slide
    for (let i = 0; i < slidesCount; i++) {
        let slide = presentation.GetSlideByIndex(i);
        let shapes = slide.GetAllShapes();

        // Iterate through each shape on the slide
        shapes.forEach(shape => {
            let content = shape.GetDocContent();
            let paragraphs = content.GetAllParagraphs();

            // Set font family for each paragraph from the content of the shape
            paragraphs.forEach(paragraph => { paragraph.SetFontFamily(fontName); });
        });
    }
})();
```

Methods used: [GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetAllParagraphs](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetAllParagraphs.md), [SetFontFamily](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/SetFontFamily.md)

## Reference Microsoft VBA macro code

```vb
Sub ApplyConsistentFontStyle()
    Dim slide As Slide
    Dim shape As Shape
    Dim ppt As Presentation
    
    ' Set the active presentation
    Set ppt = ActivePresentation
    
    ' Loop through all slides
    For Each slide In ppt.Slides
        ' Loop through all shapes in the slide
        For Each shape In slide.Shapes
            ' Check if shape has text
            If shape.HasTextFrame Then
                If shape.TextFrame.HasText Then
                    ' Apply font style
                    With shape.TextFrame.TextRange.Font
                        .Name = "Arial" ' Modify as needed
                        .Size = 14 ' Modify as needed
                        .Bold = msoTrue ' Modify as needed
                    End With
                End If
            End If
        Next shape
    Next slide
    
    ' Notify user
    MsgBox "Font style applied to all slides successfully!", vbInformation
End Sub
```

## Result

<Video src="/assets/video/macros/presentation-editor/apply-font-style" dark />
