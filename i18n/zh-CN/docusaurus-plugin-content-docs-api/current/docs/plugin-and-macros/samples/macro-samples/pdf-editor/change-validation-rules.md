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

使用方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[获取所有表单](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md)，[获取表单类型](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md)，[获取表单键](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md)，[获取文本](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md)，[设置字符限制](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetCharactersLimit.md)，[设置必填项](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetRequired.md)，[设置占位文本](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetPlaceholderText.md)，[设置梳状输入](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetComb.md)

## 结果

![修改验证规则](/assets/images/plugins/change-validation-rules.png#gh-light-mode-only)
![修改验证规则](/assets/images/plugins/change-validation-rules.dark.png#gh-dark-mode-only)
