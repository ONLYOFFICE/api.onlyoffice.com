# AdditionalResourcesDto
Which of the ONLYOFFICE help and community entries the interface may offer, installation-wide, in the shape the reset of these flags returns.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **startDocsEnabled** | **Boolean** | Whether the sample documents that ONLYOFFICE ships may be placed in a new user's Documents. Unlike the link flags below it depends on nothing that has to be configured, so its built-in value is always `true`. | [optional] [example: `true`] |
| **helpCenterEnabled** | **Boolean** | Whether the interface may offer the Help Center entry. It is `false` both when the entry was switched off for the installation and when the installation configures no Help Center address at all; the addresses themselves are not part of this answer and arrive in `externalResources` of `GET api/2.0/settings`. | [optional] [example: `true`] |
| **feedbackAndSupportEnabled** | **Boolean** | Whether the interface may offer the Feedback and Support entry, `false` for the same two reasons as `helpCenterEnabled`. | [optional] [example: `true`] |
| **userForumEnabled** | **Boolean** | Whether the interface may offer the user forum entry, `false` for the same two reasons as `helpCenterEnabled`. | [optional] [example: `true`] |
| **videoGuidesEnabled** | **Boolean** | Whether the interface may offer the Video Guides entry, `false` for the same two reasons as `helpCenterEnabled`. | [optional] [example: `true`] |
| **licenseAgreementsEnabled** | **Boolean** | Whether the interface may offer the License Agreements entry, `false` for the same two reasons as `helpCenterEnabled`. | [optional] [example: `true`] |
| **lastModified** | **Date** (date-time) | When these flags were last stored. Flags that were never stored report the moment they were read, and the answer of the reset operation reports `0001-01-01T00:00:00`. | [optional] [example: `2026-01-01T10:00:00`] |
