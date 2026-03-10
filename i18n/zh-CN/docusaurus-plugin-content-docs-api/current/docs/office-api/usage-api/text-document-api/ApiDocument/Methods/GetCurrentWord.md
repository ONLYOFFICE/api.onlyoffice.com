# GetCurrentWord

返回当前单词或当前单词的一部分。

## 语法

```javascript
expression.GetCurrentWord(sWordPart);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sWordPart | 必需 | undefined \| "before" \| "after" |  | 要返回的当前单词的指定部分。 |

## 返回值

string

## 示例

此示例展示如何获取当前单词。

```javascript editor-docx
// How to get a word where the cursor is set.

// Display the parts of the word before or after the cursor.

let doc = Api.GetDocument();
let para1 = doc.GetElement(0);
para1.AddText("The quick brown ");
let run = para1.AddText("fox");
para1.AddText(" jumps over the lazy dog");

run.MoveCursorToPos(1);

let para2 = Api.CreateParagraph();
para2.AddText("The current word is " + doc.GetCurrentWord());
doc.Push(para2);

para2 = Api.CreateParagraph();
para2.AddText("The part of the word after cursor is " + doc.GetCurrentWord("after"));
doc.Push(para2);

para2 = Api.CreateParagraph();
para2.AddText("The part of the word before cursor is " + doc.GetCurrentWord("before"));
doc.Push(para2);


```
