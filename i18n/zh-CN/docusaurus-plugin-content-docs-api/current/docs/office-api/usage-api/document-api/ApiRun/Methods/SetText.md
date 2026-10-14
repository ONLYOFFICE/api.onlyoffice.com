# SetText

用指定文本替换当前文本块的全部文本，同时保留文本块属性。

## 语法

```javascript
expression.SetText(text);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string \| number[] |  | 文本块的新文本，可以是字符串或字符代码数组。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

在文档中通过一次调用替换文本运行的全部文本。

```javascript editor-docx
// How do I replace the text of a run without losing its formatting in a document?

// Swap the wording of a run while its bold, size and color stay in place in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.SetBold(true);
run.SetFontSize(28);
run.AddText("Draft wording.");
paragraph.AddElement(run);
run.SetText("Final wording, still bold and still 14 points.");
```
