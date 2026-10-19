# MoveCursorDown

向下移动光标。

## 语法

```javascript
expression.MoveCursorDown(count, addToSelect);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | 可选 | number | 1 | 移动次数。 |
| addToSelect | 可选 | boolean | false | 指定在移动过程中是否选择文本。 |

## 返回值

boolean

## 示例

在多行形状文本范围内将文本光标向下移动一行。

```javascript editor-pptx
// Advances the cursor from the current line to the corresponding position on the next line.

// Set up a two-line shape, position the cursor on the first line, then move it down.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1500000);
slide.RemoveAllObjects();
slide.AddObject(shape);
const range = shape.GetTextRange();
range.SetText("First line\nSecond line");
range.SetColor(Api.RGB(0, 0, 0));
range.MoveCursorToPos(0);
presentation.MoveCursorDown(1, false);
presentation.EnterText("[cursor] ");
```
