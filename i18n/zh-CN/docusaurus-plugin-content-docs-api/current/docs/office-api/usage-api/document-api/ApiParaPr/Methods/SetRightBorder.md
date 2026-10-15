# SetRightBorder

指定将在指定段落周围的页面右侧显示的边框。

## 语法

```javascript
expression.SetRightBorder(type, size, space, color);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [BorderType](../../Enumeration/BorderType.md) |  | 边框样式。 |
| size | 必需 | [pt_8](../../Enumeration/pt_8.md) |  | 当前右侧边框的宽度，以磅的八分之一为单位。 |
| space | 必需 | [pt](../../Enumeration/pt.md) |  | 用于放置此边框的段落右侧间距偏移量，以磅为单位。 |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 边框颜色。 |

## 返回值

boolean

## 示例

在文档中使用样式的段落属性为段落的右侧添加边框。

```javascript editor-docx
// How do I place a visible border on the right edge of a paragraph in a document?

// Highlight a paragraph by drawing a colored line along its right margin.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetRightBorder("single", 24, 0, Api.Color(255, 111, 61));
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border at its right side.");
```
