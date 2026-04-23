# Select

选择当前内容控件。

## 语法

```javascript
expression.Select();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例选择内容控件。

```javascript editor-docx
// Creates a block content control and selects it.

// How to select the ApiBlockLvlSdt object in the current document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("The block text content control is selected.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.Select();
```
