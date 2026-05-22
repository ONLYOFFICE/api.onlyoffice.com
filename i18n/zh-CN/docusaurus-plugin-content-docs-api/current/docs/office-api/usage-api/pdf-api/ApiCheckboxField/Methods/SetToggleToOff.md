# SetToggleToOff

设置字段的切换为关闭属性。

## 语法

```javascript
expression.SetToggleToOff(bToggle);
```

`expression` - 表示 [ApiCheckboxField](../ApiCheckboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bToggle | 必需 | boolean |  | 可切换为关闭 |

## 返回值

boolean

## 示例

启用或禁用 PDF 中复选框的取消切换行为。

```javascript editor-pdf
// How do I make a checkbox uncheck when clicked if already checked in a PDF?

// Control whether a checked checkbox deselects on a second click in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);
```
