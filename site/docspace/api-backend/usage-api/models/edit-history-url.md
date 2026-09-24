# EditHistoryUrl
The address, document key and format of the revision a comparison is made against.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **key** | **String** | The document key of that revision. When the file has no earlier revision the portal generates a fresh key for the template it falls back to, so the value is not always one an earlier revision ever had. | [optional] [example: `doc_v2_20260101`] [nullable] |
| **url** | **URI** (uri) | The address that revision's content is served from. It is meant for the editing service and carries its own key, which is valid for a limited time. | [optional] [example: `https://files.example.com/history/doc_v2_20260101.docx`] [nullable] |
| **fileType** | **String** | The format of that revision, as an extension without the leading dot. | [optional] [example: `docx`] [nullable] |
