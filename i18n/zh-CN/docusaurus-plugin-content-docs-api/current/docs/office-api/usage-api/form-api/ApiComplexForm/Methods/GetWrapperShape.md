# GetWrapperShape

返回放置表单的形状，用于控制固定大小表单框架的位置和大小。

对于内联表单将返回 null 值。

继承自 [ApiFormBase.GetWrapperShape](../../ApiFormBase/Methods/GetWrapperShape.md)。

## 语法

```javascript
expression.GetWrapperShape();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../../document-api/ApiShape/ApiShape.md)

## 示例

在文档中获取控制固定大小表单位置和大小的包裹形状。

```javascript editor-forms
// How do I reposition or resize a fixed-size form frame in a document?

// Move a form to an exact location on the page by accessing and adjusting its wrapper shape in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.ToFixed(7 * 240, 2 * 240);
let shape = complexForm.GetWrapperShape();
shape.SetHorPosition("page", 50 * 36000);
shape.SetVerPosition("page", 50 * 36000);
```
