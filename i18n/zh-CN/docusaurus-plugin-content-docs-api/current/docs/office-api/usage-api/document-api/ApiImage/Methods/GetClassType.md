# GetClassType

返回 ApiImage 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"image"

## 示例

此示例获取类类型并将其插入到文档中。

```javascript editor-docx
// How to get a class type of ApiImage.

// Retrieve class type of ApiImage object and insert it to the slide.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let drawing = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(drawing);
let classType = drawing.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText('Class Type = ' + classType);
doc.Push(paragraph);
```
