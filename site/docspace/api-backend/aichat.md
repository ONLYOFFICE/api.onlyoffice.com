# ONLYOFFICE DocSpace AI API

The browsable version of this reference, with a request builder and code samples, is published at
[https://api.onlyoffice.com/docspace/api-backend/usage-api/](https://api.onlyoffice.com/docspace/api-backend/usage-api/).

All URIs are relative to *https://yourportal.onlyoffice.com*, where the host is the address of your DocSpace instance.

## Endpoints

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *AIAIApi* | [**aiAiApproveToolCall**](#aiaiapprovetoolcall) | **POST** /api/2.0/ai/ai/approve-tool-call | Approve tool call |
| *AIAIApi* | [**aiAiDenyToolCall**](#aiaidenytoolcall) | **POST** /api/2.0/ai/ai/deny-tool-call | Deny tool call |
| *AIAIApi* | [**aiAiRegenerateStream**](#aiairegeneratestream) | **POST** /api/2.0/ai/ai/regenerate-stream | Regenerate stream |
| *AIAIApi* | [**aiAiSend**](#aiaisend) | **POST** /api/2.0/ai/ai/send | Run an AI action |
| *AIAIApi* | [**aiAiSendCustom**](#aiaisendcustom) | **POST** /api/2.0/ai/ai/send-custom | Send custom |
| *AIAIApi* | [**aiAiSendWithStream**](#aiaisendwithstream) | **POST** /api/2.0/ai/ai/send-with-stream | Send with stream |
| *AIAIApi* | [**aiAiSendWithStreamOpenAI**](#aiaisendwithstreamopenai) | **POST** /api/2.0/ai/ai/send-with-stream-openai | Stream a chat in OpenAI format |
| *AIAgentsApi* | [**aiAgentsCreate**](#aiagentscreate) | **POST** /api/2.0/ai/agents | Create an agent |
| *AIAgentsApi* | [**aiAgentsDelete**](#aiagentsdelete) | **DELETE** /api/2.0/ai/agents/\{id\} | Delete an agent |
| *AIAgentsApi* | [**aiAgentsGet**](#aiagentsget) | **GET** /api/2.0/ai/agents/\{id\} | Get an agent |
| *AIAgentsApi* | [**aiAgentsList**](#aiagentslist) | **GET** /api/2.0/ai/agents | List agents |
| *AIAgentsApi* | [**aiAgentsNews**](#aiagentsnews) | **GET** /api/2.0/ai/agents/news | List agent news items |
| *AIAgentsApi* | [**aiAgentsResetQuota**](#aiagentsresetquota) | **PUT** /api/2.0/ai/agents/resetquota | Reset agents' quota |
| *AIAgentsApi* | [**aiAgentsUpdate**](#aiagentsupdate) | **PUT** /api/2.0/ai/agents/\{id\} | Update an agent |
| *AIAgentsApi* | [**aiAgentsUpdateQuota**](#aiagentsupdatequota) | **PUT** /api/2.0/ai/agents/agentquota | Update agents' quota |
| *AIAssignmentsApi* | [**aiAssignmentsAssign**](#aiassignmentsassign) | **PUT** /api/2.0/ai/assignments/assign | Bind a profile to an action |
| *AIAssignmentsApi* | [**aiAssignmentsBulkAssign**](#aiassignmentsbulkassign) | **PUT** /api/2.0/ai/assignments/bulk-assign | Bulk assign |
| *AIAssignmentsApi* | [**aiAssignmentsCascadeProfileDelete**](#aiassignmentscascadeprofiledelete) | **DELETE** /api/2.0/ai/assignments/cascade-profile-delete | Cascade profile delete |
| *AIAssignmentsApi* | [**aiAssignmentsGetAllAssignments**](#aiassignmentsgetallassignments) | **GET** /api/2.0/ai/assignments/get-all-assignments | Get all assignments |
| *AIAssignmentsApi* | [**aiAssignmentsGetAssignment**](#aiassignmentsgetassignment) | **GET** /api/2.0/ai/assignments/get-assignment | Get assignment |
| *AIAssignmentsApi* | [**aiAssignmentsResolveForAction**](#aiassignmentsresolveforaction) | **GET** /api/2.0/ai/assignments/resolve-for-action | Resolve for action |
| *AIAssignmentsApi* | [**aiAssignmentsTryResolveForAction**](#aiassignmentstryresolveforaction) | **GET** /api/2.0/ai/assignments/try-resolve-for-action | Try resolve for action |
| *AIAssignmentsApi* | [**aiAssignmentsUnassign**](#aiassignmentsunassign) | **DELETE** /api/2.0/ai/assignments/unassign | Clear an action's profile |
| *AIAttachmentsApi* | [**aiAttachmentsDelete**](#aiattachmentsdelete) | **DELETE** /api/2.0/ai/attachments/delete | Delete one attachment |
| *AIAttachmentsApi* | [**aiAttachmentsDeleteMany**](#aiattachmentsdeletemany) | **DELETE** /api/2.0/ai/attachments/delete-many | Delete many |
| *AIAttachmentsApi* | [**aiAttachmentsGet**](#aiattachmentsget) | **POST** /api/2.0/ai/attachments/get | Get one attachment |
| *AIAttachmentsApi* | [**aiAttachmentsGetMany**](#aiattachmentsgetmany) | **POST** /api/2.0/ai/attachments/get-many | Get many |
| *AIAttachmentsApi* | [**aiAttachmentsLinkToMessage**](#aiattachmentslinktomessage) | **POST** /api/2.0/ai/attachments/link-to-message | Link to message |
| *AIAttachmentsApi* | [**aiAttachmentsSaveFile**](#aiattachmentssavefile) | **POST** /api/2.0/ai/attachments/save-file | Save file |
| *AIAttachmentsApi* | [**aiAttachmentsSaveFilesMany**](#aiattachmentssavefilesmany) | **POST** /api/2.0/ai/attachments/save-files-many | Save files many |
| *AIEditorToolsApi* | [**aiEditorToolsCall**](#aieditortoolscall) | **POST** /api/2.0/ai/editor-tools/call | Call an editor tool |
| *AIEditorToolsApi* | [**aiEditorToolsList**](#aieditortoolslist) | **GET** /api/2.0/ai/editor-tools/list | List editor tools |
| *AIExportApi* | [**aiExportTextToDocx**](#aiexporttexttodocx) | **POST** /api/2.0/ai/text-to-docx | Start markdown → docx export |
| *AIOpenAIPassthroughApi* | [**aiOpenaiChatCompletions**](#aiopenaichatcompletions) | **POST** /api/2.0/ai/openai/\{profileId\}/v1/chat/completions | OpenAI chat completions passthrough |
| *AIOpenAIPassthroughApi* | [**aiOpenaiImagesGenerations**](#aiopenaiimagesgenerations) | **POST** /api/2.0/ai/openai/\{profileId\}/v1/images/generations | OpenAI image generation passthrough |
| *AIPreferencesApi* | [**aiPreferencesClearDeepMode**](#aipreferencescleardeepmode) | **DELETE** /api/2.0/ai/preferences/clear-deep-mode | Clear deep mode |
| *AIPreferencesApi* | [**aiPreferencesGetDeepMode**](#aipreferencesgetdeepmode) | **GET** /api/2.0/ai/preferences/get-deep-mode | Get deep mode |
| *AIPreferencesApi* | [**aiPreferencesGetReasoningLevel**](#aipreferencesgetreasoninglevel) | **GET** /api/2.0/ai/preferences/get-reasoning-level | Get reasoning level |
| *AIPreferencesApi* | [**aiPreferencesIsDeepModeSet**](#aipreferencesisdeepmodeset) | **GET** /api/2.0/ai/preferences/is-deep-mode-set | Is deep mode set |
| *AIPreferencesApi* | [**aiPreferencesSetDeepMode**](#aipreferencessetdeepmode) | **PUT** /api/2.0/ai/preferences/set-deep-mode | Set deep mode |
| *AIPreferencesApi* | [**aiPreferencesSetReasoningLevel**](#aipreferencessetreasoninglevel) | **PUT** /api/2.0/ai/preferences/set-reasoning-level | Set reasoning level |
| *AIProfilesApi* | [**aiProfilesCreate**](#aiprofilescreate) | **POST** /api/2.0/ai/profiles/create | Create a provider profile |
| *AIProfilesApi* | [**aiProfilesDelete**](#aiprofilesdelete) | **DELETE** /api/2.0/ai/profiles/delete | Delete a provider profile |
| *AIProfilesApi* | [**aiProfilesGetById**](#aiprofilesgetbyid) | **GET** /api/2.0/ai/profiles/get-by-id | Get a provider profile |
| *AIProfilesApi* | [**aiProfilesList**](#aiprofileslist) | **GET** /api/2.0/ai/profiles/list | List provider profiles |
| *AIProfilesApi* | [**aiProfilesListModels**](#aiprofileslistmodels) | **GET** /api/2.0/ai/profiles/list-models | List models |
| *AIProfilesApi* | [**aiProfilesListProviderModels**](#aiprofileslistprovidermodels) | **POST** /api/2.0/ai/profiles/list-provider-models | List provider models |
| *AIProfilesApi* | [**aiProfilesTestConnection**](#aiprofilestestconnection) | **POST** /api/2.0/ai/profiles/test-connection | Test a profile's provider |
| *AIProfilesApi* | [**aiProfilesUpdate**](#aiprofilesupdate) | **PUT** /api/2.0/ai/profiles/update | Update a provider profile |
| *AIPromptsApi* | [**aiPromptsCreate**](#aipromptscreate) | **POST** /api/2.0/ai/prompts/create | Save a prompt |
| *AIPromptsApi* | [**aiPromptsCreateFolder**](#aipromptscreatefolder) | **POST** /api/2.0/ai/prompts/create-folder | Create folder |
| *AIPromptsApi* | [**aiPromptsDelete**](#aipromptsdelete) | **DELETE** /api/2.0/ai/prompts/delete | Delete a saved prompt |
| *AIPromptsApi* | [**aiPromptsDeleteFolder**](#aipromptsdeletefolder) | **DELETE** /api/2.0/ai/prompts/delete-folder | Delete folder |
| *AIPromptsApi* | [**aiPromptsExport**](#aipromptsexport) | **GET** /api/2.0/ai/prompts/export | Export the prompt library |
| *AIPromptsApi* | [**aiPromptsGetById**](#aipromptsgetbyid) | **GET** /api/2.0/ai/prompts/get-by-id | Get a saved prompt |
| *AIPromptsApi* | [**aiPromptsGetFolderById**](#aipromptsgetfolderbyid) | **GET** /api/2.0/ai/prompts/get-folder-by-id | Get a prompt folder |
| *AIPromptsApi* | [**aiPromptsImportBundle**](#aipromptsimportbundle) | **POST** /api/2.0/ai/prompts/import-bundle | Import bundle |
| *AIPromptsApi* | [**aiPromptsList**](#aipromptslist) | **GET** /api/2.0/ai/prompts/list | List saved prompts |
| *AIPromptsApi* | [**aiPromptsListFolders**](#aipromptslistfolders) | **GET** /api/2.0/ai/prompts/list-folders | List folders |
| *AIPromptsApi* | [**aiPromptsMove**](#aipromptsmove) | **PUT** /api/2.0/ai/prompts/move | Move a prompt to a folder |
| *AIPromptsApi* | [**aiPromptsRenameFolder**](#aipromptsrenamefolder) | **PUT** /api/2.0/ai/prompts/rename-folder | Rename folder |
| *AIPromptsApi* | [**aiPromptsUpdate**](#aipromptsupdate) | **PUT** /api/2.0/ai/prompts/update | Update a saved prompt |
| *AISettingsApi* | [**aiSettingsGet**](#aisettingsget) | **GET** /api/2.0/ai/config | Get AI settings |
| *AISettingsApi* | [**aiSettingsGetUser**](#aisettingsgetuser) | **GET** /api/2.0/ai/config/user | Get user AI settings |
| *AISettingsApi* | [**aiSettingsGetVectorization**](#aisettingsgetvectorization) | **GET** /api/2.0/ai/config/vectorization | Get vectorization settings |
| *AISettingsApi* | [**aiSettingsSetUser**](#aisettingssetuser) | **PUT** /api/2.0/ai/config/user | Update user AI settings |
| *AISettingsApi* | [**aiSettingsSetVectorization**](#aisettingssetvectorization) | **PUT** /api/2.0/ai/config/vectorization | Update vectorization settings |
| *AIThreadsApi* | [**aiThreadsAppendUserMessage**](#aithreadsappendusermessage) | **POST** /api/2.0/ai/threads/append-user-message | Append user message |
| *AIThreadsApi* | [**aiThreadsClearMessages**](#aithreadsclearmessages) | **DELETE** /api/2.0/ai/threads/clear-messages | Clear messages |
| *AIThreadsApi* | [**aiThreadsCreate**](#aithreadscreate) | **POST** /api/2.0/ai/threads/create | Create a chat thread |
| *AIThreadsApi* | [**aiThreadsDelete**](#aithreadsdelete) | **DELETE** /api/2.0/ai/threads/delete | Delete a chat thread |
| *AIThreadsApi* | [**aiThreadsDeleteMessage**](#aithreadsdeletemessage) | **DELETE** /api/2.0/ai/threads/delete-message | Delete message |
| *AIThreadsApi* | [**aiThreadsGetById**](#aithreadsgetbyid) | **GET** /api/2.0/ai/threads/get-by-id | Get a chat thread |
| *AIThreadsApi* | [**aiThreadsGetMessageById**](#aithreadsgetmessagebyid) | **GET** /api/2.0/ai/threads/get-message-by-id | Get one chat message |
| *AIThreadsApi* | [**aiThreadsList**](#aithreadslist) | **GET** /api/2.0/ai/threads/list | List chat threads |
| *AIThreadsApi* | [**aiThreadsOpenOrCreate**](#aithreadsopenorcreate) | **POST** /api/2.0/ai/threads/open-or-create | Open or create |
| *AIThreadsApi* | [**aiThreadsReadMessages**](#aithreadsreadmessages) | **GET** /api/2.0/ai/threads/read-messages | Read messages |
| *AIThreadsApi* | [**aiThreadsRegenerateTitle**](#aithreadsregeneratetitle) | **POST** /api/2.0/ai/threads/regenerate-title | Regenerate title |
| *AIThreadsApi* | [**aiThreadsRename**](#aithreadsrename) | **PUT** /api/2.0/ai/threads/rename | Rename a chat thread |
| *AIThreadsApi* | [**aiThreadsTouch**](#aithreadstouch) | **POST** /api/2.0/ai/threads/touch | Bump a thread's activity |
| *AIThreadsApi* | [**aiThreadsUpdateMessage**](#aithreadsupdatemessage) | **PUT** /api/2.0/ai/threads/update-message | Update message |
| *AIToolsApi* | [**aiToolsAddCustomServer**](#aitoolsaddcustomserver) | **POST** /api/2.0/ai/tools/add-custom-server | Add custom server |
| *AIToolsApi* | [**aiToolsGetAllowAlways**](#aitoolsgetallowalways) | **GET** /api/2.0/ai/tools/get-allow-always | Get allow always |
| *AIToolsApi* | [**aiToolsGetCustomServer**](#aitoolsgetcustomserver) | **GET** /api/2.0/ai/tools/get-custom-server | Get custom server |
| *AIToolsApi* | [**aiToolsGetDisabled**](#aitoolsgetdisabled) | **GET** /api/2.0/ai/tools/get-disabled | Get disabled |
| *AIToolsApi* | [**aiToolsIsAllowAlways**](#aitoolsisallowalways) | **GET** /api/2.0/ai/tools/is-allow-always | Is allow always |
| *AIToolsApi* | [**aiToolsIsToolDisabled**](#aitoolsistooldisabled) | **GET** /api/2.0/ai/tools/is-tool-disabled | Is tool disabled |
| *AIToolsApi* | [**aiToolsListCustomServers**](#aitoolslistcustomservers) | **GET** /api/2.0/ai/tools/list-custom-servers | List custom servers |
| *AIToolsApi* | [**aiToolsListSystemTools**](#aitoolslistsystemtools) | **GET** /api/2.0/ai/tools/list-system-tools | List system tools |
| *AIToolsApi* | [**aiToolsRemoveCustomServer**](#aitoolsremovecustomserver) | **DELETE** /api/2.0/ai/tools/remove-custom-server | Remove custom server |
| *AIToolsApi* | [**aiToolsReplaceAllCustomServers**](#aitoolsreplaceallcustomservers) | **PUT** /api/2.0/ai/tools/replace-all-custom-servers | Replace all custom servers |
| *AIToolsApi* | [**aiToolsSetAllowAlways**](#aitoolssetallowalways) | **PUT** /api/2.0/ai/tools/set-allow-always | Set allow always |
| *AIToolsApi* | [**aiToolsSetDisabled**](#aitoolssetdisabled) | **PUT** /api/2.0/ai/tools/set-disabled | Set disabled |
| *AIToolsApi* | [**aiToolsUpdateCustomServer**](#aitoolsupdatecustomserver) | **PUT** /api/2.0/ai/tools/update-custom-server | Update custom server |
| *AIVectorizationApi* | [**aiVectorizationStartTask**](#aivectorizationstarttask) | **POST** /api/2.0/ai/vectorization/tasks | Start a vectorization task |
| *AIWebSearchApi* | [**aiWebSearchClear**](#aiwebsearchclear) | **DELETE** /api/2.0/ai/web-search/clear | Clear the web-search configuration |
| *AIWebSearchApi* | [**aiWebSearchConfigure**](#aiwebsearchconfigure) | **PUT** /api/2.0/ai/web-search/configure | Configure and verify web search |
| *AIWebSearchApi* | [**aiWebSearchGetActiveConfig**](#aiwebsearchgetactiveconfig) | **GET** /api/2.0/ai/web-search/get-active-config | Get active config |
| *AIWebSearchApi* | [**aiWebSearchIsConfigured**](#aiwebsearchisconfigured) | **GET** /api/2.0/ai/web-search/is-configured | Is configured |
| *AIWebSearchApi* | [**aiWebSearchPassthroughContents**](#aiwebsearchpassthroughcontents) | **POST** /api/2.0/ai/websearch/v1/contents | Web page contents passthrough |
| *AIWebSearchApi* | [**aiWebSearchPassthroughSearch**](#aiwebsearchpassthroughsearch) | **POST** /api/2.0/ai/websearch/v1/search | Web search passthrough |
| *AIWebSearchApi* | [**aiWebSearchSetActiveConfig**](#aiwebsearchsetactiveconfig) | **PUT** /api/2.0/ai/web-search/set-active-config | Set active config |
| *AIWebSearchApi* | [**aiWebSearchTestConnection**](#aiwebsearchtestconnection) | **POST** /api/2.0/ai/web-search/test-connection | Test a web-search provider |



## AIAIApi

### aiAiApproveToolCall

> AiChatEvent aiAiApproveToolCall(aiAiApproveToolCall\_request)

`POST /api/2.0/ai/ai/approve-tool-call`

Approve tool call

Resumes a chat round that a tool call has paused, and streams the continuation as newline-delimited `ChatEvent` objects. The result supplied in the request is persisted onto the assistant message that issued the call, so the tool is not executed here - the caller runs it and reports the outcome. The round continues against the augmented history and may pause again on a further tool call. Call `POST api/2.0/ai/ai/deny-tool-call` instead to refuse the call and let the model answer without it.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAiApproveToolCall\_request** | body | [**aiAiApproveToolCall_request**](#model-aiaiapprovetoolcall-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Newline-delimited stream of chat events — one JSON `ChatEvent` object per line. | [**AiChatEvent**](#model-aichatevent) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiChatEvent**](#model-aichatevent)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/x-ndjson, application/json

### aiAiDenyToolCall

> AiChatEvent aiAiDenyToolCall(AiAiToolCallData)

`POST /api/2.0/ai/ai/deny-tool-call`

Deny tool call

Refuses the tool call a chat round is paused on and resumes it immediately, streaming the continuation as newline-delimited `ChatEvent` objects. The literal `User deny tool call` is persisted in place of the tool result, so the model sees an explicit refusal rather than a missing answer and may reply without the tool or ask for something else. Nothing is executed and no result is accepted from the caller. Use `POST api/2.0/ai/ai/approve-tool-call` to supply a result instead.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiAiToolCallData** | body | [**AiAiToolCallData**](#model-aiaitoolcalldata) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Newline-delimited stream of chat events — one JSON `ChatEvent` object per line. | [**AiChatEvent**](#model-aichatevent) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiChatEvent**](#model-aichatevent)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/x-ndjson, application/json

### aiAiRegenerateStream

> AiChatEvent aiAiRegenerateStream(aiAiRegenerateStream\_request)

`POST /api/2.0/ai/ai/regenerate-stream`

Regenerate stream

Re-rolls the last assistant reply of an existing thread: every message after the last user message - the previous reply and any tool-call hops - is dropped, and a fresh reply is streamed as newline-delimited `ChatEvent` objects against the unchanged prompt. The thread has to exist already, `threadId` is required, and no title is generated. The dropped messages are gone for good, so this is a destructive operation on the thread's tail rather than a retry that keeps both answers. Unlike `send-with-stream` the profile is not verified before the stream opens, so an unusable model surfaces as an error frame inside the 200 rather than as a 4xx.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAiRegenerateStream\_request** | body | [**aiAiRegenerateStream_request**](#model-aiairegeneratestream-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Newline-delimited stream of chat events — one JSON `ChatEvent` object per line. | [**AiChatEvent**](#model-aichatevent) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiChatEvent**](#model-aichatevent)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/x-ndjson, application/json

### aiAiSend

> AiThreadMessageLike aiAiSend(aiAiSend\_request)

`POST /api/2.0/ai/ai/send`

Run an AI action

Runs one AI action and returns the whole answer as a single JSON document. The model is the profile bound to `actionType`, falling back to the `Default` assignment slot, so this operation accepts no `profileId` of its own. Nothing is persisted - no thread is opened, no message is stored and no title is generated - which makes it the one to use for a stand-alone completion rather than for a conversation. `entityId` and `contextEntityId` set the scope of the round, which decides the workspace context and the custom MCP servers it may reach. For a conversation that keeps its history, use `POST api/2.0/ai/ai/send-with-stream` instead.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAiSend\_request** | body | [**aiAiSend_request**](#model-aiaisend-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The assistant's reply as one message. Nothing was persisted. | [**AiThreadMessageLike**](#model-aithreadmessagelike) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiThreadMessageLike**](#model-aithreadmessagelike)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiAiSendCustom

> AiThreadMessageLike aiAiSendCustom(aiAiSendCustom\_request)

`POST /api/2.0/ai/ai/send-custom`

Send custom

Runs a free-form one-turn call against a system prompt supplied in the request, with no thread, no history and nothing persisted. The model is the explicit `profileId` when it resolves, otherwise the `Default` assignment slot. The shape of the answer depends on the body rather than on the route: with `isStream` set it arrives as a newline-delimited stream of chat events, and without it as a single JSON document, so a client has to handle both. Use `POST api/2.0/ai/ai/send` when the prompt should come from the portal's own action configuration instead of from the caller.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAiSendCustom\_request** | body | [**aiAiSendCustom_request**](#model-aiaisendcustom-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The assistant's reply as one message, or a newline-delimited stream of chat events when `isStream` was set. Nothing was persisted. | [**AiThreadMessageLike**](#model-aithreadmessagelike) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiThreadMessageLike**](#model-aithreadmessagelike)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiAiSendWithStream

> AiChatEvent aiAiSendWithStream(AiAiSendStreamBody)

`POST /api/2.0/ai/ai/send-with-stream`

Send with stream

Runs one chat round and streams it back as newline-delimited `ChatEvent` objects. Omitting `threadId` opens a new thread, which requires that `entityId` names a room the caller can open and that a profile resolves for it; the user message and the reply are persisted either way, and a new thread also gets a generated title. The model is settled in a fixed order - an agent's assignment in scope overrides everything, then the explicit `profileId`, then the one stored on the thread, then the `Chat` assignment - and the effective profile is checked before the stream opens, so an unknown one fails with 400 rather than as an error buried in a 200. A tool call pauses the round and ends the stream; resume it with `POST api/2.0/ai/ai/approve-tool-call` or `POST api/2.0/ai/ai/deny-tool-call`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiAiSendStreamBody** | body | [**AiAiSendStreamBody**](#model-aiaisendstreambody) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Newline-delimited stream of chat events — one JSON `ChatEvent` object per line. | [**AiChatEvent**](#model-aichatevent) | - |
| **400** | The prompt is empty, more attachments were sent than the limit allows, or no AI profile could be resolved for the requested action. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **402** | The portal has no paid AI quota left, so the profile bound to this action cannot be dispatched. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | The `entityId` names a room the caller cannot open, or no live profile is bound to it. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiChatEvent**](#model-aichatevent)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/x-ndjson, application/json

### aiAiSendWithStreamOpenAI

> AiOpenAIStreamChunk aiAiSendWithStreamOpenAI(AiAiSendStreamBody)

`POST /api/2.0/ai/ai/send-with-stream-openai`

Stream a chat in OpenAI format

The same chat round as `send-with-stream`, re-encoded as a server-sent-events stream of OpenAI `chat.completion.chunk` objects terminated by a `[DONE]` sentinel. Thread handling, persistence, title generation and the profile pre-flight are identical, and a tool call ends the stream with `finish_reason: tool_calls` instead of a pause event - resume it through the same approve and deny operations. Unlike `send-with-stream` it does not reject an empty user message and does not enforce the per-kind attachment cap, so validate both before calling. Choose this route only for a client that already speaks the OpenAI wire format; `POST api/2.0/ai/ai/send-with-stream` is the native one.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiAiSendStreamBody** | body | [**AiAiSendStreamBody**](#model-aiaisendstreambody) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Server-sent events stream of OpenAI `chat.completion.chunk` objects, terminated by a `[DONE]` sentinel. | [**AiOpenAIStreamChunk**](#model-aiopenaistreamchunk) | - |
| **400** | The prompt is empty, or no AI profile could be resolved for the requested action. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **402** | The portal has no paid AI quota left, so the profile bound to this action cannot be dispatched. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiOpenAIStreamChunk**](#model-aiopenaistreamchunk)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/event-stream, application/json

## AIAgentsApi

### aiAgentsCreate

> AiFolderIntegerWrapper aiAgentsCreate(aiAgentsCreate\_request)

`POST /api/2.0/ai/agents`

Create an agent

Creates an AI agent room and binds a model to it, in that order. `profileId` is required, has to be a UUID, has to name an existing profile, and that profile has to support chat - an image-only model is refused here rather than failing on every later request. `prompt` is required and is stored on the room as its standing instruction with any markup stripped, so it cannot round-trip HTML into another user's reply. The two steps are not atomic: when the room is created but the model binding fails, the call reports an error and the room is left behind, so re-bind it with `PUT api/2.0/ai/agents/{id}` rather than creating a second one.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAgentsCreate\_request** | body | [**aiAgentsCreate_request**](#model-aiagentscreate-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created agent room, with the model already bound to it. | [**AiFolderIntegerWrapper**](#model-aifolderintegerwrapper) | - |
| **400** | `profileId` is missing, is not a UUID, names no existing profile, or names one that does not support chat; or `prompt` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiFolderIntegerWrapper**](#model-aifolderintegerwrapper)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiAgentsDelete

> AiFileOperationWrapper aiAgentsDelete(id, aiAgentsDelete\_request)

`DELETE /api/2.0/ai/agents/{id}`

Delete an agent

Deletes an AI agent room. The ID has to be the room's integer identifier, and the body is forwarded to the DocSpace AI service unchanged, so it accepts the same options as deleting an ordinary room - `deleteAfter` among them. Deletion is asynchronous there: the answer is a file-operation payload to poll, not a completed result. The agent's model binding is deliberately left behind, because the upstream assignment API has no per-entry delete, so an orphaned assignment row survives the room.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The agent identifier. | [required] [example: `1234`] |
| **aiAgentsDelete\_request** | body | [**aiAgentsDelete_request**](#model-aiagentsdelete-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued file operation. Deletion runs asynchronously, so poll DocSpace for its outcome. | [**AiFileOperationWrapper**](#model-aifileoperationwrapper) | - |
| **400** | The agent ID is not a positive integer. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiFileOperationWrapper**](#model-aifileoperationwrapper)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiAgentsGet

> aiAgentsGet_200_response aiAgentsGet(id)

`GET /api/2.0/ai/agents/{id}`

Get an agent

Returns one AI agent room, enriched with the `profileId` currently bound to it so an edit form can prefill its model selector. The ID is the room's integer identifier, and a non-integer value is refused rather than passed on to fail opaquely upstream. The binding lives in an assignment rather than on the room, so it is looked up separately: a missing or unreadable assignment simply leaves `profileId` out of the answer instead of failing the call. The standing instruction comes back on the room as `chatSettings.prompt`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The agent identifier. | [required] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The agent room, with `profileId` added when a model is bound to it. | [**aiAgentsGet_200_response**](#model-aiagentsget-200-response) | - |
| **400** | The agent ID is not a positive integer. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**aiAgentsGet_200_response**](#model-aiagentsget-200-response)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiAgentsList

> AiFolderContentIntegerWrapper aiAgentsList(subjectId, subjectOwnerId, excludeSubject, tags, withoutTags, quotaFilter, filterValue, sortBy, sortOrder, startIndex, count)

`GET /api/2.0/ai/agents`

List agents

Lists the portal's AI agent rooms. The query is forwarded unchanged to the DocSpace AI service, so it takes the same paging, sorting and filtering parameters as an ordinary room listing, and the answer is that service's folder-content payload rather than a shape of this API's own. Array and object query values are dropped rather than guessed at, so send flat strings. The profile bound to each agent is not included here - read one agent with `GET api/2.0/ai/agents/{id}` for that.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **subjectId** | query | **String** | Show only the agent rooms this user takes part in. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **subjectOwnerId** | query | **String** | Show only the agent rooms owned by this user. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **excludeSubject** | query | **Boolean** | Invert the user filter: leave out what `subjectId` selects instead of keeping it. | [optional] [example: `false`] |
| **tags** | query | **String** | Show only the agent rooms carrying these tags, comma-separated. | [optional] [example: `ai,assistant`] |
| **withoutTags** | query | **Boolean** | Show only the agent rooms that carry no tags at all. | [optional] [example: `false`] |
| **quotaFilter** | query | **Integer** | Filter by quota kind: 0 for all, 1 for the default quota, 2 for a custom one. | [optional] [example: `0`] |
| **filterValue** | query | **String** | Show only the agent rooms whose title matches this text. | [optional] [example: `assistant`] |
| **sortBy** | query | **String** | Field to sort by, for example `DateAndTime`. | [optional] [example: `DateAndTime`] |
| **sortOrder** | query | **String** | Sort direction, `ascending` or `descending`. | [optional] [example: `descending`] |
| **startIndex** | query | **Integer** | Index of the first entry to return; 0 starts at the beginning. | [optional] [example: `0`] |
| **count** | query | **Integer** | How many entries to return. The internal service applies its own default. | [optional] [example: `25`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The agent rooms, in the DocSpace AI service's folder-content envelope. | [**AiFolderContentIntegerWrapper**](#model-aifoldercontentintegerwrapper) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiFolderContentIntegerWrapper**](#model-aifoldercontentintegerwrapper)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiAgentsNews

> AiNewItemsAgentNewItemsArrayWrapper aiAgentsNews()

`GET /api/2.0/ai/agents/news`

List agent news items

Lists the unread items across the caller's AI agent rooms, so a badge can be rendered without walking each room. It takes no parameters and is scoped to the caller by the DocSpace AI service. The answer is that service's new-items payload. This is a read-only operation and does not mark anything as seen.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The unread items of the caller's agent rooms. | [**AiNewItemsAgentNewItemsArrayWrapper**](#model-ainewitemsagentnewitemsarraywrapper) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiNewItemsAgentNewItemsArrayWrapper**](#model-ainewitemsagentnewitemsarraywrapper)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiAgentsResetQuota

> AiFolderIntegerArrayWrapper aiAgentsResetQuota(aiAgentsResetQuota\_request)

`PUT /api/2.0/ai/agents/resetquota`

Reset agents' quota

Returns the listed AI agent rooms to the portal's default storage quota, forwarding `roomIds` to the DocSpace AI service unchanged. The answer is that service's payload, one updated room per entry. This is the counterpart of `PUT api/2.0/ai/agents/agentquota` and takes no quota value of its own. Rooms already on the default are unaffected.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAgentsResetQuota\_request** | body | [**aiAgentsResetQuota_request**](#model-aiagentsresetquota-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The updated agent rooms, one entry each. | [**AiFolderIntegerArrayWrapper**](#model-aifolderintegerarraywrapper) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiFolderIntegerArrayWrapper**](#model-aifolderintegerarraywrapper)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiAgentsUpdate

> AiFolderIntegerWrapper aiAgentsUpdate(id, aiAgentsUpdate\_request)

`PUT /api/2.0/ai/agents/{id}`

Update an agent

Changes an AI agent room - its title, tags or standing instruction - and optionally rebinds its model. The ID has to be the room's integer identifier. `profileId` is not part of the room contract: it is taken out of the forwarded body and applied afterwards as the agent's assignment, and it has to be a UUID naming an existing chat-capable profile. An instruction sent as `chatSettings.prompt` has its markup stripped, as on create; note that when `chatSettings` is present the upstream service still requires the rest of that object to be valid, so send it whole.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The agent identifier. | [required] [example: `1234`] |
| **aiAgentsUpdate\_request** | body | [**aiAgentsUpdate_request**](#model-aiagentsupdate-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The updated agent room. | [**AiFolderIntegerWrapper**](#model-aifolderintegerwrapper) | - |
| **400** | The agent ID is not a positive integer, or `profileId` is not a UUID, names no existing profile, or names one that does not support chat. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiFolderIntegerWrapper**](#model-aifolderintegerwrapper)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiAgentsUpdateQuota

> AiFolderIntegerArrayWrapper aiAgentsUpdateQuota(aiAgentsUpdateQuota\_request)

`PUT /api/2.0/ai/agents/agentquota`

Update agents' quota

Sets the storage quota of the listed AI agent rooms in one call, forwarding `roomIds` and `quota` to the DocSpace AI service unchanged. The answer is that service's payload, one updated room per entry. A quota applies to the room's stored files, not to the model usage of its chats. Use `PUT api/2.0/ai/agents/resetquota` to return rooms to the portal default instead of naming a number.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAgentsUpdateQuota\_request** | body | [**aiAgentsUpdateQuota_request**](#model-aiagentsupdatequota-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The updated agent rooms, one entry each. | [**AiFolderIntegerArrayWrapper**](#model-aifolderintegerarraywrapper) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiFolderIntegerArrayWrapper**](#model-aifolderintegerarraywrapper)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## AIAssignmentsApi

### aiAssignmentsAssign

> AiAssignmentMutationResult aiAssignmentsAssign(aiAssignmentsAssign\_request)

`PUT /api/2.0/ai/assignments/assign`

Bind a profile to an action

Binds a profile to one AI action portal-wide, creating the assignment or replacing it in place, and returns the result. Both `actionType` and `profileId` are required. The profile's declared capabilities are checked against the action, so a model that cannot generate images cannot be bound to `ImageGeneration` - the `Default` slot is exempt, because it stands in for every action. There is no room-scoped form of this write: a room's own binding is created by the agent that owns it, while reads accept an `entityId`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAssignmentsAssign\_request** | body | [**aiAssignmentsAssign_request**](#model-aiassignmentsassign-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the binding was stored. A failure is reported in `error` rather than as a status. | [**AiAssignmentMutationResult**](#model-aiassignmentmutationresult) | - |
| **400** | `actionType` or `profileId` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiAssignmentMutationResult**](#model-aiassignmentmutationresult)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiAssignmentsBulkAssign

> AiBulkAssignmentResult aiAssignmentsBulkAssign(request\_body)

`PUT /api/2.0/ai/assignments/bulk-assign`

Bulk assign

Applies many action-to-profile bindings in one write, which is how a settings screen saves the whole set. The body is a plain map of action type to profile ID, and every entry is validated before anything is written: one unknown action or one non-string profile ID rejects the request whole, so the set is never left half-applied. Each entry behaves as the single assign operation does, capability checks included. The answer carries the resulting assignment set.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **request\_body** | body | **Map** | A map of action type to profile ID. Every key has to be a known action type and every value a profile ID; one bad entry rejects the whole map. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the set was stored, with `errors` listing the entries that were refused. | [**AiBulkAssignmentResult**](#model-aibulkassignmentresult) | - |
| **400** | The body is not a map of action type to profile ID, or one of its keys is not a known action type. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiBulkAssignmentResult**](#model-aibulkassignmentresult)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiAssignmentsCascadeProfileDelete

> AiSuccessResponse aiAssignmentsCascadeProfileDelete(aiAssignmentsCascadeProfileDelete\_request)

`DELETE /api/2.0/ai/assignments/cascade-profile-delete`

Cascade profile delete

Detaches a profile from every assignment that points at it, which is the cleanup step before the profile itself is removed. The `Default` slot is promoted to the first remaining profile, or dropped when none is left, and every other slot holding the profile is cleared. `profileId` is required and may be sent in the body or as a query parameter. `DELETE api/2.0/ai/profiles/delete` already does this, so call it directly only when the profile is being removed by some other means.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAssignmentsCascadeProfileDelete\_request** | body | [**aiAssignmentsCascadeProfileDelete_request**](#model-aiassignmentscascadeprofiledelete-request-body) | The profile to detach from every assignment. May be sent as the `profileId` query parameter instead of in the body. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms no assignment points at the profile any more. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **400** | `profileId` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiAssignmentsGetAllAssignments

> Map aiAssignmentsGetAllAssignments(entityId)

`GET /api/2.0/ai/assignments/get-all-assignments`

Get all assignments

Returns every action-to-profile binding of a scope as one map, which is what a settings screen loads. `entityId` narrows it to a room and has to name one the caller can open; a room that is not an agent room degrades to the portal-wide set rather than answering empty, and omitting the parameter reads the portal-wide set directly. Actions with no binding are simply absent from the map. The `Default` slot is reported as an entry of its own rather than being folded into the others.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The scope's bindings as a map of action type to profile ID. An action with no binding is absent. | **Map** | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | The referenced object does not exist, or the caller cannot access it - the two are deliberately indistinguishable, so a room the caller may not open answers 404 rather than 403. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

**Map**

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiAssignmentsGetAssignment

> String aiAssignmentsGetAssignment(actionType)

`GET /api/2.0/ai/assignments/get-assignment`

Get assignment

Returns the profile bound to one AI action, without applying the `Default` fallback - an empty answer means this action has no profile of its own, not that nothing is configured. `actionType` is required and is read from the query. Use `GET api/2.0/ai/assignments/resolve-for-action` to learn which profile would actually serve the action. This reads the portal-wide binding and accepts no `entityId`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **actionType** | query | **String** | The AI action the request applies to - one of Default, Chat, Code, Summarization, Translation, TextAnalyze, ImageGeneration, OCR, Vision. | [required] [example: `Chat`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile bound to the action, or an empty result when it has none of its own. | **String** | - |
| **400** | `actionType` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

**String**

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiAssignmentsResolveForAction

> AiResolvedAssignment aiAssignmentsResolveForAction(actionType, entityId)

`GET /api/2.0/ai/assignments/resolve-for-action`

Resolve for action

Returns the profile that will serve one AI action, falling back to the `Default` slot when the action has no profile of its own. `actionType` is required and has to be one of the known actions - an unknown or misspelled value is rejected rather than resolved to the default. `entityId` narrows the lookup to a room, and a room with no assignment of its own degrades to the portal-wide one. This fails when neither slot is set or the bound profile is gone, so use `GET api/2.0/ai/assignments/try-resolve-for-action` when an unconfigured portal should answer empty instead.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **actionType** | query | **String** | The AI action the request applies to - one of Default, Chat, Code, Summarization, Translation, TextAnalyze, ImageGeneration, OCR, Vision. | [required] [example: `Chat`] |
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile that will serve the action. | [**AiResolvedAssignment**](#model-airesolvedassignment) | - |
| **400** | `actionType` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiResolvedAssignment**](#model-airesolvedassignment)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiAssignmentsTryResolveForAction

> AiResolvedAssignment aiAssignmentsTryResolveForAction(actionType, entityId)

`GET /api/2.0/ai/assignments/try-resolve-for-action`

Try resolve for action

Returns the profile that will serve one AI action, exactly as `GET api/2.0/ai/assignments/resolve-for-action` does, but answers with an empty result rather than failing when nothing is configured. `actionType` is required and is validated the same way, and `entityId` narrows the lookup to a room. This is the operation to call when the absence of a profile is a normal state to render - a settings screen, or a feature that hides itself. Both operations are read-only.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **actionType** | query | **String** | The AI action the request applies to - one of Default, Chat, Code, Summarization, Translation, TextAnalyze, ImageGeneration, OCR, Vision. | [required] [example: `Chat`] |
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile that will serve the action, or an empty result when none is configured. | [**AiResolvedAssignment**](#model-airesolvedassignment) | - |
| **400** | `actionType` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiResolvedAssignment**](#model-airesolvedassignment)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiAssignmentsUnassign

> AiSuccessResponse aiAssignmentsUnassign(body)

`DELETE /api/2.0/ai/assignments/unassign`

Clear an action's profile

Clears the portal-wide binding of one AI action, after which the action falls back to the `Default` slot. `actionType` is required and may be sent in the body or as a query parameter. An action whose slot is already empty is not reported as an error - the call answers success either way, so it is safe to repeat. Clearing `Default` itself leaves the actions that relied on it unresolvable.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the action now has no profile of its own. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **400** | `actionType` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## AIAttachmentsApi

### aiAttachmentsDelete

> AiSuccessResponse aiAttachmentsDelete(body)

`DELETE /api/2.0/ai/attachments/delete`

Delete one attachment

Permanently deletes one attachment, whether it is still a draft or already bound to a message. The ID is not validated here, so a malformed one surfaces as an error relayed from storage rather than as a 400, and an ID that does not exist answers success without deleting anything. Deleting a bound attachment leaves the message in place without it. The deletion cannot be undone.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | The ID of the attachment to delete, as a bare JSON string. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the request was accepted, whether or not anything was deleted. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiAttachmentsDeleteMany

> AiSuccessResponse aiAttachmentsDeleteMany(request\_body)

`DELETE /api/2.0/ai/attachments/delete-many`

Delete many

Permanently deletes several attachments in one round trip. `ids` is optional and an absent value is treated as an empty list, so a malformed request quietly deletes nothing instead of failing. IDs that do not exist are skipped without being reported, so the answer confirms only that the call was accepted. The deletions cannot be undone.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **request\_body** | body | **List** | The IDs of the attachments to delete, as a bare JSON array of strings. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the request was accepted, whether or not anything was deleted. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiAttachmentsGet

> AiAttachment aiAttachmentsGet(body)

`POST /api/2.0/ai/attachments/get`

Get one attachment

Returns one attachment by its ID, whether it is still a draft or already bound to a message. The ID is required and has to be a non-empty string. An ID that no longer exists is not reported as 404: the answer is a null body with status 200, so treat a missing payload as no such attachment. Use `POST api/2.0/ai/attachments/get-many` to read several at once.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | The ID of the attachment to read, as a bare JSON string. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The attachment, or a null body when no attachment has that ID. | [**AiAttachment**](#model-aiattachment) | - |
| **400** | The attachment ID is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiAttachment**](#model-aiattachment)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiAttachmentsGetMany

> List aiAttachmentsGetMany(request\_body)

`POST /api/2.0/ai/attachments/get-many`

Get many

Returns several attachments in one call, aligned by position with the `ids` that were sent, so the answer can be zipped straight onto the request. An ID that no longer exists leaves its slot empty rather than shortening the list, which is how a caller tells which of them are gone. `ids` has to be present and non-empty - an empty batch is rejected rather than answered with an empty list. Nothing is changed by the call.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **request\_body** | body | **List** | The IDs of the attachments to read, as a bare JSON array of strings. The answer is aligned with this array by position. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The attachments, aligned by position with the IDs that were sent. A missing one leaves its slot empty. | [**List**](#model-aiattachment) | - |
| **400** | The list of attachment IDs is malformed. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**List**](#model-aiattachment)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiAttachmentsLinkToMessage

> AiSuccessResponse aiAttachmentsLinkToMessage(aiAttachmentsLinkToMessage\_request)

`POST /api/2.0/ai/attachments/link-to-message`

Link to message

Binds draft attachments to the chat message that owns them, after that message has been persisted, so that deleting the message removes them too. All three of `ids`, `messageId` and `threadId` are required, and the references are verified rather than trusted: an unknown message answers 404, a message that belongs to a different thread answers 400, and attachments that no longer exist answer 404 naming each missing ID. That verification exists because the underlying binding call skips unknown IDs silently, which used to report success for a link that had not happened. Drafts stay unbound until this succeeds.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAttachmentsLinkToMessage\_request** | body | [**aiAttachmentsLinkToMessage_request**](#model-aiattachmentslinktomessage-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the attachments are now bound to the message. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **400** | The attachment or message reference is malformed. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | The message or the attachment does not exist. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiAttachmentsSaveFile

> AiAttachment aiAttachmentsSaveFile(aiAttachmentsSaveFile\_request)

`POST /api/2.0/ai/attachments/save-file`

Save file

Stores one file attachment as a draft and returns it, so its ID can be attached to a message later. `input` carries the host `path` - the DocSpace entry ID the AI backend resolves server-side - the text `content` already extracted from that file, the ONLYOFFICE numeric file `type`, and optionally a `title`; the text is what the model reads, so this operation does not open the file itself. Archives are refused outright, whatever their declared name says. Drafts are not bound to a conversation until `POST api/2.0/ai/attachments/link-to-message` is called, so an unlinked draft outlives the round that created it.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAttachmentsSaveFile\_request** | body | [**aiAttachmentsSaveFile_request**](#model-aiattachmentssavefile-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored draft, whose ID links it to a message later. | [**AiAttachment**](#model-aiattachment) | - |
| **400** | The attachment payload is malformed. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiAttachment**](#model-aiattachment)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiAttachmentsSaveFilesMany

> List aiAttachmentsSaveFilesMany(aiAttachmentsSaveFilesMany\_request)

`POST /api/2.0/ai/attachments/save-files-many`

Save files many

Stores several file attachments as drafts in one round trip and returns them in the order they were sent. Each entry is validated exactly as the single-file operation validates its `input`, and the first bad one rejects the whole batch with its index named in the message - nothing is stored. `inputs` has to be present and an array: an absent or null value is a malformed request rather than an empty batch, and only an explicit empty array means no files. Follow up with `POST api/2.0/ai/attachments/link-to-message` to bind the drafts to a message.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAttachmentsSaveFilesMany\_request** | body | [**aiAttachmentsSaveFilesMany_request**](#model-aiattachmentssavefilesmany-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored drafts, in the order they were sent. | [**List**](#model-aiattachment) | - |
| **400** | `inputs` is not an array, or one of its entries is malformed. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**List**](#model-aiattachment)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## AIEditorToolsApi

### aiEditorToolsCall

> aiEditorToolsCall_200_response aiEditorToolsCall(aiEditorToolsCall\_request)

`POST /api/2.0/ai/editor-tools/call`

Call an editor tool

Executes one DocSpace tool on behalf of the document editor's AI plugin, server-side and under the caller's own credentials, so the browser never holds the transport. `name` has to be one of the tools `GET api/2.0/ai/editor-tools/list` reports; anything else, including a tool the editor is not allowed to reach, is refused. The result is always returned as a string - a structured result is serialised - because the plugin relays it to the model verbatim. A tool that fails does so inside that string as an error payload rather than as an HTTP status, so check the content before trusting it.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiEditorToolsCall\_request** | body | [**aiEditorToolsCall_request**](#model-aieditortoolscall-request-body) | The tool to run: `name` from `GET api/2.0/ai/editor-tools/list`, `arguments` matching that tool's input schema, and an optional `entityId` for the room to run it in. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The tool's output as a string. A tool that failed reports it inside that string. | [**aiEditorToolsCall_200_response**](#model-aieditortoolscall-200-response) | - |
| **400** | The tool name is not one this portal exposes. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**aiEditorToolsCall_200_response**](#model-aieditortoolscall-200-response)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiEditorToolsList

> aiEditorToolsList_200_response aiEditorToolsList()

`GET /api/2.0/ai/editor-tools/list`

List editor tools

Returns the catalogue of DocSpace tools the document editor's AI plugin may offer the model - the same composed set the DocSpace chat sees, minus the two web-search tools the editor already reaches through its own passthrough. `entityId` scopes the catalogue to a room, which decides the room-specific tools it contains. Each entry carries exactly four fields: the tool name, its description, its input schema, and whether calling it requires an approval dialog; nothing else is exposed, because the raw listings of system servers carry transport details that must not reach a browser. The approval flag follows the same policy the chat engine applies, and a read-only tool comes back needing none - execute a tool with `POST api/2.0/ai/editor-tools/call`, which accepts only the names this catalogue reports.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The tools the editor plugin may offer the model, four fields each. | [**aiEditorToolsList_200_response**](#model-aieditortoolslist-200-response) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**aiEditorToolsList_200_response**](#model-aieditortoolslist-200-response)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## AIExportApi

### aiExportTextToDocx

> aiExportTextToDocx_202_response aiExportTextToDocx(aiExportTextToDocx\_request)

`POST /api/2.0/ai/text-to-docx`

Start markdown → docx export

Queues a markdown-to-docx export and answers 202 as soon as the job is accepted, without waiting for it. `title`, `content` and `folderId` are all required, and a `content` of only whitespace counts as missing even though it is not empty. The conversion runs in the AI worker, which saves the .docx into the target folder - an agent room resolves to its own result-storage subfolder - so there is nothing to poll here: completion arrives as the ordinary folder-modified socket event. This route accepts a body of up to 15 MB rather than the 100 KB the rest of the API allows, because a whole thread transcript is sent in one request.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiExportTextToDocx\_request** | body | [**aiExportTextToDocx_request**](#model-aiexporttexttodocx-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **202** | Confirms the export was queued. The .docx arrives in the target folder later, announced by a folder-modified socket event. | [**aiExportTextToDocx_202_response**](#model-aiexporttexttodocx-202-response) | - |
| **400** | `title`, `content` or `folderId` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The transcript is larger than 15 MB, this route's own parser limit. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**aiExportTextToDocx_202_response**](#model-aiexporttexttodocx-202-response)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## AIOpenAIPassthroughApi

### aiOpenaiChatCompletions

> Map aiOpenaiChatCompletions(profileId, request\_body)

`POST /api/2.0/ai/openai/{profileId}/v1/chat/completions`

OpenAI chat completions passthrough

OpenAI-compatible chat completions for the document editor's AI plugin. The profile is resolved server-side, its credentials are attached, and the body is forwarded to the provider verbatim - the payload is owned by the plugin's SDK on one end and the provider on the other. A client disconnect cancels the provider call.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **profileId** | path | **String** | The AI provider profile identifier. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **request\_body** | body | **Map** | An OpenAI Chat Completions request, forwarded to the provider byte for byte. The shape is the provider's, not this API's, so consult the provider's own reference; the model and the credentials come from the profile in the path and must not be sent here. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The provider's own response, relayed verbatim with its status and content type. | **Map** | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**aiOpenaiChatCompletions_403_response**](#model-aiopenaichatcompletions-403-response) | - |
| **404** | No profile with this identifier exists for the caller. | [**aiOpenaiChatCompletions_403_response**](#model-aiopenaichatcompletions-403-response) | - |
| **413** | The request body is larger than this route accepts. | [**aiOpenaiChatCompletions_403_response**](#model-aiopenaichatcompletions-403-response) | - |
| **429** | Relayed verbatim from the AI provider, which is rate-limiting this portal's key. | [**aiOpenaiChatCompletions_403_response**](#model-aiopenaichatcompletions-403-response) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**aiOpenaiChatCompletions_403_response**](#model-aiopenaichatcompletions-403-response) | - |
| **502** | The AI provider could not be reached, or answered with a failure of its own. | [**aiOpenaiChatCompletions_403_response**](#model-aiopenaichatcompletions-403-response) | - |

#### Return type

**Map**

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiOpenaiImagesGenerations

> Map aiOpenaiImagesGenerations(profileId, request\_body)

`POST /api/2.0/ai/openai/{profileId}/v1/images/generations`

OpenAI image generation passthrough

OpenAI-compatible image generation for the document editor's AI plugin, working exactly as the chat-completions passthrough does: the profile named by `profileId` is resolved server-side, its credentials are attached, and the body reaches the provider unchanged. The provider's status and body are relayed verbatim, so its 429 and its own error envelope surface as they stand. A body larger than this route accepts is refused before it is forwarded. A client disconnect aborts the provider call.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **profileId** | path | **String** | The AI provider profile identifier. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **request\_body** | body | **Map** | An OpenAI image-generation request, forwarded to the provider byte for byte. The shape is the provider's, not this API's, and the credentials come from the profile in the path. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The provider's own response, relayed verbatim with its status and content type. | **Map** | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**aiOpenaiChatCompletions_403_response**](#model-aiopenaichatcompletions-403-response) | - |
| **404** | No profile with this identifier exists for the caller. | [**aiOpenaiChatCompletions_403_response**](#model-aiopenaichatcompletions-403-response) | - |
| **413** | The request body is larger than this route accepts. | [**aiOpenaiChatCompletions_403_response**](#model-aiopenaichatcompletions-403-response) | - |
| **429** | Relayed verbatim from the AI provider, which is rate-limiting this portal's key. | [**aiOpenaiChatCompletions_403_response**](#model-aiopenaichatcompletions-403-response) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**aiOpenaiChatCompletions_403_response**](#model-aiopenaichatcompletions-403-response) | - |
| **502** | The AI provider could not be reached, or answered with a failure of its own. | [**aiOpenaiChatCompletions_403_response**](#model-aiopenaichatcompletions-403-response) | - |

#### Return type

**Map**

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## AIPreferencesApi

### aiPreferencesClearDeepMode

> AiSuccessResponse aiPreferencesClearDeepMode(body)

`DELETE /api/2.0/ai/preferences/clear-deep-mode`

Clear deep mode

Removes the stored extended-thinking setting of a scope (the depth and, with it, the deep-mode toggle), after which reads fall back to the configured default rather than to false. `entityId` picks a room and omitting it clears the portal-wide preference. Clearing a scope that has no stored value is not an error. This differs from storing false, which is an explicit choice a later read reports as set.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | The ID of the room whose preference is cleared, as a bare JSON string. Send an empty body to clear the portal-wide preference. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the scope has no preference of its own and now inherits the default. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiPreferencesGetDeepMode

> Boolean aiPreferencesGetDeepMode(entityId)

`GET /api/2.0/ai/preferences/get-deep-mode`

Get deep mode

Returns the deep-mode toggle of a scope, as a bare boolean: whether the stored extended-thinking depth is above `off`. `entityId` picks a room and omitting it reads the portal-wide preference. A scope that has never had a value stored falls back to the configured default, so the answer never distinguishes off from unset - ask `GET api/2.0/ai/preferences/is-deep-mode-set` for that. This is a read-only operation.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether deep mode is on, falling back to the configured default when the scope has no value of its own. | **Boolean** | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

**Boolean**

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiPreferencesGetReasoningLevel

> AiAiReasoningLevel aiPreferencesGetReasoningLevel(entityId)

`GET /api/2.0/ai/preferences/get-reasoning-level`

Get reasoning level

Returns the effective extended-thinking depth of the scope: `off` while deep mode is off, otherwise the persisted depth (`low`, `medium`, `high`, `max`), falling back to the default depth (`medium`) when none has been stored. `entityId` picks a room and omitting it reads the portal-wide preference. Providers clamp the depth to what the model accepts.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Success. | [**AiAiReasoningLevel**](#model-aiaireasoninglevel) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiAiReasoningLevel**](#model-aiaireasoninglevel)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiPreferencesIsDeepModeSet

> Boolean aiPreferencesIsDeepModeSet(entityId)

`GET /api/2.0/ai/preferences/is-deep-mode-set`

Is deep mode set

Tells whether a scope has an explicitly persisted extended-thinking setting of its own, as opposed to inheriting the configured default. `entityId` picks a room and omitting it asks about the portal-wide preference. A true answer means a value was stored, whether that value is on or off - read the value itself with `GET api/2.0/ai/preferences/get-deep-mode`. This is the check a settings screen uses to show an explicit override rather than an inherited state.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the scope has a preference of its own, whichever way that preference is set. | **Boolean** | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

**Boolean**

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiPreferencesSetDeepMode

> AiSuccessResponse aiPreferencesSetDeepMode(aiPreferencesSetDeepMode\_request)

`PUT /api/2.0/ai/preferences/set-deep-mode`

Set deep mode

Stores the deep-mode toggle of a scope. `false` stores the `off` depth; `true` keeps the depth already stored and falls back to the default depth (`medium`) when none is. `value` has to be a real boolean: a string, a number or an absent value is rejected rather than coerced, so the string false cannot silently switch the setting on and an empty request cannot silently switch it off. `entityId` picks a room and omitting it writes the portal-wide preference. It is idempotent, so there is no need to read the current value first.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiPreferencesSetDeepMode\_request** | body | [**aiPreferencesSetDeepMode_request**](#model-aipreferencessetdeepmode-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the preference was stored. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **400** | `value` is missing or is not a boolean. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiPreferencesSetReasoningLevel

> AiSuccessResponse aiPreferencesSetReasoningLevel(aiPreferencesSetReasoningLevel\_request)

`PUT /api/2.0/ai/preferences/set-reasoning-level`

Set reasoning level

Persists the extended-thinking depth of the scope as its single stored value: a depth turns deep mode on at that depth, `off` turns it off and replaces the stored depth (a later deep-mode `true` without a depth lands on `medium`). `entityId` picks a room and omitting it writes the portal-wide preference. Idempotent.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiPreferencesSetReasoningLevel\_request** | body | [**aiPreferencesSetReasoningLevel_request**](#model-aipreferencessetreasoninglevel-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Success. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## AIProfilesApi

### aiProfilesCreate

> AiProfileMutationResult aiProfilesCreate(AiCreateProfileInput)

`POST /api/2.0/ai/profiles/create`

Create a provider profile

Creates an AI provider profile - the endpoint, credentials and model that a chat round runs on - and returns it. The name has to be unique, the credentials are probed against the live provider before anything is stored, and the portal's first profile also takes the `Default` assignment slot. Two inputs are refused outright: a `baseUrl` pointing at a private network address, and `providerType: external`, which delegates transport to the host application and therefore cannot work for a profile the server manages. On a portal running the AI gateway, profiles are managed centrally and this operation answers 403.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiCreateProfileInput** | body | [**AiCreateProfileInput**](#model-aicreateprofileinput) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the profile was created, with it in `profile`. A refusal is reported in `error` rather than as a status. | [**AiProfileMutationResult**](#model-aiprofilemutationresult) | - |
| **400** | The provider URL is missing, malformed, or points at a private network address. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI profiles are read-only on this portal because they are managed by the AI gateway. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiProfileMutationResult**](#model-aiprofilemutationresult)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiProfilesDelete

> AiSuccessResponse aiProfilesDelete(body)

`DELETE /api/2.0/ai/profiles/delete`

Delete a provider profile

Deletes an AI provider profile and cleans up every assignment pointing at it: the `Default` slot moves to the first remaining profile and the other slots are left unbound. The ID is required and may be sent in the body or as a query parameter. An unknown ID is not reported - the call answers success without deleting anything. Threads already bound to the profile keep the stored reference, so a round on such a thread falls back to whatever the scope resolves to.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | The ID of the profile to delete, as a bare JSON string. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the request was accepted, whether or not a profile was deleted. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **400** | The profile ID is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiProfilesGetById

> aiProfilesGetById_200_response aiProfilesGetById(id)

`GET /api/2.0/ai/profiles/get-by-id`

Get a provider profile

Returns one AI provider profile by its ID, with its secrets stripped: neither the API key nor the custom headers are ever sent back, on any portal. The ID is required and is read from the query, and an unknown one answers 404. The `baseUrl` in the answer is the one that was stored, not the internal gateway address a round actually dials, so it cannot be used to reach the provider directly. Use `GET api/2.0/ai/profiles/list` to enumerate profiles instead of reading them one by one.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | query | **String** | The AI provider profile identifier. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile, with its key and headers stripped. | [**aiProfilesGetById_200_response**](#model-aiprofilesgetbyid-200-response) | - |
| **400** | The profile ID is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | No profile has this ID. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**aiProfilesGetById_200_response**](#model-aiprofilesgetbyid-200-response)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiProfilesList

> List aiProfilesList()

`GET /api/2.0/ai/profiles/list`

List provider profiles

Lists the portal's AI provider profiles with their secrets stripped, the same way the single-profile read does. It takes no parameters and is not paginated, because a portal holds few profiles. On a portal running the AI gateway the answer is synthesised from the gateway's own catalogue rather than from stored records. The IDs in the answer are what the assignment operations and every round's `profileId` accept.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal's profiles, with their keys and headers stripped. | [**List**](#model-aiprofile) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**List**](#model-aiprofile)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiProfilesListModels

> List aiProfilesListModels(profileId)

`GET /api/2.0/ai/profiles/list-models`

List models

Lists the models a stored profile's provider currently offers, asking the provider itself rather than reading a cached list. `profileId` is required and is read from the query. A failure is reported with the provider's own verdict: an unusable key comes back as 400 and a provider that is unreachable or broken as 502, while a missing profile or a caller without access keeps the status the portal gave it. Use `POST api/2.0/ai/profiles/list-provider-models` to probe an endpoint that has no profile yet.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **profileId** | query | **String** | The AI provider profile identifier. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The models the profile's provider currently offers. | [**List**](#model-aimodel) | - |
| **400** | `profileId` is missing, or the provider rejected the profile's API key. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **502** | The AI provider could not be reached, or answered with a failure of its own. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**List**](#model-aimodel)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiProfilesListProviderModels

> List aiProfilesListProviderModels(aiProfilesListProviderModels\_request)

`POST /api/2.0/ai/profiles/list-provider-models`

List provider models

Lists the models an endpoint offers for credentials supplied in the request, before any profile exists - this is what a provider-setup form calls to fill its model picker. `providerType` and `baseUrl` are both required, and a 400 for either names the offending input in a `field` member so the form can highlight it; a `baseUrl` pointing at a private network address is refused as well. For `providerType: onlyoffice` the answer comes from the portal gateway's catalogue, which carries richer capability data than the provider's own listing and matches what `GET api/2.0/ai/profiles/list` reports; a portal without that gateway falls back to asking the provider. A provider that is unreachable or broken is reported as 502, and one that rejects the key as 400.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiProfilesListProviderModels\_request** | body | [**aiProfilesListProviderModels_request**](#model-aiprofileslistprovidermodels-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The models the endpoint offers for the supplied credentials. | [**List**](#model-aimodel) | - |
| **400** | `baseUrl` is missing, points at a private network address, or the provider rejected the supplied API key. | [**aiProfilesListProviderModels_400_response**](#model-aiprofileslistprovidermodels-400-response) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **502** | The AI provider could not be reached, or answered with a failure of its own. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**List**](#model-aimodel)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiProfilesTestConnection

> aiProfilesTestConnection_200_response aiProfilesTestConnection(body)

`POST /api/2.0/ai/profiles/test-connection`

Test a profile's provider

Probes a stored profile's credentials against its provider and reports the outcome in the answer, writing nothing - this is what a Test button calls so that a failure does not commit anything. `profileId` is required and may be sent in the body or as a query parameter. The result is carried in the body rather than in the status, so a failed probe still answers 200 and the caller has to read the payload. To validate credentials that are not stored yet, use `POST api/2.0/ai/profiles/list-provider-models`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | The ID of the profile to probe, as a bare JSON string. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The outcome of the probe. A failed probe is reported here, not as a status. | [**aiProfilesTestConnection_200_response**](#model-aiprofilestestconnection-200-response) | - |
| **400** | `profileId` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**aiProfilesTestConnection_200_response**](#model-aiprofilestestconnection-200-response)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiProfilesUpdate

> AiProfileMutationResult aiProfilesUpdate(AiProfile)

`PUT /api/2.0/ai/profiles/update`

Update a provider profile

Replaces a stored AI provider profile and returns it, re-checking name uniqueness and probing the credentials against the live provider again. The same two inputs are refused as on create - a private-network `baseUrl` and `providerType: external` - and the whole profile is overwritten by the one supplied rather than merged. On a portal running the AI gateway this answers 403, because profiles are managed centrally there. A profile that is bound to an action or an agent keeps those bindings.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiProfile** | body | [**AiProfile**](#model-aiprofile) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the profile was updated, with the stored profile in `profile`. | [**AiProfileMutationResult**](#model-aiprofilemutationresult) | - |
| **400** | The provider URL is missing, malformed, or points at a private network address. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI profiles are read-only on this portal because they are managed by the AI gateway. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiProfileMutationResult**](#model-aiprofilemutationresult)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## AIPromptsApi

### aiPromptsCreate

> AiPromptMutationResult aiPromptsCreate(AiCreatePromptInput)

`POST /api/2.0/ai/prompts/create`

Save a prompt

Saves a new prompt in the caller's own prompt library and returns it. The name has to be non-empty and unique inside its folder, and `folderId` has to name an existing folder - omit it to save the prompt at the root. Prompts are per-user: another user's library is never visible here, and no permission beyond having AI enabled is needed. The answer carries the stored prompt including the ID to use with the update, move and delete operations.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiCreatePromptInput** | body | [**AiCreatePromptInput**](#model-aicreatepromptinput) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the prompt was saved, with it in `prompt`. | [**AiPromptMutationResult**](#model-aipromptmutationresult) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiPromptMutationResult**](#model-aipromptmutationresult)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiPromptsCreateFolder

> AiFolderMutationResult aiPromptsCreateFolder(body)

`POST /api/2.0/ai/prompts/create-folder`

Create folder

Creates a folder in the caller's prompt library and returns it. The name has to be non-empty and unique across that library. Folders do not nest: there is one flat level, so a folder cannot be created inside another. The answer carries the folder ID to use as `folderId` when saving or moving prompts.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | The name of the folder to create, as a bare JSON string. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the folder was created, with it in `folder`. | [**AiFolderMutationResult**](#model-aifoldermutationresult) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiFolderMutationResult**](#model-aifoldermutationresult)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiPromptsDelete

> AiSuccessResponse aiPromptsDelete(body)

`DELETE /api/2.0/ai/prompts/delete`

Delete a saved prompt

Deletes one saved prompt from the caller's library. The ID may be sent in the body or as a query parameter, and it is required. An ID that does not exist, or that belongs to another user, is not reported: the call answers success without deleting anything. The deletion is permanent.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | The ID of the prompt to delete, as a bare JSON string. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the request was accepted, whether or not a prompt was deleted. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **400** | The prompt ID is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiPromptsDeleteFolder

> AiSuccessResponse aiPromptsDeleteFolder(body)

`DELETE /api/2.0/ai/prompts/delete-folder`

Delete folder

Deletes a folder together with every prompt inside it, permanently. The ID is required and may be sent in the body or as a query parameter. Unlike deleting a prompt, this checks first: a folder that does not exist, and one that belongs to another user, both answer 404 - the two cases are deliberately indistinguishable, so a foreign folder cannot be probed. Move the prompts out with `PUT api/2.0/ai/prompts/move` first if they should survive.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | The ID of the folder to delete, as a bare JSON string. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the folder and the prompts inside it are gone. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **400** | The folder ID is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | No prompt folder has this ID. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiPromptsExport

> AiPromptBundle aiPromptsExport()

`GET /api/2.0/ai/prompts/export`

Export the prompt library

Builds a versioned bundle of every prompt and folder in the caller's library and returns it, with no parameters. The bundle is self-contained: it carries its own format version so an older export can still be read back, and it is the input `POST api/2.0/ai/prompts/import-bundle` expects. This is also the only way to read the whole library at once, since listing is folder-scoped. Nothing is changed by the call.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The whole library as a versioned bundle, ready to import. | [**AiPromptBundle**](#model-aipromptbundle) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiPromptBundle**](#model-aipromptbundle)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiPromptsGetById

> AiPrompt aiPromptsGetById(id)

`GET /api/2.0/ai/prompts/get-by-id`

Get a saved prompt

Returns one saved prompt by its ID. The ID is required and is read from the query. An ID that is unknown, or that belongs to another user, is not reported as 404: the answer is an empty body with status 200, so treat a missing payload as no such prompt. Prompt IDs come from `GET api/2.0/ai/prompts/list` or from the answer of the create operation.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | query | **String** | The saved prompt identifier. | [required] [example: `33333333-3333-3333-3333-333333333333`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The prompt, or an empty body when no prompt of the caller's has that ID. | [**AiPrompt**](#model-aiprompt) | - |
| **400** | The prompt ID is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiPrompt**](#model-aiprompt)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiPromptsGetFolderById

> AiPromptFolder aiPromptsGetFolderById(id)

`GET /api/2.0/ai/prompts/get-folder-by-id`

Get a prompt folder

Returns one folder of the caller's prompt library by its ID, without the prompts inside it. The ID is required and is read from the query. An unknown or foreign ID is not reported as 404: the answer is an empty body with status 200. This differs from the delete operation on the same ID, which does answer 404.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | query | **String** | The prompt folder identifier. | [required] [example: `44444444-4444-4444-4444-444444444444`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The folder, or an empty body when no folder of the caller's has that ID. | [**AiPromptFolder**](#model-aipromptfolder) | - |
| **400** | The folder ID is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiPromptFolder**](#model-aipromptfolder)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiPromptsImportBundle

> AiImportResult aiPromptsImportBundle(aiPromptsImportBundle\_request)

`POST /api/2.0/ai/prompts/import-bundle`

Import bundle

Writes a bundle produced by `GET api/2.0/ai/prompts/export` back into the caller's library. `mode` decides how: `replace` deletes the current prompts and folders before writing, and `merge` writes the bundle on top of what is already there. The folder references inside the bundle are validated before anything is written, so a corrupt bundle is rejected whole rather than applied halfway. `replace` is destructive and cannot be undone - export first if the current library matters.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiPromptsImportBundle\_request** | body | [**aiPromptsImportBundle_request**](#model-aipromptsimportbundle-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the bundle was written, how many prompts it imported, and what was refused. | [**AiImportResult**](#model-aiimportresult) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiImportResult**](#model-aiimportresult)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiPromptsList

> List aiPromptsList(folderId)

`GET /api/2.0/ai/prompts/list`

List saved prompts

Lists the caller's saved prompts, newest first. `folderId` scopes the answer to one folder, and omitting it - or sending it empty - lists the prompts that sit at the root rather than every prompt, because the client fetcher cannot tell an absent value from a null one. There is therefore no way to ask for the whole library in one call: walk the folders from `GET api/2.0/ai/prompts/list-folders`, or take everything at once with `GET api/2.0/ai/prompts/export`. The prompts of other users are never included.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | query | **String** | The prompt folder identifier. Omit to list the prompts that sit outside any folder. | [optional] [example: `44444444-4444-4444-4444-444444444444`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The prompts of the scope, newest first. | [**List**](#model-aiprompt) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**List**](#model-aiprompt)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiPromptsListFolders

> List aiPromptsListFolders()

`GET /api/2.0/ai/prompts/list-folders`

List folders

Lists every folder of the caller's prompt library, newest first, with no parameters and no pagination. Folders are flat, so the answer is a single list rather than a tree. The prompts inside them are not included - read those with `GET api/2.0/ai/prompts/list` per folder. Another user's folders are never listed.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Every folder of the caller's library, newest first. | [**List**](#model-aipromptfolder) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**List**](#model-aipromptfolder)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiPromptsMove

> AiPromptMutationResult aiPromptsMove(aiPromptsMove\_request)

`PUT /api/2.0/ai/prompts/move`

Move a prompt to a folder

Moves a saved prompt into another folder, or to the root when `folderId` is omitted or null. The name is re-validated in the target folder, so the move fails when a prompt of that name already sits there - rename it first with `PUT api/2.0/ai/prompts/update`. Nothing about the prompt other than its folder changes. The answer carries the moved prompt.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiPromptsMove\_request** | body | [**aiPromptsMove_request**](#model-aipromptsmove-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the prompt was moved, with the moved prompt in `prompt`. | [**AiPromptMutationResult**](#model-aipromptmutationresult) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiPromptMutationResult**](#model-aipromptmutationresult)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiPromptsRenameFolder

> AiFolderMutationResult aiPromptsRenameFolder(aiPromptsRenameFolder\_request)

`PUT /api/2.0/ai/prompts/rename-folder`

Rename folder

Renames a folder in the caller's prompt library, validating the new name against the folders already there. The prompts inside it are untouched and keep their IDs. The answer carries the renamed folder. A name that another folder already uses is rejected.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiPromptsRenameFolder\_request** | body | [**aiPromptsRenameFolder_request**](#model-aipromptsrenamefolder-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the folder was renamed, with the stored folder in `folder`. | [**AiFolderMutationResult**](#model-aifoldermutationresult) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiFolderMutationResult**](#model-aifoldermutationresult)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiPromptsUpdate

> AiPromptMutationResult aiPromptsUpdate(aiPromptsUpdate\_request)

`PUT /api/2.0/ai/prompts/update`

Update a saved prompt

Changes a saved prompt and returns the stored result. Only the fields present in `updates` are written, so a partial object leaves the rest of the prompt alone. The name and the folder reference are re-validated whenever either changes, which means an update can fail on a name another prompt in the same folder already uses. Use `PUT api/2.0/ai/prompts/move` to change only the folder.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiPromptsUpdate\_request** | body | [**aiPromptsUpdate_request**](#model-aipromptsupdate-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the prompt was updated, with the stored prompt in `prompt`. | [**AiPromptMutationResult**](#model-aipromptmutationresult) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiPromptMutationResult**](#model-aipromptmutationresult)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## AISettingsApi

### aiSettingsGet

> AiAiSettingsWrapper aiSettingsGet()

`GET /api/2.0/ai/config`

Get AI settings

Reports the portal's AI configuration and whether AI is usable at all, which is the first call a client makes before offering any AI feature. It takes no parameters and is proxied unchanged to the DocSpace AI service, so the answer is that service's settings payload. Among other things it says whether the portal runs on the central AI gateway, which decides whether provider profiles can be edited here at all. This is a read-only operation.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal's AI configuration and whether AI is usable at all. | [**AiAiSettingsWrapper**](#model-aiaisettingswrapper) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiAiSettingsWrapper**](#model-aiaisettingswrapper)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiSettingsGetUser

> AiAiUserSettingsWrapper aiSettingsGetUser()

`GET /api/2.0/ai/config/user`

Get user AI settings

Returns the AI settings of the calling user, as opposed to the portal-wide ones. It takes no parameters - the user is the authenticated caller, and there is no way to read somebody else's settings - and is proxied unchanged to the DocSpace AI service. Use `GET api/2.0/ai/config` for the portal-wide configuration. This is a read-only operation.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The calling user's AI settings. | [**AiAiUserSettingsWrapper**](#model-aiaiusersettingswrapper) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiAiUserSettingsWrapper**](#model-aiaiusersettingswrapper)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiSettingsGetVectorization

> AiVectorizationSettingsWrapper aiSettingsGetVectorization()

`GET /api/2.0/ai/config/vectorization`

Get vectorization settings

Returns the portal's vectorization settings - the embedding provider and the options used when portal content is indexed for retrieval. It takes no parameters and is proxied unchanged to the DocSpace AI service. Vectorization is a portal-wide setting, so there is no room-scoped form of it. Change it with `PUT api/2.0/ai/config/vectorization`.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal's vectorization settings. | [**AiVectorizationSettingsWrapper**](#model-aivectorizationsettingswrapper) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiVectorizationSettingsWrapper**](#model-aivectorizationsettingswrapper)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiSettingsSetUser

> AiAiUserSettingsWrapper aiSettingsSetUser(request\_body)

`PUT /api/2.0/ai/config/user`

Update user AI settings

Replaces the AI settings of the calling user and returns the stored result. The body is proxied unchanged to the DocSpace AI service, which validates it, so a rejected value comes back with that service's verdict. Only the caller's own settings can be written. Portal-wide configuration is not touched by this operation.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **request\_body** | body | **Map** | The user's AI settings, proxied unchanged to the DocSpace AI service, which owns and validates the shape. Read the current one with `GET api/2.0/ai/config/user` and send it back changed. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The calling user's stored AI settings. | [**AiAiUserSettingsWrapper**](#model-aiaiusersettingswrapper) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiAiUserSettingsWrapper**](#model-aiaiusersettingswrapper)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiSettingsSetVectorization

> AiVectorizationSettingsWrapper aiSettingsSetVectorization(request\_body)

`PUT /api/2.0/ai/config/vectorization`

Update vectorization settings

Replaces the portal's vectorization settings and returns the stored result. The body is proxied unchanged to the DocSpace AI service, which validates it, so a rejected value is reported with that service's own verdict rather than being checked here. Changing the embedding provider does not re-index anything already indexed - start that separately with `POST api/2.0/ai/vectorization/tasks`. This is a portal-wide setting and requires the permissions the AI service demands for it.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **request\_body** | body | **Map** | The portal's vectorization settings, proxied unchanged to the DocSpace AI service, which owns and validates the shape. Read the current one with `GET api/2.0/ai/config/vectorization` and send it back changed. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored vectorization settings. | [**AiVectorizationSettingsWrapper**](#model-aivectorizationsettingswrapper) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiVectorizationSettingsWrapper**](#model-aivectorizationsettingswrapper)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## AIThreadsApi

### aiThreadsAppendUserMessage

> aiThreadsAppendUserMessage_200_response aiThreadsAppendUserMessage(aiThreadsAppendUserMessage\_request)

`POST /api/2.0/ai/threads/append-user-message`

Append user message

Stores a user message in a thread and bumps its last-edit date so the thread resurfaces at the top of the list. The per-kind attachment cap of the composer is enforced here as well, so a direct API call cannot exceed what the UI allows. Passing `profileId` rebinds the thread to another model, which is how a mid-conversation model switch is recorded. The answer carries the new message's ID; the message is stored as sent and no reply is generated - run a round with `POST api/2.0/ai/ai/send-with-stream` for that.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiThreadsAppendUserMessage\_request** | body | [**aiThreadsAppendUserMessage_request**](#model-aithreadsappendusermessage-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored message, with the ID storage assigned to it. | [**aiThreadsAppendUserMessage_200_response**](#model-aithreadsappendusermessage-200-response) | - |
| **400** | The message is longer than the limit allows. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**aiThreadsAppendUserMessage_200_response**](#model-aithreadsappendusermessage-200-response)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiThreadsClearMessages

> AiSuccessResponse aiThreadsClearMessages(body)

`DELETE /api/2.0/ai/threads/clear-messages`

Clear messages

Removes every message of a thread while keeping the thread, its title and its model binding, and bumps its last-edit date. The messages are gone for good. Unlike `delete` this does not verify that the thread exists, so clearing an unknown `threadId` reports success rather than 404. The answer only confirms the write.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | The ID of the thread to empty, as a bare JSON string. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the request was accepted. It does not mean the thread existed. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **400** | `threadId` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiThreadsCreate

> AiThread aiThreadsCreate(aiThreadsCreate\_request)

`POST /api/2.0/ai/threads/create`

Create a chat thread

Creates a chat thread with a title supplied by the caller and returns it. A scoped thread requires that `entityId` names a room the caller can open, and a model has to resolve for the scope - an explicit `profileId`, or the room's `Chat` assignment - otherwise there is nothing to run the thread against and the call answers 404. In an agent room the agent's own assignment overrides any `profileId` sent with the request, so a thread there always starts on the agent's model. Use `POST api/2.0/ai/threads/open-or-create` instead when the title should be generated from the first user message.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiThreadsCreate\_request** | body | [**aiThreadsCreate_request**](#model-aithreadscreate-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created thread. | [**AiThread**](#model-aithread) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | The `entityId` names a room the caller cannot open, or no live AI profile is bound to it, so there is no model to run the thread against. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiThread**](#model-aithread)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiThreadsDelete

> AiSuccessResponse aiThreadsDelete(body)

`DELETE /api/2.0/ai/threads/delete`

Delete a chat thread

Deletes a thread together with every message in it. The thread has to exist: unlike the other operations that take a `threadId`, this one checks first and answers 404 for an unknown or already-deleted thread rather than reporting success. The deletion is permanent and the messages cannot be recovered. To empty a thread but keep it, use `DELETE api/2.0/ai/threads/clear-messages`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | The ID of the thread to delete, as a bare JSON string. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the thread and its messages are gone. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **400** | `threadId` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | No thread has this ID. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiThreadsDeleteMessage

> AiSuccessResponse aiThreadsDeleteMessage(body)

`DELETE /api/2.0/ai/threads/delete-message`

Delete message

Deletes one message and leaves the rest of the thread untouched. `messageId` is required and may be sent either in the body or as a query parameter. An unknown ID is not reported: the call answers success without having deleted anything, so verify with `GET api/2.0/ai/threads/read-messages` when it matters. The deletion is permanent.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | The ID of the message to delete, as a bare JSON string. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the request was accepted, whether or not a message was deleted. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **400** | `messageId` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiThreadsGetById

> AiThread aiThreadsGetById(threadId)

`GET /api/2.0/ai/threads/get-by-id`

Get a chat thread

Returns one thread by its ID, without its messages - read those with `GET api/2.0/ai/threads/read-messages`. `threadId` is required and an unknown one answers 404, so the result is never an empty body. The answer carries the thread's title, its model binding and its last-edit date. This is a read-only operation and does not bump that date.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **threadId** | query | **String** | The chat thread identifier. | [required] [example: `11111111-1111-1111-1111-111111111111`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The thread, without its messages. | [**AiThread**](#model-aithread) | - |
| **400** | `threadId` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | No thread has this ID. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiThread**](#model-aithread)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiThreadsGetMessageById

> AiThreadMessageLike aiThreadsGetMessageById(messageId)

`GET /api/2.0/ai/threads/get-message-by-id`

Get one chat message

Returns one message by its ID, wherever it sits, without needing the thread it belongs to. `messageId` is required. Unlike `GET api/2.0/ai/threads/get-by-id` an unknown ID is not reported as 404: the answer is an empty body with status 200, so a client has to treat a missing payload as no such message. Message IDs come from the thread history or from the answer of `POST api/2.0/ai/threads/append-user-message`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **messageId** | query | **String** | The globally unique chat message identifier. | [required] [example: `22222222-2222-2222-2222-222222222222`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The message, or an empty body when no message has that ID. | [**AiThreadMessageLike**](#model-aithreadmessagelike) | - |
| **400** | `messageId` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiThreadMessageLike**](#model-aithreadmessagelike)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiThreadsList

> List aiThreadsList(entityId, count, cursor, query)

`GET /api/2.0/ai/threads/list`

List chat threads

Lists the threads of a scope, most recently edited first, and searches their titles case-insensitively when `query` is given. Every parameter is optional: omitting `entityId` lists the global scope, and omitting `count` lets the engine apply its own page size. Pagination is by cursor, and the cursor is a JSON object passed as a string in the query - `{id: <last thread id>, lastEditDate: <its date>}` - taken from the last entry of the previous page. A cursor that is not valid JSON, or that lacks an `id`, is ignored rather than rejected, and the read silently starts from the first page again.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |
| **count** | query | **Integer** | The maximum number of items to return in one page. | [optional] [example: `20`] |
| **cursor** | query | **String** | The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page. | [optional] [example: `{"id":"11111111-1111-1111-1111-111111111111","lastEditDate":1767225600000}`] |
| **query** | query | **String** | The full-text query the thread list is filtered by. | [optional] [example: `contract`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The threads of the scope, most recently edited first. | [**List**](#model-aithread) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**List**](#model-aithread)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiThreadsOpenOrCreate

> AiOpenOrCreateResult aiThreadsOpenOrCreate(aiThreadsOpenOrCreate\_request)

`POST /api/2.0/ai/threads/open-or-create`

Open or create

Opens a chat thread and returns it with its history, or creates one whose title is generated from the first message supplied in the request. That first message is not persisted: follow up with `POST api/2.0/ai/threads/append-user-message` to store it, or start the round directly with `POST api/2.0/ai/ai/send-with-stream`. Unlike `create` this takes a whole resolved `profile` object rather than an ID, and a request without one answers 404 because no model could be bound. A supplied `entityId` has to be a room the caller can open; anything that is not an agent room folds to the global scope instead of being rejected.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiThreadsOpenOrCreate\_request** | body | [**aiThreadsOpenOrCreate_request**](#model-aithreadsopenorcreate-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The thread that was opened or created, with its prior messages. A created one carries the generated title. | [**AiOpenOrCreateResult**](#model-aiopenorcreateresult) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | The `entityId` names a room the caller cannot open, or no live AI profile is bound to it. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiOpenOrCreateResult**](#model-aiopenorcreateresult)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiThreadsReadMessages

> List aiThreadsReadMessages(threadId, count, cursor, direction)

`GET /api/2.0/ai/threads/read-messages`

Read messages

Reads the messages of one thread, oldest first, with the same string-encoded JSON cursor as the thread list. `direction` turns the read around, and only the exact value `desc` does so - anything else, including a misspelling, reads forward. Omitting `threadId` is not an error: the call answers 200 with an empty list, so an empty result does not distinguish a thread with no messages from a request that forgot the ID. A malformed cursor is ignored and the read starts from the beginning.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **threadId** | query | **String** | The chat thread identifier. | [required] [example: `11111111-1111-1111-1111-111111111111`] |
| **count** | query | **Integer** | The maximum number of items to return in one page. | [optional] [example: `20`] |
| **cursor** | query | **String** | The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page. | [optional] [example: `{"id":"11111111-1111-1111-1111-111111111111","lastEditDate":1767225600000}`] |
| **direction** | query | **String** | The order the message page is read in. Only desc turns the read around and pages back from the newest message; omit for the forward read. | [optional] [example: `desc`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The thread's messages, oldest first unless `direction` reversed them. An empty list also means the request carried no thread ID. | [**List**](#model-aithreadmessagelike) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**List**](#model-aithreadmessagelike)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiThreadsRegenerateTitle

> aiThreadsRegenerateTitle_200_response aiThreadsRegenerateTitle(aiThreadsRegenerateTitle\_request)

`POST /api/2.0/ai/threads/regenerate-title`

Regenerate title

Asks the model to produce a title from the thread's first user message, stores it, and returns the new title. Both `threadId` and a resolved `profile` object are required; a thread with no user message yet has nothing to title and fails. This costs a model call, unlike `POST api/2.0/ai/threads/rename`, which just stores the string it is given. An `entityMeta` sent with the request is only read for its `entityId` hint - the source itself is resolved server-side under the caller's credentials, so a client cannot attribute the call to somebody else's room.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiThreadsRegenerateTitle\_request** | body | [**aiThreadsRegenerateTitle_request**](#model-aithreadsregeneratetitle-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The newly generated title, already stored on the thread. | [**aiThreadsRegenerateTitle_200_response**](#model-aithreadsregeneratetitle-200-response) | - |
| **400** | `threadId` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**aiThreadsRegenerateTitle_200_response**](#model-aithreadsregeneratetitle-200-response)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiThreadsRename

> AiSuccessResponse aiThreadsRename(aiThreadsRename\_request)

`PUT /api/2.0/ai/threads/rename`

Rename a chat thread

Replaces a thread's title with the one supplied and bumps its last-edit date. Both `threadId` and a title with at least one non-whitespace character are required - a blank title is rejected rather than silently stored, so a thread cannot end up nameless. The answer only confirms the write. To have the model produce a title instead of supplying one, use `POST api/2.0/ai/threads/regenerate-title`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiThreadsRename\_request** | body | [**aiThreadsRename_request**](#model-aithreadsrename-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the new title was stored. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **400** | `threadId` or the new title is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiThreadsTouch

> AiSuccessResponse aiThreadsTouch(aiThreadsTouch\_request)

`POST /api/2.0/ai/threads/touch`

Bump a thread's activity

Bumps a thread's last-edit date without adding a message, which resurfaces it in the list. Passing `profileId` also rebinds the thread to another model, so this is the operation to call when a model switch alone should count as activity. Nothing else about the thread changes and the answer only confirms the write. It is idempotent: repeating it simply moves the date forward again.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiThreadsTouch\_request** | body | [**aiThreadsTouch_request**](#model-aithreadstouch-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the thread's activity date moved forward. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiThreadsUpdateMessage

> AiSuccessResponse aiThreadsUpdateMessage(aiThreadsUpdateMessage\_request)

`PUT /api/2.0/ai/threads/update-message`

Update message

Replaces the content of one stored message, which is how the edit and regenerate flows change a message outside the streaming lifecycle. The whole message is overwritten by the one supplied rather than merged, so send a complete object. Neither the ID nor the payload is validated here, so a malformed request surfaces as an error relayed from storage rather than as a 400. The answer only confirms the write.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiThreadsUpdateMessage\_request** | body | [**aiThreadsUpdateMessage_request**](#model-aithreadsupdatemessage-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the replacement was stored. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## AIToolsApi

### aiToolsAddCustomServer

> AiToolsMutationResult aiToolsAddCustomServer(aiToolsAddCustomServer\_request)

`POST /api/2.0/ai/tools/add-custom-server`

Add custom server

Registers a custom MCP server under the given name so the model may call its tools. The name becomes a URL path segment, so it may not be `.`, `..`, or contain a path separator or a control character. `config` may be omitted in two cases: a name matching a host-configured system server pins the entry to that server's canonical settings as a whitelist marker, and a name already registered portal-wide copies the portal-level configuration into this scope; anything else without a config is rejected. `entityId` scopes the registration and has to name a room the caller can open - a room that is not an agent room folds to the portal-wide scope, while an unreachable one is refused so it cannot silently rewrite the portal's own registry.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiToolsAddCustomServer\_request** | body | [**aiToolsAddCustomServer_request**](#model-aitoolsaddcustomserver-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the server was registered, with the stored entry. | [**AiToolsMutationResult**](#model-aitoolsmutationresult) | - |
| **400** | The server name is missing or is not routable. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | The referenced object does not exist, or the caller cannot access it - the two are deliberately indistinguishable, so a room the caller may not open answers 404 rather than 403. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiToolsMutationResult**](#model-aitoolsmutationresult)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiToolsGetAllowAlways

> List aiToolsGetAllowAlways(entityId)

`GET /api/2.0/ai/tools/get-allow-always`

Get allow always

Returns the always-allow list of the scope - the tools whose calls run without pausing the round for approval. `entityId` picks the scope and omitting it reads the portal-wide setting. An empty answer means every tool call has to be approved through `POST api/2.0/ai/ai/approve-tool-call`. Use `GET api/2.0/ai/tools/is-allow-always` to ask about a single tool.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The tools that run without an approval pause. An empty list means every call needs approval. | **List** | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

**List**

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiToolsGetCustomServer

> Object aiToolsGetCustomServer(name, entityId)

`GET /api/2.0/ai/tools/get-custom-server`

Get custom server

Returns the stored configuration of one registered custom MCP server. The name is required and is read from the query; `entityId` picks the scope, and omitting it reads the portal-wide registry. A name that is not registered answers a null body with status 200 rather than 404. The configuration of a system server is returned empty on purpose: those run server-side only, so neither their endpoint nor their credentials are handed to a browser.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **name** | query | **String** | The custom MCP server name. | [required] [example: `acme-mcp`] |
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored configuration, empty for a system server and null when the name is not registered. | **Object** | - |
| **400** | The server name is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

**Object**

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiToolsGetDisabled

> Map aiToolsGetDisabled(entityId)

`GET /api/2.0/ai/tools/get-disabled`

Get disabled

Returns the tools switched off in the scope, as a map of server type to tool names. `entityId` picks the scope and omitting it reads the portal-wide setting. An absent server type means nothing is switched off for it, so an empty answer means every tool is on offer. Use `GET api/2.0/ai/tools/is-tool-disabled` to ask about one tool instead of reading the whole map.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The switched-off tools as a map of server type to tool names. An absent type means nothing is switched off for it. | **Map** | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

**Map**

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiToolsIsAllowAlways

> Boolean aiToolsIsAllowAlways(serverType, toolName, entityId)

`GET /api/2.0/ai/tools/is-allow-always`

Is allow always

Tells whether one named tool runs without an approval pause in the scope. Both `serverType` and `toolName` are required and are read from the query; `entityId` picks the scope. The answer is a bare boolean. A false answer means a call to that tool pauses the round, and the caller resumes it with the approve or deny operation.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **serverType** | query | **String** | The MCP server type the tool belongs to. | [required] [example: `docspace`] |
| **toolName** | query | **String** | The tool name. | [required] [example: `docspace_get_folder`] |
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether that one tool runs without an approval pause. | **Boolean** | - |
| **400** | `serverType` or `toolName` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

**Boolean**

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiToolsIsToolDisabled

> Boolean aiToolsIsToolDisabled(serverType, toolName, entityId)

`GET /api/2.0/ai/tools/is-tool-disabled`

Is tool disabled

Tells whether one named tool of one server type is switched off in the scope. Both `serverType` and `toolName` are required and are read from the query; `entityId` picks the scope. The answer is a bare boolean. It reflects only the disable list - a tool that is on offer may still require approval, which `GET api/2.0/ai/tools/is-allow-always` reports.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **serverType** | query | **String** | The MCP server type the tool belongs to. | [required] [example: `docspace`] |
| **toolName** | query | **String** | The tool name. | [required] [example: `docspace_get_folder`] |
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether that one tool is switched off in the scope. | **Boolean** | - |
| **400** | `serverType` or `toolName` is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

**Boolean**

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiToolsListCustomServers

> Map aiToolsListCustomServers(entityId)

`GET /api/2.0/ai/tools/list-custom-servers`

List custom servers

Lists the custom MCP servers registered in the scope as a map of name to configuration. `entityId` picks the scope and omitting it lists the portal-wide registry. The configuration of any entry that names a host-configured system server comes back empty, for the same reason as in the single-server read, and the portal's own built-in MCP server is left out of the list entirely because it is always enabled and cannot be configured. The names in the answer are what the disable and always-allow operations accept as `serverType`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The scope's registrations as a map of name to configuration, system entries emptied and the portal's built-in server left out. | **Map** | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

**Map**

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiToolsListSystemTools

> aiToolsListSystemTools_200_response aiToolsListSystemTools(entityId)

`GET /api/2.0/ai/tools/list-system-tools`

List system tools

Lists every tool the scope can offer the model, as a map of server type to tool group. The answer merges two sources - the host-configured system servers and the live tools of the scope's registered custom MCP servers - and names the system ones separately in `system`, so a client can tell the two apart. `errors` carries the reason a registered server delivered no tools, which is the text to show on a permission card, because the browser cannot reach a server-executed MCP server to find out for itself. The connections are opened server-side, so one request is enough and the client never speaks MCP itself; the portal's own built-in server is left out because it is always enabled.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The scope's tools grouped by server type, the system group keys named in `system`, and the reason a registered server delivered none in `errors`. | [**aiToolsListSystemTools_200_response**](#model-aitoolslistsystemtools-200-response) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**aiToolsListSystemTools_200_response**](#model-aitoolslistsystemtools-200-response)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiToolsRemoveCustomServer

> AiSuccessResponse aiToolsRemoveCustomServer(aiToolsRemoveCustomServer\_request)

`DELETE /api/2.0/ai/tools/remove-custom-server`

Remove custom server

Unregisters a custom MCP server from the scope, so the model is no longer offered its tools. The name is required and may be sent in the body or as a query parameter, and `entityId` has to name a room the caller can open. A name that is not registered is not reported: the call answers success without removing anything. The server itself is untouched - only this portal's registration is dropped.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiToolsRemoveCustomServer\_request** | body | [**aiToolsRemoveCustomServer_request**](#model-aitoolsremovecustomserver-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the request was accepted, whether or not a registration was removed. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **400** | The server name is missing. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | The referenced object does not exist, or the caller cannot access it - the two are deliberately indistinguishable, so a room the caller may not open answers 404 rather than 403. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiToolsReplaceAllCustomServers

> AiToolsBulkResult aiToolsReplaceAllCustomServers(aiToolsReplaceAllCustomServers\_request)

`PUT /api/2.0/ai/tools/replace-all-custom-servers`

Replace all custom servers

Replaces the whole custom MCP server registry of the scope with the supplied map in one write, which makes it the operation a settings screen saves with. `map` is required: without it the registry would be emptied, so a missing or non-object value is rejected rather than treated as none. Every name in the map is validated as a routable path segment and every configuration is resolved before anything is written, so a map with one bad entry changes nothing. `entityId` has to name a room the caller can open - this is the operation where an unreachable one would otherwise have wiped the portal-wide registry.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiToolsReplaceAllCustomServers\_request** | body | [**aiToolsReplaceAllCustomServers_request**](#model-aitoolsreplaceallcustomservers-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the registry was replaced, with `errors` listing what was refused. | [**AiToolsBulkResult**](#model-aitoolsbulkresult) | - |
| **400** | The body is not a map of server name to configuration, or a name is not routable. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | The referenced object does not exist, or the caller cannot access it - the two are deliberately indistinguishable, so a room the caller may not open answers 404 rather than 403. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiToolsBulkResult**](#model-aitoolsbulkresult)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiToolsSetAllowAlways

> AiSuccessResponse aiToolsSetAllowAlways(aiToolsSetAllowAlways\_request)

`PUT /api/2.0/ai/tools/set-allow-always`

Set allow always

Adds one tool to the scope's always-allow list, or takes it off, which decides whether a call to it pauses the round for approval. `value` is coerced to a boolean, so any truthy value adds and any falsy one removes. Unlike the disable operation, `serverType` is not validated here: an unknown one is stored and then simply never matches, so a wrong value fails silently. `entityId` has to name a room the caller can open.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiToolsSetAllowAlways\_request** | body | [**aiToolsSetAllowAlways_request**](#model-aitoolssetallowalways-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the always-allow list was updated. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | The referenced object does not exist, or the caller cannot access it - the two are deliberately indistinguishable, so a room the caller may not open answers 404 rather than 403. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiToolsSetDisabled

> AiSuccessResponse aiToolsSetDisabled(aiToolsSetDisabled\_request)

`PUT /api/2.0/ai/tools/set-disabled`

Set disabled

Switches off the listed tools of one server type in the scope, so the model is no longer offered them. `serverType` has to be a key the round's tool filter actually matches - a host-configured system server, one of the two DocSpace integration groups, web search, image generation, or one of the scope's registered custom servers - and an unknown value is rejected with the list of valid ones in the message, rather than stored and silently ignored. `toolNames` replaces the previous selection for that server type, so send the full list and pass an empty one to switch everything back on. `entityId` has to name a room the caller can open.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiToolsSetDisabled\_request** | body | [**aiToolsSetDisabled_request**](#model-aitoolssetdisabled-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the new disable list was stored for that server type. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **400** | The list of tools to disable is malformed. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | The referenced object does not exist, or the caller cannot access it - the two are deliberately indistinguishable, so a room the caller may not open answers 404 rather than 403. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiToolsUpdateCustomServer

> AiToolsMutationResult aiToolsUpdateCustomServer(aiToolsUpdateCustomServer\_request)

`PUT /api/2.0/ai/tools/update-custom-server`

Update custom server

Replaces the stored configuration of a registered custom MCP server, under the same name and scope rules as the add operation. The name is re-validated as a routable path segment, and an omitted `config` resolves the same way - to a system server's canonical settings, or to the portal-level entry of that name. `entityId` has to name a room the caller can open. The answer carries the stored registry entry.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiToolsUpdateCustomServer\_request** | body | [**aiToolsUpdateCustomServer_request**](#model-aitoolsupdatecustomserver-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the server was updated, with the stored entry. | [**AiToolsMutationResult**](#model-aitoolsmutationresult) | - |
| **400** | The server name is missing or is not routable. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | The referenced object does not exist, or the caller cannot access it - the two are deliberately indistinguishable, so a room the caller may not open answers 404 rather than 403. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiToolsMutationResult**](#model-aitoolsmutationresult)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## AIVectorizationApi

### aiVectorizationStartTask

> aiVectorizationStartTask_200_response aiVectorizationStartTask(aiVectorizationStartTask\_request)

`POST /api/2.0/ai/vectorization/tasks`

Start a vectorization task

Queues the indexing of the portal files named in the body so their contents can be retrieved during a chat round. The body is proxied unchanged to the DocSpace AI service, which validates it and owns the job. Indexing is asynchronous and fire-and-forget: the answer acknowledges the request without carrying a job handle, so there is nothing to poll and progress is not reported here. The embedding provider used is the one in `GET api/2.0/ai/config/vectorization`, and changing that setting does not re-index anything already indexed - queue it again for that.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiVectorizationStartTask\_request** | body | [**aiVectorizationStartTask_request**](#model-aivectorizationstarttask-request-body) | The files to index, proxied unchanged to the DocSpace AI service, which owns and validates the shape. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the indexing was queued. It carries no job handle, so there is nothing to poll. | [**aiVectorizationStartTask_200_response**](#model-aivectorizationstarttask-200-response) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**aiVectorizationStartTask_200_response**](#model-aivectorizationstarttask-200-response)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## AIWebSearchApi

### aiWebSearchClear

> AiSuccessResponse aiWebSearchClear(body)

`DELETE /api/2.0/ai/web-search/clear`

Clear the web-search configuration

Removes the portal's web-search configuration, after which web search is unavailable everywhere it was not configured separately. This is not scoped: it takes no `entityId` and any body sent with it is ignored, so it cannot be used to clear one room's configuration. Clearing an already-unconfigured portal is not an error and the call answers success either way. The stored provider key is destroyed with the configuration and has to be entered again.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | Ignored. The operation always clears the portal-wide configuration, so send an empty body; a value here does not scope it to a room. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the portal has no web-search configuration any more. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiWebSearchConfigure

> AiWebSearchMutationResult aiWebSearchConfigure(aiWebSearchConfigure\_request)

`PUT /api/2.0/ai/web-search/configure`

Configure and verify web search

Validates a web-search configuration against the live provider and stores it only if the provider answers, which makes it the safe way to save a form in one step. `entityId` scopes the configuration to a room and has to name one the caller can open; omitting it configures the portal. A `baseUrl` pointing at a private network address is refused. Use `PUT api/2.0/ai/web-search/set-active-config` when the configuration should be stored without a provider round trip.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiWebSearchConfigure\_request** | body | [**aiWebSearchConfigure_request**](#model-aiwebsearchconfigure-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the configuration was stored, after the provider answered. | [**AiWebSearchMutationResult**](#model-aiwebsearchmutationresult) | - |
| **400** | The provider URL is missing, malformed, or points at a private network address. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | The referenced object does not exist, or the caller cannot access it - the two are deliberately indistinguishable, so a room the caller may not open answers 404 rather than 403. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiWebSearchMutationResult**](#model-aiwebsearchmutationresult)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiWebSearchGetActiveConfig

> AiWebSearchConfig aiWebSearchGetActiveConfig(entityId)

`GET /api/2.0/ai/web-search/get-active-config`

Get active config

Returns the web-search configuration in force for a scope - the provider, its endpoint and its settings. `entityId` picks a room and has to name one the caller can open; omitting it reads the portal-wide configuration, and a room with none of its own falls back to that. An unconfigured scope answers an empty result rather than 404. The provider key is not part of the answer, so a client cannot read it back after storing it.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The configuration in force for the scope, without the provider key, or an empty result when web search is not configured. | [**AiWebSearchConfig**](#model-aiwebsearchconfig) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | The referenced object does not exist, or the caller cannot access it - the two are deliberately indistinguishable, so a room the caller may not open answers 404 rather than 403. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiWebSearchConfig**](#model-aiwebsearchconfig)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiWebSearchIsConfigured

> Boolean aiWebSearchIsConfigured(entityId)

`GET /api/2.0/ai/web-search/is-configured`

Is configured

Tells whether web search is available in a scope, as a bare boolean, which is the cheap check for hiding or showing the feature. `entityId` picks a room and has to name one the caller can open. It reports the same state as `GET api/2.0/ai/web-search/get-active-config` without transferring the configuration itself. A true answer means a provider is stored, not that the provider is currently reachable - probe that with `POST api/2.0/ai/web-search/test-connection`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether a web-search provider is stored for the scope. | **Boolean** | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | The referenced object does not exist, or the caller cannot access it - the two are deliberately indistinguishable, so a room the caller may not open answers 404 rather than 403. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

**Boolean**

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### aiWebSearchPassthroughContents

> Map aiWebSearchPassthroughContents(request\_body)

`POST /api/2.0/ai/websearch/v1/contents`

Web page contents passthrough

Fetches the contents of web pages on behalf of the document editor's AI plugin, against the portal's active web-search provider, exactly as the search passthrough does — including the `entityId` / `entityKind` billing attribution. The portal-wide configuration is used and a portal without one answers 404. The provider's status, body and content type are relayed verbatim, so its 429 and its failures surface unchanged. This is the follow-up to `POST api/2.0/ai/websearch/v1/search`, which returns the results whose contents this operation retrieves.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **request\_body** | body | **Map** | A page-contents request in the shape the portal's active web-search provider expects, forwarded to it unchanged. The endpoint and the key come from the stored configuration. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The provider's own response, relayed verbatim with its status and content type. | **Map** | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | Web search is not configured for this portal. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **429** | Relayed verbatim from the AI provider, which is rate-limiting this portal's key. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **502** | The AI provider could not be reached, or answered with a failure of its own. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

**Map**

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiWebSearchPassthroughSearch

> Map aiWebSearchPassthroughSearch(request\_body)

`POST /api/2.0/ai/websearch/v1/search`

Web search passthrough

Runs a web search on behalf of the document editor's AI plugin, which holds only a placeholder configuration - the portal's active provider and its key are resolved here, so neither ever reaches the browser. The portal-wide configuration is used, and a portal without one answers 404. The `entityId` and `entityKind` query parameters name the document the search is billed to; with the ONLYOFFICE provider the entry is resolved under the caller's credentials and sent to the gateway as the request `metadata` (`source_id` / `source_type` / `source_title`), and an entry the caller cannot open sends none. The provider's own status, body and content type are relayed as they stand, so a provider that rate-limits answers 429 and one that is unreachable answers 502. Closing the connection aborts the upstream request.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **request\_body** | body | **Map** | A search request in the shape the portal's active web-search provider expects, forwarded to it unchanged. The endpoint and the key come from the stored configuration and must not be sent here. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The provider's own response, relayed verbatim with its status and content type. | **Map** | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | Web search is not configured for this portal. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **429** | Relayed verbatim from the AI provider, which is rate-limiting this portal's key. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **502** | The AI provider could not be reached, or answered with a failure of its own. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

**Map**

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiWebSearchSetActiveConfig

> AiSuccessResponse aiWebSearchSetActiveConfig(aiWebSearchConfigure\_request)

`PUT /api/2.0/ai/web-search/set-active-config`

Set active config

Stores a web-search configuration without contacting the provider first, for a form that has already validated its input or for restoring a known-good configuration. `entityId` scopes it to a room and has to name one the caller can open. A `baseUrl` pointing at a private network address is still refused, because that check is local. Nothing guarantees the stored provider works: follow up with `POST api/2.0/ai/web-search/test-connection`, or use `PUT api/2.0/ai/web-search/configure` to have the store gated on a live probe.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiWebSearchConfigure\_request** | body | [**aiWebSearchConfigure_request**](#model-aiwebsearchconfigure-request-body) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the configuration was stored, unverified. | [**AiSuccessResponse**](#model-aisuccessresponse) | - |
| **400** | The provider URL is missing, malformed, or points at a private network address. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **404** | The referenced object does not exist, or the caller cannot access it - the two are deliberately indistinguishable, so a room the caller may not open answers 404 rather than 403. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**AiSuccessResponse**](#model-aisuccessresponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### aiWebSearchTestConnection

> aiProfilesTestConnection_200_response aiWebSearchTestConnection(AiWebSearchConfig)

`POST /api/2.0/ai/web-search/test-connection`

Test a web-search provider

Probes a web-search configuration against the live provider and reports the outcome, storing nothing - this is what a Test button calls so that a failure commits no state. The configuration is taken from the request rather than from storage, so credentials that were never saved can be checked. A `baseUrl` pointing at a private network address is refused before any request leaves the portal. The verdict is carried in the body rather than in the status, so a failed probe still answers 200 and the caller has to read the payload.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiWebSearchConfig** | body | [**AiWebSearchConfig**](#model-aiwebsearchconfig) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The outcome of the probe. A failed probe is reported here, not as a status. | [**aiProfilesTestConnection_200_response**](#model-aiprofilestestconnection-200-response) | - |
| **400** | The provider URL is missing, malformed, or points at a private network address. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](#model-aierrorresponse) | - |

#### Return type

[**aiProfilesTestConnection_200_response**](#model-aiprofilestestconnection-200-response)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## Models


### Model AiActionType
The AI action a request or an assignment applies to. Each action has its own assignment slot; `Default` is the profile used when an action's own slot is empty.

Possible values:

- `Default`
- `Chat`
- `Code`
- `Summarization`
- `Translation`
- `TextAnalyze`
- `ImageGeneration`
- `OCR`
- `Vision`


### Model AiAgentNewItemsDto
The agent new item's information.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **agent** | [**AiFileEntryBaseDto**](#model-aifileentrybasedto) | The agent file entry. | [required] |
| **items** | [**List**](#model-aifileentrybasedto) | The list of file entry items. | [required] [nullable] |


### Model AiAiActionArgs

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **tools** | [**List**](#model-aitmcpitem) | Extra tools offered to the model for this request. | [optional] [example: `[]`] |
| **isReasoning** | **Boolean** | Legacy extended-thinking switch; stands for `medium`. `reasoningLevel` wins when both are set. | [optional] [example: `false`] |
| **reasoningLevel** | [**AiAiReasoningLevel**](#model-aiaireasoninglevel) | Depth of extended thinking for the round; providers clamp it to what the model accepts. | [optional] [enum: `off`, `low`, `medium`, `high`, `max`] |
| **prompt** | [**AiAiActionArgs_prompt**](#model-aiaiactionargsprompt) |  | [optional] |


### Model AiAiActionArgs.prompt
Override the action's baked-in system prompt (replace or append).

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **mode** | **String** |  | [required] [enum: `replace`, `append`] |
| **text** | **String** |  | [required] |


### Model AiAiReasoningLevel
Provider-neutral extended-thinking depth. `off` disables thinking where the model allows it.

Possible values:

- `off`
- `low`
- `medium`
- `high`
- `max`


### Model AiAiSendStreamBody
Shared body of the two streaming send endpoints (`sendWithStream` and its OpenAI-framed twin) — the `Chat` action is implied, so there is no `actionType`.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** | Target thread; a new one is created (with an auto title) when omitted. | [optional] [example: `11111111-1111-1111-1111-111111111111`] |
| **userMessage** | [**AiThreadMessageLike**](#model-aithreadmessagelike) | The user turn to send. | [required] [example: `{role=user, content=Summarise the attached contract.}`] |
| **actionArgs** | [**AiAiActionArgs**](#model-aiaiactionargs) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] [example: `{isReasoning=false}`] |
| **entityId** | **String** | Optional entity (room) scope for profile resolution. | [optional] [example: `1234`] |
| **profileId** | **String** | Session-level profile override for this request only. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |


### Model AiAiSettingsDto
The AI module settings.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **vectorizationEnabled** | **Boolean** | Indicates whether document vectorization is enabled. | [optional] [example: `true`] |
| **vectorizationNeedReset** | **Boolean** | Indicates whether the embedding provider API key needs to be reconfigured. | [optional] [example: `false`] |
| **aiReady** | **Boolean** | Indicates whether the AI subsystem is fully configured and operational. | [optional] [example: `true`] |
| **embeddingModel** | **String** | The name of the embedding model used for document vectorization. | [required] [example: `text-embedding-3-small`] [nullable] |
| **systemAiEnabled** | **Boolean** | Indicates whether the system-level AI provider is enabled. | [optional] [example: `true`] |
| **recommendedModelForForms** | **String** | The identifier of the model recommended for form generation. | [optional] [example: `gpt-5.4`] [nullable] |


### Model AiAiSettingsWrapper
The successful API response containing the AiSettingsDto object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**AiAiSettingsDto**](#model-aiaisettingsdto) | The AiSettingsDto object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-aiaiusersettingswrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model AiAiToolCallData
Identifies a pending tool call to resume — mirrors the library `ToolCallData` (its serializable fields).

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** | Thread the assistant message belongs to. | [required] [example: `11111111-1111-1111-1111-111111111111`] |
| **messageId** | **String** | Storage id of the assistant message holding the tool call. | [required] [example: `22222222-2222-2222-2222-222222222222`] |
| **idx** | **BigDecimal** | Index of the tool-call content part inside `message.content`. | [required] [example: `0`] |
| **message** | [**AiThreadMessageLike**](#model-aithreadmessagelike) | Snapshot of the assistant message at the time the tool call surfaced. | [required] [example: `{role=assistant, content=}`] |
| **actionArgs** | [**AiAiActionArgs**](#model-aiaiactionargs) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] [example: `{isReasoning=false}`] |
| **entityId** | **String** | Optional entity (room) scope for profile resolution. | [optional] [example: `1234`] |
| **profileId** | **String** | Session-level profile override for this request only. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |


### Model AiAiUserSettingsDto
The per-user AI settings.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **chatRecommendedModelVisible** | **Boolean** | Indicates whether the recommended model banner is visible in the AI chat for the current user. | [optional] [example: `true`] |


### Model AiAiUserSettingsWrapper
The successful API response containing the AiUserSettingsDto object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**AiAiUserSettingsDto**](#model-aiaiusersettingsdto) | The AiUserSettingsDto object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-aiaiusersettingswrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model AiAiUserSettingsWrapper.links item

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **href** | **String** | URL of the link | [optional] |
| **action** | **String** | Action associated with the link | [optional] |


### Model AiApiDateTime
The API date and time parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **utcTime** | **Date** (date-time) | The time in UTC format. | [optional] [example: `2018-01-01T00:00:00.0000000Z`] |
| **timeZoneOffset** | **String** (date-span) | The time zone offset. | [optional] [example: `00:00:00`] |


### Model AiAssignmentMutationResult
Outcome of `AssignmentsEngine.assign` / `AssignmentsEngine.unassign`. Either a success or a field-scoped error suitable for displaying in the profile editor.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the assignment was persisted. | [required] [example: `true`] |
| **error** | [**AiTErrorData**](#model-aiterrordata) | Why the assignment was rejected. Present on failure. | [optional] |


### Model AiAttachment
Persistent record for a single attachment (file or image) referenced from a user message. Files carry extracted text in `content`; images carry base64 data in `base64`. Metadata (`title`, `path`, `type`) is always present for display purposes regardless of whether the heavy payload is loaded.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Storage-assigned UUID. | [required] [example: `55555555-5555-5555-5555-555555555555`] |
| **kind** | **String** | file \| image. | [required] [example: `file`] [enum: `file`, `image`] |
| **source** | **String** | Origin of the attachment. `user` — uploaded by the user in the composer (the default when unset, for backward compatibility). `tool` — produced by a tool call (e.g. `generate_image`). Lets the integrator's adapter route or apply policies (separate bucket, quotas, TTL, CDN) per source. | [optional] [example: `user`] [enum: `user`, `tool`] |
| **title** | **String** | Display label (filename or user-visible title). | [required] [example: `contract.docx`] |
| **content** | **String** | Extracted text for files. | [optional] [example: `This agreement is made on 1 January 2026 between …`] |
| **base64** | **String** | Base64 data URL for images. | [optional] |
| **path** | **String** | Original host file path (for files). | [optional] [example: `file_1234`] |
| **type** | **BigDecimal** | ONLYOFFICE file type code (for files). | [optional] [example: `7`] |
| **messageId** | **String** | Owning message id once linked. Unset while the attachment is a draft. | [optional] [example: `22222222-2222-2222-2222-222222222222`] |
| **threadId** | **String** | Owning thread id once linked. Unset while the attachment is a draft. | [optional] [example: `11111111-1111-1111-1111-111111111111`] |
| **entityId** | **String** | Opaque scope token (entity / room) the attachment was created in. Drafts carry it so an entity switch keeps in-flight composer state isolated; once linked to a message the field is redundant with the thread's own entity binding. | [optional] [example: `1234`] |
| **createdAt** | **BigDecimal** | Storage-assigned creation timestamp. | [required] [example: `1767225600000`] |
| **canAnalyze** | **Boolean** | Whether the attached form can be analyzed. | [optional] [example: `false`] |
| **formKeys** | [**List**](#model-aiattachmentformkeys-item) | Keys of the fields inside the form. `key` is the field identifier, `text` its human-readable label. | [optional] [example: `[]`] |


### Model AiAttachment.formKeys item

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **key** | **String** |  | [required] |
| **text** | **String** |  | [required] |


### Model AiBuiltinProviderType
Union of all 17 built-in AI provider type identifiers.  The `external` provider has no built-in transport — it delegates every HTTP request to `PlatformAdapter.externalFetch` and parses the response with the inner provider selected by `Profile.basedOn`.

Possible values:

- `anthropic`
- `ollama`
- `openai`
- `openaicompatible`
- `together`
- `openrouter`
- `genai`
- `deepseek`
- `xai`
- `lm-studio`
- `mistral`
- `groq`
- `zhipu`
- `stabilityai`
- `gpt4all`
- `onlyoffice`
- `external`


### Model AiBulkAssignmentResult
Outcome of `AssignmentsEngine.bulkAssign`. Either every entry persisted, or no entries persisted and a per-key error report. The engine validates first and writes second so a single bad entry never leaves the assignment table in a half-written state.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when every entry was persisted. | [required] [example: `true`] |
| **errors** | [**List**](#model-aibulkassignmentresulterrors-item) | What was rejected, per action. Present on failure - and then no entry was persisted. | [optional] [example: `[]`] |


### Model AiBulkAssignmentResult.errors item

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **actionType** | [**AiActionType**](#model-aiactiontype) |  | [required] [enum: `Default`, `Chat`, `Code`, `Summarization`, `Translation`, `TextAnalyze`, `ImageGeneration`, `OCR`, `Vision`] |
| **error** | [**AiTErrorData**](#model-aiterrordata) |  | [required] |


### Model AiChatEvent
Discriminated event emitted by the streaming methods of `AIEngine`. The engine never invokes user-supplied middleware or callbacks directly — every observable side-effect is encoded as a `ChatEvent` so the same stream can be replayed over SSE, WebSocket, or in-process.  Pause point: `tool-call-pending` is the only stop. The UI must execute the tool itself (consulting `autoAllow` to decide between the silent path and the approve dialog) and resume via `AIEngine.approveToolCall` or `AIEngine.denyToolCall`.  Other variants are pure data:  - `message-start` / `message-delta` / `message-end` — assistant reply lifecycle. - `message-incomplete` — the provider returned an error or incomplete status. - `thread-title` — auto-generated title ready for a new thread.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | **String** | Emitted once per `sendWithStream` call, immediately after the user message has been persisted by storage and before the assistant stream starts. Carries the storage-assigned `id` and `createdAt`. The UI uses it to render the user bubble — no client-side optimistic placeholder is needed, which keeps the runtime tree free of phantom nodes from index-fallback ids. | [required] [example: `message-delta`] [enum: `user-message-stored`, `message-start`, `message-delta`, `message-end`, `message-incomplete`, `tool-call-pending`, `thread-title`] |
| **message** | [**AiThreadMessageLike**](#model-aithreadmessagelike) | The message the event is about, in the state it has reached. | [optional] |
| **messageId** | **String** | The storage identifier of that message. | [optional] [example: `22222222-2222-2222-2222-222222222222`] |
| **idx** | **BigDecimal** | The zero-based position of the pending tool call within the message. | [optional] |
| **threadId** | **String** | The thread the event belongs to. | [optional] [example: `11111111-1111-1111-1111-111111111111`] |
| **autoAllow** | **Boolean** | The consumer should execute the tool without prompting the user. True when the tool is in the persisted always-allow list, or the tool itself opts in via `TMCPItem.requireApproval === false` (host tools default to this). For a client-side tool with a server-side engine, this lets the engine return the pending call already flagged auto-allow so the client runs it and streams the result back without a dialog round-trip. | [optional] |
| **serverExecuted** | **Boolean** | Set when the tool is served by a server-side system source: the consumer must NOT execute it locally — only show the approval UI (unless `autoAllow`) and resume via `approveToolCall` (no `result` needed) / `denyToolCall`. The engine runs it in-engine. | [optional] |
| **title** | **String** | The generated thread title. | [optional] |
| **profileId** | **String** | The profile that generated the title, when one was used. | [optional] |


### Model AiChatSettingsDto
The chat configuration of an AI room.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **prompt** | **String** | The instruction put in front of every conversation held in the room, which sets the role the assistant takes and the way it answers. Empty when the room was left on the behaviour the portal provides by default. | [optional] [example: `You are a helpful assistant for project documentation.`] [nullable] |


### Model AiCreateProfileInput
Input for creating a new profile — the same shape as `Profile` without the engine-generated fields (`id`, `createdAt`).

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | User-defined profile display name. | [required] [example: `OpenAI GPT-4o`] |
| **providerType** | [**AiProviderType**](#model-aiprovidertype) | Provider type for this profile. Use `external` to delegate all HTTP transport to `PlatformAdapter.externalFetch` while reusing an existing provider's response parser — see `Profile.basedOn` for the format selector. | [required] [example: `openai`] |
| **basedOn** | [**AiBuiltinProviderType**](#model-aibuiltinprovidertype) | Selects the response-format parser used by the `external` provider. Ignored for any other `providerType`.  Supported values are `openai`, `anthropic`, `mistral` and `openrouter`. Remaining values (`genai`, `stabilityai`, …) are accepted by the type but not yet implemented; passing one raises an error at request time. | [optional] [example: `openai`] [enum: `anthropic`, `ollama`, `openai`, `openaicompatible`, `together`, `openrouter`, `genai`, `deepseek`, `xai`, `lm-studio`, `mistral`, `groq`, `zhipu`, `stabilityai`, `gpt4all`, `onlyoffice`, `external`] |
| **baseUrl** | **String** | Base URL of the provider API. | [required] [example: `https://api.openai.com/v1`] |
| **key** | **String** | API key or token. Optional for local providers. | [optional] [example: `sk-your-provider-api-key`] |
| **headers** | **Map** | Extra HTTP headers sent with every request to this provider. Merged into the SDK client's default headers; an explicit `Authorization` here wins over the one derived from `key`. Honoured by the OpenAI-family providers. | [optional] [example: `{X-Organization=acme}`] |
| **modelId** | **String** | Selected model ID within this provider. | [required] [example: `gpt-4o`] |
| **reasoning** | **Boolean** | Whether extended thinking is enabled for this profile's model. | [optional] [example: `false`] |
| **reasoningSupport** | [**AiReasoningSupport**](#model-aireasoningsupport) | Extended-thinking capabilities of the selected model as reported by the provider's catalogue at save time (see `Model.reasoningSupport`). When present the composer's Effort row follows it exactly; when absent the provider's id-based table answers. Hosts persist it with the rest of the profile. | [optional] |
| **capabilities** | **BigDecimal** | Bitmask of capabilities supported by the selected model. | [optional] [example: `7`] |
| **canUseTool** | **Boolean** | Result of the live tool-capability probe performed at create time and on changes to `modelId` / `providerType` / `baseUrl`. `undefined` means the probe has never run for this profile (legacy record). | [optional] [example: `true`] |
| **useResponsesApi** | **Boolean** | Result of the live Responses-API probe (parallel to `canUseTool`). `true` means the model speaks `/v1/responses` and the OpenAI provider must route through `client.responses.create` — required for gpt-5+ reasoning models that reject `reasoning_effort` together with `tools` on `/v1/chat/completions`. Probed at create time and whenever `modelId` / `providerType` / `baseUrl` change. `undefined` means the probe never ran (legacy record) — readers treat that as `false`. | [optional] [example: `false`] |
| **isCloudProvider** | **Boolean** | Whether this profile uses a cloud-hosted provider (e.g. ONLYOFFICE DocSpace). | [optional] [example: `true`] |
| **useProxy** | **Boolean** | Route every provider request through the host's `fetchProxy` instead of the global `fetch`. Useful when the host runs the widget in a sandbox without direct network access (CORS, custom auth, etc.). Has no effect when the `PlatformAdapter.fetchProxy` is not configured. | [optional] [example: `false`] |


### Model AiCreatePromptInput
Input for creating a prompt — the engine generates `id`/`createdAt`/`updatedAt`.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The prompt name. | [required] [example: `Contract summary`] |
| **text** | **String** | The prompt body. | [required] [example: `Summarise the key obligations and dates in the attached contract.`] |
| **folderId** | **String** | The folder to file the prompt under. Omit or send null to leave it outside any folder. | [optional] [example: `44444444-4444-4444-4444-444444444444`] [nullable] |


### Model AiDistributedTaskStatus

Possible values:

- `0` — Created (`Created`)
- `1` — Running (`Running`)
- `2` — Completed (`Completed`)
- `3` — Canceled (`Canceled`)
- `4` — Failted (`Failted`)


### Model AiEmbeddingProviderType

Possible values:

- `0` — None (`None`)
- `1` — OpenAi (`OpenAi`)
- `2` — OpenRouter (`OpenRouter`)
- `3` — PortalAi (`PortalAi`)


### Model AiEmployeeDto
The user parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The user ID. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **displayName** | **String** | The HTML-encoded user's display name formatted according to the default format for the current culture. | [optional] [example: `Mike Zanyatski`] [nullable] |
| **avatar** | **String** | The user avatar. | [optional] [example: `https://example.com/avatar.jpg`] [nullable] |
| **avatarOriginal** | **String** | The user original size avatar. | [optional] [example: `https://example.com/avatar_original.jpg`] [nullable] |
| **avatarMax** | **String** | The user maximum size avatar. | [optional] [example: `https://example.com/avatar_max.jpg`] [nullable] |
| **avatarMedium** | **String** | The user medium size avatar. | [optional] [example: `https://example.com/avatar_medium.jpg`] [nullable] |
| **avatarSmall** | **String** | The user small size avatar. | [optional] [example: `https://example.com/avatar_small.jpg`] [nullable] |
| **profileUrl** | **String** | The user profile URL. | [optional] [example: `https://example.com/profile/user123`] [nullable] |
| **hasAvatar** | **Boolean** | Specifies if the user has an avatar or not. | [optional] [example: `true`] |
| **isAnonim** | **Boolean** | Specifies if the user is anonymous or not. | [optional] [example: `false`] |


### Model AiErrorResponse
Error body — a single human-readable message.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **error** | **String** | The error message, ready to be shown to the caller. | [required] [example: `threadId required`] |


### Model AiFileEntryBaseDto
What every file and folder in an answer has in common; the concrete shape is a file or a folder, told apart by the entry type.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **title** | **String** | The name shown for the entry. For a file it carries the extension, which is how the format is recognised, and for a room it is the room name. | [optional] [example: `Some title.txt`] [nullable] |
| **access** | [**AiFileShare**](#model-aifileshare) | The level the calling account holds on this entry, resolved from its own rights, the groups it belongs to and any link it came in through. It is the level itself, not what the account may do with it - the action flags below answer that. | [optional] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`] |
| **sharedBy** | [**AiEmployeeDto**](#model-aiemployeedto) | Who gave the calling account the access it is using. It is filled in only while the entry is being read through a share, and never for a caller without an account. | [optional] |
| **ownedBy** | [**AiEmployeeDto**](#model-aiemployeedto) | Who owns the place the entry is shared from - the creator of the room it lies in, or of the personal section that holds it. It is filled in only while the entry is being read through a share, and never for a caller without an account. | [optional] |
| **shared** | **Boolean** | Whether at least one external link exists for the entry, whichever kind. It says nothing about accounts and groups - those are counted by the flag for members below. | [optional] [example: `false`] |
| **sharedForUser** | **Boolean** | Whether at least one account or group has been given rights on the entry directly, as opposed to reaching it through a link or through the room around it. | [optional] [example: `false`] |
| **sharedExternal** | **Boolean** | Whether one of the entry's links is open to people outside the portal, as opposed to a link that only its own members can follow. This is the flag to watch when the concern is who can reach the content from outside. | [optional] [example: `false`] |
| **parentShared** | **Boolean** | Whether the entry is reachable because the room or folder around it is shared, rather than through rights of its own. A copy or a move takes the entry out of that scope. | [optional] [example: `false`] |
| **shortWebUrl** | **URI** (uri) | A shortened address that opens the entry through the link it is being read with. It is an empty string whenever no link applies, which is the usual case for a member browsing their own rooms. | [optional] [example: `http://localhost/s/abc123`] [nullable] |
| **created** | [**AiApiDateTime**](#model-aiapidatetime) | When the entry was created, written with the offset of the portal's time zone. For a file restored from an older version this is still the moment the file first appeared. | [optional] |
| **createdBy** | [**AiEmployeeDto**](#model-aiemployeedto) | Who created the entry. It is null for a caller without an account, who is told nothing about the portal's members. | [optional] |
| **updated** | [**AiApiDateTime**](#model-aiapidatetime) | When the entry last changed, written with the offset of the portal's time zone. It is never reported as earlier than the creation moment, so the two can be compared safely. | [optional] |
| **autoDelete** | [**AiApiDateTime**](#model-aiapidatetime) | When the entry will disappear on its own, written with the offset of the portal's time zone. It is filled in only where a removal is actually scheduled - something in the trash while the portal cleans it up automatically, or a guest's own documents - so a null means nothing is scheduled rather than that the entry is permanent. | [optional] |
| **rootFolderType** | [**AiFolderType**](#model-aifoldertype) | The section the entry ultimately belongs to, which is what tells a personal document from one inside a room, from a template and from something in the trash or the archive. | [optional] [enum: `0`, `1`, `2`, `3`, `5`, `6`, `8`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `19`, `20`, `21`, `22`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`] |
| **parentRoomType** | [**AiFolderType**](#model-aifoldertype) | The kind of room the entry lies in, which decides what the room allows - filling forms, public links, indexing. It is null for an entry that is not inside a room at all. | [optional] [enum: `0`, `1`, `2`, `3`, `5`, `6`, `8`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `19`, `20`, `21`, `22`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`] |
| **updatedBy** | [**AiEmployeeDto**](#model-aiemployeedto) | Who changed the entry last. It is null for a caller without an account. | [optional] |
| **providerItem** | **Boolean** | Set when the entry is stored on a connected third-party account rather than on the portal, and null when it is stored on the portal. Such an entry is identified by a string rather than a number, and some operations skip it. | [optional] [example: `true`] [nullable] |
| **providerKey** | **String** | Which third-party service holds the entry, matching the keys accepted by the third-party operations. It is null for an entry stored on the portal. | [optional] [example: `google-drive`] [nullable] |
| **providerId** | **Integer** (int32) | The connected account the entry comes from, for telling apart two connections to the same service. It is null for an entry stored on the portal. | [optional] [example: `1`] [nullable] |
| **order** | **String** | The place of the entry in a room where the members arrange the content themselves, given as the position of the entry preceded by the positions of the folders leading to it, separated by dots. It is empty when nothing has been arranged. | [optional] [example: `1.3.2`] [nullable] |
| **isFavorite** | **Boolean** | Set when the calling account has marked the entry as a favorite, which is what puts it into the favorites listing. For a file that is not marked it is null rather than false. | [optional] [example: `true`] [nullable] |
| **fileEntryType** | [**AiFileEntryType**](#model-aifileentrytype) | Tells a folder from a file, and so which of the two shapes the rest of the object has. A room is reported as a folder here. | [optional] [enum: `1`, `2`] |


### Model AiFileEntryDtoInteger
The part of a file or folder that depends on how the entry is identified: by a number on the portal, or by a string on a connected third-party account.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **title** | **String** | The name shown for the entry. For a file it carries the extension, which is how the format is recognised, and for a room it is the room name. | [optional] |
| **access** | [**AiFileShare**](#model-aifileshare) | The level the calling account holds on this entry, resolved from its own rights, the groups it belongs to and any link it came in through. It is the level itself, not what the account may do with it - the action flags below answer that. | [optional] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`] |
| **sharedBy** | [**AiEmployeeDto**](#model-aiemployeedto) | Who gave the calling account the access it is using. It is filled in only while the entry is being read through a share, and never for a caller without an account. | [optional] |
| **ownedBy** | [**AiEmployeeDto**](#model-aiemployeedto) | Who owns the place the entry is shared from - the creator of the room it lies in, or of the personal section that holds it. It is filled in only while the entry is being read through a share, and never for a caller without an account. | [optional] |
| **shared** | **Boolean** | Whether at least one external link exists for the entry, whichever kind. It says nothing about accounts and groups - those are counted by the flag for members below. | [optional] |
| **sharedForUser** | **Boolean** | Whether at least one account or group has been given rights on the entry directly, as opposed to reaching it through a link or through the room around it. | [optional] |
| **sharedExternal** | **Boolean** | Whether one of the entry's links is open to people outside the portal, as opposed to a link that only its own members can follow. This is the flag to watch when the concern is who can reach the content from outside. | [optional] |
| **parentShared** | **Boolean** | Whether the entry is reachable because the room or folder around it is shared, rather than through rights of its own. A copy or a move takes the entry out of that scope. | [optional] |
| **shortWebUrl** | **URI** (uri) | A shortened address that opens the entry through the link it is being read with. It is an empty string whenever no link applies, which is the usual case for a member browsing their own rooms. | [optional] |
| **created** | [**AiApiDateTime**](#model-aiapidatetime) | When the entry was created, written with the offset of the portal's time zone. For a file restored from an older version this is still the moment the file first appeared. | [optional] |
| **createdBy** | [**AiEmployeeDto**](#model-aiemployeedto) | Who created the entry. It is null for a caller without an account, who is told nothing about the portal's members. | [optional] |
| **updated** | [**AiApiDateTime**](#model-aiapidatetime) | When the entry last changed, written with the offset of the portal's time zone. It is never reported as earlier than the creation moment, so the two can be compared safely. | [optional] |
| **autoDelete** | [**AiApiDateTime**](#model-aiapidatetime) | When the entry will disappear on its own, written with the offset of the portal's time zone. It is filled in only where a removal is actually scheduled - something in the trash while the portal cleans it up automatically, or a guest's own documents - so a null means nothing is scheduled rather than that the entry is permanent. | [optional] |
| **rootFolderType** | [**AiFolderType**](#model-aifoldertype) | The section the entry ultimately belongs to, which is what tells a personal document from one inside a room, from a template and from something in the trash or the archive. | [optional] [enum: `0`, `1`, `2`, `3`, `5`, `6`, `8`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `19`, `20`, `21`, `22`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`] |
| **parentRoomType** | [**AiFolderType**](#model-aifoldertype) | The kind of room the entry lies in, which decides what the room allows - filling forms, public links, indexing. It is null for an entry that is not inside a room at all. | [optional] [enum: `0`, `1`, `2`, `3`, `5`, `6`, `8`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `19`, `20`, `21`, `22`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`] |
| **updatedBy** | [**AiEmployeeDto**](#model-aiemployeedto) | Who changed the entry last. It is null for a caller without an account. | [optional] |
| **providerItem** | **Boolean** | Set when the entry is stored on a connected third-party account rather than on the portal, and null when it is stored on the portal. Such an entry is identified by a string rather than a number, and some operations skip it. | [optional] |
| **providerKey** | **String** | Which third-party service holds the entry, matching the keys accepted by the third-party operations. It is null for an entry stored on the portal. | [optional] |
| **providerId** | **Integer** (int32) | The connected account the entry comes from, for telling apart two connections to the same service. It is null for an entry stored on the portal. | [optional] |
| **order** | **String** | The place of the entry in a room where the members arrange the content themselves, given as the position of the entry preceded by the positions of the folders leading to it, separated by dots. It is empty when nothing has been arranged. | [optional] |
| **isFavorite** | **Boolean** | Set when the calling account has marked the entry as a favorite, which is what puts it into the favorites listing. For a file that is not marked it is null rather than false. | [optional] |
| **fileEntryType** | [**AiFileEntryType**](#model-aifileentrytype) | Tells a folder from a file, and so which of the two shapes the rest of the object has. A room is reported as a folder here. | [optional] [enum: `1`, `2`] |
| **id** | **Integer** (int32) | The identifier to pass back to the other operations of this entry. It is a number for storage on the portal and a string for a connected third-party account, and it is unique only within its own kind, so files and folders may carry the same value. | [optional] |
| **rootFolderId** | **Integer** (int32) | The section the entry ultimately lies in, as an identifier that can be listed like any other folder. For an entry inside a room this is the rooms section, not the room. | [optional] |
| **originId** | **Integer** (int32) | The folder the entry was deleted from, which is where restoring it puts it back. It is left out of the answer unless the entry is in the trash. | [optional] |
| **originRoomId** | **Integer** (int32) | The room the entry was deleted from, left out of the answer for anything that was not deleted out of a room. | [optional] |
| **originTitle** | **String** | The name of the folder the entry was deleted from, for showing where it would be restored to. It is null for an entry that is not in the trash. | [optional] [nullable] |
| **originRoomTitle** | **String** | The name of the room the entry was deleted from, null for anything that was not deleted out of a room. | [optional] [nullable] |
| **canShare** | **Boolean** | Whether the calling account may change who has access to the entry, and so whether offering a sharing dialog for it makes sense. It is false in rooms whose access is fixed by the room itself, such as a private one, even for its manager. | [optional] |
| **shareSettings** | [**AiFileEntryDtoInteger_allOf_shareSettings**](#model-aifileentrydtointegersharesettings) |  | [optional] [nullable] |
| **security** | [**AiFileEntryDtoInteger_allOf_security**](#model-aifileentrydtointegersecurity) |  | [optional] [nullable] |
| **availableShareRights** | [**AiFileEntryDtoInteger_allOf_availableShareRights**](#model-aifileentrydtointegeravailablesharerights) |  | [optional] [nullable] |
| **requestToken** | **String** | The token of the link the entry is being read through, which is the value the external-share operations expect and which also has to be carried by the download and preview addresses. It is null whenever the entry is not being read through a link. | [optional] [nullable] |
| **external** | **Boolean** | Set when the link being used was made for this very entry, and false when the entry is reached through a link to the room around it. It is null when no link is involved. | [optional] [nullable] |
| **expirationDate** | [**AiApiDateTime**](#model-aiapidatetime) | When the link being used stops working, written with the offset of the portal's time zone. It is null for a link that never expires and whenever no link is involved. | [optional] |
| **isLinkExpired** | **Boolean** | Set when the link being used has already passed its expiration date, which is why the entry cannot be opened even though it is described here. It is null when no link is involved. | [optional] [nullable] |


### Model AiFileEntryDtoInteger.availableShareRights
Which access levels may be handed out on this entry, listed per kind of recipient, so that a client offers only levels the entry actually supports - a room for filling forms and a plain folder do not accept the same ones.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **User** | **List** |  | [optional] |
| **ExternalLink** | **List** |  | [optional] |
| **Group** | **List** |  | [optional] |
| **InvitationLink** | **List** |  | [optional] |
| **PrimaryExternalLink** | **List** |  | [optional] |


### Model AiFileEntryDtoInteger.security
What the calling account may do with this entry, one flag per action, and the cheapest way to decide which operations to offer without trying them. The flags already take the room's settings and the account's role into account.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **Read** | **Boolean** |  | [optional] |
| **Comment** | **Boolean** |  | [optional] |
| **FillForms** | **Boolean** |  | [optional] |
| **Review** | **Boolean** |  | [optional] |
| **Create** | **Boolean** |  | [optional] |
| **CreateFrom** | **Boolean** |  | [optional] |
| **Edit** | **Boolean** |  | [optional] |
| **Delete** | **Boolean** |  | [optional] |
| **CustomFilter** | **Boolean** |  | [optional] |
| **EditRoom** | **Boolean** |  | [optional] |
| **Rename** | **Boolean** |  | [optional] |
| **ReadHistory** | **Boolean** |  | [optional] |
| **Lock** | **Boolean** |  | [optional] |
| **EditHistory** | **Boolean** |  | [optional] |
| **CopyTo** | **Boolean** |  | [optional] |
| **Copy** | **Boolean** |  | [optional] |
| **MoveTo** | **Boolean** |  | [optional] |
| **Move** | **Boolean** |  | [optional] |
| **Pin** | **Boolean** |  | [optional] |
| **Mute** | **Boolean** |  | [optional] |
| **EditAccess** | **Boolean** |  | [optional] |
| **Duplicate** | **Boolean** |  | [optional] |
| **SubmitToFormGallery** | **Boolean** |  | [optional] |
| **Download** | **Boolean** |  | [optional] |
| **Convert** | **Boolean** |  | [optional] |
| **CopySharedLink** | **Boolean** |  | [optional] |
| **ReadLinks** | **Boolean** |  | [optional] |
| **Reconnect** | **Boolean** |  | [optional] |
| **CreateRoomFrom** | **Boolean** |  | [optional] |
| **CopyLink** | **Boolean** |  | [optional] |
| **Embed** | **Boolean** |  | [optional] |
| **ChangeOwner** | **Boolean** |  | [optional] |
| **IndexExport** | **Boolean** |  | [optional] |
| **StartFilling** | **Boolean** |  | [optional] |
| **FillingStatus** | **Boolean** |  | [optional] |
| **ResetFilling** | **Boolean** |  | [optional] |
| **StopFilling** | **Boolean** |  | [optional] |
| **OpenForm** | **Boolean** |  | [optional] |
| **EditInternal** | **Boolean** |  | [optional] |
| **EditExpiration** | **Boolean** |  | [optional] |
| **Vectorization** | **Boolean** |  | [optional] |
| **AskAi** | **Boolean** |  | [optional] |
| **UseChat** | **Boolean** |  | [optional] |
| **UpdateXlsx** | **Boolean** |  | [optional] |
| **AnalyzeResponses** | **Boolean** |  | [optional] |
| **CanUseAi** | **Boolean** |  | [optional] |
| **HistoryExport** | **Boolean** |  | [optional] |


### Model AiFileEntryDtoInteger.shareSettings
How many links of each kind currently exist for the entry, counted separately for the primary link and the additional ones. Kinds with no links are left out, and the whole field is null when the caller may not change the access or no link exists at all.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **User** | **Integer** (int32) |  | [optional] |
| **ExternalLink** | **Integer** (int32) |  | [optional] |
| **Group** | **Integer** (int32) |  | [optional] |
| **InvitationLink** | **Integer** (int32) |  | [optional] |
| **PrimaryExternalLink** | **Integer** (int32) |  | [optional] |


### Model AiFileEntryType

Possible values:

- `1` — Folder (`Folder`)
- `2` — File (`File`)


### Model AiFileOperationDto
One background file operation of the caller, as it stood when the answer was built.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The identifier of the operation, the one to pass to `PUT api/2.0/files/fileops/terminate/{id}` to stop it. Operations belong to the account that started them, so an identifier of somebody else is never listed here. | [required] [example: `a1f4c9b2-3d8e-4f77-9b16-2c5de8f0a913`] [nullable] |
| **Operation** | [**AiFileOperationType**](#model-aifileoperationtype) | What the operation does with the entries, which also decides what else is reported: only a download fills `url`, and a deletion leaves `files` and `folders` empty. | [required] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`] |
| **progress** | **Integer** (int32) | How far the operation has come, from 0 to 100. Reaching 100 only means it stopped; whether it did what it was asked for is told by `error`. | [required] [example: `100`] |
| **error** | **String** | The reason the operation could not finish its work, in the language of the request. Empty when nothing went wrong, which is the only way to tell a successful operation from a failed one. | [required] [example: `Folder not found.`] [nullable] |
| **processed** | **String** | How many entries the operation has handled so far, written as a decimal number in a string. It counts items, not percent, and stays behind `progress` on operations that walk into subfolders. | [required] [example: `12`] [nullable] |
| **finished** | **Boolean** | Whether the operation has stopped running. A finished operation is reported once and then dropped, so the next read of the operation list no longer contains it. | [required] [example: `true`] |
| **url** | **URI** (uri) | The address the packed archive can be downloaded from once a bulk download has finished. Empty for every other kind of operation. | [optional] [example: `https://portal.example.com/filehandler.ashx?action=bulk`] [nullable] |
| **files** | [**List**](#model-aifileentrybasedto) | The files the operation produced or moved, in the order it wrote them down. Empty while nothing has been written yet and for a deletion, which reports no entries at all. | [optional] [example: `[{id=10, title=document.docx}]`] [nullable] |
| **folders** | [**List**](#model-aifileentrybasedto) | The folders the operation produced or moved, in the order it wrote them down. Empty while nothing has been written yet and for a deletion. | [optional] [example: `[{id=20, title=Reports}]`] [nullable] |
| **status** | [**AiDistributedTaskStatus**](#model-aidistributedtaskstatus) | The state of the background task behind the operation, which tells a task that was cancelled or that crashed from one that ran to its end. | [optional] [enum: `0`, `1`, `2`, `3`, `4`] |


### Model AiFileOperationType

Possible values:

- `0` — Move (`Move`)
- `1` — Copy (`Copy`)
- `2` — Delete (`Delete`)
- `3` — Download (`Download`)
- `4` — MarkAsRead (`MarkAsRead`)
- `5` — Import (`Import`)
- `6` — Convert (`Convert`)
- `7` — Duplicate (`Duplicate`)


### Model AiFileOperationWrapper
The successful API response containing the FileOperationDto object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**AiFileOperationDto**](#model-aifileoperationdto) | The FileOperationDto object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-aiaiusersettingswrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model AiFileShare

Possible values:

- `0` — None (`None`)
- `1` — Read and write (`ReadWrite`)
- `2` — Read (`Read`)
- `3` — Restrict (`Restrict`)
- `4` — Varies (`Varies`)
- `5` — Review (`Review`)
- `6` — Comment (`Comment`)
- `7` — Fill forms (`FillForms`)
- `8` — Custom filter (`CustomFilter`)
- `9` — Room manager (`RoomManager`)
- `10` — Editing (`Editing`)
- `11` — Content creator (`ContentCreator`)


### Model AiFolderContentDtoInteger
One page of the contents of a folder or of a section: its entries split into files and folders, the folder itself, and the counters needed to page through the rest.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **files** | [**List**](#model-aifileentrybasedto) | The file entries of this page. It is empty when the folder holds no files, when the filters matched none of them, and in the sections that list rooms only. | [optional] [example: `[{id=10, title=document.docx}]`] [nullable] |
| **folders** | [**List**](#model-aifileentrybasedto) | The folder entries of this page. In a section of rooms these entries are the rooms themselves, which is where their type, tags, logo and quota are read from. | [optional] [example: `[{id=20, title=My Folder}]`] [nullable] |
| **current** | [**AiFolderDtoInteger**](#model-aifolderdtointeger) | The folder or section the page was read from, with its own title, type and access rights. It describes the container, not the entries, and is filled in even when the page is empty. | [optional] |
| **pathParts** | **oas_any_type_not_mapped** |  | [required] [nullable] |
| **startIndex** | **Integer** (int32) | The position of the first entry of this page in the whole result, echoing the requested start index. Add the number of entries received to it to ask for the next page. | [optional] [example: `0`] |
| **count** | **Integer** (int32) | How many entries this page carries, files and folders together. A page shorter than the requested size means the result is exhausted. | [optional] [example: `4`] |
| **total** | **Integer** (int32) | How many entries matched before paging was applied, across the whole folder. Page until the start index plus the entries received reaches it. | [required] [example: `4`] |
| **new** | **Integer** (int32) | How many entries of this folder are marked as new for the caller. It is 0 for every listing when the account has switched the new-item badges off, so a zero here does not prove that nothing has changed. | [optional] [example: `0`] |


### Model AiFolderContentIntegerWrapper
The successful API response containing the FolderContentDtoInteger object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**AiFolderContentDtoInteger**](#model-aifoldercontentdtointeger) | The FolderContentDtoInteger object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-aiaiusersettingswrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model AiFolderDtoInteger
The folder, with the fields that only a room carries filled in when the folder is a room.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **title** | **String** | The name shown for the entry. For a file it carries the extension, which is how the format is recognised, and for a room it is the room name. | [optional] |
| **access** | [**AiFileShare**](#model-aifileshare) | The level the calling account holds on this entry, resolved from its own rights, the groups it belongs to and any link it came in through. It is the level itself, not what the account may do with it - the action flags below answer that. | [optional] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`] |
| **sharedBy** | [**AiEmployeeDto**](#model-aiemployeedto) | Who gave the calling account the access it is using. It is filled in only while the entry is being read through a share, and never for a caller without an account. | [optional] |
| **ownedBy** | [**AiEmployeeDto**](#model-aiemployeedto) | Who owns the place the entry is shared from - the creator of the room it lies in, or of the personal section that holds it. It is filled in only while the entry is being read through a share, and never for a caller without an account. | [optional] |
| **shared** | **Boolean** | Whether at least one external link exists for the entry, whichever kind. It says nothing about accounts and groups - those are counted by the flag for members below. | [optional] |
| **sharedForUser** | **Boolean** | Whether at least one account or group has been given rights on the entry directly, as opposed to reaching it through a link or through the room around it. | [optional] |
| **sharedExternal** | **Boolean** | Whether one of the entry's links is open to people outside the portal, as opposed to a link that only its own members can follow. This is the flag to watch when the concern is who can reach the content from outside. | [optional] |
| **parentShared** | **Boolean** | Whether the entry is reachable because the room or folder around it is shared, rather than through rights of its own. A copy or a move takes the entry out of that scope. | [optional] |
| **shortWebUrl** | **URI** (uri) | A shortened address that opens the entry through the link it is being read with. It is an empty string whenever no link applies, which is the usual case for a member browsing their own rooms. | [optional] |
| **created** | [**AiApiDateTime**](#model-aiapidatetime) | When the entry was created, written with the offset of the portal's time zone. For a file restored from an older version this is still the moment the file first appeared. | [optional] |
| **createdBy** | [**AiEmployeeDto**](#model-aiemployeedto) | Who created the entry. It is null for a caller without an account, who is told nothing about the portal's members. | [optional] |
| **updated** | [**AiApiDateTime**](#model-aiapidatetime) | When the entry last changed, written with the offset of the portal's time zone. It is never reported as earlier than the creation moment, so the two can be compared safely. | [optional] |
| **autoDelete** | [**AiApiDateTime**](#model-aiapidatetime) | When the entry will disappear on its own, written with the offset of the portal's time zone. It is filled in only where a removal is actually scheduled - something in the trash while the portal cleans it up automatically, or a guest's own documents - so a null means nothing is scheduled rather than that the entry is permanent. | [optional] |
| **rootFolderType** | [**AiFolderType**](#model-aifoldertype) | The section the entry ultimately belongs to, which is what tells a personal document from one inside a room, from a template and from something in the trash or the archive. | [optional] [enum: `0`, `1`, `2`, `3`, `5`, `6`, `8`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `19`, `20`, `21`, `22`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`] |
| **parentRoomType** | [**AiFolderType**](#model-aifoldertype) | The kind of room the entry lies in, which decides what the room allows - filling forms, public links, indexing. It is null for an entry that is not inside a room at all. | [optional] [enum: `0`, `1`, `2`, `3`, `5`, `6`, `8`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `19`, `20`, `21`, `22`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`] |
| **updatedBy** | [**AiEmployeeDto**](#model-aiemployeedto) | Who changed the entry last. It is null for a caller without an account. | [optional] |
| **providerItem** | **Boolean** | Set when the entry is stored on a connected third-party account rather than on the portal, and null when it is stored on the portal. Such an entry is identified by a string rather than a number, and some operations skip it. | [optional] |
| **providerKey** | **String** | Which third-party service holds the entry, matching the keys accepted by the third-party operations. It is null for an entry stored on the portal. | [optional] |
| **providerId** | **Integer** (int32) | The connected account the entry comes from, for telling apart two connections to the same service. It is null for an entry stored on the portal. | [optional] |
| **order** | **String** | The place of the entry in a room where the members arrange the content themselves, given as the position of the entry preceded by the positions of the folders leading to it, separated by dots. It is empty when nothing has been arranged. | [optional] |
| **isFavorite** | **Boolean** | Set when the calling account has marked the entry as a favorite, which is what puts it into the favorites listing. For a file that is not marked it is null rather than false. | [optional] |
| **fileEntryType** | [**AiFileEntryType**](#model-aifileentrytype) | Tells a folder from a file, and so which of the two shapes the rest of the object has. A room is reported as a folder here. | [optional] [enum: `1`, `2`] |
| **id** | **Integer** (int32) | The identifier to pass back to the other operations of this entry. It is a number for storage on the portal and a string for a connected third-party account, and it is unique only within its own kind, so files and folders may carry the same value. | [optional] |
| **rootFolderId** | **Integer** (int32) | The section the entry ultimately lies in, as an identifier that can be listed like any other folder. For an entry inside a room this is the rooms section, not the room. | [optional] |
| **originId** | **Integer** (int32) | The folder the entry was deleted from, which is where restoring it puts it back. It is left out of the answer unless the entry is in the trash. | [optional] |
| **originRoomId** | **Integer** (int32) | The room the entry was deleted from, left out of the answer for anything that was not deleted out of a room. | [optional] |
| **originTitle** | **String** | The name of the folder the entry was deleted from, for showing where it would be restored to. It is null for an entry that is not in the trash. | [optional] |
| **originRoomTitle** | **String** | The name of the room the entry was deleted from, null for anything that was not deleted out of a room. | [optional] |
| **canShare** | **Boolean** | Whether the calling account may change who has access to the entry, and so whether offering a sharing dialog for it makes sense. It is false in rooms whose access is fixed by the room itself, such as a private one, even for its manager. | [optional] |
| **shareSettings** | [**AiFileEntryDtoInteger_allOf_shareSettings**](#model-aifileentrydtointegersharesettings) |  | [optional] [nullable] |
| **security** | [**AiFileEntryDtoInteger_allOf_security**](#model-aifileentrydtointegersecurity) |  | [optional] [nullable] |
| **availableShareRights** | [**AiFileEntryDtoInteger_allOf_availableShareRights**](#model-aifileentrydtointegeravailablesharerights) |  | [optional] [nullable] |
| **requestToken** | **String** | The token of the link the entry is being read through, which is the value the external-share operations expect and which also has to be carried by the download and preview addresses. It is null whenever the entry is not being read through a link. | [optional] |
| **external** | **Boolean** | Set when the link being used was made for this very entry, and false when the entry is reached through a link to the room around it. It is null when no link is involved. | [optional] |
| **expirationDate** | [**AiApiDateTime**](#model-aiapidatetime) | When the link being used stops working, written with the offset of the portal's time zone. It is null for a link that never expires and whenever no link is involved. | [optional] |
| **isLinkExpired** | **Boolean** | Set when the link being used has already passed its expiration date, which is why the entry cannot be opened even though it is described here. It is null when no link is involved. | [optional] |
| **parentId** | **Integer** (int32) | The folder this one is listed in. For a room it is the root of the section the room lives in, and for an entry opened through a sharing link whose real parent the caller may not read it is the root of the section with the entries shared with them. | [optional] |
| **filesCount** | **Integer** (int32) | How many files lie directly in the folder, without counting the subfolders. The roots of the `Rooms`, room templates and default templates sections always report 0, because the number is not collected for them. | [optional] |
| **foldersCount** | **Integer** (int32) | How many subfolders lie directly in the folder. For an AI room the two service subfolders it always holds are subtracted, so the number matches what a listing of it shows, and the roots of the `Rooms` and templates sections report 0. | [optional] |
| **isShareable** | **Boolean** | Whether the caller may hand out access to the folder. It is filled in only for the folder a folder-contents answer is about, and is null in every other answer, so null says nothing about the sharing rights. | [optional] [nullable] |
| **new** | **Integer** (int32) | How many entries inside the folder the caller has not opened yet, the number drawn as the badge on it. An account that turned the badges off in its own settings always reads 0 here, so 0 alone does not prove that everything has been seen. | [optional] |
| **mute** | **Boolean** | Whether the caller silenced the notifications of this room: true means no message about its activity reaches them. The choice belongs to the reading account rather than to the room, so two members of one room read different values. | [optional] |
| **tags** | **List** | The names of the tags attached to the room. Empty for a folder that is not a room, since only rooms carry tags, and the names are the ones from the portal tag catalogue. | [optional] [nullable] |
| **logo** | [**AiLogo**](#model-ailogo) | The addresses of the room logo in four sizes, together with the colour and the built-in cover that are drawn when no logo was uploaded. A room without a logo answers with four empty addresses rather than with null, and the field is null for a folder that is not a room. | [optional] |
| **pinned** | **Boolean** | Whether the caller pinned the room to the top of their own room list. Pinning is personal and is lost when the room is archived. | [optional] |
| **roomType** | [**AiRoomType**](#model-airoomtype) | The kind of the room, which decides the default access rules of its members. Null for a folder that is not a room. | [optional] [enum: `1`, `2`, `5`, `6`, `8`, `9`] |
| **private** | **Boolean** | Whether the room is a private one, which limits it to the accounts invited into it and needs encryption keys set up for each of them. | [optional] |
| **indexing** | **Boolean** | Whether the contents of the room are kept in an explicit numbered order, the one reported as `order` on each entry, instead of being left to the sorting the reader asks for. | [optional] |
| **denyDownload** | **Boolean** | Whether downloading and printing the contents of the room is forbidden, which leaves its members with viewing and editing in the editor. | [optional] |
| **lifetime** | [**AiRoomDataLifetimeDto**](#model-airoomdatalifetimedto) | The rule by which the files of the room are removed once they grow old. Null when the room has no such rule, which is also what is reported after the rule is switched off, because switching it off erases it. | [optional] |
| **watermark** | [**AiWatermarkDto**](#model-aiwatermarkdto) | The watermark stamped over the documents of the room while they are viewed and printed. Null when the room has no watermark, and for every folder that is not a room. | [optional] |
| **type** | [**AiFolderType**](#model-aifoldertype) | The part the folder plays inside its room: one of the service folders of the form-filling flow, or the knowledge and result storages of an AI room. It stays null for an ordinary folder and for the room itself, so it does not describe folders in general. | [optional] [enum: `0`, `1`, `2`, `3`, `5`, `6`, `8`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `19`, `20`, `21`, `22`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`] |
| **inRoom** | **Boolean** | Whether the caller holds the room through an invitation of their own: true for the account that created it and for a member invited personally, false when the access comes from a group they belong to, and null for a folder that is not a room. | [optional] [nullable] |
| **quotaLimit** | **Long** (int64) | How much space the files of the room may take, in bytes. It is the limit set on this room, or the portal default for rooms when none was set. Null when the tariff of the portal does not count room statistics, when room quotas are switched off, when the room lies in the archive or the trash, or when the caller may only read it. | [optional] [nullable] |
| **isCustomQuota** | **Boolean** | Whether `quotaLimit` is a limit set on this room (true) or the portal default for rooms (false). Null exactly when `quotaLimit` is null. | [optional] [nullable] |
| **usedSpace** | **Long** (int64) | How much the files of the room take, in bytes, as of the last time the counter was recomputed. The counter is refreshed when a file operation finishes, so a read right after an upload or a deletion can still report the previous figure. Null for a folder that is not a room. | [optional] [nullable] |
| **passwordProtected** | **Boolean** | Whether the sharing link the folder was opened through asks for a password that has not been entered yet. While it is true the contents stay unreadable; send the password to `POST api/2.0/files/share/{key}/password` first. Null when the folder was not reached through a link. | [optional] [nullable] |
| **expired** | **Boolean** | Deprecated, read `isLinkExpired` instead: whether the sharing link the folder was opened through has run out of its lifetime. | [optional] [nullable] |
| **chatSettings** | [**AiChatSettingsDto**](#model-aichatsettingsdto) | The chat configuration of an AI room. Only the system prompt is reported here, whatever else the room stores, and the field is null for every folder that is not an AI room. | [optional] |
| **rootRoomType** | [**AiRoomType**](#model-airoomtype) | The kind of the room the folder lies in. It is filled in only for the folder a folder-contents answer is about, and only when that room is an AI room, so it is null in every other answer and for every other room kind. | [optional] [enum: `1`, `2`, `5`, `6`, `8`, `9`] |
| **saveFormAsXLSX** | **Boolean** | Whether the answers collected in this form-filling room are also gathered into a spreadsheet next to the completed copies. Filled in for form-filling rooms only. | [optional] [nullable] |
| **sendFormToExternalDB** | **Boolean** | Whether the answers collected in this form-filling room are also pushed into the external database configured for the portal. Filled in for form-filling rooms only. | [optional] [nullable] |
| **originalFormId** | **Integer** (int32) | The form the completed copies in this folder were filled from, taken from the copy submitted last. Null while the folder holds no completed copy, and for every folder that does not collect them. | [optional] [nullable] |


### Model AiFolderIntegerArrayWrapper
The successful API response containing the list of FolderDtoInteger objects.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**List**](#model-aifolderdtointeger) | The list of FolderDtoInteger objects returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-aiaiusersettingswrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model AiFolderIntegerWrapper
The successful API response containing the FolderDtoInteger object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**AiFolderDtoInteger**](#model-aifolderdtointeger) | The FolderDtoInteger object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-aiaiusersettingswrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model AiFolderMutationResult
Outcome of `createFolder` / `renameFolder` — either the persisted folder or a field-scoped error.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the folder was persisted. | [required] [example: `true`] |
| **folder** | [**AiPromptFolder**](#model-aipromptfolder) | The persisted folder. Present on success. | [optional] |
| **error** | [**AiTErrorData**](#model-aiterrordata) | Why the folder was rejected. Present on failure. | [optional] |


### Model AiFolderType

Possible values:

- `0` — Default (`DEFAULT`)
- `1` — Coomon (`COMMON`)
- `2` — Bunch (`BUNCH`)
- `3` — Trash (`TRASH`)
- `5` — User (`USER`)
- `6` — Share (`SHARE`)
- `8` — Projects (`Projects`)
- `10` — Favourites (`Favorites`)
- `11` — Recent (`Recent`)
- `12` — Templates (`Templates`)
- `13` — Privacy (`Privacy`)
- `14` — Virtual rooms (`VirtualRooms`)
- `15` — Filling forms room (`FillingFormsRoom`)
- `16` — Editing room (`EditingRoom`)
- `19` — Custom room (`CustomRoom`)
- `20` — Archive (`Archive`)
- `21` — Thirdparty backup (`ThirdpartyBackup`)
- `22` — Public room (`PublicRoom`)
- `25` — Ready form folder (`ReadyFormFolder`)
- `26` — In process form folder (`InProcessFormFolder`)
- `27` — Form filling folder done (`FormFillingFolderDone`)
- `28` — Form filling folder in progress (`FormFillingFolderInProgress`)
- `29` — Virtual Data Room (`VirtualDataRoom`)
- `30` — Room templates folder (`RoomTemplates`)
- `31` — AI Room (`AiRoom`)
- `32` — Knowledge (`Knowledge`)
- `33` — Result storage (`ResultStorage`)
- `34` — AI Agents (`AiAgents`)
- `35` — Default Templates (`DefaultTemplates`)
- `36` — Forms (`Forms`)


### Model AiImportError
Per-entry error reported by `PromptsEngine.importBundle`.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **kind** | **String** | `folder` or `prompt`, plus the offending name or id. | [required] [example: `prompt`] [enum: `folder`, `prompt`] |
| **ref** | **String** | The offending entry - its name or its id. | [required] [example: `33333333-3333-3333-3333-333333333333`] |
| **error** | [**AiTErrorData**](#model-aiterrordata) | Why the entry was rejected. | [required] [example: `a prompt of that name already exists`] |


### Model AiImportMode
Mode passed to `PromptsEngine.importBundle`.

Possible values:

- `replace`
- `merge`


### Model AiImportResult
Outcome of `PromptsEngine.importBundle`. Either every entry persisted with counts, or no entries persisted plus a per-entry error report.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the whole bundle was imported. | [required] [example: `true`] |
| **imported** | [**AiImportResult_imported**](#model-aiimportresultimported) |  | [optional] |
| **errors** | [**List**](#model-aiimporterror) | What was rejected, per entry. Present on failure - and then nothing was imported. | [optional] [example: `[]`] |


### Model AiImportResult.imported
How many folders and prompts were created. Present on success.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **folders** | **BigDecimal** |  | [required] |
| **prompts** | **BigDecimal** |  | [required] |


### Model AiLogo
The room logo information.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **original** | **String** | The original logo. | [required] [example: `https://portal.example.com/logo/original.png`] [nullable] |
| **large** | **String** | The large logo. | [required] [example: `https://portal.example.com/logo/large.png`] [nullable] |
| **medium** | **String** | The medium logo. | [required] [example: `https://portal.example.com/logo/medium.png`] [nullable] |
| **small** | **String** | The small logo. | [required] [example: `https://portal.example.com/logo/small.png`] [nullable] |
| **color** | **String** | The logo color. | [optional] [example: `#4781D1`] [nullable] |
| **cover** | [**AiLogoCover**](#model-ailogocover) | The logo cover. | [optional] |


### Model AiLogoCover
The logo cover information.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The logo cover ID. | [required] [example: `default_cover`] [nullable] |
| **data** | **String** | The logo cover data. | [required] [example: `base64-image-data...`] [nullable] |


### Model AiModel
AI model metadata. Describes a single model available from a provider.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Model identifier as used by the provider API (e.g. `gpt-4o`, `claude-sonnet-4-20250514`). | [required] [example: `gpt-4o`] |
| **name** | **String** | Human-readable model name for display in the UI. | [required] [example: `GPT-4o`] |
| **provider** | [**AiProviderType**](#model-aiprovidertype) | Provider that offers this model. | [required] [example: `openai`] |
| **reasoning** | **Boolean** | Whether this model supports extended thinking / chain-of-thought reasoning. | [optional] [example: `false`] |
| **reasoningSupport** | [**AiReasoningSupport**](#model-aireasoningsupport) | What the model can do with extended thinking, when the provider's catalogue says so (OpenRouter and the ONLYOFFICE route report a per-model `reasoning` object). Copied onto the profile at save time; absent, the widget falls back to the provider's id-based table. | [optional] |
| **capabilities** | **BigDecimal** | Bitmask of model capabilities (Chat, Image, Vision, Tools, etc.). Used to filter models per `ActionType`. | [optional] [example: `7`] |


### Model AiNewItemsAgentNewItemsArrayWrapper
The successful API response containing the list of NewItemsDtoAgentNewItemsDto objects.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**List**](#model-ainewitemsdtoagentnewitemsdto) | The list of NewItemsDtoAgentNewItemsDto objects returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-aiaiusersettingswrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model AiNewItemsDtoAgentNewItemsDto
One day of the entries the caller has not opened yet, the groups running from the most recent day backwards.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **date** | [**AiApiDateTime**](#model-aiapidatetime) | The day the grouped entries were last changed, written with the offset of the portal time zone. The time part is the moment of the newest entry of the group. | [required] |
| **items** | [**List**](#model-aiagentnewitemsdto) | What changed on that day, the most recent first. Folders are left out of it, so an entry here is always a file or a room that holds them. | [required] [nullable] |


### Model AiOpenAIChatCompletionChunk
One `chat.completion.chunk` of an OpenAI-compatible streaming response. Only the fields this service can populate are emitted - an OpenAI client tolerates the rest as absent.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The completion identifier, stable across every chunk of one response. | [required] |
| **object** | **String** | Always `chat.completion.chunk`. | [required] [enum: `chat.completion.chunk`] |
| **created** | **BigDecimal** | When the completion started, in Unix seconds. | [required] |
| **model** | **String** | The model that produced the completion - the resolved profile's model. | [required] |
| **choices** | [**List**](#model-aiopenaichunkchoice) | The choices carried by this chunk. This service emits exactly one. | [required] |


### Model AiOpenAIChoiceDelta
The incremental part of one choice - what this chunk adds to the assistant message.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **role** | **String** | Sent on the first chunk only, always `assistant`. | [optional] [enum: `assistant`] |
| **content** | **String** | The text this chunk appends. Null when the chunk carries no text. | [optional] [nullable] |
| **tool\_calls** | [**List**](#model-aiopenaitoolcalldelta) | The tool calls the model requested, emitted in place of text. | [optional] |


### Model AiOpenAIChunkChoice
One choice of a streaming completion, carrying the part this chunk adds.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **index** | **BigDecimal** | The zero-based position of the choice. This service emits a single choice, so always 0. | [required] |
| **delta** | [**AiOpenAIChoiceDelta**](#model-aiopenaichoicedelta) | What this chunk adds to the choice. | [required] |
| **finish\_reason** | [**AiOpenAIFinishReason**](#model-aiopenaifinishreason) | Why the completion stopped, or null while it is still streaming. | [required] [enum: `stop`, `length`, `tool_calls`, `content_filter`, `null`] [nullable] |


### Model AiOpenAIFinishReason
OpenAI Chat Completions streaming shapes.   `toOpenAIChatCompletionStream` maps the engine's transport-agnostic `ChatEvent` stream onto these chunks so a host can expose an OpenAI-compatible `POST /v1/chat/completions` (`stream: true`) endpoint backed by the same chat pipeline as the in-app widget. Only the subset of fields the engine can populate is emitted; everything else an OpenAI client tolerates as absent.

Possible values:

- `stop`
- `length`
- `tool_calls`
- `content_filter`
- `null`


### Model AiOpenAIStreamChunk
A chunk or the terminal error envelope emitted on a failed stream.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The completion identifier, stable across every chunk of one response. | [required] |
| **object** | **String** | Always `chat.completion.chunk`. | [required] [enum: `chat.completion.chunk`] |
| **created** | **BigDecimal** | When the completion started, in Unix seconds. | [required] |
| **model** | **String** | The model that produced the completion - the resolved profile's model. | [required] |
| **choices** | [**List**](#model-aiopenaichunkchoice) | The choices carried by this chunk. This service emits exactly one. | [required] |
| **error** | [**AiOpenAIStreamError_error**](#model-aiopenaistreamerrorerror) |  | [required] |


### Model AiOpenAIStreamError
OpenAI streaming error envelope. When the upstream request fails mid-stream the OpenAI API emits a single `data:` line carrying an `error` object (no `choices`), then closes the stream — the official SDK turns this into a thrown `APIError`. Mirrors that shape so a host exposing an OpenAI-compatible endpoint stays wire-compatible.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **error** | [**AiOpenAIStreamError_error**](#model-aiopenaistreamerrorerror) |  | [required] |


### Model AiOpenAIStreamError.error
The error that ended the stream: its message, type, code and the offending parameter.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **message** | **String** |  | [required] |
| **type** | **String** |  | [required] |
| **code** | **String** |  | [required] [nullable] |
| **param** | **String** |  | [required] [nullable] |


### Model AiOpenAIToolCallDelta
The incremental part of one tool call the model requested.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **index** | **BigDecimal** | The zero-based position of the tool call within the message. | [required] |
| **id** | **String** | The tool call identifier, quoted back when its result is submitted. | [optional] |
| **type** | **String** | Always `function` - the only tool kind the API defines. | [optional] [enum: `function`] |
| **function** | [**AiOpenAIToolCallDelta_function**](#model-aiopenaitoolcalldeltafunction) |  | [optional] |


### Model AiOpenAIToolCallDelta.function
The call itself: the function name and its JSON-encoded arguments.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** |  | [optional] |
| **arguments** | **String** |  | [optional] |


### Model AiOpenOrCreateResult
Resolved thread state returned by `ThreadsEngine.openOrCreate`.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** | The thread that was opened, or the one just created. | [required] |
| **title** | **String** | Empty string for existing threads — the engine doesn't re-fetch. | [required] |
| **priorMessages** | [**List**](#model-aithreadmessagelike) | The messages already in the thread - empty for a thread that was just created. | [required] |


### Model AiProfile
Complete AI provider + model configuration saved by the user. Profiles are the primary way users save and reuse provider configurations.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Unique profile identifier (UUID). | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **name** | **String** | User-defined profile display name. | [required] [example: `OpenAI GPT-4o`] |
| **providerType** | [**AiProviderType**](#model-aiprovidertype) | Provider type for this profile. Use `external` to delegate all HTTP transport to `PlatformAdapter.externalFetch` while reusing an existing provider's response parser — see `Profile.basedOn` for the format selector. | [required] [example: `openai`] |
| **basedOn** | [**AiBuiltinProviderType**](#model-aibuiltinprovidertype) | Selects the response-format parser used by the `external` provider. Ignored for any other `providerType`.  Supported values are `openai`, `anthropic`, `mistral` and `openrouter`. Remaining values (`genai`, `stabilityai`, …) are accepted by the type but not yet implemented; passing one raises an error at request time. | [optional] [example: `openai`] [enum: `anthropic`, `ollama`, `openai`, `openaicompatible`, `together`, `openrouter`, `genai`, `deepseek`, `xai`, `lm-studio`, `mistral`, `groq`, `zhipu`, `stabilityai`, `gpt4all`, `onlyoffice`, `external`] |
| **baseUrl** | **String** | Base URL of the provider API. | [required] [example: `https://api.openai.com/v1`] |
| **key** | **String** | API key or token. Optional for local providers. | [optional] [example: `sk-your-provider-api-key`] |
| **headers** | **Map** | Extra HTTP headers sent with every request to this provider. Merged into the SDK client's default headers; an explicit `Authorization` here wins over the one derived from `key`. Honoured by the OpenAI-family providers. | [optional] [example: `{X-Organization=acme}`] |
| **modelId** | **String** | Selected model ID within this provider. | [required] [example: `gpt-4o`] |
| **reasoning** | **Boolean** | Whether extended thinking is enabled for this profile's model. | [optional] [example: `false`] |
| **reasoningSupport** | [**AiReasoningSupport**](#model-aireasoningsupport) | Extended-thinking capabilities of the selected model as reported by the provider's catalogue at save time (see `Model.reasoningSupport`). When present the composer's Effort row follows it exactly; when absent the provider's id-based table answers. Hosts persist it with the rest of the profile. | [optional] |
| **capabilities** | **BigDecimal** | Bitmask of capabilities supported by the selected model. | [optional] [example: `7`] |
| **canUseTool** | **Boolean** | Result of the live tool-capability probe performed at create time and on changes to `modelId` / `providerType` / `baseUrl`. `undefined` means the probe has never run for this profile (legacy record). | [optional] [example: `true`] |
| **useResponsesApi** | **Boolean** | Result of the live Responses-API probe (parallel to `canUseTool`). `true` means the model speaks `/v1/responses` and the OpenAI provider must route through `client.responses.create` — required for gpt-5+ reasoning models that reject `reasoning_effort` together with `tools` on `/v1/chat/completions`. Probed at create time and whenever `modelId` / `providerType` / `baseUrl` change. `undefined` means the probe never ran (legacy record) — readers treat that as `false`. | [optional] [example: `false`] |
| **isCloudProvider** | **Boolean** | Whether this profile uses a cloud-hosted provider (e.g. ONLYOFFICE DocSpace). | [optional] [example: `true`] |
| **useProxy** | **Boolean** | Route every provider request through the host's `fetchProxy` instead of the global `fetch`. Useful when the host runs the widget in a sandbox without direct network access (CORS, custom auth, etc.). Has no effect when the `PlatformAdapter.fetchProxy` is not configured. | [optional] [example: `false`] |
| **createdAt** | **BigDecimal** | Creation timestamp (ms since epoch). Used to sort the AI models list newest-first. | [optional] [example: `1767225600000`] |


### Model AiProfileMutationResult
Outcome of `create` / `update` — either a success carrying the persisted profile, or a failure with a field-level error description from the name check or the provider credential check.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the profile was persisted. | [required] [example: `true`] |
| **profile** | [**AiProfile**](#model-aiprofile) | The persisted profile. Present on success. | [optional] |
| **error** | [**AiTErrorData**](#model-aiterrordata) | Why the profile was rejected - the name check or the provider credential check. Present on failure. | [optional] |


### Model AiPrompt
Saved prompt template that users can quickly insert into the chat.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Unique prompt identifier (UUID). | [required] [example: `33333333-3333-3333-3333-333333333333`] |
| **name** | **String** | Prompt display name shown in the prompt picker. | [required] [example: `Contract summary`] |
| **text** | **String** | Prompt template text. May contain placeholder tokens. | [required] [example: `Summarise the key obligations and dates in the attached contract.`] |
| **folderId** | **String** | Optional parent folder ID. `undefined` means the prompt is at the root level. | [optional] [example: `44444444-4444-4444-4444-444444444444`] |
| **createdAt** | **BigDecimal** | Timestamp (ms since epoch) when the prompt was created. | [required] [example: `1767225600000`] |
| **updatedAt** | **BigDecimal** | Timestamp (ms since epoch) of the last prompt modification. | [required] [example: `1767225600000`] |


### Model AiPromptBundle
Versioned, self-contained bundle of every saved prompt and folder. Stable wire format — `version` lets the import path migrate older shapes if the schema ever changes.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **version** | **BigDecimal** | The bundle format version, so an import can migrate an older export. | [required] [example: `1`] [enum: `1`] |
| **folders** | [**List**](#model-aipromptfolder) | Every exported prompt folder. | [required] [example: `[]`] |
| **prompts** | [**List**](#model-aiprompt) | Every exported prompt. | [required] [example: `[]`] |


### Model AiPromptFolder
Folder for organizing saved prompts.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Unique folder identifier (UUID). | [required] [example: `44444444-4444-4444-4444-444444444444`] |
| **name** | **String** | Folder display name. | [required] [example: `Contract review`] |
| **createdAt** | **BigDecimal** | Timestamp (ms since epoch) when the folder was created. | [required] [example: `1767225600000`] |
| **updatedAt** | **BigDecimal** | Timestamp (ms since epoch) of the last folder modification. | [required] [example: `1767225600000`] |


### Model AiPromptMutationResult
Outcome of `create` / `update` / `move` on a prompt — either the persisted prompt or a field-scoped error.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the prompt was persisted. | [required] [example: `true`] |
| **prompt** | [**AiPrompt**](#model-aiprompt) | The persisted prompt. Present on success. | [optional] |
| **error** | [**AiTErrorData**](#model-aiterrordata) | Why the prompt was rejected. Present on failure. | [optional] |


### Model AiProviderType
Provider type identifier. Accepts all 17 built-in types with autocomplete, plus any custom `string` for dynamically registered providers.


### Model AiReasoningDepth
A `ReasoningLevel` above off — a depth the model can think at.

Possible values:

- `low`
- `medium`
- `high`
- `max`


### Model AiReasoningSupport
What one model can do with extended thinking. Providers describe each model through this shape so the UI offers only the choices that change the request, and the request builders clamp to the same table.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **thinks** | **Boolean** | Whether the model can think at all. False hides the whole control. | [required] |
| **canDisable** | **Boolean** | Whether `off` really turns thinking off. False means the model thinks always and off only drops to its lowest depth (or leaves the default depth, where there is no knob). | [required] |
| **depths** | [**List**](#model-aireasoningdepth) | Depths the model distinguishes, lowest first. Empty when thinking is an on/off switch with no depth (or the model doesn't think). A level not listed is clamped to the nearest one — see `clampReasoningLevel`. | [required] |
| **defaultDepth** | [**AiReasoningDepth**](#model-aireasoningdepth) | The depth the model runs at when nothing asks for one — what a stored `off` means on a model that cannot be switched off. Known only where a catalogue reports it (OpenRouter's `default_effort`); otherwise `DEFAULT_REASONING_LEVEL` clamped to `depths` is assumed. | [optional] [enum: `low`, `medium`, `high`, `max`] |


### Model AiResolvedAssignment
Resolved profile for an action — both the storage row and its ID.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **profileId** | **String** | The identifier of the resolved profile. | [required] |
| **profile** | [**AiProfile**](#model-aiprofile) | The resolved profile itself. | [required] |


### Model AiRoomDataLifetimeDto
The rule by which the files of a room are removed once they have been lying in it for too long.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **deletePermanently** | **Boolean** | Decides what happens to a file that has grown too old: it is erased outright, or it is moved to the trash of the account that created the room, from where it can still be brought back. | [optional] [example: `false`] |
| **period** | [**AiRoomDataLifetimePeriod**](#model-airoomdatalifetimeperiod) | The unit the age is counted in. Months and years are counted as calendar ones, so the same number of them covers a different number of days depending on when the clean-up runs. | [optional] [enum: `0`, `1`, `2`] |
| **value** | **Integer** (int32) | How many periods a file may stay in the room, counted from the moment it was last changed rather than from the moment the rule was set. Files that are already older than this are removed by the next clean-up. | [optional] [example: `12`] [min: 1] [max: 999] [nullable] |
| **enabled** | **Boolean** | Switches the rule on and off. Switching it off erases the rule instead of keeping it aside, so afterwards the room reports no rule at all and the other three values have to be sent again to bring it back. | [optional] [example: `true`] [nullable] |


### Model AiRoomDataLifetimePeriod

Possible values:

- `0` — Day (`Day`)
- `1` — Month (`Month`)
- `2` — Year (`Year`)


### Model AiRoomType

Possible values:

- `1` — Form filling room (`FillingFormsRoom`)
- `2` — Collaboration room (`EditingRoom`)
- `5` — Custom room (`CustomRoom`)
- `6` — Public room (`PublicRoom`)
- `8` — Virtual data room (`VirtualDataRoom`)
- `9` — AI Room (`AiRoom`)


### Model AiSuccessResponse
Generic success acknowledgement for mutations that return no data.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | Always true — the mutation completed. | [required] [example: `true`] |


### Model AiTErrorData
A field-scoped validation error: which form field was rejected, and why.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **field** | **String** | The rejected field. | [required] [enum: `key`, `url`, `name`] |
| **message** | **String** | The human-readable reason the field was rejected. | [required] |


### Model AiTMCPItem
Descriptor for a tool exposed by an MCP server.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | Tool name as registered on the MCP server (e.g. `web_search`, `insert_text`). | [required] [example: `docspace_get_folder`] |
| **description** | **String** | Human-readable description shown to the AI model and in the tools list UI. | [required] [example: `Read the contents of a DocSpace folder.`] |
| **inputSchema** | **Object** | JSON Schema describing the tool's input parameters. | [required] [example: `{type=object, properties={folderId={type=string}}, required=[folderId]}`] |
| **enabled** | **Boolean** | Whether this tool is currently enabled. Disabled tools are hidden from the AI model. | [optional] [example: `true`] |
| **serverType** | **String** | Server type (MCP server name / host tool group id) this tool belongs to — the key the persisted disabled map is stored under. Set by the source that enumerated the tool, so a caller-supplied tool can still be attributed to its group after being flattened into a single list: that is what lets the engine apply the disabled map to `actionArgs.tools` instead of trusting the caller to pre-filter. Wire-serializable, so it survives a remote (server-side) engine. | [optional] [example: `docspace`] |
| **requireApproval** | **Boolean** | Whether the consumer must show an approval dialog before this tool runs. The engine reads it when deciding the `autoAllow` flag on a `tool-call-pending` event: `requireApproval === false` auto-allows the call (no dialog), `true` always prompts. `undefined` leaves the decision to the persisted always-allow list alone — so MCP / custom-server tools (which never set it) keep prompting as before, while host tools opt into auto-allow by default. Wire-serializable, so it survives a remote (server-side) engine. | [optional] [example: `false`] |


### Model AiTProvider
Minimal provider connection configuration. Used to connect to a provider API.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | [**AiProviderType**](#model-aiprovidertype) | Provider type identifier. | [required] [example: `openai`] |
| **name** | **String** | User-defined display name for this provider connection. | [required] [example: `OpenAI GPT-4o`] |
| **key** | **String** | API key or token. Optional for local providers (Ollama, LM Studio). | [optional] [example: `sk-your-provider-api-key`] |
| **baseUrl** | **String** | Base URL of the provider API. | [required] [example: `https://api.openai.com/v1`] |


### Model AiThread
Chat conversation metadata. Represents a single chat session (thread).

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** | Unique thread identifier (UUID). | [required] [example: `11111111-1111-1111-1111-111111111111`] |
| **title** | **String** | Optional thread title. Auto-generated from the first message if not set. | [optional] [example: `Contract review`] |
| **lastEditDate** | **BigDecimal** | Timestamp (ms since epoch) of the last message in this thread. Used for sorting. | [optional] [example: `1767225600000`] |
| **provider** | [**AiTProvider**](#model-aitprovider) | Provider configuration at the time of last message. Used for thread-level provider display. | [optional] |
| **model** | [**AiModel**](#model-aimodel) | Model info at the time of last message. | [optional] |
| **profileId** | **String** | ID of the profile used for this thread. Links to `Profile.id`. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |


### Model AiThreadMessageLike
A single chat message as it travels on the wire.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Storage-assigned message id (absent on inbound drafts). | [optional] [example: `22222222-2222-2222-2222-222222222222`] |
| **role** | **String** | Message author role. | [required] [example: `user`] [enum: `user`, `assistant`, `system`] |
| **content** | [**AiThreadMessageLike_content**](#model-aithreadmessagelikecontent) |  | [required] |
| **createdAt** | **String** | Creation timestamp, ISO-8601 on the wire. | [optional] [example: `2026-01-01T00:00:00.000Z`] |
| **status** | [**AiThreadMessageLike_status**](#model-aithreadmessagelikestatus) |  | [optional] |
| **metadata** | **Object** | Arbitrary per-message metadata. | [optional] [example: `{}`] |
| **attachments** | **List** | Attachments linked to the message. | [optional] [example: `[55555555-5555-5555-5555-555555555555]`] |


### Model AiThreadMessageLike.content
Message content: either plain text or a list of typed content parts (text, image, tool-call, …). Parts are open-ended by content type.


### Model AiThreadMessageLike.content.anyOf item

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | **String** |  | [required] |
| **text** | **String** |  | [optional] |


### Model AiThreadMessageLike.status
Delivery/generation status of the message.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | **String** |  | [required] |


### Model AiToolsBulkResult
Outcome of `ToolsEngine.replaceAllCustomServers` — either every entry persisted, or no entries persisted plus a per-key error report.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when every custom MCP server was persisted. | [required] [example: `true`] |
| **errors** | [**List**](#model-aitoolsbulkresulterrors-item) | What was rejected, per server. Present on failure - and then no server was persisted. | [optional] [example: `[]`] |


### Model AiToolsBulkResult.errors item

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** |  | [required] |
| **error** | [**AiTErrorData**](#model-aiterrordata) |  | [required] |


### Model AiToolsMutationResult
Outcome of an MCP-server CRUD call. Either success or a field-scoped error suitable for the settings form.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the MCP server was persisted. | [required] [example: `true`] |
| **error** | [**AiTErrorData**](#model-aiterrordata) | Why the MCP server was rejected. Present on failure. | [optional] |


### Model AiVectorizationSettingsDto
The vectorization settings.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | [**AiEmbeddingProviderType**](#model-aiembeddingprovidertype) | The type of embedding provider configured for document vectorization. | [optional] [enum: `0`, `1`, `2`, `3`] |
| **needReset** | **Boolean** | Indicates whether the embedding provider API key needs to be reconfigured. | [optional] [example: `false`] |


### Model AiVectorizationSettingsWrapper
The successful API response containing the VectorizationSettingsDto object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**AiVectorizationSettingsDto**](#model-aivectorizationsettingsdto) | The VectorizationSettingsDto object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-aiaiusersettingswrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model AiWatermarkAdditions

Possible values:

- `1` — User name (`UserName`)
- `2` — User email (`UserEmail`)
- `4` — User ip adress (`UserIpAdress`)
- `8` — Current date (`CurrentDate`)
- `16` — Room name (`RoomName`)


### Model AiWatermarkDto
The watermark drawn over the documents of a room while they are viewed and printed.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **additions** | [**AiWatermarkAdditions**](#model-aiwatermarkadditions) | Which details of the reader and of the room are stamped alongside the text. The values combine, so a number that is not a member on its own is the sum of several of them, and 0 means that only the text is stamped. | [required] [enum: `1`, `2`, `4`, `8`, `16`] |
| **text** | **String** | The fixed line drawn over the document, printed before the details selected alongside it. Empty when the room stamps an image instead. | [optional] [example: `Confidential`] [nullable] |
| **rotate** | **Integer** (int32) | How far the stamp is turned, in degrees, with negative values turning it anticlockwise and 0 drawing it horizontally. | [required] [example: `-45`] |
| **imageScale** | **Integer** (int32) | How large the image is drawn, as a percentage of its own size. It is 0 for a text watermark, where nothing is scaled. | [required] [example: `100`] |
| **imageUrl** | **String** | The address the stamped picture is served from, inside the storage of the room. Empty for a text watermark. | [optional] [example: `https://portal.example.com/storage/watermark_a1b2c3.png`] [nullable] |
| **imageHeight** | **Double** (double) | The height the picture is drawn with, in pixels, kept together with the width so that the proportions survive. It is 0 for a text watermark. | [required] [example: `100`] |
| **imageWidth** | **Double** (double) | The width the picture is drawn with, in pixels, kept together with the height so that the proportions survive. It is 0 for a text watermark. | [required] [example: `200`] |


### Model AiWebSearchConfig
Web-search provider configuration. Credentials and provider selection for the built-in web-search tool group.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **provider** | **String** | Provider identifier (e.g. `exa`). | [required] [example: `exa`] |
| **key** | **String** | API key for the provider. Optional for self-hosted or keyless setups. | [optional] [example: `your-web-search-api-key`] |
| **baseUrl** | **String** | Optional override for the provider's base URL. | [optional] [example: `https://api.exa.ai`] |
| **isCloudProvider** | **Boolean** | Whether this provider is cloud-hosted (vs. self-hosted). | [optional] [example: `true`] |
| **headers** | **Map** | Extra HTTP headers sent with each request to the ONLYOFFICE / cloud backend (e.g. `X-Tenant`). Merged after the derived `Authorization` header, so a custom header of the same name wins. | [optional] [example: `{}`] |


### Model AiWebSearchMutationResult
Outcome of `WebSearchEngine.configure` — either the persisted config or a field-scoped error suitable for the settings form.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the configuration was persisted. | [required] [example: `true`] |
| **config** | [**AiWebSearchConfig**](#model-aiwebsearchconfig) | The persisted web-search configuration. Present on success. | [optional] |
| **error** | [**AiTErrorData**](#model-aiterrordata) | Why the configuration was rejected. Present on failure. | [optional] |


### Model FieldError
Field specific validation error

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **field** | **String** | The name of the field that failed validation | [optional] [example: `policy_url`] |
| **code** | **String** | Error code for localization purposes | [optional] [example: `InvalidPolicyUrl`] |
| **message** | **String** | Human readable error message | [optional] [example: `policy url is expected to be passed as url`] |


### Model ProblemDetail
RFC 7807 problem details returned by the registration API for failed requests.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | **URI** (uri) | A URI reference that identifies the problem type. This service sets it to the DocSpace API getting-started page. | [optional] |
| **title** | **String** | A short, human-readable summary of the problem type, typically the HTTP status reason phrase. | [optional] |
| **status** | **Integer** (int32) | The HTTP status code for this occurrence of the problem. | [optional] |
| **detail** | **String** | A human-readable explanation specific to this occurrence of the problem. | [optional] |
| **instance** | **URI** (uri) | A URI reference that identifies the specific occurrence, set to the request path. | [optional] |
| **properties** | **Map** | Extension members carried on the problem. Usually empty; validation failures also surface as the top-level errors array. | [optional] |
| **errors** | [**List**](#model-fielderror) | Field-specific validation errors. Present when the request body or parameters failed validation, or when a named scope is not in the tenant catalogue. | [optional] |


### Model aiAgentsCreate request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **profileId** | **String** | Profile id bound to the agent. | [required] |
| **prompt** | **String** | Agent system prompt; stored as the room's `chatSettings.prompt`. | [required] |
| **private** | **Boolean** | Whether the agent room is private. | [optional] |
| **share** | **List** | Initial share entries (`FileShareParams`). | [optional] |
| **attachDefaultTools** | **Boolean** | Whether to attach the default DocSpace MCP tool server. | [optional] |
| **title** | **String** | Agent (room) title. | [optional] |
| **quota** | **BigDecimal** | Room quota in bytes. | [optional] |
| **indexing** | **Boolean** | Whether room content is indexed for search. | [optional] |
| **denyDownload** | **Boolean** | Whether downloading room content is denied. | [optional] |
| **lifetime** | **Object** | Room data lifetime policy (`RoomDataLifetimeDto`). | [optional] |
| **watermark** | **Object** | Watermark settings (`WatermarkRequestDto`). | [optional] |
| **logo** | **Object** | Room logo (`LogoRequest`). | [optional] |
| **tags** | **List** | Room tags. | [optional] |
| **color** | **String** | Room accent color. | [optional] |
| **cover** | **String** | Room cover image id. | [optional] |


### Model aiAgentsDelete request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **deleteAfter** | **Boolean** | Delete the room after the editing session finishes. | [optional] |


### Model aiAgentsGet 200 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**aiAgentsGet_200_response_allOf_response**](#model-aiagentsget-200-responseresponse) |  | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-aiaiusersettingswrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model aiAgentsGet 200 response.response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **profileId** | **String** | The AI profile bound to this agent, added by this service on top of what the internal service returns. Absent when the agent has no profile assigned. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |


### Model aiAgentsResetQuota request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **roomIds** | [**List**](#model-aiagentsupdatequotarequestroomids-item) | Agent (room) ids to reset to the tenant default quota. | [required] |


### Model aiAgentsUpdateQuota request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **roomIds** | [**List**](#model-aiagentsupdatequotarequestroomids-item) | Agent (room) ids to update. | [required] |
| **quota** | **BigDecimal** | New quota in bytes; a negative value disables the custom quota. | [required] |


### Model aiAgentsUpdateQuota.request.roomIds item
A DocSpace room id: an integer for native rooms, a string for third-party-backed ones.


### Model aiAgentsUpdate request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **profileId** | **String** | Profile id to rebind (optional). | [optional] |
| **chatSettings** | **Object** | Chat settings (`ChatSettings`); requires a valid provider/model. | [optional] |
| **sendFormToExternalDB** | **Boolean** | Whether form results are sent to an external DB. | [optional] |
| **saveFormAsXLSX** | **Boolean** | Whether forms are saved as XLSX. | [optional] |
| **title** | **String** | Agent (room) title. | [optional] |
| **quota** | **BigDecimal** | Room quota in bytes. | [optional] |
| **indexing** | **Boolean** | Whether room content is indexed for search. | [optional] |
| **denyDownload** | **Boolean** | Whether downloading room content is denied. | [optional] |
| **lifetime** | **Object** | Room data lifetime policy (`RoomDataLifetimeDto`). | [optional] |
| **watermark** | **Object** | Watermark settings (`WatermarkRequestDto`). | [optional] |
| **logo** | **Object** | Room logo (`LogoRequest`). | [optional] |
| **tags** | **List** | Room tags. | [optional] |
| **color** | **String** | Room accent color. | [optional] |
| **cover** | **String** | Room cover image id. | [optional] |


### Model aiAiApproveToolCall request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **result** | **oas_any_type_not_mapped** |  | [required] [nullable] |
| **allowAlways** | **Boolean** | Persist auto-approve for this tool's name. | [optional] |
| **threadId** | **String** | Thread the assistant message belongs to. | [required] |
| **messageId** | **String** | Storage id of the assistant message holding the tool call. | [required] |
| **idx** | **BigDecimal** | Index of the tool-call content part inside `message.content`. | [required] |
| **message** | [**AiThreadMessageLike**](#model-aithreadmessagelike) | Snapshot of the assistant message at the time the tool call surfaced. | [required] |
| **actionArgs** | [**AiAiActionArgs**](#model-aiaiactionargs) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] |
| **entityId** | **String** | Optional entity (room) scope for profile resolution. | [optional] |
| **profileId** | **String** | Session-level profile override for this request only. | [optional] |


### Model aiAiRegenerateStream request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** | Target thread (must already exist). | [required] |
| **actionArgs** | [**AiAiActionArgs**](#model-aiaiactionargs) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] |
| **entityId** | **String** | Optional entity (room) scope for profile resolution. | [optional] |
| **profileId** | **String** | Session-level profile override for this request only. | [optional] |


### Model aiAiSendCustom request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **isStream** | **Boolean** | Stream the reply (ndjson) when true, else return a single message. | [required] |
| **systemPrompt** | **String** | Caller-supplied system prompt for this one-turn call. | [required] |
| **userMessage** | [**AiThreadMessageLike**](#model-aithreadmessagelike) |  | [required] |
| **actionArgs** | [**AiAiActionArgs**](#model-aiaiactionargs) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] |


### Model aiAiSend request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **actionType** | [**AiActionType**](#model-aiactiontype) | Which AI action to run — selects the assignment slot and action. | [required] [enum: `Default`, `Chat`, `Code`, `Summarization`, `Translation`, `TextAnalyze`, `ImageGeneration`, `OCR`, `Vision`] |
| **userMessage** | [**AiThreadMessageLike**](#model-aithreadmessagelike) | The user turn to send. | [required] |
| **actionArgs** | [**AiAiActionArgs**](#model-aiaiactionargs) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] |
| **entityId** | **String** | Optional entity (room) scope for profile resolution. | [optional] |


### Model aiAssignmentsAssign request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **actionType** | [**AiActionType**](#model-aiactiontype) | Action the assignment applies to. | [required] [enum: `Default`, `Chat`, `Code`, `Summarization`, `Translation`, `TextAnalyze`, `ImageGeneration`, `OCR`, `Vision`] |
| **profileId** | **String** | Profile id to bind. | [required] |


### Model aiAssignmentsCascadeProfileDelete request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **profileId** | **String** | The profile whose assignments are removed. May be sent as the `profileId` query parameter instead of in the body. | [required] [example: `00000000-0000-0000-0000-000000000000`] |


### Model aiAttachmentsLinkToMessage request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **ids** | **List** | Attachment ids to bind. | [required] |
| **messageId** | **String** | Owning message id. | [required] |
| **threadId** | **String** | Owning thread id. | [required] |


### Model aiAttachmentsSaveFile request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **input** | [**aiAttachmentsSaveFile_request_input**](#model-aiattachmentssavefilerequestinput) |  | [required] |
| **entityId** | **String** | Optional entity (room) scope. | [optional] |


### Model aiAttachmentsSaveFile.request.input
A file attachment draft to persist.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **path** | **String** | Storage path/key of the file. | [required] |
| **content** | **String** | File contents. | [required] |
| **type** | **BigDecimal** | File type discriminator. | [required] |
| **title** | **String** | Optional display title. | [optional] |


### Model aiAttachmentsSaveFilesMany request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **inputs** | [**List**](#model-aiattachmentssavefilerequestinput) |  | [required] |
| **entityId** | **String** |  | [optional] |


### Model aiEditorToolsCall 200 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **result** | **String** | What the tool produced, as text. A structured result is JSON-encoded, and a tool that failed reports its error here rather than through a status code. | [required] |


### Model aiEditorToolsCall request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | Name of the tool to run, as listed by the tools endpoint. A name that is unknown or excluded from the editor is rejected with 400. | [required] [example: `docspace_get_folder`] |
| **arguments** | **Map** | Arguments for the tool, shaped by that tool's own input schema. Treated as empty when it is not an object. | [optional] [example: `{"folderId":"1234"}`] |
| **entityId** | **String** | Room the call is scoped to. Left out for a portal-wide call. | [optional] [example: `1234`] |


### Model aiEditorToolsList 200 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **tools** | [**List**](#model-aieditortoolslist-200-responsetools-item) | The tools the editor may offer, flattened across every server. | [required] |


### Model aiEditorToolsList 200 response.tools item

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | Tool name, as it is passed back to the call endpoint. | [required] [example: `docspace_search_files`] |
| **description** | **String** | What the tool does, empty when the server declares nothing. | [required] |
| **inputSchema** | **Map** | JSON Schema of the tool arguments. | [required] |
| **requireApproval** | **Boolean** | Whether the editor has to ask the user before running the tool. Read-only operations arrive with this off. | [required] [example: `true`] |


### Model aiExportTextToDocx 202 response
Accepted-for-processing acknowledgement (conversion is asynchronous).

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** |  | [required] |


### Model aiExportTextToDocx request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **title** | **String** | Document title (also the file name). | [required] |
| **content** | **String** | Markdown content to convert. | [required] |
| **folderId** | [**aiExportTextToDocx_request_folderId**](#model-aiexporttexttodocxrequestfolderid) |  | [required] |


### Model aiExportTextToDocx.request.folderId
Target folder id (int or string).


### Model aiOpenaiChatCompletions 403 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **error** | [**aiOpenaiChatCompletions_403_response_error**](#model-aiopenaichatcompletions-403-responseerror) |  | [required] |


### Model aiOpenaiChatCompletions 403 response.error

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **message** | **String** | Human-readable description of the failure. | [required] |
| **type** | **String** | OpenAI error class, for example `invalid_request_error`. | [required] [example: `invalid_request_error`] |
| **code** | **String** | Machine-readable code, when the provider supplies one. | [optional] [nullable] |
| **param** | **String** | The request parameter at fault, when the failure names one. | [optional] [nullable] |


### Model aiPreferencesSetDeepMode request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **value** | **Boolean** | New deep-mode value. | [required] |
| **entityId** | **String** |  | [optional] |


### Model aiPreferencesSetReasoningLevel request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **value** | [**AiAiReasoningLevel**](#model-aiaireasoninglevel) | New extended-thinking depth; `off` turns deep mode off. | [required] [enum: `off`, `low`, `medium`, `high`, `max`] |
| **entityId** | **String** |  | [optional] |


### Model aiProfilesGetById 200 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Unique profile identifier (UUID). | [required] |
| **name** | **String** | User-defined profile display name. | [required] |
| **providerType** | [**AiProviderType**](#model-aiprovidertype) | Provider type for this profile. Use `external` to delegate all HTTP transport to `PlatformAdapter.externalFetch` while reusing an existing provider's response parser — see `Profile.basedOn` for the format selector. | [required] |
| **basedOn** | [**AiBuiltinProviderType**](#model-aibuiltinprovidertype) | Selects the response-format parser used by the `external` provider. Ignored for any other `providerType`.  Supported values are `openai`, `anthropic`, `mistral` and `openrouter`. Remaining values (`genai`, `stabilityai`, …) are accepted by the type but not yet implemented; passing one raises an error at request time. | [optional] [enum: `anthropic`, `ollama`, `openai`, `openaicompatible`, `together`, `openrouter`, `genai`, `deepseek`, `xai`, `lm-studio`, `mistral`, `groq`, `zhipu`, `stabilityai`, `gpt4all`, `onlyoffice`, `external`] |
| **baseUrl** | **String** | Base URL of the provider API. | [required] |
| **modelId** | **String** | Selected model ID within this provider. | [required] |
| **reasoning** | **Boolean** | Whether extended thinking is enabled for this profile's model. | [optional] |
| **reasoningSupport** | [**AiReasoningSupport**](#model-aireasoningsupport) | Extended-thinking capabilities of the selected model as reported by the provider's catalogue at save time (see `Model.reasoningSupport`). When present the composer's Effort row follows it exactly; when absent the provider's id-based table answers. Hosts persist it with the rest of the profile. | [optional] |
| **capabilities** | **BigDecimal** | Bitmask of capabilities supported by the selected model. | [optional] |
| **canUseTool** | **Boolean** | Result of the live tool-capability probe performed at create time and on changes to `modelId` / `providerType` / `baseUrl`. `undefined` means the probe has never run for this profile (legacy record). | [optional] |
| **useResponsesApi** | **Boolean** | Result of the live Responses-API probe (parallel to `canUseTool`). `true` means the model speaks `/v1/responses` and the OpenAI provider must route through `client.responses.create` — required for gpt-5+ reasoning models that reject `reasoning_effort` together with `tools` on `/v1/chat/completions`. Probed at create time and whenever `modelId` / `providerType` / `baseUrl` change. `undefined` means the probe never ran (legacy record) — readers treat that as `false`. | [optional] |
| **isCloudProvider** | **Boolean** | Whether this profile uses a cloud-hosted provider (e.g. ONLYOFFICE DocSpace). | [optional] |
| **useProxy** | **Boolean** | Route every provider request through the host's `fetchProxy` instead of the global `fetch`. Useful when the host runs the widget in a sandbox without direct network access (CORS, custom auth, etc.). Has no effect when the `PlatformAdapter.fetchProxy` is not configured. | [optional] |
| **createdAt** | **BigDecimal** | Creation timestamp (ms since epoch). Used to sort the AI models list newest-first. | [optional] |


### Model aiProfilesListProviderModels 400 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **error** | **String** | The error message, ready to be shown to the caller. | [required] |
| **field** | **String** | Name of the request field that was missing or rejected. | [required] |


### Model aiProfilesListProviderModels 400 response.anyOf

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **error** | **String** | The error message, ready to be shown to the caller. | [required] [example: `providerType required`] |
| **field** | **String** | Name of the request field that was missing or rejected. | [required] [example: `providerType`] |


### Model aiProfilesListProviderModels request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **providerType** | [**AiProviderType**](#model-aiprovidertype) | Provider whose catalog to list. | [required] |
| **baseUrl** | **String** | Provider API base URL. | [required] [example: `https://api.openai.com/v1`] |
| **apiKey** | **String** | Provider API key. Omit it for a provider that needs none; the request is then made without one. | [optional] |


### Model aiProfilesTestConnection 200 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **message** | **String** |  | [optional] |


### Model aiProfilesTestConnection 200 response.anyOf

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **message** | **String** |  | [optional] |


### Model aiPromptsImportBundle request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **bundle** | [**AiPromptBundle**](#model-aipromptbundle) | Bundle to restore. | [required] |
| **options** | [**aiPromptsImportBundle_request_options**](#model-aipromptsimportbundlerequestoptions) |  | [optional] |


### Model aiPromptsImportBundle.request.options
Import options.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **mode** | [**AiImportMode**](#model-aiimportmode) |  | [optional] [enum: `replace`, `merge`] |


### Model aiPromptsMove request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Prompt id to move. | [required] |
| **folderId** | **String** | Target folder id, or `null` for root. | [required] [nullable] |


### Model aiPromptsRenameFolder request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Folder id to rename. | [required] |
| **name** | **String** | New folder name. | [required] |


### Model aiPromptsUpdate request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Prompt id to update. | [required] |
| **updates** | [**aiPromptsUpdate_request_updates**](#model-aipromptsupdaterequestupdates) |  | [required] |


### Model aiPromptsUpdate.request.updates
Fields to change.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** |  | [optional] |
| **text** | **String** |  | [optional] |
| **folderId** | **String** |  | [optional] [nullable] |


### Model aiThreadsAppendUserMessage 200 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **messageId** | **String** | Identifier of the message that was appended to the thread. | [required] [example: `22222222-2222-2222-2222-222222222222`] |


### Model aiThreadsAppendUserMessage request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** |  | [required] |
| **message** | [**AiThreadMessageLike**](#model-aithreadmessagelike) | Message to persist (id/createdAt are storage-assigned). | [required] |
| **profileId** | **String** |  | [optional] |


### Model aiThreadsCreate request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **title** | **String** | Thread title. | [required] |
| **profileId** | **String** | Optional profile to bind. | [optional] |
| **entityId** | **String** | Optional entity (room) scope. | [optional] |


### Model aiThreadsOpenOrCreate request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** |  | [optional] |
| **profile** | [**AiProfile**](#model-aiprofile) | Profile the title generation runs on. | [required] |
| **profileId** | **String** |  | [required] |
| **firstMessage** | [**AiThreadMessageLike**](#model-aithreadmessagelike) | First user message a fresh thread derives its title from. | [required] |
| **entityId** | **String** | Opaque scope token persisted on a freshly created thread. | [optional] |
| **entityMeta** | [**aiThreadsOpenOrCreate_request_entityMeta**](#model-aithreadsopenorcreaterequestentitymeta) |  | [optional] |


### Model aiThreadsOpenOrCreate.request.entityMeta
Optional entity hint (lib 0.5.64): only `entityId` is read; the source (`source_id` / `source_type` / `source_title`) is re-resolved server-side before reaching the provider as metadata.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **entityId** | **String** |  | [optional] |
| **entityTitle** | **String** |  | [optional] |


### Model aiThreadsRegenerateTitle 200 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **title** | **String** | The regenerated thread title. | [required] [example: `Quarterly report review`] |


### Model aiThreadsRegenerateTitle request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** |  | [required] |
| **profile** | [**AiProfile**](#model-aiprofile) | Profile used to regenerate the title. | [required] |
| **entityMeta** | [**aiThreadsOpenOrCreate_request_entityMeta**](#model-aithreadsopenorcreaterequestentitymeta) |  | [optional] |


### Model aiThreadsRename request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** |  | [required] |
| **title** | **String** | New thread title. | [required] |


### Model aiThreadsTouch request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** |  | [required] |
| **profileId** | **String** |  | [optional] |


### Model aiThreadsUpdateMessage request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **messageId** | **String** |  | [required] |
| **message** | [**AiThreadMessageLike**](#model-aithreadmessagelike) | Replacement message content. | [required] |


### Model aiToolsAddCustomServer request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | Server name (unique within scope). | [required] |
| **config** | **Object** | Server transport configuration. | [required] |
| **entityId** | **String** |  | [optional] |


### Model aiToolsListSystemTools 200 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **groups** | **Map** | Tools by server name, covering both the host-configured system servers and the custom MCP servers registered for this scope. | [required] |
| **errors** | **Map** | Why a registered custom server could not be reached, keyed by server name. A server that answered is absent from this map. | [required] |
| **system** | **List** | Names of the host-configured system servers among the keys of `groups`; everything else there was registered as a custom server. | [required] |


### Model aiToolsRemoveCustomServer request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** |  | [required] |
| **entityId** | **String** |  | [optional] |


### Model aiToolsReplaceAllCustomServers request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **map** | **Map** | Full replacement set, keyed by server name. | [required] |
| **entityId** | **String** |  | [optional] |


### Model aiToolsSetAllowAlways request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **serverType** | **String** |  | [required] |
| **toolName** | **String** |  | [required] |
| **value** | **Boolean** | Whether the tool is always allowed. | [required] |
| **entityId** | **String** |  | [optional] |


### Model aiToolsSetDisabled request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **serverType** | **String** |  | [required] |
| **toolNames** | **List** | Tool names to disable. | [required] |
| **entityId** | **String** |  | [optional] |


### Model aiToolsUpdateCustomServer request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** |  | [required] |
| **config** | **Object** | One MCP server configuration. The shape is intentionally open — MCP allows per-transport fields (`command`/`args` for stdio, `url` for HTTP, plus env, headers, etc.) and the storage layer stays agnostic to which transport is in use. | [required] |
| **entityId** | **String** |  | [optional] |


### Model aiVectorizationStartTask 200 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **count** | **Integer** | Envelope field from the internal service; 0 for this operation. | [required] [example: `0`] |
| **status** | **Integer** | Envelope status flag from the internal service. | [required] [example: `0`] |
| **statusCode** | **Integer** | HTTP status the internal service answered with. | [required] [example: `200`] |


### Model aiVectorizationStartTask request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **files** | **List** | Identifiers of the files to vectorize. | [required] [example: `[1234,1235]`] |


### Model aiWebSearchConfigure request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **config** | [**AiWebSearchConfig**](#model-aiwebsearchconfig) |  | [required] |
| **entityId** | **String** |  | [optional] |


## Authorization


### cookieAuth
- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: 


### bearerAuth

- **Type**: HTTP Bearer Token authentication


### asc_auth_key
- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: 


### Basic

- **Type**: HTTP basic authentication


### Bearer

- **Type**: HTTP Bearer Token authentication (JWT)


### ApiKeyBearer
- **Type**: API key
- **API key parameter name**: ApiKeyBearer
- **Location**: HTTP header


### OAuth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: 
- **Scopes**: 
  - read: Read access to protected resources
  - write: Write access to protected resources


### OpenId


### x-signature
- **Type**: API key
- **API key parameter name**: x-signature
- **Location**: 

