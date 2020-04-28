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
3. create file ./src/setup.js
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
- All mounts collected

### Character Specific Mounts (LOTR)
- A count of the collected mounts useable by a single character

### Mount Progress
- Track progress towards earning a specific mount

### Helper
- Player should be able to organize a list of activities to be performed before weekly that resets on a player defined timer
- filter for mounts that have not been collected yet
- sort by ease of getting them
- user can enter how much gold they have to get a list of purchaseable mounts