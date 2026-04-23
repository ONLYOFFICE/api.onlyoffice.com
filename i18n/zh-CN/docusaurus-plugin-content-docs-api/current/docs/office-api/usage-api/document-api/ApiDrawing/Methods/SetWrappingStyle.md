# SetWrappingStyle

设置当前对象（图像、形状、图表）的环绕类型。可以设置以下环绕样式类型之一：
-**"inline"** - 对象被视为文本的一部分，像字符一样，因此当文本移动时，对象也会移动。在这种情况下，定位选项不可访问。
如果选择以下样式之一，则对象可以独立于文本移动并精确定位在页面上：
-**"square"** - 文本环绕对象的矩形边界框。
-**"tight"** - 文本环绕对象的实际边缘。
-**"through"** - 文本环绕对象边缘并填充对象内的开放空白区域。
-**"topAndBottom"** - 文本仅位于对象的上方和下方。
-**"behind"** - 文本覆盖在对象上方。
-**"inFront"** - 对象覆盖在文本上方。

## 语法

```javascript
expression.SetWrappingStyle(sType);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | "inline" \| "square" \| "tight" \| "through" \| "topAndBottom" \| "behind" \| "inFront" |  | 对象可用的环绕样式类型。 |

## 返回值

boolean

## 示例

此示例创建一个环绕样式为「square」的形状。

```javascript editor-docx
// How to wrap the shape with squared style.

// Create a drawing, add its properties and set its wrapping style.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text (horizontally) is half an inch (457200 English measure units).");
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
paragraph.AddDrawing(drawing);
```
