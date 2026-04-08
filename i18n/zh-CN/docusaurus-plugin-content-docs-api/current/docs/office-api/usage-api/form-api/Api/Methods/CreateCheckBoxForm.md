# CreateCheckBoxForm

使用指定的复选框/单选按钮属性创建复选框/单选按钮。

## 语法

```javascript
expression.CreateCheckBoxForm(formPr);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| formPr | 必需 | [CheckBoxFormPr](../../Enumeration/CheckBoxFormPr.md) |  | 复选框/单选按钮属性。 |

## 返回值

[ApiCheckBoxForm](../../ApiCheckBoxForm/ApiCheckBoxForm.md)

## 示例

此示例创建两个单选按钮和一个复选框。

```javascript editor-forms
// How to create a radiobutton or a checkbox form and add it to the paragraph.

// Add two radiobuttons and the checkbox to the ApiDocument object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

let checkBoxForm = Api.CreateCheckBoxForm({
	"key": "Marital status",
	"tip": "Specify your marital status",
	"required": true,
	"placeholder": "Marital status",
	"radio": true
});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();

checkBoxForm = Api.CreateCheckBoxForm({
	"key": "Marital status",
	"tip": "Specify your marital status",
	"required": true,
	"placeholder": "Marital status",
	"radio": true
});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
paragraph.AddLineBreak();

checkBoxForm = Api.CreateCheckBoxForm({
	"key": "Children",
	"tip": "Indicate if you have children",
	"required": false,
	"placeholder": "Children",
	"radio": false
});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");

```
