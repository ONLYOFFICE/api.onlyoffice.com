---
hide_table_of_contents: true
---

# Create content control list

Creates a ContentControlList from all single-level numbered lists throughout the document, as well as from the manually selected text section.

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
        console.log(numberedParagraphs)

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
    function addContentControlList(i, text, paragraph) {
        // Match formats like "1.", "1)", "A.", "a)", "I." etc.
        const starterRegex = /^(1[\.\)]|[aAiI][\.\)]?)\s+/;

        if (starterRegex.test(text)) {
            // Start a new dropdown
            contentControlListIndex++;

            let newPara = Api.CreateParagraph();
            newPara.AddText(' ');
            paragraph.InsertParagraph(newPara, "before", true);
            newPara.GetRange(0, 1).Select();

            let control = doc.AddDropDownListContentControl([]);
            contentControlList = control.GetDropdownList();

            contentControlList.Add(text, text, i);
        } else {
            // Append to the current dropdown
            contentControlList.Add(text, text, i);
        }
    }

    // Check if there is a selection in the document and run the appropriate function
    let selectedRange = doc.GetRangeBySelect();
    let selectedText = selectedRange ? selectedRange.GetText().trim() : "";

    if (selectedText.length > 0) {
        let selectedParagraphs = selectedRange.GetAllParagraphs();
        processSelectedParagraphs(selectedParagraphs);
    } else {
        processAllDocument();
    }
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetNumbering](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetNumbering.md), [GetClassType](/docs/office-api/usage-api/text-document-api/ApiNumberingLevel/Methods/GetClassType.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [Delete](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/Delete.md), [GetAllNumberedParagraphs](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllNumberedParagraphs.md), [CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [InsertParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/InsertParagraph.md), [GetRange](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetRange.md), [Select](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/Select.md), [AddDropDownListContentControl](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/AddDropDownListContentControl.md), [GetDropdownList](/docs/office-api/usage-api/text-document-api/ApiInlineLvlSdt/Methods/GetDropdownList.md), [Add](/docs/office-api/usage-api/text-document-api/ApiContentControlList/Methods/Add.md), [GetRangeBySelect](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetAllParagraphs](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/GetAllParagraphs.md)

## Result

![CreateContentControlList](/assets/images/plugins/create-content-control-list.png#gh-light-mode-only)
![CreateContentControlList](/assets/images/plugins/create-content-control-list.dark.png#gh-dark-mode-only)