# GetIconType

获取此批注的图标类型。

## 语法

```javascript
expression.GetIconType();
```

`expression` - 表示 [ApiTextAnnotation](../ApiTextAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[TextIconType](../../Enumeration/TextIconType.md)

## 示例

此示例获取文本注释的图标类型。

```javascript editor-pdf
let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
textAnnot.SetContents("Annot contents");

let page = doc.GetPage(0);
page.AddObject(textAnnot);
console.log(`Text annot icon type is: ${textAnnot.GetIconType()}`);
```
