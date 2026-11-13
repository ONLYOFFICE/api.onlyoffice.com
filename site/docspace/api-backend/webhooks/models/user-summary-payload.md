# UserSummaryPayload
A short reference to a user from another payload: the author or the last editor of a file, folder or room, the manager of a group, or the creator of an account.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The ID of the referenced user; `GET api/2.0/people/{userid}` returns the full profile by it. | [optional] [example: `9924256a-739c-462b-be1a-e1d3a1d6f2d4`] |
| **displayName** | **String** | The user's full name in the name order set for the portal, HTML-encoded. | [optional] [example: `Mike Zanyatski`] |
| **userName** | **String** | The unique login name of the user, made from the local part of their email address when the account is created. Absent when the subscription's creator is a User or a Guest, who may not see the contacts of other users, unless this user is that creator. | [optional] [example: `mike.zanyatski`] |
| **avatar** | **String** | The absolute URL of the 82x82 avatar, with a hash query parameter that changes when the profile does. | [optional] [example: `https://example.com/avatar.jpg`] |
| **profileUrl** | **String** | The absolute link to the user in the portal's list of people, or of guests for a guest; today it is a search of that list by the user's email address. Absent when the subscription's creator is a User or a Guest, who may not see the contacts of other users, unless this user is that creator. | [optional] [example: `https://example.onlyoffice.com/accounts/people/filter?search=mike.zanyatski%40example.com`] |
