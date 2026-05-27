# GetClassType

返回 ApiRedactAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiRedactAnnotation](../ApiRedactAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"redactAnnot"

## 示例

识别 PDF 中涂黑标记的类别。

```javascript editor-pdf
// How do I determine what kind of annotation a redaction is in a PDF?

// Check the object type of a redaction element in a PDF.

let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(redactAnnot);
console.log(`Annot class type is: ${redactAnnot.GetClassType()}`);
```
