# 设置美国日期格式

将所有日期表单字段的格式设置为美国格式。

<!-- 此代码片段展示于截图中。 -->

<!-- eslint-skip -->

```ts
(function()
{
    let doc = Api.GetDocument();
    
    // 获取文档中的所有表单
    let allForms = doc.GetAllForms();
    allForms.forEach(form => {
        // 为每个日期表单设置美国日期格式
        if(form.GetFormType() == "dateForm") {
           form.SetFormat("mmmm dd, yyyy");
        }
    });
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormType.md), [SetFormat](../../../../office-api/usage-api/text-document-api/ApiDateForm/Methods/SetFormat.md)

## 结果

<!-- imgpath -->

![Set USA Date Format](/assets/images/plugins/set-usa-date-format.png#gh-light-mode-only)![Set USA Date Format](/assets/images/plugins/set-usa-date-format.dark.png#gh-dark-mode-only)
