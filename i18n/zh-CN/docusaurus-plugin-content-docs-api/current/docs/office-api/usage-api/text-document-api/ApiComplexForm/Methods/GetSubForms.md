# GetSubForms

返回子表单的有序列表。

## 语法

```javascript
expression.GetSubForms();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiForm](../../Enumeration/ApiForm.md)[]

## 示例

此示例演示如何获取复合表单的所有子表单。

```javascript editor-docx
let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Email", "tip": "Email", "placeholder": "Start to fill complex form"});
complexForm.Add(Api.CreateTextForm({"placeholder" : "username"}));
complexForm.Add("@");
let comboBox = Api.CreateComboBoxForm({"editable" : false, "placeholder" : "mail.com"});
comboBox.SetListValues(["onlyoffice.com", "gmail.com", "hotmail.com"]);
complexForm.Add(comboBox);
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
paragraph.AddLineBreak();
let subForms = complexForm.GetSubForms();
paragraph.AddText("Number of subforms: " + subForms.length);

```
