# FirebaseDto
The Firebase project a client initialises its SDK with to receive push notifications from this portal.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **apiKey** | **String** | The web API key of the project. Every field of this object is an empty string on an installation that configures no Firebase project, and an empty `projectId` is the cheapest thing to test for before initialising an SDK. None of these values is a secret - they are meant to be embedded in a client. | [required] [example: `AIzaSyDxK9L3j4H8mN2pQ5rS6tU7vW8xY9zA1bC`] [nullable] |
| **authDomain** | **String** | The host the Firebase SDK performs its own authentication against. | [required] [example: `myapp-12345.firebaseapp.com`] [nullable] |
| **projectId** | **String** | The identifier of the Firebase project itself, which ties all the other fields together. | [required] [example: `myapp-12345`] [nullable] |
| **storageBucket** | **String** | The Cloud Storage bucket of the project. The portal does not store portal files there; it is part of the SDK configuration. | [required] [example: `myapp-12345.appspot.com`] [nullable] |
| **messagingSenderId** | **String** | The sender ID that push messages of this project arrive under, which a client checks an incoming message against. | [required] [example: `123456789012`] [nullable] |
| **appId** | **String** | The identifier of the Firebase application registration this client is to use. | [required] [example: `1:123456789012:web:a1b2c3d4e5f6g7h8`] [nullable] |
| **measurementId** | **String** | The Google Analytics measurement ID of the project, empty when the project reports no analytics. | [required] [example: `G-ABCD123456`] [nullable] |
| **databaseURL** | **String** | The Realtime Database endpoint of the project, empty when the project has no such database. | [required] [example: `https://myapp-12345.firebaseio.com`] [nullable] |
