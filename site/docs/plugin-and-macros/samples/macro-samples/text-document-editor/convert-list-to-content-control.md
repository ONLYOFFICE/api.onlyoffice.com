# Convert list to content control

Converts a list of paragraphs to content controls.

```ts
(function () {
    let doc = Api.GetDocument();

    let contentControlList; // Reference to the current content control list (dropdown)
    let contentControlListIndex = 0; // Tracks the number of content control lists created

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
    function addContentControlList(i, text, paragraph) {
        // Match formats like "1.", "1)", "A.", "a)", "I." etc.
        let starterRegex = /^(1[\.\)]|[aAiI][\.\)]?)\s+/;

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

    // Always process the entire document
    processAllDocument();
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllNumberedParagraphs](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllNumberedParagraphs.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [Delete](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/Delete.md), [CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [InsertParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/InsertParagraph.md), [GetRange](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetRange.md), [Select](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/Select.md), [AddDropDownListContentControl](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/AddDropDownListContentControl.md), [GetDropdownList](/docs/office-api/usage-api/text-document-api/ApiInlineLvlSdt/Methods/GetDropdownList.md), [Add](/docs/office-api/usage-api/text-document-api/ApiContentControlList/Methods/Add.md)

## Result

![ListToContentControl](/assets/images/plugins/list-to-content-control.png#gh-light-mode-only)
![ListToContentControl](/assets/images/plugins/list-to-content-control.dark.png#gh-dark-mode-only)
