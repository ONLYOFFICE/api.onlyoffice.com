# GetClassType

返回 ApiCaretAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCaretAnnotation](../ApiCaretAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"caretAnnot"

## 示例

获取 PDF 文档中插入符注释的类类型。

```javascript editor-pdf
// How to identify the class type of a caret annotation in a PDF document?

// Obtain the class type identifier of a caret annotation object in a PDF document.

let doc = Api.GetDocument();
let strikeoutAnnot = Api.CreateStrikeoutAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(strikeoutAnnot);
console.log(`Annot class type is: ${strikeoutAnnot.GetClassType()}`);
```
