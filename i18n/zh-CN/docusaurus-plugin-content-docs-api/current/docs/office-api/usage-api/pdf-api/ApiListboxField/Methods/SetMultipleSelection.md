# SetMultipleSelection

设置字段的多选属性。

## 语法

```javascript
expression.SetMultipleSelection(bMulti);
```

`expression` - 表示 [ApiListboxField](../ApiListboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bMulti | 必需 | boolean |  | 允许用户选择多个值 |

## 返回值

boolean

## 示例

允许 PDF 中的列表选择字段接受多个选择。

```javascript editor-pdf
// How do I enable multiple selections in a PDF?

// Configure the field to permit picking several options in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let listboxField = Api.CreateListboxField([10, 10, 160, 100]);
page.AddObject(listboxField);

listboxField.AddOption('Option 1');
listboxField.AddOption('Option 2');
listboxField.AddOption('Option 3');
listboxField.AddOption('Option 4');
listboxField.SetMultipleSelection(true);
listboxField.SetValueIndexes([0, 3]);
```
