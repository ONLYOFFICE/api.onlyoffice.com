# GetOpacity

获取批注不透明度。

## 语法

```javascript
expression.GetOpacity();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在 PDF 文档中创建方形注释并获取其不透明度。

```javascript editor-pdf
// How to get the opacity for an annotation in a PDF document?

// Get the opacity and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation opacity is: ${squareAnnot.GetOpacity()}`);
```
