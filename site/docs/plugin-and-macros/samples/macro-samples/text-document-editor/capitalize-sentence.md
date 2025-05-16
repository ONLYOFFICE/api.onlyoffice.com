# Capitalize sentence

Capitalizes the first letter of each sentence in all paragraphs, converts the rest to lowercase, and handles sentence-ending punctuation while ignoring colons and quotes as boundaries.

```ts
(function () {
  // Get the active document
  let doc = Api.GetDocument();

  // Get all paragraphs in the document
  let paragraphs = doc.GetAllParagraphs();

  // Loop through each paragraph
  paragraphs.forEach((paragraph) => {
    let text = paragraph.GetText();

    if (!text) return; // Skip empty paragraphs

    // Split text into characters
    let characters = text.split("");

    // Variables to track sentence boundaries
    let isNewSentence = true;
    let newText = "";

    // Process each character
    characters.forEach((char, index) => {
      if (isNewSentence && /[a-zA-Z]/.test(char)) {
        // Capitalize the first letter of a sentence
        newText += char.toUpperCase();
        isNewSentence = false;
      } else {
        // Convert the rest of the sentence to lowercase
        newText += char.toLowerCase();
      }

      // Check for sentence-ending punctuation
      if (/[.!?:]/.test(char)) {
        isNewSentence = true;
      }

      // Handle colons and quotes
      if (/["]/.test(char)) {
        isNewSentence = false; // Do not treat as sentence boundary
      }
    });

    // Clear the existing content of the paragraph
    paragraph.RemoveAllElements();

    // Create a new run with the converted text
    let run = Api.CreateRun();
    run.AddText(newText);

    // Add the run to the paragraph
    paragraph.AddElement(run);
  });
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [RemoveAllElements](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/RemoveAllElements.md), [CreateRun](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateRun.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/AddText.md), [AddElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md)

## Result

![Description](/assets/images/plugins/capitalize-sentence.png#gh-light-mode-only)
![Description](/assets/images/plugins/capitalize-sentence.dark.png#gh-dark-mode-only)
