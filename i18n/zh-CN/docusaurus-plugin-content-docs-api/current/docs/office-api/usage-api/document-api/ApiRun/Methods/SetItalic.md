# SetItalic

为文本字符设置斜体属性。

## 语法

```javascript
expression.SetItalic(isItalic);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | 必需 | boolean |  | 指定当前文本块的内容显示为斜体。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在文档中为文本运行设置斜体样式。

```javascript editor-docx
// How do I make a portion of text appear slanted or italicized in a document?

// Emphasize words by switching a run to italic lettering in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetItalic(true);
run.AddText("This is a text run with the font set to italicized letters.");
paragraph.AddElement(run);
```
