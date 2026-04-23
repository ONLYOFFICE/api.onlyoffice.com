# ReplaceCurrentWord

用指定的文本替换当前单词或当前单词的一部分。

## 语法

```javascript
expression.ReplaceCurrentWord(sReplace, sPart);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sReplace | 必需 | string |  | 用于替换当前单词的字符串。 |
| sPart | 必需 | undefined \| "before" \| "after" |  | 要替换的当前单词的指定部分。 |

## 返回值

boolean

## 示例

此示例展示如何替换当前单词。

```javascript editor-docx
// How to change the word to another one.

// Add the new word instead of another using cursor position.

let doc = Api.GetDocument();
let para1 = doc.GetElement(0);
para1.AddText("The quick brown ");
let run = para1.AddText("cat");
para1.AddText(" jumps over the lazy dog");
run.MoveCursorToPos(1);

doc.ReplaceCurrentWord("fox");


```
