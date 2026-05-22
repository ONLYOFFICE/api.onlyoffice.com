# GetClassType

返回 ApiWatermarkSettings 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiWatermarkSettings](../ApiWatermarkSettings.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"watermarkSettings"

## 示例

读取文档中水印设置对象的类型标识符。

```javascript editor-docx
// How do I find out what kind of object holds the watermark configuration in a document?

// Confirm the category of watermark settings by printing its type label in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
