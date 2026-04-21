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

在 PDF 文档中创建方形注释并获取其作者名称。

```javascript editor-pdf
// How do I get the author name in a PDF document?

// Get the author name using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation author name is: ${squareAnnot.GetAuthorName()}`);
```
