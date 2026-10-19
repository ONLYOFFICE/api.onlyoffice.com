# ThemeFontScript

主题字体可用的文字脚本：**"latin"** - 拉丁文本，**"ea"** - 东亚文本，**"cs"** - 复杂文种文本。

## 类型

枚举

## 值

- "latin"
- "ea"
- "cs"

## 示例

获取主题字体方案中用于东亚文本的主要字体。

```javascript editor-pptx
// Specify the script whose theme font is returned.

// Pass the "ea" script to the GetMajorFont method of the ApiThemeFontScheme object.

const eastAsianFont = fontScheme.GetMajorFont("ea");
```
