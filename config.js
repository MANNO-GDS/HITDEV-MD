const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="hitdeveloper2023@gmail.com"
global.location="Port-au-Prince, Haiti."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github=process.env.GITHUB|| "https://github.com/MANNO-GDS/HITDEV-MD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/BNE0V8XpEZK0q4IgJ9jklM";
global.website=process.env.GURL || "https://chat.whatsapp.com/BNE0V8XpEZK0q4IgJ9jklM" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/WgwemmG.jpeg" ; // SET LOGO FOR IMAGE 



global.devs = "923094029835" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923094029835";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923094029835";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923094029835,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://hitdev-qr.onrender.com";


global.SESSION_ID = process.env.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEIrRkVoQ3M0Nys4WWhzM1VrZ0VXSWFDb1piM3FRMG96Rjdtc0RKSFkwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFJvRjhjbGxUYzdUYzd3SHhhTzk1ek05QXNoa0lKcUxCUkE3MHBsSmZVND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTjFFNi92WkZnM0hBSFN1T3NoSndGdzIyeUhVdlQrcXpoWG5aMHcrWTFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCc1VET016S3UyK21nSjBRWjV0QURSTVpramJ4dGtPYjRiM0lWMTkyQ25zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtOa3BIZHN3eUhqNUdnUFdSSlV4VHZIbzhMZ0xCbHRBVGFCeEJXWWdPbE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtEZEthZENvWFptRmM4VzFNS29kS1ZjVlBMQzI3dzBCU01SNEZFM3c0aU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0V0SGliUEx1cjJjdkhwb0N5Q3NmU205N1N1ZG9nWVZYb2RJcUt2U3YxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUlJV3grZEU0NU5QLzZra3hnNzBRRlRIVzkvNVNHYlBFTUJkZGM4Ymt6RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt4VlNyc0IwM0hYTTIxQjBIcVFXZW93aHNMeGt6LzJLbEhrV1JoTWV5bElyVklRM0NEeFl3TERaZzFIYi8vM2hxaitqVWZ1YzVYbmZCbXQwemxPVmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUwLCJhZHZTZWNyZXRLZXkiOiJHc2w2Y0dYcDlNVWxVY21MNU9INW83MWFkVVFKcFRsSlVwNk9keUtvM0I0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQxMjI3MTc3M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5NjRBRDNCMTdCMTE1MEYxMkZFQzI2QTQ2QkZGNUE2OSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2MjM0MTU0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZOEN2S2tBT1FXcTFsNkt2TjEyTld3IiwicGhvbmVJZCI6IjIwNThkNmIwLTYxZTMtNDM3OS05OWUzLWM3YThlMjFiZWZjZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQmUvTDF6QWVnK1I0M3hlQndnUUU2ci9iNWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmZVWVNKTFRsNG8zZDIraXRVYlVpaTRKeVhnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZRUUs2QkJFIiwibWUiOnsiaWQiOiI5MjM0MTIyNzE3NzM6NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGFlNzNnUW12eVF0d1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYjUzUDMvWjVGbkEyZ1g0Uit6WHYzY05QNkZjcHJCNFlQWElyUk9KQjNrWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMkxBUCt4dit3UHVOUFNFTnoxUXZWaWc2SGFzeHEwWDJzUVZrVEY0K09oendGYXJHWklJOG40VDFZOCtSdzRuQjlyV0d5ajQ0UW8xbmxaNi9PVG9lREE9PSIsImRldmljZVNpZ25hdHVyZSI6IjVpc3NJSnJ5bDUxQWUwK3dYVkp6WUZEWWI2dGluMlUxZUdzakprQ3FSRmJDTFhadDEyTkVvSVVGSTA2aFBSTTNmcGs4ZGwrbE4reVlkNDFWdUQ5aWhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDEyMjcxNzczOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVytkejkvMmVSWndOb0YrRWZzMTc5M0RUK2hYS2F3ZUdEMXlLMFRpUWQ1RyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjIzNDE1MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMWEYifQ=="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: HITDEV-MD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0",
  caption : process.env.CAPTION || "『💌 𝙏𝙃𝙀-𝙈𝘼𝙉𝙉𝙊-𝙈𝘿 𝘿𝙀𝙑𝙊𝙇𝙋𝙀𝙍 💌』" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛʜᴇ-ᴍᴀɴɴᴏ-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ʜɪᴛᴅᴇᴠ ᴛᴇᴄʜ』*\n youtube.com/@hitdeveloper0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "💌 𝙏𝙃𝙀-𝙈𝘼𝙉𝙉𝙊-𝙈𝘿💌",
  ownername:process.env.OWNER_NAME|| "𝙈𝘼𝙉𝙉𝙊-𝘽𝙇𝙊𝙐𝘾𝙃",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "HITDEV"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
