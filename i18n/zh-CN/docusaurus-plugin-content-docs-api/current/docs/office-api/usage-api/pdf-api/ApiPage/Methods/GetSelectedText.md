# GetSelectedText

获取页面上的选定文本

## 语法

```javascript
expression.GetSelectedText();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

This example selects the text on the page and returns it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({x: 10, y: 10}, {x: 100, y: 100});
console.log(`The selected text is: ${page.GetSelectedText()}`);
```
