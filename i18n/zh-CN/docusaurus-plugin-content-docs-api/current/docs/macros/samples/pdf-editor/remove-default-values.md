---
hide_table_of_contents: true
---

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

使用方法: [GetDocument](../../../../office-api/usage-api/document-api/Api/Methods/GetDocument), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms), [GetFormType](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType), [GetText](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetText), [Clear](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/Clear)

## 结果

![移除默认值](/assets/images/plugins/remove-default-values.png#gh-light-mode-only)
![移除默认值](/assets/images/plugins/remove-default-values.dark.png#gh-dark-mode-only)
