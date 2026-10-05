# SetFormKey

为当前表单设置键。

继承自 [ApiFormBase.SetFormKey](../../ApiFormBase/Methods/SetFormKey.md)。

## 语法

```javascript
expression.SetFormKey(sKey);
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sKey | 必需 | string |  | 表单键。 |

## 返回值

boolean

## 示例

在文档中为组合框表单字段分配唯一标识键。

```javascript editor-docx
// How do I label a combo box form with a key so it can be referenced later in a document?

// Tag a form field with a custom key and then read it back to confirm the assignment in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetFormKey("Personal information");
let key = comboBoxForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
