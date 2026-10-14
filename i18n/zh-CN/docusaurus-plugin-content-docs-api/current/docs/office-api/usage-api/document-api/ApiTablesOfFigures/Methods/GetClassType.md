# GetClassType

返回 ApiTablesOfFigures 类的类型。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTablesOfFigures](../ApiTablesOfFigures.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"tablesOfFigures"

## 示例

获取图表目录集合的类类型。

```javascript editor-docx
// Obtain the tables of figures collection from the current document.

// Read the class type string that identifies the collection.

let doc = Api.GetDocument();
let tablesOfFigures = doc.GetTablesOfFigures();
let classType = tablesOfFigures.GetClassType();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Class type: " + classType);
doc.Push(resultParagraph);
```
