# MoveCursorToPos

将光标移动到当前范围内的指定位置。

## 语法

```javascript
expression.MoveCursorToPos(pos);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | 可选 | number | 0 | 所需的光标位置。 |

## 返回值

boolean

## 示例

在工作表的形状中将光标移动到范围所包含的文本内。

```javascript editor-xlsx
// Places the cursor precisely before further editing.

// Move the cursor between the two words.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

range.MoveCursorToPos(6);
```
