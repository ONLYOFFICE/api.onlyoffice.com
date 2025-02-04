# CreateScope

Creates a [context scope](../CDocBuilderContextScope/CDocBuilderContextScope.md) which sets the execution context for all operations executed within a local scope.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.CreateScope` method is not used.

## Syntax

```cpp
HRESULT CreateScope([out, retval] I_DOCBUILDER_CONTEXT_SCOPE** result);
```

## Parameters

| Parameter | Type                                                                                  | Description                 |
| --------- | ------------------------------------------------------------------------------------- | --------------------------- |
| result    | [I_DOCBUILDER_CONTEXT_SCOPE**](../CDocBuilderContextScope/CDocBuilderContextScope.md) | The returned context scope. |

## Example

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderContextScope* oScope = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->CreateScope(&oScope);
oBuilder->Dispose();
```
