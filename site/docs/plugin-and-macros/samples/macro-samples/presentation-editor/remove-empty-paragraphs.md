---
hide_table_of_contents: true
---

# Remove empty paragraphs

Deletes all unnecessary blank paragraphs across the entire presentation.

```ts
(function()
{
    let presentation = Api.GetPresentation();
    let slideNum = presentation.GetSlidesCount();
    
    // Iterate through all slides in the presentation
    for (let slideIndex = 0; slideIndex < slideNum; slideIndex++) {
        let slide = presentation.GetSlideByIndex(slideIndex);
        let shapeArr = slide.GetAllShapes();
        
        // Iterate through all shapes on the current slide
        for (let shapeIndex = 0; shapeIndex < shapeArr.length; shapeIndex++) {
            let contentShape = shapeArr[shapeIndex].GetDocContent();
            
            if (contentShape) {
                let contentShapeElNum = contentShape.GetElementsCount();
                
                let emptyParIndexArr = []; // Store indexes of empty text elements (paragraphs)
                
                // Check each paragraph in the shape content for emptiness
                for (let contentShapeElIndex = 0; contentShapeElIndex < contentShapeElNum; contentShapeElIndex++) {
                    let contentShapeEl = contentShape.GetElement(contentShapeElIndex);
                    
                    if (contentShapeEl) {
                        let text = contentShapeEl.GetText();
                        
                        // If the text is empty or only whitespace, mark its index
                        if (text.trim().length === 0) {
                            emptyParIndexArr.push(contentShapeElIndex); 
                        }
                    }
                }

                // Remove empty paragraphs by deleting them in reverse order to avoid index shifting
                for (let i = emptyParIndexArr.length - 1; i >= 0; i--) {
                    let indexToDelete = emptyParIndexArr[i];
                    contentShape.GetElement(indexToDelete).Delete();
                }
            }
        }
    }
})();
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetElementsCount](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElementsCount.md), [GetElement](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md), [Delete](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/Delete.md)

## Result

![RemoveEmptyParagraphs](/assets/images/plugins/remove-empty-paragraphs.png#gh-light-mode-only)
![RemoveEmptyParagraphs](/assets/images/plugins/remove-empty-paragraphs.dark.png#gh-dark-mode-only)