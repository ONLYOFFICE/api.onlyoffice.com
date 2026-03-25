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

此示例获取插入符注释的类类型。

```javascript editor-pdf
let doc = Api.GetDocument();
let caretAnnot = Api.CreateCaretAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(caretAnnot);
console.log(`Annot class type is: ${caretAnnot.GetClassType()}`);
```
