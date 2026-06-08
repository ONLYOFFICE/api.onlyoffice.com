# CreateListboxField

创建列表框字段。

## 语法

```javascript
expression.CreateListboxField(rect);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 控件矩形 |

## 返回值

[ApiListboxField](../../ApiListboxField/ApiListboxField.md)

## 示例

创建并向文档添加列表框字段。

```javascript editor-pdf
// Create the listbox field in a PDF document.

// Create the listbox field and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let listboxField = Api.CreateListboxField([10, 10, 100, 70]);
page.AddObject(listboxField);
listboxField.AddOption('Option 1');
listboxField.AddOption('Option 2');
listboxField.AddOption('Option 3');
```
