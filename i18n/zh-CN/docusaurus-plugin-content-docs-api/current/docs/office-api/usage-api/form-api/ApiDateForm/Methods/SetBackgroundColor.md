# SetBackgroundColor

设置当前表单的背景颜色。

继承自 [ApiFormBase.SetBackgroundColor](../../ApiFormBase/Methods/SetBackgroundColor.md)。

## 语法

```javascript
expression.SetBackgroundColor(color);
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../../document-api/ApiColor/ApiColor.md) |  | 背景颜色。 |

## 返回值

boolean

## 示例

在文档中为日期表单设置背景颜色。

```javascript editor-forms
// How do I apply a custom background color to a date form in a document?

// Give a date form a distinctive fill color to make it stand out visually in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));
```
