# GetParent

返回父 SortFields 集合。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiSortField](../ApiSortField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSortFields](../../ApiSortFields/ApiSortFields.md)

## 示例

访问电子表格中单个排序字段所属的完整排序条件列表。

```javascript editor-xlsx
// How do I step back from one sort field to inspect the whole set of sorting rules in a spreadsheet?

// Count or review all active sort fields by retrieving the owning collection in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
let field = sortFields.Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");
let parent = field.GetParent();

worksheet.GetRange("C1").SetValue("Parent fields count:");
worksheet.GetRange("D1").SetValue(parent.GetCount());
```
