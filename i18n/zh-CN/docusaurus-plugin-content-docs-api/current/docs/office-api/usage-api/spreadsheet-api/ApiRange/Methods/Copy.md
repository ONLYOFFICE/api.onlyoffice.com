# Copy

将范围复制到指定范围或剪贴板。

## 语法

```javascript
expression.Copy(destination);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| destination | 可选 | [ApiRange](../../ApiRange/ApiRange.md) |  | 指定要将指定范围复制到的新范围。如果省略此参数，范围将复制到剪贴板。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例将范围复制到指定范围。

```javascript editor-xlsx
// How to create identical range.

// Get a range and create a copy of it.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is a sample text which is copied to the range A3.");
range.Copy(worksheet.GetRange("A3"));
```
