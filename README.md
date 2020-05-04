# **LOTR HELPER**

## Dependencies
- axios
- cors
- express
- express-session
- request

## Blizzard Endpoints
- Account Mounts Collection Summary
    - GET /profile/user/wow/collections/mounts

- Mounts Index
    - GET /data/wow/mount/index

- Mount
    - GET /data/wow/mount/{mountId}

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
    - Similar in look to xp bar in wow interface

### Helper
- Player should be able to organize a list of activities to be performed before weekly that resets on a player defined timer
- filter for mounts that have not been collected yet
- sort by ease of getting them
- user can enter how much gold they have to get a list of purchaseable mounts

## Achievements: 
* ID: (Count) Name - Reward Mount
- 2141: (10) Stable Keeper
- 2142: (25) Filling up the Barn
- 2143: (50) Leading the Cavalry - Albino Drake
- 2537: (100) Mountain o' Mounts - Blue/Red Dragonhawk
- 7862: (150) We're Going to Need More Saddles - Jade Pandaren Kite String
- 8302: (200) Mount Parade - Armored Blue/Red Dragon Hawk
- 9599: (250) Mountacular - Felfire Hawk
- 10355: (300) Lord of the Reins - Heavenly Azure Cloud Serpent
- 12931: (350) No Stable Big Enough - Biting Frostshard Core
- 12934: (400) A Horde of Hoofbeats

## Steps to release
- Retrieve and display full WoW Mount List
- Seperate Mounts into purchasable, drops, or rewards
- Retrieve character obtained mount list
- Compare full list to obtained list, green highlight over obtained
- Sort mounts gated by reputation by how close to earning the character is (sorted by drop, reward, rep)
