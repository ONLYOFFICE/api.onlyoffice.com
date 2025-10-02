---
hide_table_of_contents: true
---

# Modify list values

Deletes certain list values from all combo boxes that contain a specific key.

```ts
(function removeListValues() {
    let key = "YourKey"; // Change this to your specific key
    let valuesToRemove = ["Option1", "Option2"]; // List of values to remove

    let doc = Api.GetDocument();
    let formFields = doc.GetAllForms();

    for (let i = 0; i < formFields.length; i++) {
        let formField = formFields[i];

        if (formField.GetFormType() === "comboBoxForm" && formField.GetFormKey() === key) {
            let options = formField.GetListValues();
            let newOptions = options.filter(function (option) {
                return valuesToRemove.indexOf(option) === -1;
            });

            formField.SetListValues(newOptions);
        }
    }
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](/docs/office-api/usage-api/form-api/ApiComboBoxForm/Methods/GetFormKey.md), [GetListValues](/docs/office-api/usage-api/form-api/ApiComboBoxForm/Methods/GetListValues.md), [SetListValues](/docs/office-api/usage-api/form-api/ApiComboBoxForm/Methods/SetListValues.md)

## Result

![ModifyListValues](/assets/images/plugins/modify-list-values.png#gh-light-mode-only)
![ModifyListValues](/assets/images/plugins/modify-list-values.dark.png#gh-dark-mode-only)
