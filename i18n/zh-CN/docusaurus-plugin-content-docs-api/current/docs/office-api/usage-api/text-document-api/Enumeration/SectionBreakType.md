# SectionBreakType

节分隔符类型，定义当前节的内容相对于上一节的放置方式。
WordprocessingML 支持五种不同类型的节分隔符：
-**下一页**（「nextPage」）- 在下一页开始新节（默认值）。
-**奇数页**（「oddPage」）- 在下一个奇数页开始新节。
-**偶数页**（「evenPage」）- 在下一个偶数页开始新节。
-**连续**（「continuous」）- 在下一段落开始新节。
这意味着连续节分隔符可能不指定某些页面级节属性，
因为它们应从后续节继承。
但是，这些分隔符可以指定其他节属性，如行号和脚注/尾注设置。
-**分栏**（「nextColumn」）- 在页面的下一栏开始新节。

## 类型

枚举

## 值

- "nextPage"
- "oddPage"
- "evenPage"
- "continuous"
- "nextColumn"
