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

获取文档中水印设置的类类型。

```javascript editor-docx
// How to identify the class type of a watermark settings in a document?

// Obtain the class type identifier of a watermark settings object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
