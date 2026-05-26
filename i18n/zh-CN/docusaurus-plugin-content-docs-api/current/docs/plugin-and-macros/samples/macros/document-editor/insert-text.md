---
hide_table_of_contents: true
---

# 插入文本

在文档当前光标位置插入文本。

```ts
(function()
{
    let doc = Api.GetDocument();
    let paragraph = Api.CreateParagraph();
    paragraph.AddText("Hello world!");
    doc.InsertContent([paragraph]);
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [CreateParagraph](../../../../office-api/usage-api/document-api/Api/Methods/CreateParagraph.md), [AddText](../../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [InsertContent](../../../../office-api/usage-api/document-api/ApiDocument/Methods/InsertContent.md)

## 结果

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/document-editor/insert-text.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/document-editor/insert-text.dark.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
