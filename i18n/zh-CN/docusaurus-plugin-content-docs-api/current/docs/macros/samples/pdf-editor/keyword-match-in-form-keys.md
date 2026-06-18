---
hide_table_of_contents: true
description: 高亮显示键名中包含指定关键词的表单字段。
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

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

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormKey](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [SetRequired](../../../office-api/usage-api/form-api/ApiFormBase/Methods/SetRequired.md)

## 结果

<Video src="/assets/video/macros/pdf-editor/keyword-match-in-form-keys" dark />
