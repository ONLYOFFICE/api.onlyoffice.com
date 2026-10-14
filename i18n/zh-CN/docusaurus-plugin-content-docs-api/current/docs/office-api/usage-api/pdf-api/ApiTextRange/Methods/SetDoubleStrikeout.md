# SetDoubleStrikeout

指定当前范围的内容显示时，行上显示的每个字符都有两条水平线穿过。

## 语法

```javascript
expression.SetDoubleStrikeout(isDoubleStrikeout);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDoubleStrikeout | 必需 | boolean \| null |  | 传递 *null* 可移除双删除线。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## 示例

在 PDF 页面的形状中为范围内的文本添加双删除线。

```javascript editor-pdf
// The formatting applies to the covered fragment only.

// Double strike out the first word.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

const range = shape.GetTextRange();

range.GetRange(0, 5).SetDoubleStrikeout(true);
```
