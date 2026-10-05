# GetContents

获取批注内容。

继承自 [ApiBaseAnnotation.GetContents](../../ApiBaseAnnotation/Methods/GetContents.md)。

## 语法

```javascript
expression.GetContents();
```

`expression` - 表示 [ApiPolygonAnnotation](../ApiPolygonAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索 PDF 中注释内的文本或消息。

```javascript editor-pdf
// What text is stored in an annotation in a PDF?

// Read the content or description that was added to an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetContents("Annot contents");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation contents is: ${squareAnnot.GetContents()}`);
```
