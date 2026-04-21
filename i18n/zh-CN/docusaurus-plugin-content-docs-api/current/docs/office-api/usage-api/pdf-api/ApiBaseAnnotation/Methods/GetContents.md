# GetContents

获取批注内容。

## 语法

```javascript
expression.GetContents();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在 PDF 文档中创建方形注释并获取其内容。

```javascript editor-pdf
// How to get the contents for an annotation in a PDF document?

// Get the contents and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetContents("Annot contents");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation contents is: ${squareAnnot.GetContents()}`);
```
