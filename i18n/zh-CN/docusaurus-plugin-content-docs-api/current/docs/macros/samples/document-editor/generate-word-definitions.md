---
hide_table_of_contents: true
description: 为文档中的单词生成定义。
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 生成单词释义

使用 [API Ninjas](https://api-ninjas.com) 提供的 [API 词典](https://api-ninjas.com/api/dictionary)在文档中生成单词释义。

:::note
要使用此宏，您需要从 API Ninjas 获取您自己的 API 密钥。
:::

```ts
(function () {
  let doc = Api.GetDocument();
  let range = doc.GetRangeBySelect();
  let word = range.GetText();
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/dictionary?word=" + word,
    headers: { "X-Api-Key": "your-api-key" },
    contentType: "application/json",
    success: function (result) {
      let text = result.definition;
      let paragraph = Api.CreateParagraph();
      paragraph.AddText(text);
      doc.InsertContent([paragraph], { KeepTextOnly: true });
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
})();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](../../../office-api/usage-api/document-api/ApiRange/Methods/GetText.md), [CreateParagraph](../../../office-api/usage-api/document-api/Api/Methods/CreateParagraph.md), [AddText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [InsertContent](../../../office-api/usage-api/document-api/ApiDocument/Methods/InsertContent.md)

## 结果

<Video src="/assets/video/macros/document-editor/generate-word-definitions" dark />
