# Adjust indentation

Adjusts the first line indentation for all paragraphs in your presentation.

```ts
(function()
{
    let indentationValue = 720; // Enter the first line indentation value for paragraphs. 0 means no indentation; any value greater than 0 will indent the text. The value is in twentieths of a point (1/1440 of an inch).

    if (!isNaN(indentationValue) && indentationValue >= 0) {
        
        let presentation = Api.GetPresentation();
        let slidesNumber = presentation.GetSlidesCount(); // Get the total number of slides in the presentation
        
        // Iterate through each slide
        for (let slideIndex = 0; slideIndex < slidesNumber; slideIndex++) {
            let slide = presentation.GetSlideByIndex(slideIndex); // Retrieve the slide by index
            let shapes = slide.GetAllShapes(); // Retrieve all shapes on the slide

            // Iterate through each shape on the slide
            for (let shapeIndex = 0; shapeIndex < shapes.length; shapeIndex++) {
                let content = shapes[shapeIndex].GetDocContent(); // Get the document content of the shape
            
                if (content) {
                    let count = content.GetElementsCount(); // Get the number of elements (paragraphs) in the shape
            
                    // Iterate through each paragraph in the shape
                    for (let elementIndex = 0; elementIndex < count; elementIndex++) {
                        let paragraph = content.GetElement(elementIndex); // Retrieve the paragraph element
                        let paraPr = paragraph.GetParaPr();
                        paraPr.SetIndFirstLine(indentationValue);
                    }
                }
            }
        }
    }
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetElementsCount](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElementsCount.md), [GetElement](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md), [GetParaPr](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/GetParaPr.md), [SetIndFirstLine](../../../../office-api/usage-api/presentation-api/ApiParaPr/Methods/SetIndFirstLine.md)

## Result

![AdjustIndentation](/assets/images/plugins/adjust-indentation.png#gh-light-mode-only)
![AdjustIndentation](/assets/images/plugins/adjust-indentation.dark.png#gh-dark-mode-only)