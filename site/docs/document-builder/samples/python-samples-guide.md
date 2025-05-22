---
sidebar_position: -2
---

# Python samples guide

## Before you start

For the samples to work correctly, make sure that two conditions are met:

1. ONLYOFFICE Document Builder is installed. For more information visit [installing page](../get-started/installing.md).
2. The directory in which you are going to store the downloaded samples has general editing access to save files created by the Document Builder.

:::note

For Python, you can also use `pip3` (or `pip` on Windows) to install the `document-builder` library:

```bash
pip3 install document-builder
```

:::

## Hello world sample

```py
import os
# Include the Python wrapper doctrenderer library
import docbuilder

# Create DocBuilder
builder = docbuilder.CDocBuilder()
# Create file
builder.CreateFile("docx")

# Get context
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]

# Create file content
document = api.Call("GetDocument")
paragraph = api.Call("CreateParagraph")
paragraph.Call("AddText", "Hello, World!")
content = context.CreateArray(1)
content[0] = paragraph
document.Call("InsertContent", content)

# Save file and close DocBuilder
dstPath = os.getcwd() + "/result.docx"
builder.SaveFile("docx", dstPath)
builder.CloseFile()
```

Run the script:

```sh
python main.py
```

Document will be created in the same directory.

![Result file](/assets/images/docbuilder/python-result-file.png)

## Run other samples

Clone a repository with the Document Builder samples from [https://github.com/ONLYOFFICE/document-builder-samples](https://github.com/ONLYOFFICE/document-builder-samples). The created folder must have general editing access.

```bash
git clone https://github.com/ONLYOFFICE/document-builder-samples
cd document-builder-samples
```

The project folder includes the `python` folder with the Python samples. Each sample has its own folder with the `main.py` program file.

## Troubleshooting

If you want to upgrade `ONLYOFFICE Document Builder SDK` to the latest version, you can simply run:

```sh
python -m pip install document-builder --upgrade
```
