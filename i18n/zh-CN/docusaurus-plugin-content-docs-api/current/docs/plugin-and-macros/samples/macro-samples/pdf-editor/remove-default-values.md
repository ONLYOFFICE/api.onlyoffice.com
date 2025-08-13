# 移除默认值

自动删除文档中所有文本字段内的特定默认值。

```ts
(function () {
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
    let defaultValue = "Text";

    forms.forEach(form => {
        if (form.GetFormType() === "textForm" && form.GetText() === defaultValue) {
            form.Clear();
        }
    });
})();
```

使用方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[获取所有表单](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md)，[获取表单类型](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md)，[获取文本内容](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md)，[清空内容](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/Clear.md)

## 结果

![移除默认值](/assets/images/plugins/remove-default-values.png#gh-light-mode-only)
![移除默认值](/assets/images/plugins/remove-default-values.dark.png#gh-dark-mode-only)
