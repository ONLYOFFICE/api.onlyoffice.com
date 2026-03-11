---
hide_table_of_contents: true
---

# 删除所有绘图

从 PDF 文档的每一页中删除所有绘图对象（形状、图表、图像）。将已删除对象的总数输出到控制台。可一键删除所有视觉元素，快速清理文档。

```ts
(function () {
  const doc = Api.GetDocument();
  const pagesCount = doc.GetPagesCount();
  let totalDeleted = 0;

  // 获取文档每页的绘图对象并删除
  for (let i = 0; i < pagesCount; i++) {
    const page = doc.GetPage(i);
    const drawings = page.GetAllDrawings();

    for (let j = 0; j < drawings.length; j++) {
      drawings[j].Delete();
      totalDeleted++;
    }
  }

  // 输出已删除绘图的总数
  console.log(
    "Deleted " + totalDeleted + " drawing(s) from " + pagesCount + " page(s).",
  );
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/pdf-api/Api/Methods/GetDocument.md), [GetPagesCount](../../../../office-api/usage-api/pdf-api/ApiDocument/Methods/GetPagesCount.md), [GetPage](../../../../office-api/usage-api/pdf-api/ApiDocument/Methods/GetPage.md), [GetAllDrawings](../../../../office-api/usage-api/pdf-api/ApiPage/Methods/GetAllDrawings.md), [Delete](../../../../office-api/usage-api/pdf-api/ApiDrawing/Methods/Delete.md)

## 结果

![删除所有绘图](/assets/images/plugins/remove-all-drawings.png#gh-light-mode-only)
![删除所有绘图](/assets/images/plugins/remove-all-drawings.dark.png#gh-dark-mode-only)
