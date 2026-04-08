---
sidebar_position: 1
---

# 文本注释 API 指南

ONLYOFFICE 9.2.0 引入了用于处理文本注释的 API 扩展——一种可高亮显示文本段落并允许将元数据与其关联的可视化下划线。

本指南涵盖三个新的 API 方法，并通过一个用于分析文本的 AI 助手插件实例演示其用法。

## 新 API 方法

1. *[`AnnotateParagraph`](../interacting-with-editors/text-document-api/Methods/AnnotateParagraph.md)* — 向指定段落添加注释。
2. *[`SelectAnnotationRange`](../interacting-with-editors/text-document-api/Methods/SelectAnnotationRange.md)* — 使用指定注释在文档中选择文本。
3. *[`RemoveAnnotationRange`](../interacting-with-editors/text-document-api/Methods/RemoveAnnotationRange.md)* — 从文档中删除特定注释范围。

## 通过插件开发学习新方法

有关插件使用的详细说明，请参见[此处](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/ai/scripts/text-annotations/custom-annotations)。

该插件为文本添加注释，使用户能够创建 AI 助手来分析内容，并高亮显示符合助手提示词中定义的特定条件的段落。共有三种选项：

1. *提示（Hint）* — 显示说明性文字。
2. *替换（Replace）* — 建议替换文本。
3. *替换 + 提示（Replace + Hint）* — 建议替换文本，并在下方显示解释（可包含链接）。

创建或编辑助手的界面包含三个字段：

1. *名称*
2. *类型*（提示、替换、替换 + 提示）
3. *提示词* — 主要字段，用户在此定义条件。为获得精确结果，该字段应尽可能具体。

还有一个隐藏字段，包含助手的唯一 ID。助手以字符串化对象的形式保存到 `localStorage`：

```js
const assistant = {
  id: string,
  name: string,
  type: number, // 0 - 提示, 1 - 替换, 2 - 替换 + 提示
  query: string, // prompt - 用户查询
}
```

## 创建助手

- 名称：*Date Corrector*
- 类型：*替换 + 提示*
- 查询：*识别文本中 1900 至 2000 年间所有错误的日期并建议更正。如果日期正确，则忽略。提供附有来源链接的解释。*

### 运行助手

助手运行时，用户的查询会经过附加规则的优化，以确保 AI 的响应遵循所需的 JSON 格式。例如，为了提供替换内容和解释，必须识别出被定位的确切文本片段。

```js
let prompt = `You are a multi-disciplinary text analysis assistant.
    Your task is to find text fragments that match the user's criteria.`;
    // ...
prompt += `Response format - return ONLY this JSON array with no additional text:
    [{
        "origin": "exact text fragment that matches the query",
        "suggestion": "suggested replacement (plain text)",
        "reason": "detailed explanation why it matches the criteria",
        "difference":"visual representation showing exact changes between origin and suggestion",
        "occurrence": 1,
        "confidence": 0.95
    }]
    \n\n`;
prompt += "USER REQUEST:\n```" + assistant.query + "\n```\n\n"; // 用户查询
prompt += "TEXT TO ANALYZE:\n```\n" + paragraph_text + "\n```\n\n";
    // ....
