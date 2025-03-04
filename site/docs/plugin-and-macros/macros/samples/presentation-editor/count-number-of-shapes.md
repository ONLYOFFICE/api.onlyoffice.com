# Count number of shapes

Counts the total number of shapes in a presentation by iterating through all slides and displays the count on a newly created slide.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    const presentation = Api.GetPresentation();
    const slidesCount = presentation.GetSlidesCount();
    var count = 0;

    // Iterate through each slide and count shapes
    for (let i = 0; i < slidesCount; i++) {
        const slide = presentation.GetSlideByIndex(i);
        const shapes = slide.GetAllShapes();
        count = count + shapes.length;
    }
    /* 
    Just show it on console
    console.log(count);
    */

    //Create a slide and show it there
    var slide = Api.CreateSlide();
    var shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000);
    shape.SetPosition(608_400, 1_267_200);

    const paragraph = Api.CreateParagraph();
    paragraph.AddText("Number of shapes: " + count.toString());
    paragraph.SetColor(0, 0, 0);

    var content = shape.GetDocContent();
    content.Push(paragraph);
    slide.AddObject(shape);
    presentation.AddSlide(slide);
})();
```

Methods used: GetPresentation, GetSlidesCount, GetSlideByIndex, GetAllShapes, CreateSlide, CreateShape, SetPosition, CreateParagraph, AddText, SetColor, GetDocContent, Push, AddObject, AddSlide

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

```vb
Sub CountShapesInPresentation()
    Dim slide As slide
    Dim shape As shape
    Dim count As Integer
    count = 0

    ' Loop through each slide and count shapes
    For Each slide In ActivePresentation.Slides
        count = count + slide.Shapes.Count
    Next slide

    ' Add a new slide and display the count
    Dim newSlide As slide
    Set newSlide = ActivePresentation.Slides.Add(ActivePresentation.Slides.Count + 1, ppLayoutText)

    Dim textBox As shape
    Set textBox = newSlide.Shapes.AddTextbox(msoTextOrientationHorizontal, 100, 100, 400, 50)
    textBox.TextFrame.TextRange.Text = "Number of shapes: " & count
End Sub
```

## Result

![CountNumberOfShapes](/assets/images/plugins/count-number-of-shapes.png#gh-light-mode-only)![CountNumberOfShapes](/assets/images/plugins/count-number-of-shapes.dark.png#gh-dark-mode-only)