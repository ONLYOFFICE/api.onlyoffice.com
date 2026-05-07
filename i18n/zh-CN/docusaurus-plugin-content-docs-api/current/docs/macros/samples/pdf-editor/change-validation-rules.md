---
hide_table_of_contents: true
---

# 修改验证规则

修改文档中数字和邮箱字段的验证规则。

```ts
(function () {
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();

    forms.forEach((form) => {
        if (form.GetFormType() === "textForm") {
            let formKey = form.GetFormKey();
            let formText = form.GetText();

            if (/^\(\d{3}\)\d{3}-\d{4}$/.test(formText)) {
                form.SetCharactersLimit(14);
                form.SetRequired(true);
                form.SetPlaceholderText("(123)456-7890");
                form.SetComb(true);
            } else if (
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formText)
            ) {
                form.SetCharactersLimit(254);
                form.SetRequired(true);
                form.SetPlaceholderText("example@example.com");
            }
        }
    });
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/document-api/Api/Methods/GetDocument), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms), [GetFormType](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType), [GetFormKey](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey), [GetText](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetText), [SetCharactersLimit](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetCharactersLimit), [SetRequired](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetRequired), [SetPlaceholderText](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetPlaceholderText), [SetComb](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetComb)

## 结果

![修改验证规则](/assets/images/plugins/change-validation-rules.png#gh-light-mode-only)
![修改验证规则](/assets/images/plugins/change-validation-rules.dark.png#gh-dark-mode-only)
