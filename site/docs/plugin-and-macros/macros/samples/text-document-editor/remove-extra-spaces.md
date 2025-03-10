# Remove extra spaces

Removes extra spaces in text document.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function()
{
    const oDocument = Api.GetDocument();
    const oRange = oDocument.GetRangeBySelect();
    const rawText = oRange.GetText();
    oRange.Delete();

    // Split the original word into an array of paragraphs based on newline characters
    const paragraphs = rawText.split('\n');

    // Create an array to store cleaned paragraphs
    const cleanedParagraphs = [];

    // Clean each paragraph and store it in the cleanedParagraphs array
    for (const paragraph of paragraphs) {
        // Use a regular expression to replace consecutive whitespaces with a single space
        const cleanedParagraph = paragraph.replace(/\s+/g, ' ');
        cleanedParagraphs.push(cleanedParagraph);
    }

    // Join the cleaned paragraphs with newline characters
    const cleanedText = cleanedParagraphs.join('\n');

    // Insert the cleanedText into the original paragraph structure
    const oParagraph = Api.CreateParagraph();
    oParagraph.AddText(cleanedText);
    oDocument.InsertContent([oParagraph], { "KeepTextOnly": true });
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/GetText.md), [Delete](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/Delete.md), [CreateParagraph](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [InsertContent](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/InsertContent.md)

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

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

<!-- imgpath -->

![Remove extra space](/assets/images/plugins/remove-extra-spaces.png#gh-light-mode-only)![Remove extra space](/assets/images/plugins/remove-extra-spaces.dark.png#gh-dark-mode-only)
