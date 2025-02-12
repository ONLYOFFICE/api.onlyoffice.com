# CreateUndefined

Creates an undefined value. This method returns the current [context](../CDocBuilderContext/CDocBuilderContext.md) and calls its [CreateUndefined](../CDocBuilderContext/CreateUndefined.md) method.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.CreateUndefined` method is not used.

## Syntax

```py
def CreateUndefined();
```

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
undefined = api.CreateUndefined()
```
