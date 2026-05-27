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

了解添加到 PDF 的印章类型。

```javascript editor-pdf
// How do I check the stamp annotation category in a PDF?

// Determine the specific stamp type used in a PDF.

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'SB_Approved');
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`Annot class type is: ${stampAnnot.GetClassType()}`);
```
