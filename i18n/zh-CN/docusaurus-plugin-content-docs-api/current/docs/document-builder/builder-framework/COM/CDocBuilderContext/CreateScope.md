# CreateScope（创建作用域）

创建一个[上下文作用域](../CDocBuilderContextScope/CDocBuilderContextScope.md)，该作用域为在本地范围内执行的所有操作设置执行上下文。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.CreateScope` 方法。

## 语法

```cpp
HRESULT CreateScope([out, retval] I_DOCBUILDER_CONTEXT_SCOPE** result);
```

## 参数

| 参数   | 类型                                                                                  | 描述               |
| ------ | ------------------------------------------------------------------------------------- | ------------------ |
| result | [I_DOCBUILDER_CONTEXT_SCOPE**](../CDocBuilderContextScope/CDocBuilderContextScope.md) | 返回的上下文作用域 |

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
oBuilder->Dispose();
```