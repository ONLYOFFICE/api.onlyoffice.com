# EditHistoryDataDto
Everything an editor needs in order to show what one revision of a file changed.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **changesUrl** | **URI** (uri) | The address the editor downloads the recorded changes of this revision from. It is filled in only when the portal has a change record for the revision; without it the revision can be shown as a whole document but not as a set of changes. | [optional] [example: `https://example.com/changes`] [nullable] |
| **key** | **String** | The document key of the revision being shown, which the editing service uses to identify it and to reuse the copy it has cached. | [required] [example: `doc1`] [nullable] |
| **previous** | [**EditHistoryUrl**](edit-history-url.md) | The revision this one is compared against. It arrives together with `changesUrl`, and when the revision shown is the first one the file ever had, it points at the blank template the file was created from instead of at an earlier revision. | [optional] |
| **token** | **String** | The signature over the whole answer, as a JSON Web Token that the editing service verifies before it accepts the addresses in it. Empty when the portal runs without a document-service secret. | [optional] [example: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxfQ.7HxQ0Zx1`] [nullable] |
| **url** | **URI** (uri) | The address the content of this revision is served from. It is meant for the editing service and carries its own key, which is valid for a limited time. | [required] [example: `https://example.com/file.docx`] [nullable] |
| **version** | **Integer** (int32) | Echoes the revision that was asked for, so it reports 0 when the request named no version and the current revision was taken. | [required] [example: `1`] |
| **fileType** | **String** | The format of the revision being shown, as an extension without the leading dot. | [required] [example: `docx`] [nullable] |
