# AddDrawingToPage

将图形添加到指定页面。
💡 此方法可能会稍慢，因为它需要运行文档计算过程以在指定页面上排列表格。

## 语法

```javascript
expression.AddDrawingToPage(oDrawing, nPage, x, y);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oDrawing | 必需 | [ApiDrawing](../../ApiDrawing/ApiDrawing.md) |  | 要添加到页面的图形。 |
| nPage | 必需 | number |  | 页面索引。 |
| x | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制单位表示的 X 坐标。 |
| y | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制单位表示的 Y 坐标。 |

## 返回值

boolean

## 示例

此示例展示如何获取给定绝对页面上的表格集合。

```javascript editor-docx
// How to add the drawing to the document.

// Create an image from the URL and insert it to the page.

let doc = Api.GetDocument();
let drawing = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
let paragraph = Api.CreateParagraph();
paragraph.AddPageBreak();
doc.Push(paragraph);
doc.AddDrawingToPage(drawing, 1, 50 * 36000, 50 * 36000);

```
