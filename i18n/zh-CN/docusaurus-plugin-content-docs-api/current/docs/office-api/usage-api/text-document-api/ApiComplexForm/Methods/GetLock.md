# GetLock

返回当前表单的锁定状态。

## 语法

```javascript
expression.GetLock();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

This example checks if the current form is locked.

```javascript editor-docx
// How to know whether a form is locked or not.

// Display a boolean representing whether a form is locked.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetLock(true);
let locked = textForm.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is locked: " + locked);
doc.Push(paragraph);

```
