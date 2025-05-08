# Format a word

The macro applies custom styling (e.g., font, size, bold, italic, color) to all occurrences of a phrase in a document by processing each paragraph and formatting the target word dynamically.

```ts
(function () {
    let doc = Api.GetDocument();
    let paragraphs = doc.GetAllParagraphs();

    // Define the target word to format and build a regex for it (case-insensitive).
    let targetWord = "easily integrated";
    let targetRegex = new RegExp("(" + targetWord + ")", "gi"); // Capturing group for the word

    // Define custom styling settings for the target word.
    let customStyle = {
        font: "Georgia",         // Ensure your API supports SetFont
        size: 25,
        bold: true,
        italic: true,
        color: { r: 255, g: 111, b: 61 }  // Color in RGB format
    };

    // Process each paragraph.
    paragraphs.forEach(function (paragraph) {
        let text = paragraph.GetText();
        if (!text) return; // Skip empty paragraphs

        // Split the paragraph text into segments, where each occurrence of the target word is captured.
        let segments = text.split(targetRegex);

        // Remove all current elements in the paragraph.
        paragraph.RemoveAllElements();

        // Process each segment.
        segments.forEach(function (segment) {
            // Create a new run for this text segment.
            let run = Api.CreateRun();
            run.AddText(segment);

            // If this segment matches the target word (case-insensitive), apply custom styling.
            if (segment.toLowerCase() === targetWord.toLowerCase()) {
                run.SetFontFamily(customStyle.font);
                run.SetFontSize(customStyle.size);
                run.SetBold(customStyle.bold);
                run.SetItalic(customStyle.italic);
                run.SetColor(customStyle.color.r, customStyle.color.g, customStyle.color.b, false);
            }

            // Append the run to the paragraph.
            paragraph.AddElement(run);
        });
    });

    console.log("Dynamic formatting applied.");
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [RemoveAllElements](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/RemoveAllElements.md), [CreateRun](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateRun.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/AddText.md), [SetFontFamily](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/SetFontFamily.md), [SetFontSize](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/SetFontSize.md), [SetBold](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/SetBold.md), [SetItalic](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/SetItalic.md), [SetColor](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/SetColor.md), [AddElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md)

## Result

![WordFormatter](/assets/images/plugins/format-a-word.png#gh-light-mode-only)
![WordFormatter](/assets/images/plugins/format-a-word.dark.png#gh-dark-mode-only)
