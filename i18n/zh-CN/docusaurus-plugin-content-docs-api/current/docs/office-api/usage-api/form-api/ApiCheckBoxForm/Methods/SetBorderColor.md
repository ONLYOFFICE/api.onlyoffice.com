# SetBorderColor

设置当前表单的边框颜色。

## 语法

```javascript
expression.SetBorderColor(color);
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../../text-document-api/ApiColor/ApiColor.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例为表单设置边框颜色。

```javascript editor-forms
// Applies an orange border (RGB: 255, 111, 61) to highlight the date form form visually.

// Define the border color of the date form.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetBorderColor(Api.HexColor('#FF6F3D'));
```
