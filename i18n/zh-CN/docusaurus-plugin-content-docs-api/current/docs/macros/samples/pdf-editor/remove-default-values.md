---
hide_table_of_contents: true
description: 清除文本表单字段中的特定默认值。
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# 移除默认值

自动删除文档中所有文本字段内的特定默认值。

```ts
(function () {
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
    let defaultValue = "Text";

    forms.forEach(form => {
        if (form.GetFormType() === "textForm" && form.GetText() === defaultValue) {
            form.Clear();
        }
    });
})();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetText](../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md), [Clear](../../../office-api/usage-api/form-api/ApiTextForm/Methods/Clear.md)

## 结果

<Video src="/assets/video/macros/pdf-editor/remove-default-values" dark />
