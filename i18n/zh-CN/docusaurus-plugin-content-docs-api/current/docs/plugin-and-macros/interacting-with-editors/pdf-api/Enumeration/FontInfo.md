# FontInfo

包含字体信息的对象。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| m_aPanose | number[] | PANOSE 字体分类编号，是对字体关键视觉特征（如对比度、粗细和衬线样式）的紧凑 10 字节描述。 |
| m_bBold | boolean | 指定字体字符是否为粗体。 |
| m_bIsFixed | boolean | 指定当前字体是否为等宽字体。 |
| m_bItalic | boolean | 指定字体字符是否为斜体。 |
| m_eFontFormat | number | 用于存储字体数据的特定文件类型：**0** - *.fon，**1** - *.ttf，**2** - *.ttf、*.otf (CFF)，**3** - 未知字体格式。 |
| m_lIndex | number | 如果文件中有多个字体，则为文件中的字体编号。 |
| m_sFamilyClass | number | 由 IBM 分配给每个字体系列的字体系列类值。 |
| m_shAscent | number | 裁剪区域基线以上的高度。 |
| m_shAvgCharWidth | number | 字体中所有非零宽度字形的字宽（宽度）的算术平均值。 |
| m_shCapHeight | number | 基线与大写字母近似高度之间的距离，以 FUnits 为单位。 |
| m_shDescent | number | 裁剪区域基线以下的垂直范围。 |
| m_shLineGap | number | 当前字体的排版行间距。 |
| m_shXHeight | number | 基线与非上升小写字母近似高度之间的距离，以 FUnits 为单位。 |
| m_ulCodePageRange1 | number | 字体文件涵盖的代码页（位 0-31）。 |
| m_ulCodePageRange2 | number | 字体文件涵盖的代码页（位 32-63）。 |
| m_ulUnicodeRange1 | number | 字体文件涵盖的 Unicode 范围（位 0-31）。 |
| m_ulUnicodeRange2 | number | 字体文件涵盖的 Unicode 范围（位 32-63）。 |
| m_ulUnicodeRange3 | number | 字体文件涵盖的 Unicode 范围（位 64-95）。 |
| m_ulUnicodeRange4 | number | 字体文件涵盖的 Unicode 范围（位 96-127）。 |
| m_usWeigth | number | 字体字符的视觉粗细（笔画黑度或粗细）（1-1000）。 |
| m_usWidth | number | 与正常宽高比（宽度与高度的比率）的相对变化。 |
| m_wsFontName | string | 字体名称。 |
| m_wsFontPath | string | 当前字体文件的路径。 |
## 类型

Object



## 示例

```javascript
let fontInfo = {
    "m_wsFontName": "Open Sans",
    "m_wsFontPath": "OpenSans-Bold.ttf",
    "m_lIndex": 0,
    "m_bBold": true,
    "m_bItalic": false,
    "m_bIsFixed": false,
    "m_aPanose": [2, 11, 8, 6, 3, 5, 4, 2, 2, 4],
    "m_ulUnicodeRange1": 3758097135,
    "m_ulUnicodeRange2": 1073750107,
    "m_ulUnicodeRange3": 40,
    "m_ulUnicodeRange4": 0,
    "m_ulCodePageRange1": 536871327,
    "m_ulCodePageRange2": 0,
    "m_usWeigth": 700,
    "m_usWidth": 5,
    "m_sFamilyClass": 2050,
    "m_eFontFormat": 1,
    "m_shAvgCharWidth": 632,
    "m_shAscent": 765,
    "m_shDescent": -240,
    "m_shLineGap": 64,
    "m_shXHeight": 545,
    "m_shCapHeight": 713
};
```
