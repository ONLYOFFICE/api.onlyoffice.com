---
sidebar_position: 1
title: Hello world 宏
---
# Hello world 宏

宏非常简单 — 纯 JavaScript，无需安装。

**时间：** 2 分钟 | **技能等级：** 初级

## 第 1 步：打开宏编辑器

1. 在 ONLYOFFICE 中打开任意文档。
2. 前往**工具 → 宏**。
3. 宏编辑器将会打开。

## 第 2 步：编写您的第一个宏

将以下代码粘贴到编辑器中：

```javascript
(function() {
    // Get the active document
    var oDocument = Api.GetDocument();

    // Create a new paragraph
    var oParagraph = Api.CreateParagraph();
    oParagraph.AddText("This text was added by a macro!");

    // Make it bold and blue
    oParagraph.SetBold(true);
    oParagraph.SetColor(0, 102, 204);

    // Add it to the document
    oDocument.Push(oParagraph);
})();
```

**代码说明：**

- 获取当前文档
- 创建一个带文本的新段落
- 应用粗体格式和蓝色颜色
- 将其插入文档

## 第 3 步：运行宏

1. 点击宏编辑器中的**运行**按钮。
2. 格式化文本立即显示在您的文档中。

## 第 4 步：保存宏

1. 点击宏编辑器中的**保存**。
2. 为其命名，例如"插入蓝色文本"。
3. 之后可随时从**工具 → 宏 → [您的宏名称]**运行它。

## 练习宏

尝试以下示例以进一步学习：

### 自动格式化标题

```javascript
(function() {
    var oDocument = Api.GetDocument();

    // Create a heading
    var oHeading = Api.CreateParagraph();
    oHeading.AddText("Chapter 1: Introduction");
    oHeading.SetBold(true);
    oHeading.SetFontSize(24);
    oHeading.SetColor(51, 51, 51);

    oDocument.Push(oHeading);
})();
```

### 查找并高亮关键词

```javascript
(function() {
    var oDocument = Api.GetDocument();
    var searchText = "important";

    // Search for the keyword
    oDocument.Search(searchText, true, false, false);

    // Highlight found text
    var oRange = oDocument.GetRangeBySelect();
    if (oRange) {
        oRange.SetHighlight("yellow");
    }
})();
```

### 创建简单表格

```javascript
(function() {
    var oDocument = Api.GetDocument();

    // Create a 3x3 table
    var oTable = Api.CreateTable(3, 3);

    // Fill first row with headers
    oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Name");
    oTable.GetCell(0, 1).GetContent().GetElement(0).AddText("Age");
    oTable.GetCell(0, 2).GetContent().GetElement(0).AddText("City");

    // Add the table to document
    oDocument.Push(oTable);
})();
```

### 计算选区统计信息

```javascript
(function() {
    var oDocument = Api.GetDocument();
    var oRange = oDocument.GetRangeBySelect();

    if (oRange) {
        var text = oRange.GetText();
        var wordCount = text.split(/\s+/).filter(Boolean).length;
        var charCount = text.length;

        // Insert statistics
        var oParagraph = Api.CreateParagraph();
        oParagraph.AddText("\nStatistics:\n");
        oParagraph.AddText("Words: " + wordCount + "\n");
        oParagraph.AddText("Characters: " + charCount);

        oDocument.Push(oParagraph);
    }
})();
```

## 下一步

**深入学习：**

- [完整宏指南](../../macros/writing-macros.md)
- [自定义电子表格函数](../../macros/adding-custom-functions.md)
- [调试宏](../../macros/debugging.md)

**浏览示例：**

- [宏示例集合](/samples/?doctype=docs&text=macros)
- [转换 VBA 宏](../../macros/converting-vba-macros.md)

**需要帮助？**

- [开发者论坛](https://forum.onlyoffice.com/) — 社区支持
- [GitHub Issues](https://github.com/ONLYOFFICE/sdkjs-plugins) — 报告错误
- [常见问题](../../more-information/faq.md) — 常见问题解答
