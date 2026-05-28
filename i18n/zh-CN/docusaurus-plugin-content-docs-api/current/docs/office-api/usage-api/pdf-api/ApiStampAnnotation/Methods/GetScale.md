# GetScale

获取图章大小比例。

## 语法

```javascript
expression.GetScale();
```

`expression` - 表示 [ApiStampAnnotation](../ApiStampAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

检索 PDF 中印章注释的缩放值

```javascript editor-pdf
// What is the current size setting for a stamp annotation in a PDF?

// Display the scale measurement retrieved from a stamp annotation in a PDF

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
stampAnnot.SetScale(0.5);
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`We set scale: ${stampAnnot.GetType()} for stamp annotation`);
```
