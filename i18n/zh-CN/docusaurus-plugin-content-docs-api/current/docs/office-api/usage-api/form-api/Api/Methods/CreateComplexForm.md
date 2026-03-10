# CreateComplexForm

使用指定的复杂表单属性创建复杂表单。

## 语法

```javascript
expression.CreateComplexForm(formPr);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| formPr | 必需 | [FormPrBase](../../Enumeration/FormPrBase.md) |  | 复杂表单属性。 |

## 返回值

[ApiComplexForm](../../ApiComplexForm/ApiComplexForm.md)

## 示例

此示例使用通用的复杂表单属性创建复杂表单。

```javascript editor-forms
// How to create a complex form and add it to the paragraph.

// Add a complex form with the state options to the ApiDocument object.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({
	"key": "Email",
	"tip": "Email",
	"placeholder": "Start to fill complex form"
});
complexForm.Add(Api.CreateTextForm());
complexForm.Add("@onlyoffice.com");
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);

```
