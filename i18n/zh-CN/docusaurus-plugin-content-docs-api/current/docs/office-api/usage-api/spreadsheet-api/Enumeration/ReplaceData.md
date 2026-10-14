# ReplaceData

搜索和替换属性。

## 类型

Object

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| LookAt | [XlLookAt](../Enumeration/XlLookAt.md) | 指定是匹配整个搜索文本还是搜索文本的任何部分。 |
| MatchCase | boolean | 是否区分大小写。默认值为 “false”。 |
| ReplaceAll | boolean | 指定是否替换所有找到的数据。默认值为 “true”。 |
| Replacement | string | 替换字符串。 |
| SearchDirection | [XlSearchDirection](../Enumeration/XlSearchDirection.md) | 区域搜索方向 - 下一个匹配项或上一个匹配项。 |
| SearchOrder | [XlSearchOrder](../Enumeration/XlSearchOrder.md) | 区域搜索顺序 - 按行或按列。 |
| What | string \| RegExp \| undefined | 要搜索的数据，或用于匹配单元格文本的正则表达式。传递 RegExp 时，将忽略 MatchCase 和 Wildcards 参数（改用 "i" 标志控制是否区分大小写）。添加 "g" 标志可替换单元格内的每个匹配项，否则仅替换第一个匹配项；而字符串始终替换每个匹配项。 |
| Wildcards | boolean | 指定是否将搜索文本解释为通配符模式："*" 匹配任意字符序列，"?" 匹配任意单个字符，使用 "~*" / "~?" 查找字面字符 "*" / "?"。默认值为 "false"。 |
