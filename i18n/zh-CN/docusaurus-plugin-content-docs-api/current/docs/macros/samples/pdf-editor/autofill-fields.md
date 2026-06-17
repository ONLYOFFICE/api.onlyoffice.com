---
hide_table_of_contents: true
description: 自动填写具有相同占位符文本的文本字段。
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# 自动填充字段

自动填充文档中所有具有相同占位符或提示文本的文本字段。

```ts
(function () {
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
    let tip = "Tip";

    // 从表单中获取第一个非空输入
    let textInput = forms
        .filter(form => form.GetFormType() === "textForm" && form.GetTipText() === tip && form.GetText())
        .map(form => form.GetText())[0] || "";

    // 使用指定提示文本填充所有表单
    forms.forEach(form => {
        if (form.GetFormType() === "textForm" && form.GetTipText() === tip) {
            form.SetText(textInput);
        }
    });
})();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetTipText](../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetTipText.md), [GetText](../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md), [SetText](../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetText.md)

## 结果

<Video src="/assets/video/macros/pdf-editor/autofill-fields" dark />
