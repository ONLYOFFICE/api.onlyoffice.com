---
hide_table_of_contents: true
description: 将所有表单字段重置为空值。
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# 重置所有表单

在需要时（例如打印文档后），清除所有字段内容。

```ts
(function()
{
    let doc = Api.GetDocument();
    let allForms = doc.GetAllForms();
    allForms.forEach(form => {
        form.Clear();
    });
})();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllForms.md), [Clear](../../../office-api/usage-api/document-api/ApiFormBase/Methods/Clear.md)

## 结果

<Video src="/assets/video/macros/pdf-editor/reset-all-forms" dark />
