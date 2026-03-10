# SearchData

搜索属性。

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| After | [ApiRange](../ApiRange/ApiRange.md) | 要在其后开始搜索的单元格。如果未指定此参数，则搜索从区域左上角的单元格之后开始。 |
| LookAt | [XlLookAt](../Enumeration/XlLookAt.md) | 指定是匹配整个搜索文本还是搜索文本的任何部分。 |
| LookIn | [XlFindLookIn](../Enumeration/XlFindLookIn.md) | 搜索数据类型（公式或值）。 |
| MatchCase | boolean | 是否区分大小写。默认值为 "false"。 |
| SearchDirection | [XlSearchDirection](../Enumeration/XlSearchDirection.md) | 区域搜索方向 - 下一个匹配项或上一个匹配项。 |
| SearchOrder | [XlSearchOrder](../Enumeration/XlSearchOrder.md) | 区域搜索顺序 - 按行或按列。 |
| What | string \| undefined | 要搜索的数据。 |
