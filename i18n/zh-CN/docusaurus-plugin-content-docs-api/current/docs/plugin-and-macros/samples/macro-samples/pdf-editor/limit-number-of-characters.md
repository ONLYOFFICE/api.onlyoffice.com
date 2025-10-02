# 字符数限制

对键值包含特定关键词的文本字段设置允许输入的字符数限制。

```ts
(function () {
    // 定义表单键值和类型
    let formKey = "Key";
    let formType = "textForm";
    // 定义字符数限制
    let symbolsLimit = 10;
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();

    for (let form of forms) {
        if (form.GetFormType() === formType && form.GetFormKey() === formKey) {
            let input = form.GetText();
            // 设置提示文本提醒用户
            form.SetTipText("Number of symbols should be less than " + symbolsLimit);
            form.SetCharactersLimit(symbolsLimit);
        }
    }
})();
```

使用方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[获取所有表单](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [获取表单类型](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md)，[获取表单键值](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetFormKey.md)，[获取文本](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md)，[设置提示文本](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetTipText.md)，[设置字符数限制](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetCharactersLimit.md)

## 结果

![文本表单字符数限制](/assets/images/plugins/limit-number-of-characters.png#gh-light-mode-only)
![文本表单字符数限制](/assets/images/plugins/limit-number-of-characters.dark.png#gh-dark-mode-only)
