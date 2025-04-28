# Long Sentence Finder

Highlights sentences over a word count threshold by adding comments.

```ts
(function () {
    let threshold = 20; // Word count threshold for a long sentence.
    let document = Api.GetDocument();
    let paragraphs = document.GetAllParagraphs();
  
    paragraphs.forEach(function (paragraph) {
      let text = paragraph.GetText();
      if (!text) return;
  
      // Split paragraph into sentences using punctuation.
      let sentences = text.split(/(?<=[.!?])\s+/);
      paragraph.RemoveAllElements(); // Clear existing elements.
  
      sentences.forEach(function (sentence, idx) {
        let run = Api.CreateRun();
        run.AddText(sentence + (idx < sentences.length - 1 ? " " : ""));
        paragraph.AddElement(run);
  
        // Count words in the sentence.
        let wordCount = sentence.split(/\s+/).filter(function (word) {
          return word.trim() !== "";
        }).length;
  
        // If the sentence is too long, attach a comment.
        if (wordCount > threshold) {
          let commentText = "Long sentence (" + wordCount + " words) detected. Consider rewording.";
          Api.AddComment(run, commentText, "System");
        }
      });
    });
  
    console.log("Long Sentence Finder complete with sentence-specific comments.");
  })();
```

Methods Used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [RemoveAllElements](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/RemoveAllElements.md), [CreateRun](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateRun.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/AddText.md), [AddElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md), [AddComment](../../../../office-api/usage-api/text-document-api/Api/Methods/AddComment.md)  

## Result

![LongSentenceFinder](/assets/images/plugins/long-sentence-finder.png#gh-light-mode-only)
![LongSentenceFinder](/assets/images/plugins/long-sentence-finder.dark.png#gh-dark-mode-only)
