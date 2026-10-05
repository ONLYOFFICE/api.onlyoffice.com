# SetBorderColor

设置当前表单的边框颜色。

继承自 [ApiFormBase.SetBorderColor](../../ApiFormBase/Methods/SetBorderColor.md)。

## 语法

```javascript
expression.SetBorderColor(color);
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../../document-api/ApiColor/ApiColor.md) |  | 边框颜色。 |

## 返回值

boolean

## 示例

在文档中为组合框表单字段应用自定义边框颜色。

```javascript editor-forms
// How do I change the outline color of a combo box form in a document?

// Make a combo box visually distinct by giving its border a specific color in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetBorderColor(Api.HexColor('#FF6F3D'));
```
