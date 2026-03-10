# InsertWatermark

在每个文档页面上插入水印。

## 语法

```javascript
expression.InsertWatermark(sText, bIsDiagonal);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 可选 | string | "WATERMARK" | 水印文本。 |
| bIsDiagonal | 可选 | boolean | false | 指定水印是对角线放置（true）还是水平放置（false）。 |

## 返回值

boolean

## 示例

此示例在每个文档页面上插入水印。

```javascript editor-docx
// How to insert watermark to the document.

// Watermark the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("A watermark was inserted into this document.");
doc.InsertWatermark("Watermark");
```
