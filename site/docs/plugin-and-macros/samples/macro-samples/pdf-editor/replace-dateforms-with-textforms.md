# Replace date forms with text forms

Replaces all instances of DateForms in the document with equivalent TextForms.

```ts
(function () {
  let doc = Api.GetDocument();
  let allParagraphs = doc.GetAllParagraphs();
  let positionAndValue = [];

  for (let i = 0; i < allParagraphs.length; i++) {
    for (let j = 0; j < allParagraphs[i].GetElementsCount(); j++) {
      let elem = allParagraphs[i].GetElement(j);
      console.log(elem.GetClassType())
      let text = elem.GetText();

      if (/^\d{2}\/\d{2}\/\d{4}$/.test(text)) {
        let newElement = {
          paragraph: i,
          element: j,
          value: text,
        };
        positionAndValue.push(newElement);
      }
    }
  }

  for (let i = 0; i < positionAndValue.length; i++) {
    let paragraph = positionAndValue[i].paragraph;
    let element = positionAndValue[i].element;
    let value = positionAndValue[i].value;

    allParagraphs[paragraph].RemoveElement(element);
    let newTextForm = Api.CreateTextForm({
      key: "Date",
      tip: "Date Text",
      placeholder: value,
    });
    allParagraphs[paragraph].AddElement(newTextForm, element);
  }
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetElementsCount](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetElementsCount.md), [GetElement](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetElement.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiDateForm/Methods/GetText.md), [RemoveElement](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/RemoveElement.md), [CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md), [AddElement](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md)

## Result

![ReplaceDateformsWithTextforms](/assets/images/plugins/replace-dateforms-with-textforms.png#gh-light-mode-only)
![ReplaceDateformsWithTextforms](/assets/images/plugins/replace-dateforms-with-textforms.dark.png#gh-dark-mode-only)
