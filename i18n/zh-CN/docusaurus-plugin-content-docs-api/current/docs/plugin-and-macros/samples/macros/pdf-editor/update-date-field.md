---
hide_table_of_contents: true
---

# 更新日期字段

将当前日期设置到文档中的所有日期表单字段中。

```ts
(function () {
  let doc = Api.GetDocument();
  let forms = doc.GetAllForms();

  forms.forEach((form) => {
    if (form.GetFormType() === "dateForm") {
      form.SetFormat("dddd, dd MMMM yyyy");
      form.SetLanguage("en-CA");

      form.SetBackgroundColor(255, 0, 0); // 设置背景颜色为红色。
    }
  });
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [SetFormat](../../../../office-api/usage-api/form-api/ApiDateForm/Methods/SetFormat.md), [SetLanguage](../../../../office-api/usage-api/form-api/ApiDateForm/Methods/SetLanguage.md), [SetBackgroundColor](../../../../office-api/usage-api/form-api/ApiDateForm/Methods/SetBackgroundColor.md)

## 结果

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/update-date-field.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/update-date-field.dark.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
