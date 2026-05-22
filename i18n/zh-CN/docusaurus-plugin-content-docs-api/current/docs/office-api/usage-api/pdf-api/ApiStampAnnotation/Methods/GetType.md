# GetType

获取图章类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiStampAnnotation](../ApiStampAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[StampType](../../Enumeration/StampType.md)

## 示例

了解 PDF 中印章注释的类别

```javascript editor-pdf
// What kind of stamp annotation is being used in a PDF?

// Look up and print the identifier type assigned to a stamp annotation in a PDF

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`Stamp type is: ${stampAnnot.GetType()}`);
```
