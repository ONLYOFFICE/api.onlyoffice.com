# GetAuthorName

获取批注作者姓名。

## 语法

```javascript
expression.GetAuthorName();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取 PDF 中注释的作者。

```javascript editor-pdf
// How can I find out who created an annotation in a PDF?

// Retrieve the name of the person who added an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation author name is: ${squareAnnot.GetAuthorName()}`);
```
