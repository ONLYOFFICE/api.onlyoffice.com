# Initialize

Initializes the ONLYOFFICE Document Builder as a library for the application to be able to work with it. This method just sets the directory to the main Document Builder resources (icu files, etc). If this method is not called, the Document Builder will find resources from the current process directory.

> Please note, that for the `.docbuilder` file the `CDocBuilder.Initialize` method is not used.

## Syntax

```cs
static void Initialize(String^ sDirectory = 0);
```

## Parameters

| Parameter  | Type    | Default | Description                                      |
| ---------- | ------- | ------- | ------------------------------------------------ |
| sDirectory | String^ | 0       | The path to the main Document Builder resources. |

## Example

### .Net

``` cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CDocBuilder.Destroy();
```
