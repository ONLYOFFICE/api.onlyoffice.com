# GetValue

返回复杂表单的当前文本值。

## 语法

```javascript
expression.GetValue();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

```javascript editor-docx
// The GetValue method concatenates the text of all sub-forms and text nodes inside the complex form.

// Build a complex form with a text sub-form and a string suffix, then read the combined value.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Email", "tip": "Email", "placeholder": "Enter your email"});
let textForm = Api.CreateTextForm({"key": "Username"});
complexForm.Add(textForm);
complexForm.Add("@example.com");
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
textForm.SetText("john.doe");
let value = complexForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Complex form value: " + value);
doc.Push(paragraph);
```
