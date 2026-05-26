---
hide_table_of_contents: true
---

# 删除注释

遍历 PDF 文档中的所有页面，并删除包含指定关键字的注释。

```ts
(function () {
  const KEYWORD = "example"; //目标关键字
  const doc = Api.GetDocument();
  const pagesCount = doc.GetPagesCount();
  let deletedCount = 0;

  for (let i = 0; i < pagesCount; i++) {
    const page = doc.GetPage(i);
    const annots = page.GetAllAnnots();

    for (let j = 0; j < annots.length; j++) {
      const annot = annots[j];
      const contents = ((annot && annot.GetContents()) || "").toLowerCase();

      if (contents.includes(KEYWORD.toLowerCase())) {
        annot.Delete(); //删除注释
        deletedCount++;
      }
    }
  }

  console.log("Deleted annotations containing keyword:", KEYWORD);
  console.log("Total deleted:", deletedCount);
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/pdf-api/Api/Methods/GetDocument.md), [GetPagesCount](../../../../office-api/usage-api/pdf-api/ApiDocument/Methods/GetPagesCount.md), [GetPage](../../../../office-api/usage-api/pdf-api/ApiDocument/Methods/GetPage.md), [GetAllAnnots](../../../../office-api/usage-api/pdf-api/ApiPage/Methods/GetAllAnnots.md), [GetContents](../../../../office-api/usage-api/pdf-api/ApiBaseAnnotation/Methods/GetContents.md), [Delete](../../../../office-api/usage-api/pdf-api/ApiBaseAnnotation/Methods/Delete.md)

## 结果

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/delete-annotations.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/delete-annotations.dark.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
