# InsertInContentControl

用富文本内容控件包装图形对象。

## 语法

```javascript
expression.InsertInContentControl(nType);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nType | 必需 | number |  | 定义此方法是返回 ApiBlockLvlSdt（nType === 1）还是 ApiDrawing（除 1 以外的任何值）对象。 |

## 返回值

[ApiDrawing](../../ApiDrawing/ApiDrawing.md) \| [ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## 示例

此示例用富文本内容控件包装图形对象。

```javascript editor-docx
// How to add the drawing to the paragraph.

// Create a rectangle and then insert it to the another content control.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This graphic object was wrapped in content control");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.InsertInContentControl(1);
```
