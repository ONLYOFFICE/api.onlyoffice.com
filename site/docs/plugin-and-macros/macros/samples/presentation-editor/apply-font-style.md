---
sidebar_position: 
---

## Description

Applies a consistent font style across all the slides.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    const presentation = Api.GetPresentation();
    const slidesCount = presentation.GetSlidesCount();

    //Declare the desired unique font family
    const fontName = "Georgia";

    //Iterate through each slide
    for (let i = 0; i < slidesCount; i++) {
        const slide = presentation.GetSlideByIndex(i);
        const shapes = slide.GetAllShapes();

        //Iterate through each shape on the slide
        shapes.forEach(shape => {
            var docContent = shape.GetDocContent();
            var paragraphs = docContent.GetAllParagraphs();

            //Set font family for each paragraph from content of the shape
            paragraphs.forEach(p => { p.SetFontFamily(fontName); });
        });
    }
})();
```

Methods used: GetPresentation, GetSlidesCount, GetSlideByIndex, GetAllShapes, GetDocContent, GetAllParagraphs, SetFontFamily

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

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

<!-- imgpath -->

![](/assets/images/plugins/apply-font-style.png)
