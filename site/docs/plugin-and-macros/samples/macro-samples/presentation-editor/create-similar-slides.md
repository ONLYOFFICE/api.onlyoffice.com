# Create similar slides

This macro creates new slides based on the listed items in the current slide.

```ts
(function () {
    let presentation = Api.GetPresentation();
    let activeSlideIndex = presentation.GetCurSlideIndex();
    let slide = presentation.GetSlideByIndex(activeSlideIndex);
    let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));

    if (!slide) {
        console.error("No slide is currently selected");
        return;
    }

    function processShapes(shapes, startIndex = 0, numberedItems = []) {
        if (startIndex >= shapes.length) {
            return numberedItems;
        }

        let shape = shapes[startIndex];

        if (shape.GetContent && shape.GetClassType() === "shape") {
            function processParagraphs(content, paraIndex = 0) {
                if (paraIndex >= content.GetElementsCount()) {
                    return;
                }

                let paragraph = content.GetElement(paraIndex);
                let text = paragraph.GetText();

                if (paragraph.GetParaPr().GetIndLeft() > 0) {
                    numberedItems.push(text.trim());
                }

                processParagraphs(content, paraIndex + 1);
            }

            let content = shape.GetContent();
            processParagraphs(content);
        }
        return processShapes(shapes, startIndex + 1, numberedItems);
    }
    function createSlides(items, index = 0) {
        if (index >= items.length) {
            console.log(`Successfully created ${items.length} new slides`);
            return;
        }

        let newSlide = Api.CreateSlide();
        presentation.AddSlide(newSlide);

        let slideWidth = presentation.GetWidth();
        let slideHeight = presentation.GetHeight();

        let shapeWidth = slideWidth * 0.7; // Ajdust this value to your liking
        let shapeHeight = slideHeight * 0.25; // Adjust this value to your liking

        let posX = (slideWidth - shapeWidth) / 2; // Centered, adjust this value to your liking
        let posY = slideHeight * 0.1; // On top, Adjust this value to your liking

        let subtitleShape = Api.CreateShape("rect", shapeWidth, shapeHeight);

        subtitleShape.SetPosition(posX, posY);

        let placeholder = Api.CreatePlaceholder("subtitle");
        subtitleShape.SetPlaceholder(placeholder);

        let content = subtitleShape.GetContent();
        if (content) {
            content.RemoveAllElements();

            let newParagraph = Api.CreateParagraph();
            let newRun = Api.CreateRun();
            let newTextPr = newRun.GetTextPr();
            newTextPr.SetFontSize(50);
            newTextPr.SetFill(fill);
            newRun.AddText(items[index]);
            newParagraph.AddElement(newRun);
            content.Push(newParagraph);
        }

        newSlide.AddObject(subtitleShape);

        createSlides(items, index + 1);
    }

    let shapes = slide.GetAllShapes();
    let numberedItems = processShapes(shapes);

    if (numberedItems.length === 0) {
        console.log("No indented items found to create slides from.");
        return;
    }

    createSlides(numberedItems);
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurSlideIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurSlideIndex.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [CreateSolidFill](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [CreateRGBColor](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [GetClassType](../../../../office-api/usage-api/presentation-api/ApiBullet/Methods/GetClassType.md), [GetElementsCount](../../../../office-api/usage-api/presentation-api/ApiHyperlink/Methods/GetElementsCount.md), [GetElement](../../../../office-api/usage-api/presentation-api/ApiHyperlink/Methods/GetElement.md), [GetText](../../../../office-api/usage-api/presentation-api/ApiComment/Methods/GetText.md), [GetParaPr](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/GetParaPr.md), [GetIndLeft](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/GetIndLeft.md), [GetContent](../../../../office-api/usage-api/presentation-api/ApiTableCell/Methods/GetContent.md), [CreateSlide](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateSlide.md), [AddSlide](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md), [GetWidth](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/GetWidth.md), [GetHeight](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/GetHeight.md), [CreateShape](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [SetPosition](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [CreatePlaceholder](../../../../office-api/usage-api/presentation-api/Api/Methods/CreatePlaceholder.md), [SetPlaceholder](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPlaceholder.md), [RemoveAllElements](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/RemoveAllElements.md), [CreateParagraph](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [CreateRun](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateRun.md), [GetTextPr](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/GetTextPr.md), [SetFontSize](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetFontSize.md), [SetFill](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetFill.md), [AddText](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [AddElement](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddElement.md), [Push](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md), [AddObject](../../../../office-api/usage-api/presentation-api/ApiMaster/Methods/AddObject.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiMaster/Methods/GetAllShapes.md)

## Result

![CreateSimilarSlides](/assets/images/plugins/create-similar-slides.png#gh-light-mode-only)
![CreateSimilarSlides](/assets/images/plugins/create-similar-slides.dark.png#gh-dark-mode-only)

