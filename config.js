//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "astromedia0010@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Astropeda/Asta-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/ZkBjWK2.jpg";
global.devs = "2348039607375";
global.sudo = process.env.SUDO || "2348039607375";
global.owner = process.env.OWNER_NUMBER || "2348039607375";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUhaV1VxcldVaVVIQ1ZoSkpEdEpiY2Y4U2dzM0tvTCtJK0lwQWJNcjgzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2l5LzdJZWRXTlRleUcrRGhEbHZ0ZDNIaHR0VlhhV3hNclVGckFhOC9BZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQ0NzSWkraE45T2NnamlnTHFYMU41ZnpySUZxaGlCb2VEMnhUMEhFTm44PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSQSswUVBFek9GNUExbjkyTlN4VERqZWxmZGgzSjNPUDd5clh0RVdJSFdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1NUjNHQkVSbWZoMDV2YUxsSDBDaU82R0FIa01YYk1GL0Y2WUNaSW1ER3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBGUE14TjVSYlptSFZkdDNqdEVRRUpWbFNpZjRoUEVaaFcveWNna3RJbVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hpVkZRcWdHNmMrMWZaZllkbzZLdUNsdDMwVlJVQzlMOFpUcFVEdXZsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjBidE0yY2dpd281aXV1WG8zbDVsSC9vY25BQlNhN2pCRExlT1BhVjhrTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp5NlhRU25qNEtOWlNJRlpQSjVPWVVSMjYzdHdSbkVOUm5IMFdZVjdlY0FwV01Rc2JRNk81UlErYVFIZy81eHRobXVtWGc0NGhZeDJob0FLYmgwbUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6ImJHYlpRTm5xNi9ZMCtHS1NKMUE2dFJocFpyaXhLSFRTUDJlcTRDNElQaGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InlNZG5COVNsUzM2bHdJZ202eTljWmciLCJwaG9uZUlkIjoiZGU3ZGM3YjMtOTBhZC00NDk2LWEyMWQtNWU1M2Q0M2E0NTcwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1zRnJ2SGtnK0hnZUxOa3hlRlVhTzFjRkFKMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqSGhYUmZUVWJ1UXVpSEZqL3o3eGs2TEJjM2s9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQTJFNDdGOEsiLCJtZSI6eyJpZCI6IjIzNDkwMjc4NjIxMTY6MjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4bSAc+G0m8qA4bSP4bSY4bSH4bSF4bSAIOG0m+G0h+G0gOG0jSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkNwN2ZFQkVLN0pwTEVHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQmwvMjMzRFBXNHM0dUI1YnUwMzJMd3RoemUvYStaZmNVaDBSUGZxYjduMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRmdwbEVyQnNwUzgvN3ZEVkttV1JZK0RCdlR4N3JEM0ROZVlxS081c0szR1FTR3FqV2d6aE1kVXYzeWUra0FzK3FnNlRCcDg4ZE9aaVZsZWxBWlpwQlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImRSaEYwMzFwN1JvV0NYYTk1Tm9FVjMrQzJmSnJlSlBWMFVJNmJIT3g3V0Fvc2RlQkpKSnFIVm1wY212MUFTZm0rUEk5WlRmeWVIZGVFVjNjTm5hR0NnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAyNzg2MjExNjoyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRWmY5dDl3ejF1TE9MZ2VXN3ROOWk4TFljM3Yydm1YM0ZJZEVUMzZtKzU5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzEzOTcyNDExLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpvcSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴀsᴛᴀ ᴍᴅ",
  author: process.env.PACK_AUTHER || "ᴀsᴛᴀ ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ᴀsᴛᴀ ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ᴀsᴛᴀ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
