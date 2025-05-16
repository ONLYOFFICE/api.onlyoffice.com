# Count number of shapes

Counts the total number of shapes in a presentation by iterating through all slides and displays the count on a newly created slide.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    let presentation = Api.GetPresentation();
    let totalSlides = presentation.GetSlidesCount();
    let shapeCount = 0;

    // Iterate through each slide and count shapes
    for (let slideIndex = 0; slideIndex < totalSlides; slideIndex++) {
        let currentSlide = presentation.GetSlideByIndex(slideIndex);
        let shapes = currentSlide.GetAllShapes();
        shapeCount = shapeCount + shapes.length;
    }
    /* 
    Just show it on console
    console.log(shapeCount);
    */

    // Create a slide and show it there
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

Methods used: [GetPresentation](../../../docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [CreateSlide](../../../docs/office-api/usage-api/presentation-api/Api/Methods/CreateSlide.md), [CreateShape](../../../docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [SetPosition](../../../docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [CreateParagraph](../../../docs/office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [AddText](../../../docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [GetDocContent](../../../docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [Push](../../../docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md), [AddObject](../../../docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [AddSlide](../../../docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md)

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