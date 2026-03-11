# GetCharLimit

获取文本字段的字符限制。
&lt;note&gt; 字符限制为 0 表示字段没有字符限制

## 语法

```javascript
expression.GetCharLimit();
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例获取文本字段并显示字符限制属性。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(20);
textField.SetValue('Char limit is: ' + textField.GetCharLimit());

```
