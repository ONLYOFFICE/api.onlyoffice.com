# Text form character limit

Restrict the number of characters allowed in text fields that contain a specific keyword in their key.

```ts
(function () {
    // Define a form key and type
    let formKey = "Key";
    let formType = "textForm";
    // Define characters number limit
    let symbolsLimit = 10;
    let doc = Api.GetDocument();
    let forms = document.GetAllForms();

    for (let form of forms) {
        if (form.GetFormType() === formType && form.GetFormKey() === formKey) {
            let input = form.GetText();
            // Set a tip text to warn a user
            form.SetTipText("Number of symbols should be less than " + symbolsLimit);
            form.SetCharactersLimit(symbolsLimit);
            if (input.length > 10) {
                // If number of symbols is greater than the limit warn the user
                console.warn("Number of symbols of \"" + input + "\" is greater than " + symbolsLimit + "!");
            }
        }
    }
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiComplexForm/Methods/GetFormType.md), [GetFormKey](../../../../office-api/usage-api/form-api/ApiComplexForm/Methods/GetFormKey.md), [GetText](../../../../office-api/usage-api/form-api/ApiComplexForm/Methods/GetText.md), [SetTipText](../../../../office-api/usage-api/form-api/ApiComplexForm/Methods/SetTipText.md), [SetCharactersLimit](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetCharactersLimit.md)

## Result

![TextFormCharacterLimit](/assets/images/plugins/text-form-character-limit.png#gh-light-mode-only)
![TextFormCharacterLimit](/assets/images/plugins/text-form-character-limit.dark.png#gh-dark-mode-only)
