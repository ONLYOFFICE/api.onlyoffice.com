---
hide_table_of_contents: true
description: 为文本表单字段设置字符数限制。
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

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

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetFormKey.md), [GetText](../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md), [SetTipText](../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetTipText.md), [SetCharactersLimit](../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetCharactersLimit.md)

## 结果

<Video src="/assets/video/macros/pdf-editor/limit-number-of-characters" dark />
