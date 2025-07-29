# 重置所有表单

在需要时（例如打印文档后），清除所有字段内容。

<!-- 此代码片段展示于截图中 -->

<!-- eslint-skip -->

```ts
(function()
{
    let doc = Api.GetDocument();
    let allForms = doc.GetAllForms();
    allForms.forEach(form => {
        form.Clear();
    });
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [Clear](../../../../office-api/usage-api/text-document-api/ApiFormBase/Methods/Clear.md)

## 结果

<!-- imgpath -->

![Reset All Forms](/assets/images/plugins/reset-all-forms.png#gh-light-mode-only)![Reset All Forms](/assets/images/plugins/reset-all-forms.dark.png#gh-dark-mode-only)
