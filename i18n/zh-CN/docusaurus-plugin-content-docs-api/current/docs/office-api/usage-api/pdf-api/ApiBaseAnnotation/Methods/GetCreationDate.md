# GetCreationDate

获取批注创建日期。

## 语法

```javascript
expression.GetCreationDate();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

检索 PDF 中注释的创建日期。

```javascript editor-pdf
// When was an annotation added to the PDF?

// Check the creation timestamp of an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation creation date is: ${squareAnnot.GetCreationDate()}`);
```
