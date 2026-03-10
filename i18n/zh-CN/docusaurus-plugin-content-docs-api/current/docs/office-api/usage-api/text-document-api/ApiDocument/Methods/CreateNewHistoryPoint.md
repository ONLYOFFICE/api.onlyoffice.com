# CreateNewHistoryPoint

创建新的历史记录点。

## 语法

```javascript
expression.CreateNewHistoryPoint();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例创建一个新的历史记录点。

```javascript editor-docx
// How to add a history point after adding the text.

// Add a text to the paragraph, create a history point and change its text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text.");
doc.CreateNewHistoryPoint();
paragraph = Api.CreateParagraph();
paragraph.AddText("New history point was just created.");
doc.Push(paragraph);
```
