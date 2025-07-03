# Find long sentences

Flags sentences that exceed the specified word count threshold with a comment.

```ts
(function () {
  let threshold = 20; // Word count threshold for a long sentence.
  let doc = Api.GetDocument();
  let paragraphs = doc.GetAllParagraphs();

  // Regex pattern to match sentences ending with punctuation followed by a space or end of paragraph.
  let sentenceRegex = /[^.!?]+[.!?]+(?:\s+|$)/g;

  paragraphs.forEach(function (paragraph) {
    let text = paragraph.GetText();
    if (!text) return;

    let match;
    while ((match = sentenceRegex.exec(text)) !== null) {
      let sentence = match[0];
      let startPos = match.index;
      let endPos = startPos + sentence.length;

      // Count words in the sentence.
      let wordCount = sentence
        .trim()
        .split(/\s+/)
        .filter(function (word) {
          return word.trim() !== "";
        }).length;

      if (wordCount > threshold) {
        let range = Api.CreateRange(paragraph, startPos, endPos);
        let commentText =
          "Long sentence (" +
          wordCount +
          " words) detected. Consider rewording.";
        Api.AddComment(range, commentText, "System");
      }
    }
  });
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [CreateRange](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateRange.md), [AddComment](/docs/office-api/usage-api/text-document-api/Api/Methods/AddComment.md)

## Result

![FindLongSentences](/assets/images/plugins/find-long-sentences.png#gh-light-mode-only)
![FindLongSentences](/assets/images/plugins/find-long-sentences.dark.png#gh-dark-mode-only)
