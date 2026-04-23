# GetParent

返回指定字符的父对象。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiCharacters](../ApiCharacters.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

此示例演示如何获取指定字符的父对象。

```javascript editor-xlsx
// How to get a parent of the characters.

// Find a characters parent of the selected range.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let parent = characters.GetParent();
parent.SetBorders("Bottom", "Thick", Api.CreateColorFromRGB(255, 111, 61));
```
