# Add

将给定表单的文本内容追加到当前复合表单的末尾。

## 语法

```javascript
expression.Add(value);
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | string \| [ApiDateForm](../../ApiDateForm/ApiDateForm.md) \| [ApiPictureForm](../../ApiPictureForm/ApiPictureForm.md) \| [ApiCheckBoxForm](../../ApiCheckBoxForm/ApiCheckBoxForm.md) \| [ApiComboBoxForm](../../ApiComboBoxForm/ApiComboBoxForm.md) \| [ApiTextForm](../../ApiTextForm/ApiTextForm.md) |  | 要添加的文本或表单。 |

## 返回值

boolean

## 示例

向文档中的复杂表单添加元素。

```javascript editor-forms
// How do I add form fields and static text to a complex form in a document?

// Build a multi-part entry field by combining a text input and a suffix label inside one form.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Email", "tip": "Email", "placeholder": "Start to fill complex form"});
complexForm.Add(Api.CreateTextForm());
complexForm.Add("@onlyoffice.com");
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
```
