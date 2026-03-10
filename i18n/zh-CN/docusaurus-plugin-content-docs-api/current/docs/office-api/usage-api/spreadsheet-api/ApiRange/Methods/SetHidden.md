# SetHidden

设置值隐藏属性。指定的范围必须跨越整列或整行。

## 语法

```javascript
expression.SetHidden(isHidden);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isHidden | 必需 | boolean |  | 指定当前范围中的值是否隐藏。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置值隐藏属性。

```javascript editor-xlsx
// How to hide cells from a range.

// Get a range and make specified cells invisible.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRows("1:3");
range.SetHidden(true);
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
let hidden = range.GetHidden();
worksheet.GetRange("A4").SetValue("The values from A1:C1 are hidden: " + hidden);
```
