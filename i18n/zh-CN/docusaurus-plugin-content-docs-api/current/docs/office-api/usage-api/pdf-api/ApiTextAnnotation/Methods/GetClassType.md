# GetClassType

返回 ApiTextAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTextAnnotation](../ApiTextAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"textAnnot"

## 示例

获取 PDF 文档中文本注释对象的类类型。

```javascript editor-pdf
// How can I get the class type of a text annotation in a PDF document?

// Get the class type of a text annotation and display it in the PDF.

let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
let classType = textAnnot.GetClassType();
textAnnot.SetContents(classType);
let page = doc.GetPage(0);
page.AddObject(textAnnot);
console.log(`Annot class type is: ${classType}`);
```
