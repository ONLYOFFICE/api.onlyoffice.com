---
hide_table_of_contents: true
---

# 为所有页面添加水印

为 PDF 文档的每一页添加对角线水印形状。水印为旋转 -45 度的灰色矩形，带有白色粗体文字。您可以根据需要修改水印文字、颜色、大小和位置。

```ts
(function () {
  const doc = Api.GetDocument();
  const pagesCount = doc.GetPagesCount();

  // 修改以下值以自定义水印
  const watermarkText = "DRAFT";
  const bgColor = Api.CreateRGBColor(200, 200, 200);
  const textColor = Api.CreateRGBColor(255, 255, 255);
  const fontSize = 72;
  const positionX = 1200000;
  const positionY = 4000000;
  const rotation = -45;

  // 为文档中的每一页添加水印
  for (let i = 0; i < pagesCount; i++) {
    const page = doc.GetPage(i);
    const fill = Api.CreateSolidFill(bgColor);
    const stroke = Api.CreateStroke(0, Api.CreateNoFill());
    const watermark = Api.CreateShape(
      "rect",
      160 * 36000,
      20 * 36000,
      fill,
      stroke,
    );
    watermark.SetPosition(positionX, positionY);
    watermark.SetRotation(rotation);
    // 获取水印内容，添加文字、字号、粗体和填充颜色
    const content = watermark.GetContent();
    const para = content.GetElement(0);
    para.SetJc("center");
    const run = para.AddText(watermarkText);
    run.SetFontSize(fontSize);
    run.SetBold(true);
    run.SetFill(Api.CreateSolidFill(textColor));

    // 将水印添加到页面
    page.AddObject(watermark);
  }
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/pdf-api/Api/Methods/GetDocument.md), [CreateSolidFill](../../../../office-api/usage-api/pdf-api/Api/Methods/CreateSolidFill.md), [CreateRGBColor](../../../../office-api/usage-api/pdf-api/Api/Methods/CreateRGBColor.md), [CreateStroke](../../../../office-api/usage-api/pdf-api/Api/Methods/CreateStroke.md), [CreateNoFill](../../../../office-api/usage-api/pdf-api/Api/Methods/CreateNoFill.md), [CreateShape](../../../../office-api/usage-api/pdf-api/Api/Methods/CreateShape.md), [SetRotation](../../../../office-api/usage-api/pdf-api/ApiDrawing/Methods/SetRotation.md), [GetContent](../../../../office-api/usage-api/pdf-api/ApiShape/Methods/GetContent.md), [GetElement](../../../../office-api/usage-api/pdf-api/ApiDocumentContent/Methods/GetElement.md), [SetJc](../../../../office-api/usage-api/pdf-api/ApiParagraph/Methods/SetJc.md), [AddText](../../../../office-api/usage-api/pdf-api/ApiParagraph/Methods/AddText.md), [SetFontSize](../../../../office-api/usage-api/pdf-api/ApiRun/Methods/SetFontSize.md), [SetBold](../../../../office-api/usage-api/pdf-api/ApiRun/Methods/SetBold.md), [SetFill](../../../../office-api/usage-api/pdf-api/ApiRun/Methods/SetFill.md), [GetPagesCount](../../../../office-api/usage-api/pdf-api/ApiDocument/Methods/GetPagesCount.md), [GetPage](../../../../office-api/usage-api/pdf-api/ApiDocument/Methods/GetPage.md), [SetPosition](../../../../office-api/usage-api/pdf-api/ApiDrawing/Methods/SetPosition.md), [AddObject](../../../../office-api/usage-api/pdf-api/ApiPage/Methods/AddObject.md)

## 结果

![为所有页面添加水印](/assets/images/plugins/add-watermark-to-all-pages.png#gh-light-mode-only)
![为所有页面添加水印](/assets/images/plugins/add-watermark-to-all-pages.dark.png#gh-dark-mode-only)
