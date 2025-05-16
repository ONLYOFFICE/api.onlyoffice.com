# Bold first sentence

Extracts the first sentence of each paragraph and makes it bold.

```ts
(function () {
  // Get the active document
  let doc = Api.GetDocument();

  // Get all paragraphs in the document
  let paragraphs = doc.GetAllParagraphs();

  // Process each paragraph
  paragraphs.forEach((paragraph) => {
    let text = paragraph.GetText();
    if (!text) return; // Skip empty paragraphs

    // Use a regular expression to capture the first sentence.
    // This regex looks for the first occurrence of a period, exclamation mark, or question mark,
    // followed by a space or the end of the string.
    let match = text.match(/(.*?[.!?](\s|$))/);
    let firstSentence = "";
    let remainder = "";
    if (match) {
      firstSentence = match[0];
      remainder = text.substring(firstSentence.length);
    } else {
      // If no sentence-ending punctuation is found, treat the entire text as the first sentence.
      firstSentence = text;
      remainder = "";
    }

    // Clear the existing content of the paragraph.
    paragraph.RemoveAllElements();

    // Create a run for the first sentence and set it to bold.
    let runBold = Api.CreateRun();
    runBold.AddText(firstSentence);
    runBold.SetBold(true);
    paragraph.AddElement(runBold);

    // If there's remaining text, create another run for it in normal style.
    if (remainder.trim().length > 0) {
      let runNormal = Api.CreateRun();
      runNormal.AddText(remainder);
      runNormal.SetBold(false);
      paragraph.AddElement(runNormal);
    }
  });

  // Save the document.
  Api.Save();
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [RemoveAllElements](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/RemoveAllElements.md), [CreateRun](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateRun.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/AddText.md), [SetBold](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/SetBold.md), [AddElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md), [Save](../../../../office-api/usage-api/text-document-api/Api/Methods/Save.md)

## Result

![BoldFirstSentence](/assets/images/plugins/bold-first-sentence.png#gh-light-mode-only)
![BoldFirstSentence](/assets/images/plugins/bold-first-sentence.dark.png#gh-dark-mode-only)
