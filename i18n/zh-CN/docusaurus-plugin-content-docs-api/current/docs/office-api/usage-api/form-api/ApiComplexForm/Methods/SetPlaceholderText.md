# SetPlaceholderText

设置当前表单的占位符文本。

:::note
无法为复选框或单选按钮表单设置占位符文本。
:::

继承自 [ApiFormBase.SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md)。

## 语法

```javascript
expression.SetPlaceholderText(sText);
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 将设置到当前表单的文本。 |

## 返回值

boolean

## 示例

在文档中为复合表单设置占位符文本。

```javascript editor-forms
// How do I add instructional placeholder text to a form in a document?

// Guide users by displaying a hint inside an empty form before they begin filling it in.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm();
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetPlaceholderText("Start adding forms and text");
```
