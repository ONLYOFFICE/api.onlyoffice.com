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

This example gets class type of highlight annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let highlightAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddObject(highlightAnnot);
console.log(`Annot class type is: ${highlightAnnot.GetClassType()}`);
```
