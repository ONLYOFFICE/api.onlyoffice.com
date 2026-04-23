# Select

选择当前内容控件。

## 语法

```javascript
expression.Select();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例展示如何创建内联内容控件并选择它。

```javascript editor-docx
let doc = Api.GetDocument();
let checkbox = doc.AddCheckBoxContentControl();
checkbox.Select();
```
