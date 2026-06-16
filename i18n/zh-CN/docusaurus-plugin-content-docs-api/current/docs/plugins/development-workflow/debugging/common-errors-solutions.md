---
sidebar_position: 2
---

# 常见错误及解决方案 {#common-errors-and-solutions}

本指南涵盖了 ONLYOFFICE 插件开发过程中最常见的错误及其解决方案。

## 插件初始化错误 {#plugin-initialization-errors}

### 插件未出现在菜单中 {#plugin-not-appearing-in-menu}

**症状：** 插件已安装但不可见；控制台无错误信息；配置文件存在。

:::danger[错误示例]
```json
{ "guid": "{12345678-ABCD}" }
```
```json
{ "name": "My Plugin", "version": "1.0.0",  }
```
```json
{ "variations": [{ "url": "plugin.html" }] }
```
:::

:::tip[正确示例]
```json
{ "guid": "asc.{12345678-1234-1234-1234-123456789ABC}" }
```
```json
{ "name": "My Plugin", "version": "1.0.0" }
```
```json
{ "variations": [{ "url": "index.html" }] }
```
:::

验证方法：
```bash
cat config.json | python -m json.tool
ls index.html
# 验证 GUID 格式以 "asc." 开头
# 完全重启 ONLYOFFICE
```

### 插件初始化后显示白屏 {#plugin-initializes-but-shows-blank-screen}

:::tip[正确示例]
```javascript
window.Asc.plugin.init = function(data) {
  const element = document.getElementById('output');
  if (!element) { console.error('Element not found'); return; }
  element.textContent = data || 'No data';
};
```
:::

## API 方法错误 {#api-method-errors}

### executeMethod 不起作用 {#executemethod-not-working}

:::tip[正确示例]
```javascript
window.Asc.plugin.executeMethod("GetSelectedText", [], function(text) {
  console.log('Selected text:', text);
  if (text) { processText(text); } else { showMessage('No text selected'); }
});
```
:::

### callCommand 静默失败 {#callcommand-fails-silently}

:::tip[正确示例]
```javascript
window.Asc.plugin.callCommand(function() {
  try {
    const doc = Api.GetDocument();
    if (!doc) { throw new Error('Document not available'); }
    const paragraphs = doc.GetAllParagraphs();
    return paragraphs.length;
  } catch (error) {
    console.error('callCommand error:', error);
    return null;
  }
}, false);
```
:::

### callCommand 内部变量未定义 {#variables-undefined-inside-callcommand}

`callCommand` 在编辑器上下文中运行，而非插件上下文。局部变量不可访问。请使用 `Asc.scope` 跨边界传递数据：

:::danger[错误示例]
```javascript
var text = document.getElementById("input").value;
window.Asc.plugin.callCommand(function() {
  // text 在此处未定义——不同的执行上下文
  var oParagraph = Api.CreateParagraph();
  oParagraph.AddText(text);
  Api.GetDocument().InsertContent([oParagraph]);
});
```
:::

:::tip[正确示例]
```javascript
Asc.scope.text = document.getElementById("input").value;
window.Asc.plugin.callCommand(function() {
  var oParagraph = Api.CreateParagraph();
  oParagraph.AddText(Asc.scope.text);
  Api.GetDocument().InsertContent([oParagraph]);
});
```
:::

详情请参阅[向 callCommand 传递数据](../../interacting-with-editors/overview/how-to-call-commands.md#asc-scope-object)。

## 配置错误 {#configuration-errors}

### 图标不显示 {#icons-not-displaying}

:::tip[正确示例]
```json
{ "variations": [{ "icons": "resources/%theme-type%(light|dark)/icon%scale%(default).%extension%(png)" }] }
```
文件结构：
```
my-plugin/
├── config.json
├── index.html
└── resources/
    ├── light/
    │   └── icon.png
    └── dark/
        └── icon.png
```
:::

### 模态窗口/面板配置问题 {#modalpanel-configuration-issues}

:::tip[正确示例]
模态对话框：

```json
{ "type": "window", "buttons": [{"text": "OK", "primary": true}, {"text": "Cancel"}] }
```

侧边面板：

```json
{ "type": "panel" }
```
:::

## 事件处理错误 {#event-handling-errors}

### 事件未触发 {#events-not-firing}

:::tip[正确示例]
```javascript
window.Asc.plugin.attachEditorEvent("onDocumentContentReady", function() {
  console.log('Document ready');
  loadInitialData();
});
```
:::

对于需要感知选区变化的插件，在 `config.json` 中设置 `"initOnSelectionChanged": true`——`init` 函数将在每次选区变化时接收选中的数据，而不是仅在插件打开时接收。

### 按钮处理程序无响应 {#button-handler-not-responding}

:::tip[正确示例]
```javascript
window.Asc.plugin.button = function(id) {
  if (id === 0) { handleOK(); }
  else if (id === 1) { handleCancel(); }
  else if (id === -1) { window.Asc.plugin.executeCommand("close", ""); }
};
```
:::

## 数据处理错误 {#data-handling-errors}

### JSON 解析错误 {#json-parse-errors}

:::tip[正确示例]
```javascript
fetch('/api/data')
  .then(response => {
    if (!response.ok) { throw new Error(`HTTP ${response.status}`); }
    return response.text();
  })
  .then(text => {
    try {
      const data = JSON.parse(text);
      processData(data);
    } catch (error) {
      console.error('Invalid JSON:', text);
      showError('Server returned invalid data');
    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
    showError('Failed to load data');
  });
```
:::

### LocalStorage 配额超限 {#localstorage-quota-exceeded}

:::tip[正确示例]
```javascript
function safeSave(key, data) {
  try {
    const serialized = JSON.stringify(data);
    const sizeMB = new Blob([serialized]).size / (1024 * 1024);
    if (sizeMB > 5) { console.warn(`Data too large: ${sizeMB.toFixed(2)}MB`); return false; }
    localStorage.setItem(key, serialized);
    return true;
  } catch (error) {
    if (error.name === 'QuotaExceededError') {
      console.error('Storage quota exceeded');
      clearOldData();
    }
    return false;
  }
}
```
:::

## 网络错误 {#network-errors}

### CORS 错误 {#cors-errors}

控制台错误信息：
```
Access to fetch at 'https://api.example.com/data' from origin 'http://localhost:3000' has been blocked by CORS policy
```

:::tip[正确示例]
```javascript
// 通过自有后端代理转发请求
fetch('/api/proxy?url=' + encodeURIComponent('https://external-api.com/data'))
  .then(response => response.json());
// 服务器必须包含：Access-Control-Allow-Origin: *
```
:::

### 超时错误 {#timeout-errors}

:::tip[正确示例]
```javascript
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') { throw new Error('Request timeout'); }
    throw error;
  }
}
```
:::

## UI/UX 错误 {#uiux-errors}

### 元素未找到 {#elements-not-found}

:::tip[正确示例]
```javascript
window.Asc.plugin.init = function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupUI);
  } else {
    setupUI();
  }
};
function setupUI() {
  const btn = document.getElementById('myButton');
  if (btn) { btn.addEventListener('click', handleClick); }
  else { console.error('Button not found in DOM'); }
}
```
:::
