# CreateFile

Creates a new file. The type of the file which will be created needs to be set.

## Syntax

```cs
bool CreateFile(int nType);
```

## Parameters

| Parameter | Type | Description                                                                                                                                                                                                                                      |
| --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| nType     | int  | The type of the file to be created set as a hexadecimal integer for the .Net code or `docx`, `xlsx`, `pptx`, or `pdf` for the `.docbuilder` script file (see [OFFICESTUDIO\_FILE\_XXX](../../../builder-app/overview.md#format-types) values). |

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
var doctype = (int)OfficeFileTypes.Document.DOCX;
oBuilder.CreateFile(doctype);
CDocBuilder.Destroy();
```

### .docbuilder

```ts
builder.CreateFile("docx")
```
