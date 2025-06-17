# Numbered list to table

Converts numbered (ordered) lists in your presentation into a table.

```ts
// This macro detects ordered lists in the presentation and converts them into a table format
(function() {
    let presentation = Api.GetPresentation();
    let slide = presentation.GetCurrentSlide();
    let shapes = slide.GetAllShapes();

    shapes.forEach((shape, shapeIndex) => {
        // Get document content from the shape
        let content = shape.GetDocContent();
        if (!content) return;

        let paragraphs = content.GetAllParagraphs();
        let listItems = [];
        let listStartIndex = -1;
        let listEndIndex = -1;
        let isNumberedList = false;

        // Analyze each paragraph to find numbered list items
        paragraphs.forEach((para, index) => {
            let paraPr = para.GetParaPr();
            let text = para.GetText().trim();
            let isNumberedListItem = false;
            
            // Check for numbered list properties in paragraph
            if (paraPr?.xb?.Pb?.Aa && paraPr.xb.Pb.we) {
                isNumberedListItem = true;
            }

            if (isNumberedListItem) {
                // Store the start and end indices of the list
                if (listStartIndex === -1) listStartIndex = index;
                listEndIndex = index;
                
                // Clean the text by removing the number and separator
                let cleanText = text.replace(/^\d+[\.\)]\s*/, '');
                listItems.push(cleanText);
                isNumberedList = true;
            }
        });

        // Create a table if we found numbered list items
        if (listItems.length > 0 && isNumberedList) {
            // Initialize a new table with 2 columns
            let oTable = Api.CreateTable(2, 1);
            oTable.SetPosition(0 * 36000, 0 * 36000);
            
            // Create rows for each list item
            for (let i = 0; i < listItems.length; i++) {
                // Add new row if not the first one
                if (i > 0) {
                    oTable.AddRow(i, true);
                }

                let oRow = oTable.GetRow(i);
                
                // First column: the number
                let oCell1 = oRow.GetCell(0);
                let oContent1 = oCell1.GetContent();
                let oPara1 = Api.CreateParagraph();
                oPara1.AddText((i + 1).toString() + ".");
                oContent1.Push(oPara1);
                
                // Second column: the content text
                let oCell2 = oRow.GetCell(1);
                let oContent2 = oCell2.GetContent();
                let oPara2 = Api.CreateParagraph();
                oPara2.AddText(listItems[i]);
                oContent2.Push(oPara2);
            }

            // Add the table to the slide
            slide.AddObject(oTable);
            
            // Remove the original list items from the content
            // Always remove at listStartIndex since indices shift when elements are removed
            for (let i = listStartIndex; i <= listEndIndex; i++) {
                content.RemoveElement(listStartIndex);
            }
        }
    });
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurrentSlide](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurrentSlide.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetAllParagraphs](../../../../office-api/usage-api/presentation-api/ApiDocContent/Methods/GetAllParagraphs.md), [GetParaPr](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/GetParaPr.md), [GetText](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/GetText.md), [CreateTable](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateTable.md), [SetPosition](../../../../office-api/usage-api/presentation-api/ApiTable/Methods/SetPosition.md), [AddRow](../../../../office-api/usage-api/presentation-api/ApiTable/Methods/AddRow.md), [GetRow](../../../../office-api/usage-api/presentation-api/ApiTable/Methods/GetRow.md), [GetCell](../../../../office-api/usage-api/presentation-api/ApiTableRow/Methods/GetCell.md), [GetContent](../../../../office-api/usage-api/presentation-api/ApiTableCell/Methods/GetContent.md), [CreateParagraph](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [AddText](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [Push](../../../../office-api/usage-api/presentation-api/ApiDocContent/Methods/Push.md), [AddObject](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [RemoveElement](../../../../office-api/usage-api/presentation-api/ApiDocContent/Methods/RemoveElement.md)

## Result

![NumberedListToTable](/assets/images/plugins/numbered-list-to-table.png#gh-light-mode-only)
![NumberedListToTable](/assets/images/plugins/numbered-list-to-table.dark.png#gh-dark-mode-only)
