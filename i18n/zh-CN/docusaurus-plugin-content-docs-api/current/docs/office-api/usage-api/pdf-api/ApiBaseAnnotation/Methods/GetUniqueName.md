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

获取 PDF 中注释的唯一标识符。

```javascript editor-pdf
// What is the unique name assigned to an annotation in a PDF?

// Obtain the identifier string that uniquely identifies an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation unique name is: ${squareAnnot.GetUniqueName()}`);
```
