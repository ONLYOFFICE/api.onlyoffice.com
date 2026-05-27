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

检索 PDF 中注释的显示首选项设置。

```javascript editor-pdf
// How is the visibility of an annotation configured in a PDF?

// Check whether an annotation is displayed or hidden in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation display is: ${squareAnnot.GetDisplay()}`);
```
