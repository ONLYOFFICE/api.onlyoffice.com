# GetShowInput

返回是否显示数据验证输入消息。

## 语法

```javascript
expression.GetShowInput();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

This example gets whether the input message is displayed.

```javascript editor-xlsx
// How to check if validation shows an input message.

// Get the ShowInput setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetShowInput(true);
let showInput = validation.GetShowInput();
worksheet.GetRange("B1").SetValue("Show input: " + showInput);

```
