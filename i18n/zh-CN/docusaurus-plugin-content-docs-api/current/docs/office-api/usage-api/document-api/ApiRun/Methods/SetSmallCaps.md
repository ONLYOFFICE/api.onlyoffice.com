# SetSmallCaps

指定此文本块中的所有小写字母仅格式化显示为比指定字体大小
小两磅的大写字母。

## 语法

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | 必需 | boolean |  | 指定当前文本块的内容是否显示为小两磅的大写字母。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在文档中将文本运行的小写字母显示为小型大写字母。

```javascript editor-docx
// How do I make text appear in small capitals without changing the original letters in a document?

// Style a run so that all characters render as compact uppercase glyphs in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetSmallCaps(true);
run.AddText("This is a text run with the font set to small capitalized letters.");
paragraph.AddElement(run);
```
