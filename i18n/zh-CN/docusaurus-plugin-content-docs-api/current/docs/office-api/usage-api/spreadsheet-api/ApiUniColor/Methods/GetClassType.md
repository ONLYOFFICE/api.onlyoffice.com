# GetClassType

返回 ApiUniColor 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiUniColor](../ApiUniColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"uniColor"

## 示例

此示例获取类类型并将其粘贴到演示文稿中。

```javascript editor-xlsx
// How to get a class type of ApiUniColor.

// Get a class type of ApiUniColor and display it in the worksheet.

const worksheet = Api.GetActiveSheet();
const presetColor = Api.CreatePresetColor("peachPuff");
const gs1 = Api.CreateGradientStop(presetColor, 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
const classType = presetColor.GetClassType();
worksheet.SetColumnWidth(0, 15);
worksheet.SetColumnWidth(1, 10);
worksheet.GetRange("A1").SetValue("Class Type = ");
worksheet.GetRange("B1").SetValue(classType);

```
