# GetValue

返回表单字段的当前值。

## 语法

```javascript
expression.GetValue();
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| boolean

## 示例

```javascript editor-docx
// The GetValue method returns the form's current value regardless of its specific type.

// Read the form value after setting it and display the result in a new paragraph.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Name", "tip": "Enter your name", "required": true, "placeholder": "Your name"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetValue("Jane Doe");
let value = textForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form value: " + value);
doc.Push(paragraph);
```
