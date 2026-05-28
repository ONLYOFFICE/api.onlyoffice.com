# SetLabel

设置当前复选框的标签。

## 语法

```javascript
expression.SetLabel(label);
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| label | 必需 | string |  | 标签。 |

## 返回值

boolean

## 示例

为文档中的复选框表单分配可见标签。

```javascript editor-docx
// How do I add descriptive text next to a checkbox in a document?

// Label each checkbox option so readers know what they are selecting in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "radio": true, "key" : "Marital status"});
checkBoxForm.SetLabel(" Married");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "radio" : true, "key" : "Marital status"});
checkBoxForm.SetLabel(" Single");
paragraph.AddElement(checkBoxForm);
```
