# Replace dateforms with textforms

Replaces all instances of DateForms in the sheet with equivalent TextForms

```ts
(function () {
  let doc = Api.GetDocument();
  let allParagraphs = doc.GetAllParagraphs();
  let positionAndValue = [];
  let newElement = {};

  for (let i = 0; i < allParagraphs.length; i++) {
    for (let j = 0; j < allParagraphs[i].GetElementsCount(); j++) {
      if (allParagraphs[i].GetElement(j).GetClassType() == "form") {
        console.log(allParagraphs[i].GetElement(j).GetText());
        newElement = {
          paragraph: i,
          element: j,
          value: allParagraphs[i].GetElement(j).GetText(),
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

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetElementsCount](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetElementsCount.md), [GetElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetElement.md), [GetClassType](../../../../office-api/usage-api/text-document-api/ApiTextForm/Methods/GetClassType.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiTextForm/Methods/GetText.md), [RemoveElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/RemoveElement.md), [CreateTextForm](../../../../office-api/usage-api/form-api/Api/Methods/CreateTextForm.md), [AddElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md)

## Result

![ReplaceDateformsWithTextforms](/assets/images/plugins/replace-dateforms-with-textforms.png#gh-light-mode-only)
![ReplaceDateformsWithTextforms](/assets/images/plugins/replace-dateforms-with-textforms.dark.png#gh-dark-mode-only)
