# MoveCursorDown

向下移动光标。

## 语法

```javascript
expression.MoveCursorDown(count, addToSelect);
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

在文档中将光标向下移动。

```javascript editor-docx
// How to move the cursor down by a specified number of lines in a document.

// Create multiple paragraphs and move cursor in a document.

let doc = Api.GetDocument();
const paragraphCount = 5;
for (let i = 0; i < paragraphCount; i++) {
    const newParagraph = Api.CreateParagraph();
    newParagraph.AddText("This is " + (i + 1) + " paragraph.");
    doc.Push(newParagraph);
}

doc.MoveCursorDown(3);

let paragraph = Api.CreateParagraph();
paragraph.AddText("Current line is: ");
paragraph.AddText(doc.GetCurrentSentence());
doc.Push(paragraph);
```
