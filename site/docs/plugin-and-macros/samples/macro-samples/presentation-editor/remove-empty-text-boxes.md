---
hide_table_of_contents: true
---

# Remove empty text boxes

Deletes all empty text box shapes throughout the entire presentation.

```ts
(function()
{
    let presentation = Api.GetPresentation();
    let slideNum = presentation.GetSlidesCount();
    
    // Loop through all slides in the presentation
    for (let slideIndex = 0; slideIndex < slideNum; slideIndex++) {
        let slide = presentation.GetSlideByIndex(slideIndex);
        let shapeArr = slide.GetAllShapes();
        
        // Loop through all shapes on the current slide
        for (let shapeIndex = 0; shapeIndex < shapeArr.length; shapeIndex++) {
            let contentShape = shapeArr[shapeIndex].GetDocContent();
            
            if (contentShape) {
                let contentShapeElNum = contentShape.GetElementsCount();
                
                let emptyParNum = 0; // Counter for empty paragraphs
                
                // Loop through all text elements (paragraphs) in the shape to count empty ones
                for (let contentShapeElIndex = 0; contentShapeElIndex < contentShapeElNum; contentShapeElIndex++) {
                    let contentShapeEl = contentShape.GetElement(contentShapeElIndex);
                    
                    if (contentShapeEl) {
                        let text = contentShapeEl.GetText();
                        
                        // Check if the text is empty or contains only whitespace
                        if (text.trim().length === 0) {
                            emptyParNum++; 
                        }
                    }
                }
                
                // If all paragraphs in the shape are empty, delete the entire shape
                if (emptyParNum === contentShapeElNum) {
                    shapeArr[shapeIndex].Delete();
                }
            }
        }
    }
})();
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetElementsCount](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElementsCount.md), [GetElement](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md), [Delete](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/Delete.md)

## Result

![RemoveEmptyTextBoxes](/assets/images/plugins/remove-empty-text-boxes.png#gh-light-mode-only)
![RemoveEmptyTextBoxes](/assets/images/plugins/remove-empty-text-boxes.dark.png#gh-dark-mode-only)