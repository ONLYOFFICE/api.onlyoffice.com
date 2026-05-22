# SetCaps

指定当前文本块中的任何小写字符仅格式化显示为其对应的大写字母。

## 语法

```javascript
expression.SetCaps(isCaps);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isCaps | 必需 | boolean |  | 指定当前文本块的内容显示为大写。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在文档中将文本运行的所有字母显示为大写而不更改底层文本。

```javascript editor-docx
// How do I make a run appear in all capital letters in a document?

// Render lowercase characters as uppercase for visual effect in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetCaps(true);
run.AddText("This is a text run with the font set to capitalized letters.");
paragraph.AddElement(run);
```
