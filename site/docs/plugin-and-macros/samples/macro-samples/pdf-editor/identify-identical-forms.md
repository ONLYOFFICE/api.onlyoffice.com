# Identify Identical Forms

Identify and highlight sentences that have forms with identical keys across the document

```ts
(function () {
  let doc = Api.GetDocument();

  let allForms = {}; // Object to store the count of form occurrences

  let paragraphs = doc.GetAllParagraphs();


  // Step 1: Loop through all paragraphs to collect the forms and their occurrences

  paragraphs.forEach(function (paragraph) {
    let count = paragraph.GetElementsCount();

    for (let i = 0; i < count; i++) {
      let element = paragraph.GetElement(i);
      let isForm = element.GetClassType() === "form";

      if (isForm) {
        let key = element.GetFormKey();
        if (!allForms[key]) {
          allForms[key] = 0;
        }
        allForms[key]++;
      }
    }
  });

  // Step 2: Highlight text before forms

  paragraphs.forEach(function (paragraph) {
    let count = paragraph.GetElementsCount();

    let runBeforeToReplace = []; // Array to track parts of text to replace

    for (let i = 0; i < count; i++) {
      let element = paragraph.GetElement(i);

      // Check if the element is a form and appears more than once in the document
      if (element.GetClassType() === 'form' && allForms[element.GetFormKey()] > 1) {

        let runBefore = paragraph.GetElement(i - 1);
        if (runBefore.GetClassType() === 'run') {
          let text = runBefore.GetText();
          let lastIdx = Math.max(text.lastIndexOf('.'), text.lastIndexOf('!'), text.lastIndexOf('?'));

          if (lastIdx !== -1) {
            // Split the text at the last occurrence of a period, exclamation mark, or question mark
            let part1 = text.slice(0, lastIdx + 1);
            let part2 = text.slice(lastIdx + 1);

            let run1 = Api.CreateRun();
            run1.AddText(part1);

            let run2 = Api.CreateRun();
            run2.AddText(part2);
            run2.SetHighlight("yellow");

            runBeforeToReplace.push({
              elementIndex: i - 1,
              run1: run1,
              run2: run2
            });
          } else {
            runBefore.SetHighlight("yellow");
          }
        }
      }
    }

    // Replace the elements in the paragraph with the new highlighted runs
    for (let j = runBeforeToReplace.length - 1; j >= 0; j--) {
      let replacement = runBeforeToReplace[j];
      let elementIndex = replacement.elementIndex;

      let elementToRemove = paragraph.GetElement(elementIndex);
      elementToRemove.Delete();

      paragraph.AddElement(replacement.run1, elementIndex);
      paragraph.AddElement(replacement.run2, elementIndex + 1);
    }
  });


  // Step 3: Highlight text after forms

  paragraphs.forEach(function (paragraph) {
    let count = paragraph.GetElementsCount();

    let runAfterToReplace = [];

    for (let i = 0; i < count; i++) {
      let element = paragraph.GetElement(i);

      if (element.GetClassType() === 'form' && allForms[element.GetFormKey()] > 1) {

        let runAfter = paragraph.GetElement(i + 1);
        if (runAfter.GetClassType() === 'run') {
          let text = runAfter.GetText();

          let firstIdx = text.match(/[.!?]/) ? text.match(/[.!?]/).index : -1;

          if (firstIdx !== -1) {
            let part1 = text.slice(0, firstIdx + 1);
            let part2 = text.slice(firstIdx + 1);

            let run1 = Api.CreateRun();
            run1.AddText(part1);
            run1.SetHighlight("yellow");

            let run2 = Api.CreateRun();
            run2.AddText(part2);

            runAfterToReplace.push({
              elementIndex: i + 1,
              run1: run1,
              run2: run2
            });
          } else {
            runAfter.SetHighlight("yellow");
          }
        }
      }
    }

    for (let j = runAfterToReplace.length - 1; j >= 0; j--) {
      let replacement = runAfterToReplace[j];
      let elementIndex = replacement.elementIndex;

      let elementToRemove = paragraph.GetElement(elementIndex);
      elementToRemove.Delete();

      paragraph.AddElement(replacement.run1, elementIndex);
      paragraph.AddElement(replacement.run2, elementIndex + 1);
    }
  });
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetElementsCount](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetElementsCount.md), [GetElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetElement.md), [GetClassType](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetClassType.md), [GetFormKey](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [CreateRun](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateRun.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/AddText.md), [SetHighlight](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/SetHighlight.md), [Delete](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/Delete.md), [AddElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md)

## Result

![IdentifyIdenticalForms](/assets/images/plugins/identify-identical-forms.png#gh-light-mode-only)
![IdentifyIdenticalForms](/assets/images/plugins/identify-identical-forms.dark.png#gh-dark-mode-only)

