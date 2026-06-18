---
hide_table_of_contents: true
description: 更改所有表单字段的背景颜色。
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# 设置表单字段背景色

更改所有表单字段在获得焦点时的背景颜色。

```ts
(function () {
    let doc = Api.GetDocument();
  
    // 定义所需的背景颜色（RGB 的浅蓝色）。
    let red = 171;
    let green = 242;
    let blue = 255;
  
    // 获取文档中的所有表单字段。
    let formFields = doc.GetAllForms();
  
    // 遍历每个表单字段并设置背景颜色。
    formFields.forEach(function(field) {
      field.SetBackgroundColor(red, green, blue);
    });
  })();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [SetBackgroundColor](../../../office-api/usage-api/form-api/ApiFormBase/Methods/SetBackgroundColor.md)

## 结果

<Video src="/assets/video/macros/pdf-editor/set-form-background-color" dark />
