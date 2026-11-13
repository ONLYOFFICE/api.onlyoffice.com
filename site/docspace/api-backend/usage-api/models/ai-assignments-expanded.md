# AiAssignmentsExpanded
The bindings with `expand=profile`: the bound profiles themselves, plus how many profiles the portal has, so a chat can start on this one read.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **assignments** | [**Map**](ai-profile.md) | The bound profiles keyed by action type, as `GET api/2.0/ai/profiles/list` describes them. A binding whose profile no longer exists is left out. | [required] |
| **profilesTotal** | **Integer** | How many profiles the portal has. | [required] |
| **chatProfilesTotal** | **Integer** | How many of those profiles can chat; a profile without declared capabilities counts as one that can. | [required] |
