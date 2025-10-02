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

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [SetFormat](../../../../office-api/usage-api/form-api/ApiDateForm/Methods/SetFormat.md), [SetLanguage](../../../../office-api/usage-api/form-api/ApiDateForm/Methods/SetLanguage.md), [SetBackgroundColor](../../../../office-api/usage-api/form-api/ApiDateForm/Methods/SetBackgroundColor.md)

## 结果

![DateSetter](/assets/images/plugins/update-date-field.png#gh-light-mode-only)
![DateSetter](/assets/images/plugins/update-date-field.dark.png#gh-dark-mode-only)
