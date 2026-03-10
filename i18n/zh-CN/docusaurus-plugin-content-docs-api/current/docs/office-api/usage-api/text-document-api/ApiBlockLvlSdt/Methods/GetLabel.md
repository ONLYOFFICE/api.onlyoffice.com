# GetLabel

返回当前容器的标签属性。

## 语法

```javascript
expression.GetLabel();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例演示如何获取容器的标签属性。

```javascript editor-docx
// Creates a block content control, sets a label to it, and returns this label to insert it into the second paragraph of the document.

// How to get a label from the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a label set to it.");
blockLvlSdt.SetLabel(2147483647);
doc.AddElement(0, blockLvlSdt);
doc.GetElement(1).AddText("Label: " + blockLvlSdt.GetLabel());
```
