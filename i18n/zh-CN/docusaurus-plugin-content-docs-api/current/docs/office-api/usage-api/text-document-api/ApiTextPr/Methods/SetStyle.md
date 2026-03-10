# SetStyle

文本样式基础方法。
💡 此方法本身不单独使用，它仅构成 [ApiRun#SetStyle](../../ApiRun/Methods/SetStyle.md) 方法的基础，该方法将
选定或创建的样式设置到文本。

## 语法

```javascript
expression.SetStyle(oStyle);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | 必需 | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | 必须应用于文本字符的样式。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例为运行设置样式。

```javascript editor-docx
// How to style a text.

// Create a text run object, create a text style and apply it.

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
