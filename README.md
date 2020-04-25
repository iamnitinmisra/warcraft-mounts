# **LOTR HELPER**

## Dependencies
- axios
- cors
- express
- express-session
- request

# Steps to setup
1. clone the repo
2. at the root of the directory, run npm i
3. create and module.export ./src/setup.js
    - the file should have the following details
```js
module.exports = {
    clientID: 'get this from blizzard',
    clientSecret: 'get this from blizzard',
    redirectURI: 'http://localhost:9000/oauth-callback',
    
    // ports
    clientPort: 3000,
    serverPort: 9000,
}
```  
# Security
## Authorization
- OAUTH 2.0 via Blizzard

# App Features
### Account Wide Mounts

### Character Specific Mounts
- A count of the mounts collected by character

### Upcoming Mount Progress
- Track progress towards earning a mount

### Helper
- Organize a list of activities to be performed before the weekly reset
- based on mounts that have not been collected yet and ease of getting them