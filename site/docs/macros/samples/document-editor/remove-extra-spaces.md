---
hide_table_of_contents: true
description: Remove extra spaces from document text.
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Remove extra spaces

Removes extra spaces in a document.

```ts
(function()
{
    let doc = Api.GetDocument();
    let range = doc.GetRangeBySelect();
    let rawText = range.GetText();
    range.Delete();

    // Split the original word into an array of paragraphs based on newline characters
    let paragraphs = rawText.split('\n');

    // Create an array to store cleaned paragraphs
    let cleanedParagraphs = [];

    // Clean each paragraph and store it in the cleanedParagraphs array
    for (let paragraph of paragraphs) {
        // Use a regular expression to replace consecutive whitespaces with a single space
        let cleanedParagraph = paragraph.replace(/\s+/g, ' ');
        cleanedParagraphs.push(cleanedParagraph);
    }

    // Join the cleaned paragraphs with newline characters
    let cleanedText = cleanedParagraphs.join('\n');

    // Insert the cleanedText into the original paragraph structure
    let paragraph = Api.CreateParagraph();
    paragraph.AddText(cleanedText);
    doc.InsertContent([paragraph], { "KeepTextOnly": true });
})();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](../../../office-api/usage-api/document-api/ApiRange/Methods/GetText.md), [Delete](../../../office-api/usage-api/document-api/ApiRange/Methods/Delete.md), [CreateParagraph](../../../office-api/usage-api/document-api/Api/Methods/CreateParagraph.md), [AddText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [InsertContent](../../../office-api/usage-api/document-api/ApiDocument/Methods/InsertContent.md)

## Reference Microsoft VBA macro code

```vb
Sub RemoveExtraSpaces()
    Dim rng As Range
    
    ' Set the range to the entire document
    Set rng = ActiveDocument.Content
    
    ' Replace multiple spaces with a single space
    rng.Text = Replace(rng.Text, "  ", " ")
    
    MsgBox "Extra spaces removed!", vbInformation
End Sub
```

## Result

<Video src="/assets/video/macros/document-editor/remove-extra-spaces" dark />
