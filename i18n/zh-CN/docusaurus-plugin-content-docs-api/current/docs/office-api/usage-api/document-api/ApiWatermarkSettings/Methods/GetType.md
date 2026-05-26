# GetType

返回文档中水印的类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiWatermarkSettings](../ApiWatermarkSettings.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[WatermarkType](../../Enumeration/WatermarkType.md)

## 示例

读取文档中的水印是文本还是图像。

```javascript editor-docx
// How do I find out what kind of watermark is applied in a document?

// Determine the category of the watermark currently used in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark Type = " + classType);
doc.Push(paragraph);
```
