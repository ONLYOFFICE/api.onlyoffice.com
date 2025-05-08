# Split Texts

Splits paragraphs at a custom word trigger phrase. Splits the text into separate paragraphs.

```ts
(function () {
    let triggerPhrase = "SPLIT HERE";
    let doc = Api.GetDocument();
    let paragraphs = doc.GetAllParagraphs();
    let newParagraphs = [];
  
    paragraphs.forEach(function (paragraph) {
      let text = paragraph.GetText().trim();
      if (!text) return;
  
      let sentences = text.split(/(?<=[.!?])\s+/);
      let currentParagraph = Api.CreateParagraph();
  
      sentences.forEach(function (sentence) {
        let pos = sentence.toLowerCase().indexOf(triggerPhrase.toLowerCase());
  
        if (pos !== -1) {
          let beforePhrase = sentence.substring(0, pos);
          let afterPhrase = sentence.substring(pos + triggerPhrase.length);
  
          if (beforePhrase.trim()) {
            let runBefore = Api.CreateRun();
            runBefore.AddText(beforePhrase.trim());
            currentParagraph.AddElement(runBefore);
          }
  
          if (currentParagraph.GetText().trim()) {
            newParagraphs.push(currentParagraph);
          }
  
          let newPara = Api.CreateParagraph();
          let runTrigger = Api.CreateRun();
          runTrigger.AddText(triggerPhrase + " ");
          newPara.AddElement(runTrigger);
  
          if (afterPhrase.trim()) {
            let runAfter = Api.CreateRun();
            runAfter.AddText(afterPhrase.trim());
            newPara.AddElement(runAfter);
          }
  
          newParagraphs.push(newPara);
          currentParagraph = Api.CreateParagraph();
        } else {
          let run = Api.CreateRun();
          run.AddText(sentence);
          currentParagraph.AddElement(run);
        }
      });
  
      if (currentParagraph.GetText().trim()) {
        newParagraphs.push(currentParagraph);
      }
    });
  
    doc.RemoveAllElements();
    newParagraphs.forEach(function (para) {
      doc.Push(para);
    });
  
    // Remove leading empty paragraphs (if any)
    let firstParagraph = doc.GetElement(0);
    while (firstParagraph && !firstParagraph.GetText().trim()) {
      doc.RemoveElement(0);
      firstParagraph = doc.GetElement(0);
    }
  
    console.log("Text Splitter complete. " + newParagraphs.length + " paragraph(s) created.");
  })();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [CreateParagraph](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [CreateRun](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateRun.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/AddText.md), [AddElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md), [RemoveAllElements](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/RemoveAllElements.md), [Push](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md), [GetElement](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetElement.md), [RemoveElement](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/RemoveElement.md)

## Result

![TextSplitter](/assets/images/plugins/text-splitter.png#gh-light-mode-only)
![TextSplitter](/assets/images/plugins/text-splitter.dark.png#gh-dark-mode-only)
