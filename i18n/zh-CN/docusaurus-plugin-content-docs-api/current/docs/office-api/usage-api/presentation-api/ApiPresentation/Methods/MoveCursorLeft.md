# MoveCursorLeft

向左移动光标。

## 语法

```javascript
expression.MoveCursorLeft(count, addToSelect, byWords);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | 可选 | number | 1 | 移动次数。 |
| addToSelect | 可选 | boolean | false | 指定在移动过程中是否选择文本。 |
| byWords | 可选 | boolean | false | 指定是按单词移动还是按字符移动。 |

## 返回值

boolean

## 示例

在形状文本范围内将文本光标向左移动一个位置。

```javascript editor-pptx
// Cursor movement methods allow precise text navigation in interactive or plugin mode.

// Position the cursor at the end, move it left, then insert text at the earlier location.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
const range = shape.GetTextRange();
range.SetText("Hello World");
range.SetColor(Api.RGB(0, 0, 0));
range.MoveCursorToPos(range.GetEndPos());
presentation.MoveCursorLeft(5, false, false);
presentation.EnterText("Beautiful ");
```
