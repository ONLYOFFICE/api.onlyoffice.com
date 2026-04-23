# GetCaption

返回表示指定字符范围文本的字符串值。

## 语法

```javascript
expression.GetCaption();
```

`expression` - 表示 [ApiCharacters](../ApiCharacters.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例演示如何获取表示指定字符范围文本的字符串值。

```javascript editor-xlsx
// Get a value that represents the label text for the pivot field.

// How to get and display caption of the text.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let caption = characters.GetCaption();
worksheet.GetRange("B3").SetValue("Caption: " + caption);
```
