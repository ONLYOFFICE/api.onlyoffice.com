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

确定 PDF 中文本注释的类型。

```javascript editor-pdf
// How do I check what class a text annotation belongs to in a PDF?

// Identify the object type of an annotation comment in a PDF.

let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
let classType = textAnnot.GetClassType();
textAnnot.SetContents(classType);
let page = doc.GetPage(0);
page.AddObject(textAnnot);
console.log(`Annot class type is: ${classType}`);
```
