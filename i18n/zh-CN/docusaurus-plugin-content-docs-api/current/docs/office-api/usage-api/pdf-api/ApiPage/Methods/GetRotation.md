# GetRotation

获取页面旋转角度

## 语法

```javascript
expression.GetRotation();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

检查 PDF 中应用于页面的当前旋转角度。

```javascript editor-pdf
// How do I determine if a page is rotated in a PDF?

// Read the page's rotation setting to display its current orientation in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('Page rotate is: ' + page.GetRotation());
```
