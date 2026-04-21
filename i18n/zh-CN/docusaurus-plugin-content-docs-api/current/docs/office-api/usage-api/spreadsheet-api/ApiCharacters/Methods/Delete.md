# Delete

删除 ApiCharacters 对象。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiCharacters](../ApiCharacters.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

删除电子表格中的字符对象。

```javascript editor-xlsx
// How to delete characters from an array in a spreadsheet.

// Delete and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
characters.Delete();
```
