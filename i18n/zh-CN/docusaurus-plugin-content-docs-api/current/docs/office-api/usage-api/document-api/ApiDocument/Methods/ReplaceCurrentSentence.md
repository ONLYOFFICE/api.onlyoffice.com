# ReplaceCurrentSentence

用指定的文本替换当前句子或当前句子的一部分。

## 语法

```javascript
expression.ReplaceCurrentSentence(sReplace, sPart);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sReplace | 必需 | string |  | 用于替换当前句子的字符串。 |
| sPart | 必需 | undefined \| "before" \| "after" |  | 要替换的当前句子的指定部分。 |

## 返回值

boolean

## 示例

此示例展示如何替换当前句子。

```javascript editor-docx
// How to change the text to another one.

// Add the new run instead of another sentence.

let doc = Api.GetDocument();

let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let para1 = doc.GetElement(0);
para1.AddText(text);

let para2 = Api.CreateParagraph();
doc.Push(para2);
let run = para2.AddText(text);
run.MoveCursorToPos(80);
doc.ReplaceCurrentSentence("The quick brown fox jumps over the lazy dog.");


```
