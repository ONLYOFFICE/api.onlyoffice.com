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

获取 PDF 中删除线注释的分类代码

```javascript editor-pdf
// What is the internal type identifier for a strikeout annotation in a PDF?

// Find and display the class name of a strikeout annotation in a PDF

let doc = Api.GetDocument();
let strikeoutAnnot = Api.CreateStrikeoutAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(strikeoutAnnot);
console.log(`Annot class type is: ${strikeoutAnnot.GetClassType()}`);
```
