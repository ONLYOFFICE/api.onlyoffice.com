# SetVisible

设置工作表的可见性状态。

## 语法

```javascript
expression.SetVisible(isVisible);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isVisible | 必需 | boolean |  | 指定工作表是否可见。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置工作表的可见性状态。

```javascript editor-xlsx
// How to set visibility of the sheet.

// Make a sheet visible or not.

let worksheet = Api.GetActiveSheet();
worksheet.SetVisible(true);
worksheet.GetRange("A1").SetValue("The current worksheet is visible.");
```
