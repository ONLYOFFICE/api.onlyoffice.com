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

在文档中将光标向左移动指定的字符数。

```javascript editor-docx
// How do I step the cursor backward through text in a document?

// Back up the cursor after reaching the end so it lands on a target word in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
doc.MoveCursorToEnd();
doc.MoveCursorLeft(11);

paragraph = Api.CreateParagraph();
paragraph.AddText(doc.GetCurrentWord());
doc.Push(paragraph);
```
