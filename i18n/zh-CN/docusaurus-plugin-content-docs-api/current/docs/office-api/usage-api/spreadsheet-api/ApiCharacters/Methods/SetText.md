# SetText

设置指定字符的文本。

## 语法

```javascript
expression.SetText(Text);
```

`expression` - 表示 [ApiCharacters](../ApiCharacters.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Text | 必需 | string |  | 要设置的文本。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置指定字符的文本。

```javascript editor-xlsx
// Update characters collection by setting a new text.

// Set text for the characters of the range.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.SetText
```
