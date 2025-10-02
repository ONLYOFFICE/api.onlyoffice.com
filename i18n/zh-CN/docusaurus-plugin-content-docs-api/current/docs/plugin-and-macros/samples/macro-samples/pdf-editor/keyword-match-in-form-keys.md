# 表单键值关键词匹配

根据表单键值中的关键词匹配高亮显示表单字段。

```ts
(function () {
    let keyword = "information";
    let caseInsensitive = true; // 设为 true 时搜索不区分大小写，false 则搜索区分大小写
    let enableRequired = true; // 设为 true 时，在找到关键词时启用“必填”属性，false 则禁用“必填”属性

    let regex = new RegExp(keyword, caseInsensitive ? "i" : "");

    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();

    for (let form of forms) {
        let formKey = form.GetFormKey();
        let isMatch = regex.test(formKey);
        form.SetRequired(isMatch ? enableRequired : isMatch);
    }
})();
```

使用方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[获取所有表单](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md)，[获取表单键值](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md)，[设置必填属性](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/SetRequired.md)

## 结果

![键值关键词匹配](/assets/images/plugins/keyword-match.png#gh-light-mode-only)
![键值关键词匹配](/assets/images/plugins/keyword-match.dark.png#gh-dark-mode-only)
