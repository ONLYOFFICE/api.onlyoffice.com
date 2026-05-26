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

为文档中的内联文本内容控件附加数字标签。

```javascript editor-docx
// How do I assign a label value to an inline content control in a document?

// Read back a label after setting it to confirm the value was stored correctly in a document.

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
