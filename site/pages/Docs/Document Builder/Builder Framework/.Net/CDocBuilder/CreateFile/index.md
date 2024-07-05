#### bool CreateFile(nType);

Creates a new file. The type of the file which will be created needs to be set.

## Parameters:

| Name    | Type | Description                                                                                                                                                                                                                                                      |
| ------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *nType* | int  | The type of the file to be created set as a hexadecimal integer for the .Net code or **docx**, **xlsx**, **pptx**, or **pdf** for the *.docbuilder* script file (see [AVS\_OFFICESTUDIO\_FILE\_XXX](/docbuilder/integrationapi/c/cdefault#format-types) values). |

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
var doctype = (int)OfficeFileTypes.Document.DOCX;
oBuilder.CreateFile(doctype);
CDocBuilder.Destroy();
```

#### .docbuilder

```
builder.CreateFile("docx");
```