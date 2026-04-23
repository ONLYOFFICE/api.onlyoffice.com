# Cut

剪切范围并将其保存到剪贴板或粘贴到指定范围。

## 语法

```javascript
expression.Cut(destination);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| destination | 可选 | [ApiRange](../../ApiRange/ApiRange.md) |  | 指定要将剪切范围粘贴到的新范围。如果省略此参数，范围将复制到剪贴板。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例将范围剪切到剪贴板。

```javascript editor-xlsx
// How to cut a range.

// Get a range, set some value for it and cut it to the clipboard.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is a sample text which is move to the range A3.");
range.Cut(worksheet.GetRange("A3"));
```
