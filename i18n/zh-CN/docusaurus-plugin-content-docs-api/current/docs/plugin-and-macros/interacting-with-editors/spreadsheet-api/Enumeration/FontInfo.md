# 字体信息

一个包含字体信息的对象。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| m_aPanose | number[] | PANOSE 字体分类号，用于简洁描述字体关键的视觉特性（如对比度、字重、衬线风格等），共 10 字节。 |
| m_bBold | boolean | 指定字体字符是否为加粗。 |
| m_bIsFixed | boolean | 指定当前字体是否为等宽字体。 |
| m_bItalic | boolean | 指定字体字符是否为斜体。 |
| m_eFontFormat | number | 字体数据所使用的具体文件类型：**0** - *.fon，**1** - *.ttf，**2** - *.ttf, *.otf（CFF），**3** - 未知字体格式。 |
| m_lIndex | number | 当字体文件中包含多个字体时，表示当前字体在文件中的编号。 |
| m_sFamilyClass | number | 字体家族分类，由 IBM 为每个字体家族分配的数值。 |
| m_shAscent | number | 基线以上的高度，用于裁剪区域。 |
| m_shAvgCharWidth | number | 字体中所有非零宽度字符的平均转义宽度。 |
| m_shCapHeight | number | 从基线到大写字母大致高度的距离，以 FUnits（字体单位）为单位。 |
| m_shDescent | number | 基线以下的垂直范围，用于裁剪区域。 |
| m_shLineGap | number | 当前字体的排版行间距。 |
| m_shXHeight | number | 从基线到不带上升部的中小写字母大致高度的距离（以 FUnits 计）。 |
| m_ulCodePageRange1 | number | 字体文件覆盖的代码页（第 0-31 位）。 |
| m_ulCodePageRange2 | number | 字体文件覆盖的代码页（第 32-63 位）。 |
| m_ulUnicodeRange1 | number | 字体文件覆盖的 Unicode 范围（第 0-31 位）。 |
| m_ulUnicodeRange2 | number | 字体文件覆盖的 Unicode 范围（第 32-63 位）。 |
| m_ulUnicodeRange3 | number | 字体文件覆盖的 Unicode 范围（第 64-95 位）。 |
| m_ulUnicodeRange4 | number | 字体文件覆盖的 Unicode 范围（第 96-127 位）。 |
| m_usWeigth | number | 字体字符的视觉字重（笔画黑度或粗细），取值范围 1–1000。 |
| m_usWidth | number | 与正常宽高比相比的相对变化（宽度与高度的比例）。 |
| m_wsFontName | string | 字体名称。 |
| m_wsFontPath | string | 当前字体对应文件的路径。 |
## 类型

对象（Object）



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
