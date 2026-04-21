# GetClassType

返回 ApiStrikeoutAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiStrikeoutAnnotation](../ApiStrikeoutAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"strikeoutAnnot"

## 示例

获取 PDF 文档中删除线注释的类类型。

```javascript editor-pdf
// How to identify the class type of a strikeout annotation in a PDF document?

// Obtain the class type identifier of a strikeout annotation object in a PDF document.

let doc = Api.GetDocument();
let caretAnnot = Api.CreateCaretAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(caretAnnot);
console.log(`Annot class type is: ${caretAnnot.GetClassType()}`);
```
