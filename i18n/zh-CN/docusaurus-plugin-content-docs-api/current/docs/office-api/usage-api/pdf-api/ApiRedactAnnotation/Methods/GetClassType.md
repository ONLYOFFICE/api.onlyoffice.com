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

获取 PDF 文档中密文注释对象的类类型。

```javascript editor-pdf
// How can I get the class type of a redact annotation in a PDF document?

// Get the class type of a redact annotation and display it in the PDF.

let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(redactAnnot);
console.log(`Annot class type is: ${redactAnnot.GetClassType()}`);
```
