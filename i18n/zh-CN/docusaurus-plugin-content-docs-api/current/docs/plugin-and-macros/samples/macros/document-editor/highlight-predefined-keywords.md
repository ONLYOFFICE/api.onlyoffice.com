---
hide_table_of_contents: true
---

# 高亮预设关键词

在文本文档中高亮预设关键词。

```ts
(function () {
    let keywords = ["lorem", "ipsum", "dummy", "many"];
    let doc = Api.GetDocument();

    for (let i = 0; i < keywords.length; i++) {
        let searchResults = doc.Search(keywords[i], false);
        for (let j = searchResults.length - 1; j >= 0; j--) {
            searchResults[j].SetHighlight("lightGray");
        }
    }

    console.log("success");
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [Search](../../../../office-api/usage-api/document-api/ApiDocument/Methods/Search.md), [SetHighlight](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetHighlight.md)

## 结果

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/document-editor/highlight-predefined-keywords.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/document-editor/highlight-predefined-keywords.dark.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
