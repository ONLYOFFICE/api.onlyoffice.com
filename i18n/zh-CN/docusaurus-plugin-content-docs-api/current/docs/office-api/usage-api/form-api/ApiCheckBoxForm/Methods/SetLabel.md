# SetLabel

设置当前复选框的标签。

## 语法

```javascript
expression.SetLabel(label);
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| label | 必需 | string |  | 标签。 |

## 返回值

boolean

## 示例

此示例为复选框表单设置标签文本。

```javascript editor-forms
// How to add a label to the checkbox form.

// Set a label text to the checkbox.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "radio": true, "key" : "Marital status"});
checkBoxForm.SetLabel(" Married");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "radio" : true, "key" : "Marital status"});
checkBoxForm.SetLabel(" Single");
paragraph.AddElement(checkBoxForm);

```
