# Create content control list

Creates a ContentControlList from all simple numbered lists throughout the document, as well as from the manually selected text section.

```ts
(function() {
    let doc = Api.GetDocument();
    
    let contentControlList; // Reference to the current content control list (dropdown)
    let contentControlListIndex = 0; // Tracks the number of content control lists created
    
    // Helper function: Converts all numbered paragraphs in the selected part of the document to content control lists
    function processSelectedParagraphs(selectedParagraphs) {
        let numberedParagraphsIndex = [];
        
        for (let i = 0; i < selectedParagraphs.length; i++) {
            let numbering = selectedParagraphs[i].GetNumbering(); // Used to collect indexes of numbered paragraphs for deletion
            
            if (numbering && numbering.GetClassType() === 'numberingLevel') {
                numberedParagraphsIndex.push(i);
                
                let text = selectedParagraphs[i].GetText().trim();
                
                addContentControlList(i, text, selectedParagraphs[i]);
            }
        }
        
        // Delete the original numbered paragraphs
        for (let i = 0; i < numberedParagraphsIndex.length; i++) {
            let deleteParagraphIndex = numberedParagraphsIndex[i];
            selectedParagraphs[deleteParagraphIndex].Delete();
        }
    }

    // Helper function: Converts all numbered paragraphs in the entire document into content control lists
    function processAllDocument() {
        let numberedParagraphs = doc.GetAllNumberedParagraphs();

        for (let i = 0; i < numberedParagraphs.length; i++) {
            let text = numberedParagraphs[i].GetText().trim();

            addContentControlList(i, text, numberedParagraphs[i]);
        }

        // Delete the original numbered paragraphs
        for (let i = 0; i < numberedParagraphs.length; i++) {
            numberedParagraphs[i].Delete();
        }
    }
    
    // Helper function: Creates a content control list from a numbered paragraph
    function addContentControlList(i, text, paragraphsNumbered) {
        if (text[0] === '1' || text[0] === 'a') {
            contentControlListIndex ++;
            
            let newPara = Api.CreateParagraph();
            newPara.AddText(' ');
            paragraphsNumbered.InsertParagraph(newPara, "before", true);
            newPara.GetRange(0, 1).Select();
        
            Api.pluginMethod_AddContentControlList(1, [{Display: text, Value: text}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3}); // Creates a new content control list (dropdown) with the first item
            let contentControls = doc.GetAllContentControls();
            contentControlList = contentControls[contentControlListIndex - 1].GetDropdownList();
        } else {
            contentControlList.Add(text, text, i);
        }
    }
    
    // Check if there is a selection in the document and run the appropriate function
    let selectedRange = doc.GetRangeBySelect();
    if (selectedRange && selectedRange.GetAllParagraphs().length > 0) {
        let selectedParagraphs = selectedRange.GetAllParagraphs();
        processSelectedParagraphs(selectedParagraphs);
    } else {
        processAllDocument();
    }
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetNumbering](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetNumbering.md), [GetClassType](../../../../office-api/usage-api/text-document-api/ApiNumberingLevel/Methods/GetClassType.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [Delete](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/Delete.md), [GetAllNumberedParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllNumberedParagraphs.md), [CreateParagraph](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [InsertParagraph](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/InsertParagraph.md), [GetRange](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetRange.md), [Select](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/Select.md), [pluginMethod_AddContentControlList](../../../interacting-with-editors/methods/text-document-api/Api/Methods/AddContentControlList.md), [GetAllContentControls](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllContentControls.md), [GetDropdownList](../../../../office-api/usage-api/text-document-api/ApiInlineLvlSdt/Methods/GetDropdownList.md), [Add](../../../../office-api/usage-api/text-document-api/ApiContentControlList/Methods/Add.md), [GetRangeBySelect](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/GetAllParagraphs.md)

## Result

![CreateContentControlList](/assets/images/plugins/create-content-control-list.png#gh-light-mode-only)
![CreateContentControlList](/assets/images/plugins/create-content-control-list.dark.png#gh-dark-mode-only)