# Clear

清除当前表单。

继承自 [ApiFormBase.Clear](../../ApiFormBase/Methods/Clear.md)。

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中移除复合表单的所有子元素。

```javascript editor-forms
// How do I clear all elements out of a complex form in a document?

// Reset a complex form to an empty state by stripping every field it contains.

let doc = Api.GetDocument()
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms", "required": true, "placeholder": "Complex form"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let checkBox = Api.CreateCheckBoxForm()
checkBox.SetChecked(true);
complexForm.Add(checkBox);
complexForm.Clear();
doc.Push(paragraph);
```
