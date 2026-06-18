---
hide_table_of_contents: true
description: 为所有文本表单字段启用自动适应功能。
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# 自动调整文本框

自动调整文档中的所有文本框大小。

```ts
(function () {
    let doc = Api.GetDocument();
    let width = 6 * 240;
    let height = 2 * 240;
    // 所有文本框的自动调整属性设置为true
    doc.GetAllForms()
        .filter(form => form.GetFormType() === "textForm")
        .forEach(form => {
            form.ToFixed(width, height);
            form.SetAutoFit(true);
        });
})();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [ToFixed](../../../office-api/usage-api/form-api/ApiTextForm/Methods/ToFixed.md), [SetAutoFit](../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetAutoFit.md)

## 结果

<Video src="/assets/video/macros/pdf-editor/autofit-text-fields" dark />
