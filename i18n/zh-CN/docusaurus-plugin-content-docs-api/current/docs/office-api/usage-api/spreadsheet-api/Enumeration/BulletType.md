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

This example shows how to create a numbering.

```javascript editor-xlsx
// The paragraph will be starting with the Arabic numeral which has parenthesis.

// How to create a bullet indicating its type.

// Create a numbered paragraph in arabic numeral.

let bullet = Api.CreateNumbering("ArabicParenR");
```
