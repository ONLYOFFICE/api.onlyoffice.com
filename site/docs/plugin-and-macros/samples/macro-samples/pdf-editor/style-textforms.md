# Style text forms

Applies style formatting and custom text to every TextForm.

```ts
(function () {
  let doc = Api.GetDocument();
  let allParagraphs = doc.GetAllParagraphs();

  //Set the desired text below
  let text = "Set the text in here";

  for (let i = 0; i < allParagraphs.length; i++) {
    for (let j = 0; j < allParagraphs[i].GetElementsCount(); j++) {
      let element = allParagraphs[i].GetElement(j);
      let isTextForm = element.GetFormType
        ? element.GetFormType()
        : "Not a text form";

      if (isTextForm == "textForm") {
        let textProp = Api.CreateTextPr();
        textProp.SetFontSize(35);
        textProp.SetColor(90, 175, 225);
        textProp.SetFontFamily("Times New Roman");
        textProp.SetBold(true);
        element.SetComb(false);
        element.SetText(text);
        element.SetTextPr(textProp);
      }
    }
  }
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetElementsCount](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetElementsCount.md), [GetElement](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetElement.md), [GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [CreateTextPr](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTextPr.md), [SetFontSize](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetFontSize.md), [SetColor](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetColor.md), [SetFontFamily](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetFontFamily.md), [SetBold](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetBold.md), [SetComb](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetComb.md), [SetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetText.md), [SetTextPr](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetTextPr.md)

## Result

![StyleTextforms](/assets/images/plugins/style-textforms.png#gh-light-mode-only)
![StyleTextforms](/assets/images/plugins/style-textforms.dark.png#gh-dark-mode-only)
