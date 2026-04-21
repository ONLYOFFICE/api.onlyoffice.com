# GetClassType

返回 ApiUnderlineAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiUnderlineAnnotation](../ApiUnderlineAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"underlineAnnot"

## 示例

获取 PDF 文档中下划线注释对象的类类型。

```javascript editor-pdf
// How can I get the class type of an underline annotation in a PDF document?

// Get the class type of an underline annotation and display it in the PDF.

let doc = Api.GetDocument();
let strikeoutAnnot = Api.CreateStrikeoutAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(strikeoutAnnot);
console.log(`Annot class type is: ${strikeoutAnnot.GetClassType()}`);
```
