# Close

Closes the current scope. This method will be called automatically when the descructor is executed.

> Please note, that for the `.docbuilder` file the `CDocBuilderContextScope.Close` method is not used.

## Syntax

```cpp
HRESULT Close();
```

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
&oScope->Close();
oBuilder->Dispose();
```
