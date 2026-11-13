# aiMetaFill 200 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **dryRun** | **Boolean** | Whether the values were only proposed (`true`) or written as well. | [required] |
| **metadata** | [**AiEntryMetadata**](ai-entry-metadata.md) | The entry's metadata after the write (or as it stands, with `dryRun`), as `GET api/2.0/files/metadata/{kind}/{id}` returns it. | [required] |
| **filled** | [**List**](ai-meta-fill-200-response-filled-item.md) | The values written, or proposed with `dryRun`: a typed value for a template field, a string for a custom field. | [required] |
| **unresolved** | [**List**](ai-meta-fill-200-response-unresolved-item.md) | The fields left as they were, with the reason for each. | [required] |
| **sources** | [**List**](ai-meta-fill-200-response-sources-item.md) | The documents the values were read from. | [required] |
| **skipped** | [**List**](ai-meta-generate-200-response-skipped-item.md) | The entries that were left out, with the reason for each. | [required] |
