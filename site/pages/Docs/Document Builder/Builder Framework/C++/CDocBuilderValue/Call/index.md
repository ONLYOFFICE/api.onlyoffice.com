#### CDocBuilderValue Call(sName, p1, p2, p3, p4, p5, p6);

Calls the specified Document Builder method. See the [Text document API](/officeapi/textdocumentapi), [Spreadsheet API](/officeapi/spreadsheetapi), [Presentation API](/officeapi/presentationapi) or [Form API](/officeapi/formapi) sections for more information which methods are available for various document types.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.Call* method is not used explicitly. The method itself is used instead. See the example below.

## Parameters:

| Name    | Type                          | Description                                                            |
| ------- | ----------------------------- | ---------------------------------------------------------------------- |
| *sName* | const wchar\_t\*/const char\* | The name of the Document Builder method in the Unicode or UTF8 format. |
| *p1-p6* | CDocBuilderValue              | The parameters that the Document Builder method takes as arguments.    |

## Example

#### C++

```
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oDocument = oApi.Call("GetDocument");
CDocBuilder::Dispose();
```

#### .docbuilder

```
var oDocument = Api.GetDocument();
```