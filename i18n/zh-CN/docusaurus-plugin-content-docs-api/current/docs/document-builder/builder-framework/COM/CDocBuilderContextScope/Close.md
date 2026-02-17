# Close（关闭）

关闭当前作用域。此方法将在析构函数执行时自动调用。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContextScope.Close` 方法。

## 语法

```cpp
HRESULT Close();
```

## 示例

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