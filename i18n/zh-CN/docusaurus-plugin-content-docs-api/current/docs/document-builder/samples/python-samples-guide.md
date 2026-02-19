---
sidebar_position: -2
---

# Python 示例指南

## 开始之前

为了让示例能够正常运行，请确保满足以下两个条件：

1. 已安装 ONLYOFFICE Document Builder。有关更多信息，请访问[安装页面](/docs/document-builder/get-started/installing.md)。
2. 您打算存储下载的示例的目录具有一般编辑权限，以便保存由 Document Builder 创建的文件。

:::note

对于 Python，您还可以使用 `pip3`（在 Windows 上为 `pip`）安装 `document-builder` 库：

```bash
pip3 install document-builder
```

:::

##  Hello world 示例

```py
import os
# 引入 Python 包装器 doctrenderer 库
import docbuilder

# 创建 DocBuilder
builder = docbuilder.CDocBuilder()
# 创建文件
builder.CreateFile("docx")

# 获取上下文
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]

# 创建文件内容
document = api.GetDocument()
paragraph = api.CreateParagraph()
paragraph.AddText("Hello, World!")
content = context.CreateArray(1)
content[0] = paragraph
document.InsertContent(content)

# 保存文件并关闭 DocBuilder
dstPath = os.getcwd() + "/result.docx"
builder.SaveFile("docx", dstPath)
builder.CloseFile()
```

运行脚本：

```sh
python main.py
```

文档将在同一目录中创建。

![结果文件](/assets/images/docbuilder/python-result-file.png)

## 运行其他示例

从 [https://github.com/ONLYOFFICE/document-builder-samples](https://github.com/ONLYOFFICE/document-builder-samples) 克隆包含 Document Builder 示例的仓库。创建的文件夹必须具有一般编辑权限。

```bash
git clone https://github.com/ONLYOFFICE/document-builder-samples
cd document-builder-samples
```

项目文件夹包含带有 Python 示例的 `python` 文件夹。每个示例都有自己的文件夹，其中包含 `main.py` 程序文件。

## 故障排除

如果您想将 `ONLYOFFICE Document Builder SDK` 升级到最新版本，只需运行：

```sh
python -m pip install document-builder --upgrade
```