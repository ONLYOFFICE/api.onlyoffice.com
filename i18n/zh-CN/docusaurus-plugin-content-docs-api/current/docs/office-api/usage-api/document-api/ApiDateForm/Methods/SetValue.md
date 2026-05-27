# SetValue

设置当前表单的日期。

## 语法

```javascript
expression.SetValue(value);
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | Date \| string |  | 日期对象或字符串格式的日期。 |

## 返回值

boolean

## 示例

```javascript editor-docx
// The SetValue method accepts either a Date instance or a date string and applies it to the form.

// Create a date form and assign a specific date using SetValue.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "EventDate", "tip": "Enter the event date", "required": true, "placeholder": "Event date", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetValue(new Date(2024, 0, 15));
```
