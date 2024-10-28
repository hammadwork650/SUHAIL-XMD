const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_10_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgODUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2LFxuICAgICAgICA2NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDczLFxuICAgICAgICA3OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDk1LFxuICAgICAgICAyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MixcbiAgICAgICAgMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDcwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU5LFxuICAgICAgICA3NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyLFxuICAgICAgICA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU2LFxuICAgICAgICA3NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiazZQM0NEcmhCeG1ld095WnRhaklDcXdySjhZRVJlYnAxblRyT1h0YTRYcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOVpNSFE0cjRTVy0zNXFwWG1xRUs2UVwiLFxuICBcInBob25lSWRcIjogXCI4ZmMyNGQ1MS02Y2IzLTQ0NWMtYTZlNS01ZGJmYTg5MDMxN2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMyxcbiAgICAgIDE5NCxcbiAgICAgIDY1LFxuICAgICAgMjIwLFxuICAgICAgODQsXG4gICAgICAyMzgsXG4gICAgICA2NCxcbiAgICAgIDg3LFxuICAgICAgMjA4LFxuICAgICAgMTczLFxuICAgICAgMjU0LFxuICAgICAgMjQ0LFxuICAgICAgMzEsXG4gICAgICAyMTMsXG4gICAgICAxNzEsXG4gICAgICAxNTYsXG4gICAgICAxNTIsXG4gICAgICAyNDAsXG4gICAgICAyNTMsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgMjAwLFxuICAgICAgMTE2LFxuICAgICAgMjEzLFxuICAgICAgMTk3LFxuICAgICAgMTA1LFxuICAgICAgMzMsXG4gICAgICAyMzksXG4gICAgICAxODIsXG4gICAgICA3NCxcbiAgICAgIDMsXG4gICAgICA1LFxuICAgICAgOTEsXG4gICAgICA3NixcbiAgICAgIDIwNSxcbiAgICAgIDM0LFxuICAgICAgMTMyLFxuICAgICAgMjQ5LFxuICAgICAgMTg0LFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkFCUVZDTTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzExNTE1MjEwNDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTIxNDU3NTE1ODkwOTc6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUdVcG80RUVNTzUvTGdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaRlRrNVc2R3RnTmVNcEtGQW1DbEV5V2NyZkpYZXZsYWF4TWVNT2hNN3hzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZzL0I3MUx2ODNabzVXdVI5eVJkNEl6QlNZNHZlRzFsblJIbEkwelJGN29VMWZveW1kNmNRNkM4T1c1K00zUndmRE1DTGhBSDQzR2orYmp5WkJiMEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlGdldFY1BmdmVma3BLVklnTDVSa1l2TkNGUlJyRjdhVHBhUzNLT2h0VWwxRjIzeXgvSEswWGl5amRLVms2dGNscCtZb2hZQUJkb0kzNFRaMkRxa2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzExNTE1MjEwNDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAwOTIyMjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLc0hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtzSC5qc29uIjogIntcImtleURhdGFcIjpcImp5WGpzc2FSODRSUXc2Yk1SUGY4SXdDQXp0Y3NTbWhvQzlFU0phei9HT2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEwMzcyNzE1MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzYwMTc3NjkxNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
