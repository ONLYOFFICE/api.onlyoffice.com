# RunText

Runs all the commands for the document creation using a single command. Compared to [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) where only one command at a time is allowed, `CDocBuilder.RunText` makes it possible to enter all the commands for the document creation at once.

> Please note, that for the `.docbuilder` file the `CDocBuilder.RunText` method is not used.

## Syntax

```cpp
HRESULT RunText([in] BSTR commands, [out, retval] VARIANT_BOOL* result);
```

## Parameters

| **Name** | **Type**      | **Description**                                                                                                                                                                                                                                                                                    |
| -------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| commands | BSTR          | The commands which will be used to create the document file (in COM, the escape character must be used when the command contains quotation symbols). All the commands containing `builder.` are line separated, i.e. you cannot write them in one line, each command must start with its own line. |
| result   | VARIANT_BOOL* | Specifies if the operation of running the commands is successful or not.                                                                                                                                                                                                                           |

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
VARIANT_BOOL b;
oBuilder->Initialize();
oBuilder->RunText(L"builder.SetTmpFolder(\"DocBuilderTemp\");\n\
builder.CreateFile(\"docx\");\n\
var oDocument = Api.GetDocument();var oParagraph;oParagraph = oDocument.GetElement(0);oParagraph.SetJc(\"center\");oParagraph.AddText(\"Center\");\n\
builder.SaveFile(\"pdf\", \"images.pdf\");\n\
builder.CloseFile();", &b);
oBuilder->Dispose();
```
