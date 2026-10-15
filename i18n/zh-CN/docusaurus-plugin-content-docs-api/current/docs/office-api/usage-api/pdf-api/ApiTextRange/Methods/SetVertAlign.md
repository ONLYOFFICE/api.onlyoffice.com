# SetVertAlign

指定将应用于范围内容的对齐方式，相对于范围文本的默认外观：**"baseline"** - 当前文本范围中的字符将按默认文本基线对齐。**"subscript"** - 当前文本范围中的字符将对齐到默认文本基线下方。**"superscript"** - 当前文本范围中的字符将对齐到默认文本基线上方。

## 语法

```javascript
expression.SetVertAlign(type);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | "baseline" \| "subscript" \| "superscript" \| null |  | 应用于文本内容的垂直对齐类型。传递 *null* 可移除垂直对齐。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

在 PDF 页面的形状中将范围内的文本提升到基线之上。

```javascript editor-pdf
// Superscript and subscript are both set through this method.

// Turn the trailing digit into a superscript.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("E=mc2");

const range = shape.GetTextRange();

range.GetRange(4, 5).SetVertAlign("superscript");
```
