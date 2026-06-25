---
hide_table_of_contents: true
description: 为具有指定键的组合框字段设置占位符。
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# 设置占位文本

为所有包含特定键值的组合框设置指定的占位文本。

```ts
(function () {
    let key = "MyKey";
    let placeholderText = "Placeholder";
    let doc = Api.GetDocument();

    doc.GetAllForms()
        .filter(field => field.GetFormType() === "comboBoxForm" && field.GetFormKey() === key)
        .forEach(field => field.SetPlaceholderText(placeholderText));
})();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](../../../office-api/usage-api/form-api/ApiComboBoxForm/Methods/GetFormKey.md), [SetPlaceholderText](../../../office-api/usage-api/form-api/ApiComboBoxForm/Methods/SetPlaceholderText.md)

## 结果

<Video src="/assets/video/macros/pdf-editor/set-placeholder" dark />
