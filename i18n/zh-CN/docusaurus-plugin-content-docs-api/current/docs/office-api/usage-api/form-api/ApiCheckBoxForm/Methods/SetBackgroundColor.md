# SetBackgroundColor

设置当前表单的背景颜色。

继承自 [ApiFormBase.SetBackgroundColor](../../ApiFormBase/Methods/SetBackgroundColor.md)。

## 语法

```javascript
expression.SetBackgroundColor(color);
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../../document-api/ApiColor/ApiColor.md) |  | 背景颜色。 |

## 返回值

boolean

## 示例

在文档中为复选框表单应用背景颜色。

```javascript editor-forms
// How do I set the background color of a checkbox form in a document?

// Style multiple radio-button checkboxes with a matching fill color in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));
```
