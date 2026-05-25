---
hide_table_of_contents: true
---

# 清除复选框

清除文档中的所有复选框。

```ts
(function() {
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
  
    // 遍历所有表单字段，如果已勾选则取消勾选。
    forms.forEach(function(form) {
      if (form.GetFormType() === "checkBoxForm" && form.IsChecked()) {
        form.SetChecked(false);
      }
    });
  })();
```

使用方法: [GetDocument](../../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiCheckBoxForm/Methods/GetFormType.md), [IsChecked](../../../../office-api/usage-api/form-api/ApiCheckBoxForm/Methods/IsChecked.md), [SetChecked](../../../../office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetChecked.md)

## 结果

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/clear-checkboxes.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/clear-checkboxes.dark.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
