# SetBorderColor

设置当前表单的边框颜色。

继承自 [ApiFormBase.SetBorderColor](../../ApiFormBase/Methods/SetBorderColor.md)。

## 语法

```javascript
expression.SetBorderColor(color);
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../../document-api/ApiColor/ApiColor.md) |  | 边框颜色。 |

## 返回值

boolean

## 示例

在文档中为日期表单设置边框颜色。

```javascript editor-forms
// How do I change the border color of a date form in a document?

// Highlight a date form with a colored outline to draw attention to it in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetBorderColor(Api.HexColor('#FF6F3D'));
```
