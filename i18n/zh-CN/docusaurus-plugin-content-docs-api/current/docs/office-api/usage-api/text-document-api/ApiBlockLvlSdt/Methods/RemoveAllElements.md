# RemoveAllElements

清除当前内容控件的内容。

## 语法

```javascript
expression.RemoveAllElements();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例清除内容控件的内容。

```javascript editor-docx
// Creates a block content control, adds a text to it, and clears its contents.

// Removes all elements from the block level content control.

// How to clear the contents of the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.RemoveAllElements();
let paragraph = doc.GetElement(1);
paragraph.AddText("All elements were removed from the content control.");
```
