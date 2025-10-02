---
hide_table_of_contents: true
---

# Limit number of characters

Restricts the number of characters allowed in text fields whose keys contain a specific keyword.

```ts
(function () {
    // Define a form key and type
    let formKey = "Key";
    let formType = "textForm";
    // Define characters number limit
    let symbolsLimit = 10;
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();

    for (let form of forms) {
        if (form.GetFormType() === formType && form.GetFormKey() === formKey) {
            let input = form.GetText();
            // Set a tip text to warn a user
            form.SetTipText("Number of symbols should be less than " + symbolsLimit);
            form.SetCharactersLimit(symbolsLimit);
        }
    }
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetFormKey.md), [GetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md), [SetTipText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetTipText.md), [SetCharactersLimit](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetCharactersLimit.md)

## Result

![TextFormCharacterLimit](/assets/images/plugins/limit-number-of-characters.png#gh-light-mode-only)
![TextFormCharacterLimit](/assets/images/plugins/limit-number-of-characters.dark.png#gh-dark-mode-only)
