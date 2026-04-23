# MoveCursorUp

向上移动光标。

## 语法

```javascript
expression.MoveCursorUp(count, addToSelect);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | 可选 | number | 1 | 移动次数。 |
| addToSelect | 可选 | boolean | false | 指定在移动过程中是否选择文本。 |

## 返回值

boolean

## 示例

此示例展示如何在文档中向上移动光标。

```javascript editor-docx
// How to move the cursor up by a specified number of paragraphs.

// Create multiple paragraphs, move cursor down, then move it up with selection.
let doc = Api.GetDocument();
const paragraphCount = 5;
for (let i = 0; i < paragraphCount; i++) {
    const newParagraph = Api.CreateParagraph();
    newParagraph.AddText("This is " + (i + 1) + " paragraph.");
    doc.Push(newParagraph);
}

doc.MoveCursorToEnd();
doc.MoveCursorUp(3);

let paragraph = Api.CreateParagraph();
paragraph.AddText("Current line is: ");
paragraph.AddText(doc.GetCurrentSentence());
doc.Push(paragraph);

```
