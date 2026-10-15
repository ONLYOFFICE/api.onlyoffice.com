# CreateButtonField

创建按钮字段。

## 语法

```javascript
expression.CreateButtonField(rect);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 控件矩形 |

## 返回值

[ApiButtonField](../../ApiButtonField/ApiButtonField.md)

## 示例

创建按钮字段并将其添加到文档。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLabel("Click me");
```
