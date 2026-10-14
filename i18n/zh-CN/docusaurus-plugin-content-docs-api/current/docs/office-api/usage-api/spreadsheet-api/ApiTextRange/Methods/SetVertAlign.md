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

在工作表的形状中将范围内的文本提升到基线之上。

```javascript editor-xlsx
// Superscript and subscript are both set through this method.

// Turn the trailing digit into a superscript.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("E=mc2");

let range = shape.GetTextRange();

range.GetRange(4, 5).SetVertAlign("superscript");
```
