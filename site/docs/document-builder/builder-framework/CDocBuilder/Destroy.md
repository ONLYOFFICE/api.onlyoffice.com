# Destroy

Unloads the ONLYOFFICE Document Builder from the application memory when it is no longer needed. Generally, there is no need to dispose JS before exiting the process, it should happen automatically. It should only be used if the process needs the resources taken up by JS.

:::note
This method is .Net only. For other languages, use [Dispose](Dispose.md). For the `.docbuilder` file the `CDocBuilder.Destroy` method is not used.
:::

## Syntax

```cs
static void Destroy();
```

## Example

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CDocBuilder.Destroy();
```
