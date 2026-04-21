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

获取 PDF 文档中图章注释的缩放。

```javascript editor-pdf
// How to get the scale for a stamp annotation in a PDF document?

// Get the scale and display the result in a PDF document.

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
stampAnnot.SetScale(0.5);
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`We set scale: ${stampAnnot.GetType()} for stamp annotation`);
```
