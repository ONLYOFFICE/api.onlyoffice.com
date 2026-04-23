# GetLocale

返回当前区域设置 ID。

## 语法

```javascript
expression.GetLocale();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例演示如何获取当前区域设置 ID。

```javascript editor-xlsx
// How to set and get current locale ID.

// Get region ID and insert information into the cell.

let worksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
let locale = Api.GetLocale();
worksheet.GetRange("A1").SetValue("Locale: " + locale);
```
