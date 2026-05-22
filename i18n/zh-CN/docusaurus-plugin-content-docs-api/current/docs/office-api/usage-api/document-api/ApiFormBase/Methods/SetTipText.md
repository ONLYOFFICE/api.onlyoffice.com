# SetTipText

设置当前表单的提示文本。

## 语法

```javascript
expression.SetTipText(sText);
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 提示文本。 |

## 返回值

boolean

## 示例

在文档中为表单字段设置工具提示文本以提供指导。

```javascript editor-docx
// How do I add a tooltip that appears when hovering over a form field in a document?

// Give users helpful instructions that appear when they hover over a field.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetTipText("Enter your first name");
let tipText = textForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
doc.Push(paragraph);
```
