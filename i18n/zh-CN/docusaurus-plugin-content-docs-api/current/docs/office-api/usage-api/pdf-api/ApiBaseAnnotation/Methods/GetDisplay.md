# GetDisplay

获取批注显示类型。

## 语法

```javascript
expression.GetDisplay();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[DisplayType](../../Enumeration/DisplayType.md)

## 示例

在 PDF 文档中创建方形注释并获取其显示方式。

```javascript editor-pdf
// How do I get the display in a PDF document?

// Get the display using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation display is: ${squareAnnot.GetDisplay()}`);
```
