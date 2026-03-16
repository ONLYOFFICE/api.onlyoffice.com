# CreateInstance

Creates an instance of the `CDocBuilder` class.

:::note
This method is COM only.
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
