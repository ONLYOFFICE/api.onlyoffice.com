# Change validation rules

Changes the validation rules of the number and email fields in the document.

```ts
(function () {
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();

    forms.forEach((form) => {
        if (form.GetFormType() === "textForm") {
            let formKey = form.GetFormKey();
            let formText = form.GetText();

            if (/^\(\d{3}\)\d{3}-\d{4}$/.test(formText)) {
                form.SetCharactersLimit(14);
                form.SetRequired(true);
                form.SetPlaceholderText("(123)456-7890");
                form.SetComb(true);
            } else if (
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formText)
            ) {
                form.SetCharactersLimit(254);
                form.SetRequired(true);
                form.SetPlaceholderText("example@example.com");
            }
        }
    });
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [GetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md), [SetCharactersLimit](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetCharactersLimit.md), [SetRequired](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetRequired.md), [SetPlaceholderText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetPlaceholderText.md), [SetComb](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetComb.md)

## Result

![ChangeValidationRules](/assets/images/plugins/change-validation-rules.png#gh-light-mode-only)
![ChangeValidationRules](/assets/images/plugins/change-validation-rules.dark.png#gh-dark-mode-only)
