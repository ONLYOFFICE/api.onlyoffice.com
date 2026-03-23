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

此示例获取类类型并将其粘贴到文档中。

```javascript editor-docx
// How to get a class type of ApiWatermarkSettings.

// Retrieve class type of ApiWatermarkSettings object and insert it to the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
