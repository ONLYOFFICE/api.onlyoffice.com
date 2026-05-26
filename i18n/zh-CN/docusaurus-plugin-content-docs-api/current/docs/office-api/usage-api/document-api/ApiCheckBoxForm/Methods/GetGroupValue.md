# GetGroupValue

返回组中当前选定单选按钮的选项名称。
如果当前表单不是单选按钮或未选择任何内容，则返回空字符串。

## 语法

```javascript
expression.GetGroupValue();
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

```javascript editor-docx
// The GetGroupValue method returns the selected choice name, or an empty string if nothing is selected.

// Create two radio buttons, select one, then read the group value and display it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let radio1 = Api.CreateCheckBoxForm({"tip": "Select your marital status", "required": true, "placeholder": "Status", "radio": true});
radio1.SetRadioGroup("MaritalStatus");
radio1.SetChoiceName("Married");
paragraph.AddElement(radio1);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
let radio2 = Api.CreateCheckBoxForm({"tip": "Select your marital status", "required": true, "placeholder": "Status", "radio": true});
radio2.SetRadioGroup("MaritalStatus");
radio2.SetChoiceName("Single");
paragraph.AddElement(radio2);
paragraph.AddText(" Single");
radio1.SetGroupValue("Married");
let groupValue = radio1.GetGroupValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Selected radio button: " + groupValue);
doc.Push(paragraph);
```
