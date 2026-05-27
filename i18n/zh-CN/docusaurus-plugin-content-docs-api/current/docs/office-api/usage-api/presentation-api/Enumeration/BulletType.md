# BulletType

将添加到电子表格或演示文稿段落中的项目符号类型。

## 类型

枚举

## 值

- "None"
- "ArabicPeriod"
- "ArabicParenR"
- "RomanUcPeriod"
- "RomanLcPeriod"
- "AlphaLcParenR"
- "AlphaLcPeriod"
- "AlphaUcParenR"
- "AlphaUcPeriod"

## 示例

创建编号。

```javascript editor-pptx
// The paragraph will be starting with the Arabic numeral which has parenthesis.

// Create a numbered paragraph in Arabic numeral format.

let bullet = Api.CreateNumbering("ArabicParenR");
```
