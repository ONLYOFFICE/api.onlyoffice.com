# Set placeholder

Set a specific placeholder for all the combo boxes with a certain key.

```ts
(function () {
    let key = "MyKey";
    let placeholderText = "Placeholder";
    let doc = Api.GetDocument();

    document.GetAllForms()
        .filter(field => field.GetFormType() === "comboBoxForm" && field.GetFormKey() === key)
        .forEach(field => field.SetPlaceholderText(placeholderText));
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiComplexForm/Methods/GetFormType.md), [GetFormKey](../../../../office-api/usage-api/form-api/ApiComplexForm/Methods/GetFormKey.md), [SetPlaceholderText](../../../../office-api/usage-api/form-api/ApiComboBoxForm/Methods/SetPlaceholderText.md)

## Result

![SetPlaceholder](/assets/images/plugins/set-placeholder.png#gh-light-mode-only)
![SetPlaceholder](/assets/images/plugins/set-placeholder.dark.png#gh-dark-mode-only)