```

你可以分析整个文档（所有段落）或仅分析选定的片段。本示例侧重于处理选定的段落。

段落文本可通过订阅 [`onParagraphText`](../interacting-with-editors/text-document-api/Events/onParagraphText.md) 事件来获取。

```js
window.Asc.plugin.attachEditorEvent("onParagraphText", (data) => {
    const {paragraphId, recalcId, text, annotations} = data;
    console.log("Paragraph updated:", paragraphId);
    annotations.forEach(a => {
        console.log(`Annotation ${a.id}: ${a.name} at ${a.start} (${a.length} chars)`);
    });
});
```

虽然上述示例可以访问每个段落，但只需要当前选定段落的 ID。这通过 [`GetAllParagraphs`](../../office-api/usage-api/text-document-api/ApiRange/Methods/GetAllParagraphs.md) 和 [`GetInternalId`](../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetInternalId.md) 方法实现：

```js
const range = Api.GetDocument().GetRangeBySelect();
const paragraphs = range.GetAllParagraphs();
const ids = paragraphs.map(p => p.GetInternalId());
```

AI 响应以以下格式返回：

```js
let aiAnswer = {
    origin: "符合查询条件的片段",
    suggestion: "建议的替换内容",
    reason: "该片段满足查询条件的详细解释",
    difference: "原始文本与建议替换之间的差异（HTML 格式，便于阅读）",
    // --//--
    occurrence: "该匹配在段落中出现的次数（1 次、2 次等）",
    confidence: "0 到 1 之间的值，表示正确选择的置信度百分比"
}
```

向 AI 发送请求后，将收到包含所有已识别匹配项及其详细属性的响应。

### 添加注释

要在文档中显示这些结果，请使用 [`AnnotateParagraph`](../interacting-with-editors/text-document-api/Methods/AnnotateParagraph.md) 方法。

```js
await Asc.Editor.callMethod("AnnotateParagraph", [{
    type: "highlightText", // 目前仅此值可用
    name: "customAssistant_" + assistantId, // 助手 ID
    paragraphId: "p1", // 从段落信息中获取的值
    recalcId: "r12", // 从段落信息中获取的值
    ranges: [ // 根据 aiAnswer.origin 和 aiAnswer.occurrence 计算得出
        { start: 5, length: 10, id: "a1" }
        // start 是匹配内容在段落中第一个字符的索引
    ]
}]);
```

### 处理注释

添加注释后，必须处理用户交互。点击注释应触发弹出窗口，显示原始文本、建议的替换内容和简要说明，以及**接受**和**拒绝**按钮。这通过三个特定事件来管理：

1. [`onBlurAnnotation`](../interacting-with-editors/text-document-api/Events/onBlurAnnotation.md) — 当注释失去焦点时触发。
2. [`onClickAnnotation`](../interacting-with-editors/text-document-api/Events/onClickAnnotation.md) — 当用户点击注释时触发。
3. [`onFocusAnnotation`](../interacting-with-editors/text-document-api/Events/onFocusAnnotation.md) — 当注释获得焦点时触发。

三个事件均返回 `{name, paragraphId, ranges}`。本实现使用两个事件：`onClickAnnotation`（显示弹出窗口）和 `onBlurAnnotation`（隐藏弹出窗口）。

```js
window.Asc.plugin.attachEditorEvent("onClickAnnotation", function (obj) {
    if (!obj) return;

    // 注释名称编码了类型和助手 ID："customAssistant_<id>"
    if ("customAssistant" === obj["name"].slice(0, 15)) {
        const assistantId = obj["name"].slice(16);
        customAssistantManager.onClick(assistantId, obj["paragraphId"], obj["ranges"]);
    }
});

window.Asc.plugin.attachEditorEvent("onBlurAnnotation", function (obj) {
    if (!obj) return;

    if ("customAssistant" === obj["name"].slice(0, 15)) {
        const assistantId = obj["name"].slice(16);
        customAssistantManager.onBlur(assistantId);
    }
});
```

管理器将 `onClick`/`onBlur` 方法委托给注释器，通过 `annotatorPopup` 实例打开或关闭弹出窗口。弹出窗口本身使用 `window.Asc.PluginWindow` 创建，并设置 `isTargeted: true`，使其显示在注释附近。

要完成工作流程，用户必须能够应用 AI 的建议或拒绝它。

### 替换注释文本

```js
/**
 * @param {string} paraId - 来自 onClickAnnotation 事件的段落 ID
 * @param {string} rangeId - 来自 onClickAnnotation 事件的范围 ID
 */
onAccept: async function (paraId, rangeId) {
    // 将 _skipNextChangeParagraph 设置为 true，防止替换后重新注释
    await CustomAnnotator.prototype.onAccept.call(this);

    // 获取为此注释存储的 AI 建议
    let text = this.getAnnotation(paraId, rangeId)["suggestion"];

    // 将整个替换操作包装在单个撤销/重做组中
    await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

    // 构建注释范围对象（包含用作标识符的助手名称）
    let range = this.getAnnotationRangeObj(paraId, rangeId);

    // 在文档中选择注释文本
    await Asc.Editor.callMethod("SelectAnnotationRange", [range]);

    // 替换选定的片段并清除选择
    Asc.scope.text = text;
    await Asc.Editor.callCommand(function () {
        Api.ReplaceTextSmart([Asc.scope.text]);
        Api.GetDocument().RemoveSelection();
    });

    // 删除已完成使命的注释
    await Asc.Editor.callMethod("RemoveAnnotationRange", [range]);

    await Asc.Editor.callMethod("EndAction", ["GroupActions"]);

    // 将焦点返回编辑器
    await Asc.Editor.callMethod("FocusEditor");
}
```

### 删除注释

```js
/**
 * @param {string} paraId - 来自 onClickAnnotation 事件的段落 ID
 * @param {string} rangeId - 来自 onClickAnnotation 事件的范围 ID
 */
onReject: async function (paraId, rangeId) {
    let range = this.getAnnotationRangeObj(paraId, rangeId);
    await Asc.Editor.callMethod("RemoveAnnotationRange", [range]);
}
```

以上步骤概述了使用 ONLYOFFICE API 创建智能文本分析和自动搜索替换功能插件的流程。

## 使用场景

1. **抄袭检测**
   查询："查找独创性低于 90% 的片段。"
2. **AI 文本检测**
   查询："识别文本中哪些部分可能由 AI 生成。"
3. **法律分析**
   查询："验证文本是否符合特定法律法规。仅标记不合规的部分；合规文本忽略不计。"
4. **文体分析**
   识别官僚式措辞，并建议更清晰、更具吸引力的替代表达。
