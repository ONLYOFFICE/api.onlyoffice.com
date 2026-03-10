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

此示例获取水印类型并将其粘贴到文档中。

```javascript editor-docx
// How to get type of the watermark.

// Display the name of the watermark style.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark Type = " + classType);
doc.Push(paragraph);
```
