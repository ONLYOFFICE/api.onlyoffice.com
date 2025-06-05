# Initialize

Initializes the ONLYOFFICE Document Builder as a library for the application to be able to work with it. This method just sets the directory to the main Document Builder resources (icu files, etc). If this method is not called, the Document Builder will find resources from the current process directory.

> Please note, that for the `.docbuilder` file the `CDocBuilder.Initialize` method is not used.

## Syntax

```py
def Initialize(cls, str directory = None);
```

## Parameters

| Parameter | Type | Default | Description                                      |
| --------- | ---- | ------- | ------------------------------------------------ |
| directory | str  | None    | The path to the main Document Builder resources. |

## Example

### Python

``` py
import docbuilder

docbuilder.CDocBuilder.Initialize("../documentBuilder")
builder = docbuilder.CDocBuilder()
docbuilder.CDocBuilder.Dispose()
```
