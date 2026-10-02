# SetBorderColor

设置当前表单的边框颜色。

继承自 [ApiFormBase.SetBorderColor](../../ApiFormBase/Methods/SetBorderColor.md)。

## 语法

```javascript
expression.SetBorderColor(color);
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../ApiColor/ApiColor.md) |  | 边框颜色。 |

## 返回值

boolean

## 示例

在文档中为复选框表单应用边框颜色。

```javascript editor-docx
// How do I change the border color of a checkbox form in a document?

// Visually distinguish checkboxes by combining a colored border with a contrasting background fill in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.SetBorderColor(Api.HexColor('#FF6F3D'));
checkBoxForm.SetBackgroundColor(Api.HexColor('#FFFF00'));
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.SetBorderColor(Api.HexColor('#FF6F3D'));
```
