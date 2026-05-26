# GetClassType

返回 ApiColor 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"color"

## 示例

检索文档中颜色对象的类类型。

```javascript editor-docx
// How do I identify what kind of color object is used in a document?

// Useful when you need to confirm the object type before processing color properties.

const doc = Api.GetDocument();
const color = Api.ThemeColor('accent1');
const paragraph = doc.GetElement(0);
paragraph.AddText('Class type of ApiColor instance: ' + color.GetClassType());
```
