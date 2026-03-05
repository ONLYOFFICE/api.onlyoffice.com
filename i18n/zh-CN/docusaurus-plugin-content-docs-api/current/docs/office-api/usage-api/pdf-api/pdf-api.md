---
sidebar_position: -1
---

# PDF API

PDF 文档由一系列*页面*组成。每个页面可以包含多种内容类型：段落、表格、绘图（图像、形状、图表）、注释和交互式表单字段。

核心内容元素包括：

- *段落* (`ApiParagraph`) — 文本块。段落由一个或多个*文本块* (`ApiRun`) 组成，每个文本块包含文本本身及其字符格式（字体、大小、粗体、斜体、颜色等）。
- *表格* (`ApiTable`) — 网格结构，其单元格 (`ApiTableCell`) 包含文档内容（段落）。
- *绘图* (`ApiDrawing`) — 放置在页面特定位置的图像、形状或图表。

页面及其内容通过*文档* (`ApiDocument`) 和*页面* (`ApiPage`) 对象访问。

### 注释

注释允许您标记 PDF 内容而不修改它。PDF API 支持以下注释类型：

| 类别 | 类型 |
|---|---|
| 备注/文本 | `ApiTextAnnotation`、`ApiFreeTextAnnotation` |
| 标记 | `ApiHighlightAnnotation`、`ApiUnderlineAnnotation`、`ApiStrikeoutAnnotation`、`ApiCaretAnnotation` |
| 形状 | `ApiSquareAnnotation`、`ApiCircleAnnotation`、`ApiLineAnnotation`、`ApiPolyLineAnnotation`、`ApiPolygonAnnotation` |
| 其他 | `ApiInkAnnotation`、`ApiStampAnnotation`、`ApiRedactAnnotation` |

所有注释类型共享一个通用基类 (`ApiBaseAnnotation`)，该基类提供边框、填充、不透明度、作者、日期和回复属性。

### 表单字段和部件

PDF 表单包括*字段*和*部件*。字段定义数据模型（名称、值、验证规则），而部件确定字段的视觉表示。

| 字段类型 | 部件 |
|---|---|
| `ApiTextField` | `ApiTextWidget` |
| `ApiCheckboxField` | `ApiCheckboxWidget` |
| `ApiRadiobuttonField` | — |
| `ApiComboboxField` | — |
| `ApiListboxField` | — |
| `ApiImageField` | — |
| `ApiDateField` | — |
| `ApiButtonField` | `ApiButtonWidget` |

## 创建新的 PDF 文档

要使用 **ONLYOFFICE Document Builder** 创建 PDF 文档，您首先需要创建可编辑格式（DOCX）的文档，然后将其保存为 PDF。最简单的示例创建一个包含居中的 "Center" 文本的单页文档：

```ts
// 使用 ONLYOFFICE Document Builder 创建文档文件
builder.CreateFile("docx")

// 创建一个新的 'oDocument' 变量并获取创建的文档
const oDocument = Api.GetDocument()

// 为文档内容创建一个新段落
const oParagraph = Api.CreateParagraph()

// 设置段落对齐方式使文本居中
oParagraph.SetJc("center")

// 向段落添加包含单个 'Center' 词的文本
oParagraph.AddText("Center")

// 将段落推送到文档中
oDocument.Push(oParagraph)

// 将生成的文档保存为名为 'example.pdf' 的 PDF 文件并关闭它
builder.SaveFile("pdf", "example.pdf")
builder.CloseFile()
```

文档使用默认页面配置初始化。您可以使用适当的页面配置方法自定义页面大小、方向和边距。

## 打开现有的 PDF 文档

要编辑现有的 PDF 文档，请使用 `builder.OpenFile` 打开它，然后获取其页面并修改其内容：

```ts
// 使用现有 'mydocument.pdf' 文件的路径通过 ONLYOFFICE Document Builder 打开它
builder.OpenFile("https://example.com/mydocument.pdf")

// 创建一个新的 'oDocument' 变量并获取打开的 PDF 文档内容
const oDocument = Api.GetDocument()

// 获取第一页
const oPage = oDocument.GetElement(0)

// 创建并配置一个新段落
const oParagraph = Api.CreateParagraph()
oParagraph.SetJc("center")
oParagraph.AddText("Center")

// 将段落添加到页面
oPage.Push(oParagraph)

// 将生成的 PDF 文档保存为新的 'example.pdf' 文件并关闭它
builder.SaveFile("pdf", "example.pdf")
builder.CloseFile()
```

使用相应的 API 文档部分了解哪些方法允许您更改某些 PDF 文档元素的格式属性并使用 PDF 特定功能。
