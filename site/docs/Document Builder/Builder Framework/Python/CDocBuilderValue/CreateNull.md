```yml signature
- {type: keyword, text: def}
- {type: text, text: " "}
- {type: entity, text: CreateNull}
- {type: text, text: (}
- {type: text, text: )}
```

## Description

Creates a null value. This method returns the current [context](../CDocBuilderContext/CDocBuilderContext.md) and calls its [CreateNull](../CDocBuilderContext/CreateNull.md) method.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.CreateNull` method is not used.

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
null = api.CreateNull()
```
