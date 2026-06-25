---
hide_table_of_contents: true
description: 清除 PDF 表单中的所有复选框。
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# 清除复选框

清除文档中的所有复选框。

```ts
(function() {
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
  
    // 遍历所有表单字段，如果已勾选则取消勾选。
    forms.forEach(function(form) {
      if (form.GetFormType() === "checkBoxForm" && form.IsChecked()) {
        form.SetChecked(false);
      }
    });
  })();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../office-api/usage-api/form-api/ApiCheckBoxForm/Methods/GetFormType.md), [IsChecked](../../../office-api/usage-api/form-api/ApiCheckBoxForm/Methods/IsChecked.md), [SetChecked](../../../office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetChecked.md)

## 结果

<Video src="/assets/video/macros/pdf-editor/clear-checkboxes" dark />
