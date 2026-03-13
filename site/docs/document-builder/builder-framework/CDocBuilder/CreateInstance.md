# CreateInstance

Creates an instance of the `CDocBuilder` class.

:::note
This method is COM only. For the `.docbuilder` file the `CDocBuilder.CreateInstance` method is not used.
:::

## Syntax

```cpp
HRESULT CreateInstance();
```

## Example

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
oBuilder->Initialize();
oBuilder->CreateInstance();
oBuilder->Dispose();
```
