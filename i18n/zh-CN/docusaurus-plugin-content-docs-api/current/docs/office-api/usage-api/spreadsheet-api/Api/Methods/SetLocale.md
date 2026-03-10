# SetLocale

设置文档的区域设置。

## 语法

```javascript
expression.SetLocale(LCID);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| LCID | 必需 | number |  | 指定的区域设置。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置文档的区域设置。

```javascript editor-xlsx
// How to set a region to the document.

// Set or change the locale of the document.

let worksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
worksheet.GetRange("A1").SetValue("A sample spreadsheet with the language set to English (Canada).");
```
