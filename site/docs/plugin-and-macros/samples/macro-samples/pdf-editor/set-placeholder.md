---
hide_table_of_contents: true
---

# Set placeholder

Sets a specific placeholder for all the combo boxes that have a certain key.

```ts
(function () {
    let key = "MyKey";
    let placeholderText = "Placeholder";
    let doc = Api.GetDocument();

    doc.GetAllForms()
        .filter(field => field.GetFormType() === "comboBoxForm" && field.GetFormKey() === key)
        .forEach(field => field.SetPlaceholderText(placeholderText));
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](/docs/office-api/usage-api/form-api/ApiComboBoxForm/Methods/GetFormKey.md), [SetPlaceholderText](/docs/office-api/usage-api/form-api/ApiComboBoxForm/Methods/SetPlaceholderText.md)

## Result

![SetPlaceholder](/assets/images/plugins/set-placeholder.png#gh-light-mode-only)
![SetPlaceholder](/assets/images/plugins/set-placeholder.dark.png#gh-dark-mode-only)
