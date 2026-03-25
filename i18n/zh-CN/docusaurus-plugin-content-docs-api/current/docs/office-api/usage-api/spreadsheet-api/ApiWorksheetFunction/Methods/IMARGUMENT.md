# IMARGUMENT

返回参数 Theta，以弧度表示的角度。

## 语法

```javascript
expression.IMARGUMENT(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 以 *x + yi* 或 *x + yj* 形式表示的复数。 |

## 返回值

number

## 示例

此示例演示如何返回辐角 Theta，一个以弧度表示的角。

```javascript editor-xlsx
// How to get an angle expressed in radians.

// Use a function to get an angle expressed in radians.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMARGUMENT("-2+2.5i"));
```
