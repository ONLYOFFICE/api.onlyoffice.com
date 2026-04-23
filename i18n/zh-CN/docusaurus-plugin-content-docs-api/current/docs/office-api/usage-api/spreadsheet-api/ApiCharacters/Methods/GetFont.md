# GetFont

返回表示指定字符字体的 ApiFont 对象。

## 语法

```javascript
expression.GetFont();
```

`expression` - 表示 [ApiCharacters](../ApiCharacters.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFont](../../ApiFont/ApiFont.md)

## 示例

此示例演示如何获取表示指定字符字体的 ApiFont 对象。

```javascript editor-xlsx
// How to get font style of the array of characters.

// Use font of the specified characters to set their style.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);
```
