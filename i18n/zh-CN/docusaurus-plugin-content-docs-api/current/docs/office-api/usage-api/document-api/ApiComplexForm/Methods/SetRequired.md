# SetRequired

指定当前表单是否为必填项。

继承自 [ApiFormBase.SetRequired](../../ApiFormBase/Methods/SetRequired.md)。

## 语法

```javascript
expression.SetRequired(bRequired);
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bRequired | 必需 | boolean |  | 定义当前表单是否为必填项（true）或非必填项（false）。 |

## 返回值

boolean

## 示例

在文档中将复合表单标记为必填。

```javascript editor-docx
// How do I make a form field mandatory in a document?

// Enforce that a form must be completed before the document can be submitted.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.SetRequired(true);
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
```
