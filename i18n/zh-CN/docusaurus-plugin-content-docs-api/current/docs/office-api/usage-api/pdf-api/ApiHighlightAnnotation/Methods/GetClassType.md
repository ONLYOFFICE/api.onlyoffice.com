# GetClassType

返回 ApiHighlightAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiHighlightAnnotation](../ApiHighlightAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"highlightAnnot"

## 示例

获取 PDF 文档中高亮注释的类类型。

```javascript editor-pdf
// How to identify the class type of a highlight annotation in a PDF document?

// Obtain the class type identifier of a highlight annotation object in a PDF document.

let doc = Api.GetDocument();
let highlightAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddObject(highlightAnnot);
console.log(`Annot class type is: ${highlightAnnot.GetClassType()}`);
```
