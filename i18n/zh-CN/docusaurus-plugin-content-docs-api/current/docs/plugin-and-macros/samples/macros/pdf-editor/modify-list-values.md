---
hide_table_of_contents: true
---

# 修改列表选项值

从包含特定键值的所有组合框中删除指定的列表选项。

```ts
(function removeListValues() {
    let key = "YourKey"; // 将此替换为您的特定键值
    let valuesToRemove = ["Option1", "Option2"]; // 需要删除的选项列表

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

使用方法: [GetDocument](../../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](../../../../office-api/usage-api/form-api/ApiComboBoxForm/Methods/GetFormKey.md), [GetListValues](../../../../office-api/usage-api/form-api/ApiComboBoxForm/Methods/GetListValues.md), [SetListValues](../../../../office-api/usage-api/form-api/ApiComboBoxForm/Methods/SetListValues.md)

## 结果

![修改列表选项值](/assets/images/plugins/modify-list-values.png#gh-light-mode-only)
![修改列表选项值](/assets/images/plugins/modify-list-values.dark.png#gh-dark-mode-only)
