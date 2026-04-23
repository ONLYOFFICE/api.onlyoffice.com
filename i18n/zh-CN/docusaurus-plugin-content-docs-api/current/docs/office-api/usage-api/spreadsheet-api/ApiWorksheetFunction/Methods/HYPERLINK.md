# HYPERLINK

创建跳转到当前工作簿中另一位置的快捷方式，或打开存储在硬盘驱动器、网络服务器或 Internet 上的文档。

## 语法

```javascript
expression.HYPERLINK(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 提供要打开的文档的路径和文件名的文本，可以是硬盘位置、UNC 地址或 URL 路径。 |
| arg2 | 可选 | string \| [ApiRange](../../ApiRange/ApiRange.md) \| number \| [ApiName](../../ApiName/ApiName.md) |  | 在单元格中显示的文本或数字。如果省略，单元格将显示链接位置文本。 |

## 返回值

string

## 示例

此示例演示如何创建跳转到当前工作簿中其他位置或打开存储在硬盘、网络服务器或互联网上的文档的快捷方式。

```javascript editor-xlsx
// How to create a hyperlink.

// Use a function to add url to the text.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HYPERLINK("https://example.com/files/example.xlsx", "Click here"));
```
