# SetAutoFit

指定文本字段内容是否应自动适应，即字体大小是否根据固定大小表单的尺寸进行调整。

## 语法

```javascript
expression.SetAutoFit(bAutoFit);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bAutoFit | 必需 | boolean |  | 定义文本字段内容是否自动适应（true）或不自动适应（false）。 |

## 返回值

boolean

## 示例

此示例指定文本字段内容是否应自动适应。

```javascript editor-forms
// How to make the first text form from this document autofit.

// Set the text of the text form autofit.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "multiLine": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(6 * 240, 2 * 240);
textForm.SetAutoFit(true);
let autoFit = textForm.IsAutoFit();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is autofit: " + autoFit);
doc.Push(paragraph);
```
