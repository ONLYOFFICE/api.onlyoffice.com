# GetClassType

返回 ApiInlineLvlSdt 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"inlineLvlSdt"

## 示例

识别文档中内联内容控件的类类型。

```javascript editor-docx
// How do I get the class type of an inline content control in a document?

// Verify the object type at runtime to distinguish content controls from other elements in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
let classType = inlineLvlSdt.GetClassType();
paragraph.AddLineBreak();
paragraph.AddText("Class Type = " + classType);
```
