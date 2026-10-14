# SetStyle

文本样式基础方法。

:::note
此方法本身不单独使用，它仅构成 [ApiRun#SetStyle](../../ApiRun/Methods/SetStyle.md) 方法的基础，该方法将选定或创建的样式设置到文本。
:::

继承自 [ApiTextPr.SetStyle](../../ApiTextPr/Methods/SetStyle.md)。

## 语法

```javascript
expression.SetStyle(style);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| style | 必需 | [ApiStyle](../../ApiStyle/ApiStyle.md) \| string \| null \| undefined |  | 必须应用于文本字符的样式、现有样式的名称，或传递 *undefined*/*null* 以移除样式。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在文档中为文本运行应用命名字符样式。

```javascript editor-docx
// How do I attach a predefined style to a specific run of text in a document?

// Reuse a saved set of formatting rules by linking it to a text run in a document.

let doc = Api.GetDocument();
let myNewRunStyle = doc.CreateStyle("My New Run Style", "run");
let textPr = myNewRunStyle.GetTextPr();
textPr.SetCaps(true);
textPr.SetFontFamily("Calibri Light");
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle);
run.AddText("This is a text run with its own style.");
paragraph.AddElement(run);
```
