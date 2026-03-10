# RemoveElement

使用指定位置从当前内联文本内容控件中删除元素。

## 语法

```javascript
expression.RemoveElement(nPos);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 我们要从当前内联文本内容控件中删除的元素的位置。 |

## 返回值

boolean

## 示例

此示例使用指定位置从内联文本内容控件中删除元素。

```javascript editor-docx
// How to remove an element from the inline text control.

// Delete the element using its position index from the inline text control.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run1 = Api.CreateRun();
run1.AddText("This is the first text run in the inline text content control.");
inlineLvlSdt.AddElement(run1, 0);
let run2 = Api.CreateRun();
run2.AddText("This is the second text run in the inline text content control. The first text run was removed.");
inlineLvlSdt.AddElement(run2, 1);
inlineLvlSdt.RemoveElement(0);
```
