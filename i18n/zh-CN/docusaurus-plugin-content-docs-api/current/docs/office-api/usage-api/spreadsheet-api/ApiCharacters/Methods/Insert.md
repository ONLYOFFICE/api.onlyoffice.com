# Insert

插入字符串以替换指定的字符。

## 语法

```javascript
expression.Insert(String);
```

`expression` - 表示 [ApiCharacters](../ApiCharacters.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| String | 必需 | string |  | 要插入的字符串。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例插入字符串以替换指定的字符。

```javascript editor-xlsx
// How to replace characters with a different string value.

// Change the characters to another string value.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.Insert("string");
```
