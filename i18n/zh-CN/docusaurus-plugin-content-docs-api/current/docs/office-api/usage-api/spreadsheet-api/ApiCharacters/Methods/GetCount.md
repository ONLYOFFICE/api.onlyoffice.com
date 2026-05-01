# GetCount

返回表示集合中对象数量的值。

## 语法

```javascript
expression.GetCount();
```

`expression` - 表示 [ApiCharacters](../ApiCharacters.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

获取表示电子表格中集合中对象数量的值。

```javascript editor-xlsx
// How to get collection objects count in a spreadsheet.

// How to get array length using the characters API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let count = characters.GetCount();
worksheet.GetRange("B3").SetValue("Number of characters: " + count);
```
