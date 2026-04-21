# GetClassType

返回 ApiStampAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiStampAnnotation](../ApiStampAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"stampAnnot"

## 示例

检查 PDF 文档中图章注释返回的类类型。

```javascript editor-pdf
// How do I check what type a stamp annotation object is in a PDF document?

// Retrieve and output the class type string for a stamp annotation in a PDF document.

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'SB_Approved');
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`Annot class type is: ${stampAnnot.GetClassType()}`);
```
