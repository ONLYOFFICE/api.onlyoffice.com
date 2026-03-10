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

This example sets toggle to off property for checkbox field.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);
```
