# 自动填充字段

自动填充文档中所有具有相同占位符或提示文本的文本字段。

```ts
(function () {
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
    let tip = "Tip";

    // 从表单中获取第一个非空输入
    let textInput = forms
        .filter(form => form.GetFormType() === "textForm" && form.GetTipText() === tip && form.GetText())
        .map(form => form.GetText())[0] || "";

    // 使用指定提示文本填充所有表单
    forms.forEach(form => {
        if (form.GetFormType() === "textForm" && form.GetTipText() === tip) {
            form.SetText(textInput);
        }
    });
})();
```

使用方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[获取所有表单](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md)，[获取表单类型](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md)，[获取提示文本](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetTipText.md)，[获取文本](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md)，[设置文本](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetText.md)

## 结果

![自动填充字段](/assets/images/plugins/autofill-fields.png#gh-light-mode-only)
![自动填充字段](/assets/images/plugins/autofill-fields.dark.png#gh-dark-mode-only)
