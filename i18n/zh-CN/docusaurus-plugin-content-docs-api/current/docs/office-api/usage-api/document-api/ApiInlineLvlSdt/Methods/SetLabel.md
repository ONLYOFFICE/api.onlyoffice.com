# SetLabel

向当前内联文本内容控件添加字符串标签。

## 语法

```javascript
expression.SetLabel(label);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| label | 必需 | number |  | 将添加到当前内联文本内容控件的标签。可以是从 **-2147483647** 到 **2147483647** 的正整数或负整数。 |

## 返回值

boolean

## 示例

此示例为内联文本内容控件设置字符串标签。

```javascript editor-docx
// How to set label for the inline content control.

// Display the label set for inline text element.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a label set to it.");
inlineLvlSdt.SetLabel(2147483647);
inlineLvlSdt.AddElement(run, 0);
let label = inlineLvlSdt.GetLabel();
paragraph = Api.CreateParagraph();
paragraph.AddText("Label: " + label);
doc.Push(paragraph);
```
