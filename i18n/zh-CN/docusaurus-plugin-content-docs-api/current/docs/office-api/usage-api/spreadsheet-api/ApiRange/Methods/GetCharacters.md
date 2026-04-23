# GetCharacters

返回表示对象文本中字符范围的 ApiCharacters 对象。使用 ApiCharacters 对象格式化文本字符串中的字符。

## 语法

```javascript
expression.GetCharacters(Start, Length);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | 必需 | number |  | 要返回的第一个字符。如果此参数为 1 或省略，此属性将返回从第一个字符开始的字符范围。 |
| Length | 必需 | number |  | 要返回的字符数。如果省略此参数，此属性将返回字符串的其余部分（起始字符之后的所有内容）。 |

## 返回值

[ApiCharacters](../../ApiCharacters/ApiCharacters.md)

## 示例

此示例演示如何获取表示对象文本中字符范围的 ApiCharacters 对象。

```javascript editor-xlsx
// How to get range characters.

// Get the range characters, get their font object and set it to bold.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);

```
