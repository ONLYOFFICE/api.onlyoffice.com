---
hide_table_of_contents: true
---

# Create slides from list items

Creates new slides based on the listed items in the current slide. Each list item becomes a slide title.

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
            return;
        }

        let newSlide = Api.CreateSlide();
        presentation.AddSlide(newSlide);

        let slideWidth = presentation.GetWidth();
        let slideHeight = presentation.GetHeight();

        let shapeWidth = slideWidth * 0.7; // Ajdust this value to your liking
        let shapeHeight = slideHeight * 0.25; // Adjust this value to your liking

        let posX = (slideWidth - shapeWidth) / 2; // Centered, adjust this value to your liking
        let posY = slideHeight * 0.1; // On top, adjust this value to your liking

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
        return;
    }

    createSlides(numberedItems);
})();
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurSlideIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurSlideIndex.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [CreateSolidFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [CreateRGBColor](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [GetClassType](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetClassType.md), [GetElementsCount](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElementsCount.md), [GetElement](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md), [GetParaPr](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/GetParaPr.md), [GetIndLeft](/docs/office-api/usage-api/presentation-api/ApiParaPr/Methods/GetIndLeft.md), [GetContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetContent.md), [CreateSlide](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSlide.md), [AddSlide](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md), [GetWidth](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/GetWidth.md), [GetHeight](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/GetHeight.md), [CreateShape](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [SetPosition](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [CreatePlaceholder](/docs/office-api/usage-api/presentation-api/Api/Methods/CreatePlaceholder.md), [SetPlaceholder](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPlaceholder.md), [RemoveAllElements](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/RemoveAllElements.md), [CreateParagraph](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [CreateRun](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRun.md), [GetTextPr](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/GetTextPr.md), [SetFontSize](/docs/office-api/usage-api/presentation-api/ApiTextPr/Methods/SetFontSize.md), [SetFill](/docs/office-api/usage-api/presentation-api/ApiTextPr/Methods/SetFill.md), [AddText](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/AddText.md), [AddElement](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddElement.md), [Push](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md), [AddObject](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [GetAllShapes](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md)

## Result

![CreateSimilarSlides](/assets/images/plugins/create-similar-slides.png#gh-light-mode-only)
![CreateSimilarSlides](/assets/images/plugins/create-similar-slides.dark.png#gh-dark-mode-only)
