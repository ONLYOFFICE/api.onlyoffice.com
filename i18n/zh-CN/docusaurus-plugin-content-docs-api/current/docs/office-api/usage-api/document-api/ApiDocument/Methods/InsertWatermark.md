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

在文档的每一页添加文字水印。

```javascript editor-docx
// How do I stamp a watermark string across all pages in a document?

// Mark draft or confidential content by overlaying a repeating label on each printed page.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("A watermark was inserted into this document.");
doc.InsertWatermark("Watermark");
```
