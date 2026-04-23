# End

返回表示指定范围中指定方向末端的 Range 对象。

## 语法

```javascript
expression.End(direction);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| direction | 必需 | [Direction](../../Enumeration/Direction.md) |  | 指定范围中末端的方向。* |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

此示例演示如何获取表示指定范围中指定方向末端的 Range 对象。

```javascript editor-xlsx
// Get a left end part of a range and fill it with color.

// Get a specified direction end of a range.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("C4:D5");
range.End("xlToLeft").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
