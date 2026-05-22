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

读取分配给文档中内容控件的标签。

```javascript editor-docx
// How do I get the label of a content control in a document?

// Set a label on a content control and then display that label as text in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a label set to it.");
blockLvlSdt.SetLabel(2147483647);
doc.AddElement(0, blockLvlSdt);
doc.GetElement(1).AddText("Label: " + blockLvlSdt.GetLabel());
```
