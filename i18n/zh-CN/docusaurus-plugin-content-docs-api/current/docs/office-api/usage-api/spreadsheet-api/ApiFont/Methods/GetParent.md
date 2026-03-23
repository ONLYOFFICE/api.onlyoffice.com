# GetParent

返回指定字体的父级 ApiCharacters 对象。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiCharacters](../../ApiCharacters/ApiCharacters.md)

## 示例

此示例演示如何获取指定字体的父级 ApiCharacters 对象。

```javascript editor-xlsx
// How to determine a font object's parent.

// Get a parent of a font and add text to it.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let font = characters.GetFont();
let parent = font.GetParent();
parent.SetText("string");
```
