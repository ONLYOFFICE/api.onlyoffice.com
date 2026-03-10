# GetCurrentSentence

返回当前句子或当前句子的一部分。

## 语法

```javascript
expression.GetCurrentSentence(sPart);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPart | 必需 | undefined \| "before" \| "after" |  | 要返回的当前句子的指定部分。 |

## 返回值

string

## 示例

此示例展示如何获取当前句子。

```javascript editor-docx
// How to get current sentence of the document.

// Find the current position sentence and add it to the paragraph.

let doc = Api.GetDocument();
let para1 = doc.GetElement(0);
let run = para1.AddText("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
run.MoveCursorToPos(80);

let para2 = Api.CreateParagraph();
para2.AddText("The current sentence is \"" + doc.GetCurrentSentence() + "\"");
doc.Push(para2);
```
