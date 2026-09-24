# UpdateComment
The comment to store on one version of a file.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **version** | **Integer** (int32) | The version the comment belongs to, as reported by `GET api/2.0/files/file/{fileId}/edit/history`. A version that does not exist is rejected as an invalid request. | [required] [example: `1`] [min: 1] [max: 2147483647] |
| **comment** | **String** | The note that explains what changed in that version, as the version history shows it. An empty text clears the note, and a longer one is cut rather than refused, so read the stored text from the answer. | [optional] [example: `This is a comment`] [minLength: 0] [maxLength: 255] [nullable] |
