# GetValue

将复选框表单的当前状态作为布尔值返回。

## 语法

```javascript
expression.GetValue();
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

```javascript editor-docx
// The GetValue method returns true if the checkbox is checked and false otherwise.

// Check the checkbox form and then read its value to display the state.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Agreement", "tip": "I agree to the terms", "required": true, "placeholder": "Agreement"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" I agree to the terms");
checkBoxForm.SetValue(true);
let value = checkBoxForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Checkbox value: " + value);
doc.Push(paragraph);
```
