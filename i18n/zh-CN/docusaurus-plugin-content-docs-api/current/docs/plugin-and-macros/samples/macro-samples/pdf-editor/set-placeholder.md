# 设置占位文本

为所有包含特定键值的组合框设置指定的占位文本。

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

使用方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[获取所有表单](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md)，[获取表单类型](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md)，[获取表单键值](/docs/office-api/usage-api/form-api/ApiComboBoxForm/Methods/GetFormKey.md)，[设置占位文本](/docs/office-api/usage-api/form-api/ApiComboBoxForm/Methods/SetPlaceholderText.md)

## 结果

![设置占位文本](/assets/images/plugins/set-placeholder.png#gh-light-mode-only)
![设置占位文本](/assets/images/plugins/set-placeholder.dark.png#gh-dark-mode-only)
