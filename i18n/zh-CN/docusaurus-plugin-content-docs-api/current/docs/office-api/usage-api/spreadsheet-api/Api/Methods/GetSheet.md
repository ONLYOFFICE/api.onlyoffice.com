# GetSheet

返回表示工作表的对象。

## 语法

```javascript
expression.GetSheet(nameOrIndex);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nameOrIndex | 必需 | string \| number |  | 工作表名称或工作表索引。 |

## 返回值

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md) \| null

## 示例

此示例演示如何获取表示工作表的对象。

```javascript editor-xlsx
// How to get a sheet knowing its name.

// Find and get a sheet object by its name.

let worksheet = Api.GetSheet("Sheet1");
worksheet.GetRange("A1").SetValue("This is a sample text on 'Sheet1'.");
```
