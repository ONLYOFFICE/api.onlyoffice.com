# GetIndex

获取页面索引

## 语法

```javascript
expression.GetIndex();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例获取文档中第一页的页面索引并在文本字段中显示。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('Page index is: ' + page.GetIndex());
```
