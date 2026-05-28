# GetWrapperShape

返回放置表单的形状，用于控制固定大小表单框架的位置和大小。
对于内联表单将返回 null 值。

## 语法

```javascript
expression.GetWrapperShape();
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)

## 示例

访问包含固定大小表单字段的容器形状以控制其在文档中的框架。

```javascript editor-docx
// How do I get the surrounding shape of a form field so I can adjust its border or position in a document?

// Apply a custom outline to the wrapper shape of a form field to make it stand out visually in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(10 * 240, 2 * 240);
let shape = textForm.GetWrapperShape();
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
shape.SetOutLine(stroke);
```
