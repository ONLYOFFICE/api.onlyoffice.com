# ExecuteCommand

Executes the command which will be used to create the document file (text document, spreadsheet, presentation, form document, PDF). See the [Text document API](../../../../office-api/usage-api/text-document-api/text-document-api.md), [Spreadsheet API](../../../../office-api/usage-api/spreadsheet-api/spreadsheet-api.md), [Presentation API](../../../../office-api/usage-api/presentation-api/presentation-api.md), or [Form API](../../../../office-api/usage-api/Form%20API/Form%20API.md) sections for more information which commands are available for various document types.

> Please note, that for the `.docbuilder` file the `CDocBuilder.ExecuteCommand` method is not used explicitly. The command itself is used instead. See the example below.

## Syntax

```py
def ExecuteCommand(self, str command, CDocBuilderValue | None retValue = None);
```

## Parameters

| Parameter | Type                     | Default | Description                                                                                                                                                                           |
| --------- | ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| command   | str                      |         | The command in the form of JavaScript code which will be used to create the document file (in Python, the escape character must be used when the command contains quotation symbols). |
| retValue  | CDocBuilderValue \| None | None    | The command return value.                                                                                                                                                             |

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
builder.ExecuteCommand(L"oParagraph.AddText(\"Hello from Python!\");");
```

### .docbuilder

```ts
oParagraph.AddText("Hello, world!")
```
