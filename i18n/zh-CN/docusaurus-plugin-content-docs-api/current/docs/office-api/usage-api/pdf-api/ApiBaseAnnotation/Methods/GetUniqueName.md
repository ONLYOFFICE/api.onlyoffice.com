# GetUniqueName

获取批注唯一名称。

## 语法

```javascript
expression.GetUniqueName();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在 PDF 文档中创建方形注释并获取其唯一名称。

```javascript editor-pdf
// How to get the unique name for an annotation in a PDF document?

// Get the unique name and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation unique name is: ${squareAnnot.GetUniqueName()}`);
```
