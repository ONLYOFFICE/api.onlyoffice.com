# MoveCursorLeft

向左移动光标。

## 语法

```javascript
expression.MoveCursorLeft(count, addToSelect, byWords);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | 可选 | number | 1 | 移动次数。 |
| addToSelect | 可选 | boolean | false | 指定在移动过程中是否选择文本。 |
| byWords | 可选 | boolean | false | 指定是按单词移动还是按字符移动。 |

## 返回值

boolean

## 示例

此示例展示如何在文档中向左移动光标。

```javascript editor-docx
// How to move the cursor left by a specified number of characters.

// Add text, move cursor right, then move it left.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
doc.MoveCursorToEnd();
doc.MoveCursorLeft(11);

paragraph = Api.CreateParagraph();
paragraph.AddText(doc.GetCurrentWord());
doc.Push(paragraph);
```
