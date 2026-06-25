---
hide_table_of_contents: true
description: 在文档中将缩略词展开为完整形式。
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 添加缩略语全称

自动识别文档中的所有缩略语，并在注释中添加其全称。

```ts
(function () {
  function addAcronymComments() {
    let doc = Api.GetDocument();
    let acronymDictionary = new Map([
      ["API", "Application Programming Interface"],
      ["HTTP", "HyperText Transfer Protocol"],
      ["HTML", "HyperText Markup Language"],
      ["CSS", "Cascading Style Sheets"],
      ["JSON", "JavaScript Object Notation"],
      ["XML", "eXtensible Markup Language"],
      ["SQL", "Structured Query Language"],
      ["URL", "Uniform Resource Locator"],
      // 根据需要，可继续添加更多缩写词
    ]);

    let totalFound = 0;

    acronymDictionary.forEach((fullForm, acronym) => {
      let searchResults = doc.Search(acronym, true);

    if (searchResults && searchResults.length) {
      totalFound += searchResults.length;
      searchResults.forEach((result) => {
        result.AddComment(fullForm);
      });
    }
    });
  }

  addAcronymComments();
})();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [Search](../../../office-api/usage-api/document-api/ApiDocument/Methods/Search.md), [AddComment](../../../office-api/usage-api/document-api/ApiRange/Methods/AddComment.md)

## 结果

<Video src="/assets/video/macros/document-editor/acronym-full-forms" dark />
