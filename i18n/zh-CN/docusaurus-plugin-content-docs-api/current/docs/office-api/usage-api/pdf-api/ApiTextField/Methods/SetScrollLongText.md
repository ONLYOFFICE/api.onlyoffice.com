# SetScrollLongText

设置文本字段可滚动长文本的属性。

## 语法

```javascript
expression.SetScrollLongText(bScroll);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bScroll | 必需 | boolean |  | 字段是否可滚动长文本 |

## 返回值

boolean

## 示例

此示例添加文本字段并为其设置滚动长文本属性。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetScrollLongText(true);
textField.SetValue('Scroll long text property is: ' + textField.IsScrollLongText());

```
