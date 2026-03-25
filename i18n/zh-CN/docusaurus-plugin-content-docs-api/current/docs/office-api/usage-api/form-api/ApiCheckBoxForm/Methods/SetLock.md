# SetLock

设置当前表单的锁定状态。

## 语法

```javascript
expression.SetLock(isLock);
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isLock | 必需 | boolean |  | 指定是锁定表单（true）还是解锁表单（false）。 |

## 返回值

boolean

## 示例

此示例指定当前表单是否应被锁定。

```javascript editor-forms
// How to lock a form.

// Make sure that the form cannot be edited.

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
