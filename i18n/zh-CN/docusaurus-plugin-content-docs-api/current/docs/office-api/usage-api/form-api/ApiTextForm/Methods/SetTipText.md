# SetTipText

设置当前表单的提示文本。

继承自 [ApiFormBase.SetTipText](../../ApiFormBase/Methods/SetTipText.md)。

## 语法

```javascript
expression.SetTipText(sText);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 提示文本。 |

## 返回值

boolean

## 示例

在文档中为文本表单添加工具提示。

```javascript editor-forms
// How do I provide guidance to users about what to enter in a text form in a document?

// Guide users by displaying a short hint when they hover over a text form in a document.

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
