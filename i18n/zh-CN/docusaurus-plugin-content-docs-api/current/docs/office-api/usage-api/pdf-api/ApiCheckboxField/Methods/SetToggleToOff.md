# SetToggleToOff

设置选中状态是否可以取消。

## 语法

```javascript
expression.SetToggleToOff(allowToggleOff);
```

`expression` - 表示 [ApiCheckboxField](../ApiCheckboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| allowToggleOff | 必需 | boolean |  | 指定选中状态是否可以取消。 |

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
