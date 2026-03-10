# GetClassType

返回 ApiUnderlineAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiUnderlineAnnotation](../ApiUnderlineAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"underlineAnnot"

## 示例

This example gets class type of strikeout annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let strikeoutAnnot = Api.CreateStrikeoutAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(strikeoutAnnot);
console.log(`Annot class type is: ${strikeoutAnnot.GetClassType()}`);
```
