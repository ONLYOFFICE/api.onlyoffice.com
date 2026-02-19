# Initialize (初始化)

将 ONLYOFFICE Document Builder 初始化为一个库，以便应用程序能够使用它。此方法仅设置主 Document Builder 资源（icu 文件等）的目录。如果不调用此方法，Document Builder 将从当前进程目录中查找资源。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.Initialize` 方法。

## 语法

```cpp
HRESULT Initialize();
```

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
oBuilder->Initialize();
oBuilder->Dispose();
```