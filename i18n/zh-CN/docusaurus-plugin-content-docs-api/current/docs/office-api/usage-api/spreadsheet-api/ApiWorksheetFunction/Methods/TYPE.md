# TYPE

返回表示值数据类型的整数：数字 = 1；文本 = 2；逻辑值 = 4；错误值 = 16；数组 = 64；复合数据 = 128。

## 语法

```javascript
expression.TYPE(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | number \| string \| boolean \| (number \| string \| boolean)[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 要测试的值。 |

## 返回值

number

## 示例

此示例演示如何返回表示值的数据类型的整数：数字 = 1；文本 = 2；逻辑值 = 4；错误值 = 16；数组 = 64；复合数据 = 128。

```javascript editor-xlsx
// How to get an integer representing the data type of a value.

// Use a function to return the data type of a value.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TYPE(255));
worksheet.GetRange("A2").SetValue(func.TYPE(true));
worksheet.GetRange("A3").SetValue(func.TYPE("Online Office"));
```
