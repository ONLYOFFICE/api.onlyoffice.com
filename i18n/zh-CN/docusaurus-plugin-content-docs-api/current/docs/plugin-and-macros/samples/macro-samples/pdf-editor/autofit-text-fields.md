# 自动调整文本框

自动调整文档中的所有文本框大小。

```ts
(function () {
    let doc = Api.GetDocument();
    let width = 6 * 240;
    let height = 2 * 240;
    // 所有文本框的自动调整属性设置为true
    doc.GetAllForms()
        .filter(form => form.GetFormType() === "textForm")
        .forEach(form => {
            form.ToFixed(width, height);
            form.SetAutoFit(true);
        });
})();
```

使用方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[获取所有表单](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [获取表单类型](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md)，[固定尺寸](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/ToFixed.md)，[设置自动调整](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetAutoFit.md)

## 结果

![自动填写表单](/assets/images/plugins/autofit-text-fields.png#gh-light-mode-only)
![自动填写表单](/assets/images/plugins/autofit-text-fields.dark.png#gh-dark-mode-only)