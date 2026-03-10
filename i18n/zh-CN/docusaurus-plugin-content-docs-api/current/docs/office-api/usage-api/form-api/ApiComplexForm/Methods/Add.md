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

此示例创建包含多个元素的复合表单，包括文本输入表单和静态文本。

```javascript editor-forms
let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Email", "tip": "Email", "placeholder": "Start to fill complex form"});
complexForm.Add(Api.CreateTextForm());
complexForm.Add("@onlyoffice.com");
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
```
