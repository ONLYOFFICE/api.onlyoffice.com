---
sidebar_position: 4
---

# 版本管理与更新 {#versioning-and-updates}

插件发布到 ONLYOFFICE 插件市场后，您需要发布更新来修复错误、添加功能或保持与新版本 ONLYOFFICE 的兼容性。

## 版本号规则 {#versioning-scheme}

ONLYOFFICE 插件使用语义化版本号（`MAJOR.MINOR.PATCH`）：

| 部分 | 何时递增 | 示例 |
|------|---------|------|
| `MAJOR` | 破坏性变更或重大重写 | `1.0.0` → `2.0.0` |
| `MINOR` | 新增功能，向后兼容 | `1.0.0` → `1.1.0` |
| `PATCH` | 错误修复，小幅修正 | `1.0.0` → `1.0.1` |

```json
{ "name": "My Plugin", "guid": "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}", "version": "1.2.0" }
```

**提交更新时务必递增版本号。**

:::warning[错误示例]
```json
{ "version": "1.0.0" }
```
提交更新时未更改版本号——插件管理器无法检测到更新。
:::

:::tip[正确示例]
```json
{ "version": "1.0.1" }
```
:::

## 指定最低 ONLYOFFICE 版本 {#specifying-minimum-onlyoffice-version}

```json
{ "minVersion": "7.0.0" }
```

使用较旧编辑器版本的用户将不会收到该插件更新。

## 提交更新 {#submitting-an-update}

### 步骤 1 — 将 fork 与上游同步 {#step-1---sync-your-fork-with-upstream}

```bash
git remote add upstream https://github.com/ONLYOFFICE/onlyoffice.github.io.git
git fetch upstream
git checkout master
git merge upstream/master
```

### 步骤 2 — 更新插件文件 {#step-2---update-your-plugin-files}

替换以下目录中的更新文件：
```
sdkjs-plugins/content/your-plugin-name/
```

### 步骤 3 — 在 config.json 中递增版本号 {#step-3---increment-the-version-in-configjson}

```json
{ "version": "1.1.0" }
```

### 步骤 4 — 提交并推送 {#step-4---commit-and-push}

```bash
git add sdkjs-plugins/content/your-plugin-name/
git commit -m "Update your-plugin-name to v1.1.0"
git push origin master
```

### 步骤 5 — 创建拉取请求 {#step-5---create-a-pull-request}

在 PR 描述中说明：变更内容、新的 ONLYOFFICE 版本要求、错误修复或破坏性变更。

## 保持向后兼容 {#maintaining-backwards-compatibility}

- 不要在未进行 MAJOR 版本升级的情况下移除现有功能。
- **不要更改插件 GUID。** 它是永久性的。

:::warning[错误示例]
```json
{ "guid": "asc.{NEW-GUID-FOR-UPDATE}" }
```
更改 GUID 会导致市场将该更新视为一个全新的插件。
:::

:::tip[正确示例]
```json
{ "guid": "asc.{ORIGINAL-GUID-UNCHANGED}" }
```
:::

## 处理 ONLYOFFICE 版本兼容性 {#handling-onlyoffice-version-compatibility}

每次 ONLYOFFICE 发布新版本后进行测试：
- 所有 `executeMethod` 调用返回预期结果
- 事件处理程序正确触发
- UI 元素正确渲染

每次 ONLYOFFICE 发布新版本后，请查阅[更新日志](../../more-information/changelog.md)。

## 维护插件更新日志 {#keeping-a-changelog-for-your-plugin}

```markdown
# Changelog

## 1.1.0 - 2025-06-01
- Added support for Spreadsheet Editor
- Improved performance for large documents

## 1.0.1 - 2025-03-15
- Fixed icon not appearing on high-DPI displays
- Fixed plugin not closing when Cancel is clicked

## 1.0.0 - 2025-01-10
- Initial release
```

## 从市场中移除插件 {#removing-a-plugin-from-the-marketplace}

在 [https://github.com/ONLYOFFICE/onlyoffice.github.io/issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 提交 issue，注明插件名称和原因。

## 后续步骤 {#next-steps}

- [提交到市场](./submit-to-marketplace.md)
- [发布准备](./preparing-for-release.md)
- [私有分发](./private-distribution.md)

## 其他资源 {#additional-resources}

- [更新日志](../../more-information/changelog.md)
- [配置](../../configuration/configuration.md)
- [市场仓库](https://github.com/ONLYOFFICE/onlyoffice.github.io)
- [插件示例](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content)
