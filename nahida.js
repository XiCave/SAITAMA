const speed = require('performance-now')
require('./config')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif.js')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const anon = require('./lib/menfess')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { apikey } = require('./apikey.json')
const { color, bgcolor } = require('./lib/color')
const { premium } = require('./lib/premium')
const { uptotelegra } = require('./lib/upload')
const { generateProfilePicture } = require('./lib/myfunc')
const { mediafireDl } = require('./lib/mediafire.js')
const { Primbon } = require('scrape-primbon')
const { Client } = require('whatsapp-web.js');
const db_user = JSON.parse(fs.readFileSync('./database/user.json'))
const primbon = new Primbon()
const hxz = require('hxz-api')
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const ytdl = require("ytdl-core")
const { getPrayerTimes } = require('./times.js')
const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("./database/deposit");
const absenData = {};
const { Configuration, OpenAIApi } = require('openai')
const { sfileSearch } = require('./lib/sfileS')
const { jadibot, conns } = require('./jadibot')
const { exec, spawn, execSync } = require("child_process")
const { smsg, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");

//=====================
// 

//
//=============
function hitungMundurRamadhan() {
    const tanggalRamadhan = moment('2024-05-24', 'YYYY-MM-DD');
    const tanggalHariIni = moment();
    const selisihHari = tanggalRamadhan.diff(tanggalHariIni, 'days');
    let pesan = '';
    if (selisihHari > 0) {
        pesan = `Tinggal ${selisihHari} hari menuju Ramadhan.`;
    } else if (selisihHari === 0) {
        pesan = `Hari ini adalah hari Ramadhan! Selamat menjalankan ibadah puasa.`;
    } else {
        pesan = `Ramadhan sudah berlalu. Semoga ibadah puasamu diterima.`;
    }
    
    return pesan;
}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []

const more = String.fromCharCode(8206)
const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const thumbnail = fs.readFileSync ('./basezio/image/mamak.jpg')
const thumb = fs.readFileSync ('./basezio/image/mamak.jpg')
const kalimage = fs.readFileSync ('./basezio/image/mamak.jpg')
const isPremium = JSON.parse(fs.readFileSync('./database/premium.json'))
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const banned = JSON.parse(fs.readFileSync('./basezio/dbnye/banned.json'))
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix

//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const readmore = more.repeat(4001) 
const { addSaldo, minSaldo, cekSaldo } = require("./database/deposit");
let db_saldo = JSON.parse(fs.readFileSync("./database/saldo.json"));
const pler = JSON.parse(fs.readFileSync('./database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const botNumber = await haikal.decodeJid(haikal.user.id)
const isGroup = from.endsWith('@g.us')
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await haikal.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const isBan = banned.includes(m.sender)
const isUser = pengguna.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
// cek database *2
const prem = JSON.parse(fs.readFileSync(".//database/premium.json"))
const premm = JSON.parse(fs.readFileSync("./database/premiumm.json"))
const isPremium = prem.includes(sender)
const isPremiumm = premm.includes(sender)
const senderNumber = sender.split('@')[0]
const isBot = botNumber.includes(senderNumber)
const isOwner = owner.includes(senderNumber) || isBot
        const qmsg = (quoted.msg || quoted)
//=================================================//}
const cap = 'DAFFZ'
const kalgans = { 
key: {
fromMe: [], 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) 
},

'message': {
	"interactiveMessage": {
						"header": {
						
							"hasMediaAttachment": [],
							"jpegThumbnail": thumb,
													},
						"nativeFlowMessage": {
							"buttons": [
								{
									"name": "review_and_pay",
									"buttonParamsJson": "{\"currency\":\"IDR\",\"external_payment_configurations\":[{\"uri\":\"\",\"type\":\"payment_instruction\",\"payment_instruction\":\"hey ini test\"}],\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":2500000,\"offset\":100},\"reference_id\":\"4MX98934S0D\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":2500000,\"offset\":100},\"items\":[{\"retailer_id\":\"6348642505244872\",\"product_id\":\"6348642505244872\",\"name\":\"DAFFZ DEV\",\"amount\":{\"value\":2500000,\"offset\":100},\"quantity\":1}]}}"
								}
							]
			}
}}}
//======================
//===========================
const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
    charactersLength));
    }
    return result
}
//===========================//
const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}
const https = require('https');
     
try {
ppuser = await haikal.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60]'
}
     const reply = (teks) => {
return haikal.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `S A I T A M A - MD`,"body": `©Always daffz`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/82811457aa4fc6b7ebebe.jpg',"sourceUrl": ``}}}, { quoted:m})} 
     
const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await haikal.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}
//=================================================
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await haikal.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}
//========================
const totalFitur = () =>{
            var mytext = fs.readFileSync("./nahida.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
//=========================
async function loading () {
var hawemod = [ 
"🌑",
"🌘",
"🌗",
"🌖",
"🌕",
"`Nungguin Apa?👨‍🦲👊`"
]
let { key } = await haikal.sendMessage(from, {text: '`👨‍🦲ᴏɴᴇ ᴘᴜɴᴄʜ ᴍᴀɴ👨‍🦲`'})//Pengalih isu

for (let i = 0; i < hawemod.length; i++) {
/*await delay(10)*/
await haikal.sendMessage(from, {text: hawemod[i], edit: key });//PESAN LEPAS
}
}
if (autodelete) {
haikal.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: mek.key.id,
participant: mek.key.participant
}
})
}
//=================================================
/*let reactionMessage = {
                    react: {
                        text: `👁️‍🗨️`,
                        key: { remoteJid: m.chat, fromMe: true, id: mek.key.id }
                    }
                }
                await sleep(1500)
                haikal.sendMessage(m.chat, reactionMessage)*/
//=================================================//
if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgWhite(budy || m.mtype)) + '\n' + chalk.white('=> Dari'), chalk.green(pushname), chalk.green(m.sender) + '\n' + chalk.white('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
if (isCmd && !isUser) {
pengguna.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
}
     // Anti menu
  const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()     
const BadXeon = JSON.parse(fs.readFileSync('./database/bad.json'))   
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));     
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));    
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));     
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));   
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));     
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
      const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
     // Anti Link
if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return m.reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await haikal.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\nOwner telah mengirim link, owner bebas memposting link apa pun`})
await haikal.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
haikal.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:hw})
}
}
//=================
     let cekUser = (satu, dua) => { 
let x1 = false
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return db_user[x1].id }
if (satu == "name"){ return db_user[x1].name }
if (satu == "seri"){ return db_user[x1].seri }
if (satu == "premium"){ return db_user[x1].premium }
}
if (x1 == false) { return null } 
}    
     //================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: haikal.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
haikal.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await haikal.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
//======================
     const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Saitama-MD`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Haikal,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/82811457aa4fc6b7ebebe.jpg' }}}}
//setuser
let setUser = (satu, dua, tiga) => { 
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){
if (satu == "±id"){ db_user[i].id = tiga
fs.writeFileSync('./database/user.json', JSON.stringify(db_user))} 
if (satu == "±name"){ db_user[i].name = tiga 
fs.writeFileSync('./database/user.json', JSON.stringify(db_user))} 
if (satu == "±seri"){ db_user[i].seri = tiga 
fs.writeFileSync('./database/user.json', JSON.stringify(db_user))} 
if (satu == "±premium"){ db_user[i].premium = tiga 
fs.writeFileSync('./database/user.json', JSON.stringify(db_user))}
}})
}
//===========================//
  if (antiWame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
kice = m.sender
        await haikal.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			haikal.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
haikal.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
kice = m.sender
        await haikal.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
haikal.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex  by Fxyz
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(`Saitama bukan admin`)
          await haikal.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			haikal.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			haikal.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
if (antiToxic)
if (BadXeon.includes(messagesD)) {
if (m.text) { 
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await haikal.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
                   })
haikal.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You are using bad word but you are an admin/owner that's why i won't kick you😇`, contextInfo:{mentionedJid:[sender]}}, {quoted:hw})
}
}
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await haikal.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			haikal.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
haikal.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await haikal.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			haikal.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
haikal.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await haikal.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			haikal.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
haikal.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await haikal.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			haikal.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
haikal.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await haikal.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			haikal.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
haikal.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await haikal.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			haikal.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
haikal.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await haikal.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			haikal.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
haikal.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await haikal.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			haikal.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
haikal.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}    

//=========================
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "999999999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

//===============//
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 
//====================================//
if (('family100'+from in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+from]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
 let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
 if (room.terjawab[index]) return !0
 room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
haikal.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+from].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+from]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
 delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, {quoted:m})
 delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted:m})  
 delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await haikal.sendText(room.x, str, m, { mentions: parseMention(str) } )
await haikal.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
haikal.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
haikal.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) haikal.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) haikal.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) haikal.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
haikal.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) haikal.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) haikal.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
haikal.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
const generateRandomPassword = require('./lib/randomPass');
const password = generateRandomPassword(10);
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const isContacts = contacts.includes(sender)
     const cheerio = require('cheerio');
     const TitleZ = 'Ａｌｗａｙｓ Ｄａｆｆｚ';
    const pesanHitungMundur = hitungMundurRamadhan();
 const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}   

 const today = new Date();
        const ramadanStart = new Date(today.getFullYear(), 3, 12); 
        const ramadanEnd = new Date(today.getFullYear(), 4, 13); 
function getWaktuBukaPuasa() {
    return 'Normal Pada 18:30 Wib';
}
     const waktuBukaPuasa = getWaktuBukaPuasa();
function hitungMundurLebaran() {
    // Tanggal Ramadhan tahun ini
    const tanggallebaran = moment('2025-04-13', 'YYYY-MM-DD');
    // Tanggal hari ini
    const tanggallnya = moment();
    
    // Hitung selisih hari antara hari ini dan tanggal Ramadhan
    const gganzm = tanggallebaran.diff(tanggallnya, 'days');
    
    // Membuat pesan balasan
    let meseg = '';
    if (gganzm > 0) {
        meseg = `Tinggal ${gganzm} Hari Lagi Lebaran.`;
    } else if (gganzm === 0) {
        meseg = `Selamat Hari Raya idul Fitri,Mohon Maaf Lahir dan Batin.`;
    } else {
        meseg = `Ramadhan sudah berlalu. Semoga ibadah puasamu diterima.`;
    }
    
    return meseg;
}
         const Llebaran = hitungMundurLebaran();
     const client = new Client();
            const full_args = body.replace(command, '').slice(1).trim()
function loadData() {
    try {
        const data = fs.readFileSync('./data.json');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error loading data:', err);
        // Jika terjadi kesalahan dalam memuat data, kembalikan data default
        return {
            resources: {
                gold: 0,
                diamonds: 0,
                wood: 0,
                stone: 0,
                meat: 0,
                fish: 0,
                iron: 0
            },
            coins: 0,
            inventory: [],
            health: 100
        };
    }
}

let savedData = loadData();
let { resources, coins, inventory, health } = loadData();
     
if (!resources) {
    resources = { gold: 0, diamonds: 0, wood: 0, stone: 0, meat: 0, fish: 0, iron: 0 };
}
if (!inventory) {
    inventory = [];
}
// Harga jual dan beli
const sellPrices = {
    gold: 3,
    diamonds: 50,
    wood: 2,
    stone: 1,
    meat: 5,
    fish: 3,
    iron: 20
};
     const resourceResponse = `**Sumber Daya**
Emas: ${resources.gold}
Berlian: ${resources.diamonds}
Kayu: ${resources.wood}
Batu: ${resources.stone}
Daging: ${resources.meat}
Ikan: ${resources.fish}
Besi: ${resources.iron}`;
function saveData(data) {
    try {
        fs.writeFileSync('data.json', JSON.stringify(data));
    } catch (err) {
        console.error('Error saving data:', err);
    }
}
     // Tuh gw dah tambah rpg bisa tapi  ngak ke sv jadi gw copas dari ryo v2.3 eror jafi gw apus
// ################### //
switch(command) {
    case 'ping':{
        let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
          reply(`${ssd}*Kecepatan* : ${latensi.toFixed(4)} _ms_\n`);
            })
    }
        break
        case 'waktubukapuasa':{
        if (today >= ramadanStart && today <= ramadanEnd) return reply('Belum Ramadhan')
                await reply(`Waktu buka puasa hari ini pukul ${waktuBukaPuasa}`);
        
        }
                break;
      case 'dashboar': {
          await loading()
          let asgare = speed();
         let latern = speed() - asgare;
let dasbor = `
*S E R V E R - I N F O*
• Platform: ${os.platform()}
• Architecture: ${os.arch()}
• CPU Model: ${os.cpus()[0].model}
• Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
• Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB

*B O T - I N F O*
• Mode : *${haikal.public ? 'Public' : 'Self'}*
• Botname : *${botname}*
• Version :  *1.1*
• Total Pengguna Premium : *${owner.length}*
• Total Fiture : *${totalFitur()}*
• Prefix : *.*
• baileys : *@Whiskeysockets*
• ping : *${latern.toFixed(4)} ms*

*M O R E - I N F O*
• Tanggal : ${tanggal}
• Waktu : ${time}

*I S L A M - I N F O*
• Ramadhan : ${pesanHitungMundur}
• Magrib : ${waktuBukaPuasa}
• Lebaran : ${Llebaran}

Ketik .sewabot Untuk Menyewa Bot`
haikal.sendMessage(from, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `D A S H B O A R`,
body: `©Always daffz`,
mediaType: 1,  
thumbnail: dash,
renderLargerThumbnail : true,
thumbnailUrl: ``,
sourceUrl: `https://whatsapp.com/channel/0029VaaNe63ICVfgrH9gzW32`
}}, text: dasbor}, {quoted: m})
} 
        break
    case 'ytplay': case 'play':{
        reply('Wait')
if (!text) return reply("Kirim perintah judul lagu/link youtube nya bwang")
        await loading()
try {
let rus = await yts(text)
if (rus.all.length == "0") return reply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let teks = `*♧ Y O U T U B E - P L A Y*

• Channel : ${res.author.name}
• Duration : ${res.timestamp}
• Url : ${res.url}`


haikal.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true, 
title: `${res.title}`,
body: `©DaffzOfficial`,																													
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: {url: inithumb},text: teks},{quoted: m})                                        
downloadMp3(`${res.url}`) 
} catch (err){
console.log(err)
reply(`Server sedang error`)
}
}
break              
			break       
case 'setmenu':{
await loading()
let setnya = `*=======================*
> ʜᴀʟᴏ ɴᴀᴍᴀ ꜱᴀʏᴀ sᴀɪᴛᴀᴍᴀ-ᴍᴅ ꜱᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ꜱᴇʀʙᴀɢᴜɴᴀ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴅɪ ɢᴜɴᴀᴋᴀɴ ꜱᴇ ʜᴀʀɪ-ʜᴀʀɪ.

*乂  𝙄𝙉𝙁𝙊 - 𝘽𝙊𝙏*

┌ ◦Total Case : ${totalFitur()}
> ◦Mode : ${haikal.public ? '*Public' : 'Self'}
> ◦Version : 1.1
└ ◦Prefix : *.*

*☁ 𝙋𝙄𝙇𝙄𝙃𝘼𝙉 - 𝙈𝙀𝙉𝙐*

┌─[ Change ]
> ◦coming soon 
└─────•

 Example : 
*══─══─══─══─══*
❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕`
haikal.sendMessage(from, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `𝙎𝙀𝙏 - 𝙈𝙀𝙉𝙐`,
body: ``,
mediaType: 1,  
thumbnail: thum,
renderLargerThumbnail : true,
thumbnailUrl: ``,
sourceUrl: `https://whatsapp.com/channel/0029VaaNe63ICVfgrH9gzW32`
}}, text: setnya}, {quoted: m})
}       
break
case 'menu': {
await loading()
let menunya = `*=====================*
> ʜᴀʟᴏ ɴᴀᴍᴀ ꜱᴀʏᴀ sᴀɪᴛᴀᴍᴀ-ᴍᴅ ꜱᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ꜱᴇʀʙᴀɢᴜɴᴀ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴅɪ ɢᴜɴᴀᴋᴀɴ ꜱᴇ ʜᴀʀɪ-ʜᴀʀɪ.

*乂  I N F O - B O T*

> _Mode :_ *${haikal.public ? 'Public' : 'Self'}*
> _Botname :_ *${botname}*
> _Version :_  *1.1*
> _Total Pengguna Premium :_ *${owner.length}*
> _Total Fiture :_ *${totalFitur()}*
> _Prefix :_ *.*

 *☁ 𝙇𝙄𝙎𝙏 - 𝙈𝙀𝙉𝙐*

> ➟ ◦ᴀʟʟᴍᴇɴᴜ 
> ➟ ◦ᴅᴀꜱʜʙᴏᴀʀ
*============*
❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕`
let vidmenuuu = fs.readFileSync('./basezio/video/vidmenuu.mp4')
haikal.sendMessage(m.chat, {        
      react: {
      text: '💛',
      key: m.key,
    }
  })      
     haikal.sendMessage(from, { video: vidmenuuu, gifPlayback: true, caption: menunya, contextInfo:{ externalAdReply: {
         title: 'S A I T A M A - M U L T I - D E V I C E',
body: `©DaffzOfficial`,
thumbnail: thum,
thumbnailUrl: "",
sourceUrl: ``,
mediaType: 1,
renderLargerThumbnail: true 
}}}, { quoted: m })
}
break
              case 'git': case 'gitclone':
if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcxeon(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
   haikal.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(`Eror :/`))
break              
    case 'totalfitur': case 'totalfiture': case 'totalpitur': {
    await loading() // memproses agar tidak delay
          reply (`*Total Fitur Versi Sekarang ini:* ${totalFitur()}`)
    }
        break
    case 'lebaran':{
        reply(`${Llebaran}`)
    }
        break
    case 'pedo':{
        reply('Gausah Sok soan Goblok Kalo Gak bisa buat  😭')
    }
        break
    case 'stopjadibot':{
        reply('Manual Aja donggo Atau lu belum jadibot')
    }
        break
 case "allmenu": {
if (cekUser("id", sender) == null) return haikal.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
     await loading()
let allmenu =`『 𝘼𝙇𝙇 𝙈𝙀𝙉𝙐 』

> ʜᴀʟᴏ ɴᴀᴍᴀ ꜱᴀʏᴀ sᴀɪᴛᴀᴍᴀ-ᴍᴅ ꜱᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ꜱᴇʀʙᴀɢᴜɴᴀ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴅɪ ɢᴜɴᴀᴋᴀɴ ꜱᴇ ʜᴀʀɪ-ʜᴀʀɪ.

Status : ${isCreator ? 'Premium' : 'Free'}
`+readmore+`
┌『 👊𝙊𝙒𝙉𝙀𝙍 』
> ☁ sᴇʟғ
> ☁ ᴘᴜʙʟɪᴄ
> ☁ sᴇᴛᴘᴘʙᴏᴛ
> ☁ ᴘᴘᴘᴀɴᴊᴀɴɢ
> ☁ ʙʟᴏᴄᴋ
> ☁ ᴜɴʙʟᴏᴄᴋ
> ☁ ᴀᴅᴅᴘʀᴇᴍ
> ☁ ᴅᴇʟᴘʀᴇᴍ
> ☁ ʟɪsᴛᴘʀᴇᴍ
> ☁ ʀᴜɴᴛɪᴍᴇ
> ☁ ʜᴀᴘᴜsᴅʙ 
> ☁ ʟɪsᴛᴅʙ
> ☁ ᴘᴇɴɢɢᴜɴᴀ ᴀᴅᴅ 
> ☁ ᴀᴜᴛᴏʀᴇᴀᴅ
> ☁ sᴇᴛᴍᴇɴᴜ
> ☁ ᴘᴇɴɢɢᴜɴᴀ ᴅᴇʟ 
> ☁ ʟɪsᴛʙᴀɴ
└─────────👊

┌『 👊𝙅𝘼𝘿𝙄 𝘽𝙊𝙏 』
> ☁ ᴊᴀᴅɪʙᴏᴛ
> ☁ sᴛᴏᴘᴊᴀᴅɪʙᴏᴛ
> ☁ ʟɪsᴛᴊᴀᴅɪʙᴏᴛ
└─────────👊

┌『 👊𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙉𝙐 』
> ☁ ᴏᴡɴᴇʀ
> ☁ sᴛɪᴄᴋᴇʀ
> ☁ sᴇᴡᴀ
> ☁ ɴᴏᴘᴇ
> ☁ ʟɪsᴘᴀɴᴇʟ
> ☁ ᴛᴜᴛᴏʀɪᴀʟ
> ☁ ᴡᴍ
> ☁ ʜᴅ
> ☁ ᴡᴍᴠɪᴅᴇᴏ
> ☁ ᴇᴍᴏᴊɪᴍɪx
> ☁ ᴇᴍᴏᴊɪᴍɪx𝟸
> ☁ ᴀᴛᴛᴘ (ᴛᴇxᴛɴʏᴀ)
> ☁ ᴛᴛᴘ (ᴛᴇxᴛɴʏᴀ)
> ☁ ᴀғᴋ (ᴛᴇxᴛɴʏᴀ)
> ☁ ǫᴜᴏᴛᴇsᴀɴɪᴍᴇ
> ☁ ғᴀᴋᴛᴀᴜɴɪᴋ
> ☁ ᴋᴀᴛᴀʙɪᴊᴀᴋ
> ☁ ᴘᴀɴᴛᴜɴ
> ☁ ʙᴜᴄɪɴ
> ☁ ᴛᴏɪᴍᴀɢᴇ
> ☁ ᴛᴏᴍᴘ𝟺
> ☁ ᴛᴏᴍᴘ𝟹
> ☁ ᴛᴏᴀᴜᴅ
> ☁ ᴛᴏᴠɴ
> ☁ ᴛᴏᴀᴜᴅɪᴏ
> ☁ ᴛᴏɢɪғ
> ☁ ᴛᴏᴜʀʟ
> ☁ sᴍᴇᴍᴇ
> ☁ ǫᴜᴏᴛᴇs
> ☁ ᴅᴀʀᴋᴊᴏᴋᴇs
> ☁ ᴄᴏᴜᴘʟᴇ
> ☁ ᴄᴏғғᴇ
> ☁ ʀᴇᴍɪɴɪ
> ☁ ɢᴇᴛɴᴀᴍᴇ
> ☁ ɢᴇᴛᴘɪᴄ
> ☁ sᴛᴀʟᴋᴛɪᴋᴛᴏᴋ
> ☁ ɪɴғᴏɢᴇᴍᴘᴀ
> ☁ ʟɪʀɪᴋ
> ☁ ᴄᴇʀᴘᴇɴ
> ☁ ǫᴄ
> ☁ ǫᴄsᴛɪᴄᴋ
> ☁ ᴄᴇʀɪᴛᴀʜᴏʀᴏʀ
> ☁ ᴄᴜᴀᴄᴀ
└─────────👊

┌『 👊𝙄𝙎𝙇𝘼𝙈 』
> ☁ ᴊᴀᴅᴡᴀʟsʜᴏʟᴀᴛ
> ☁ ʀᴀᴍᴀᴅʜᴀɴ
> ☁ ᴋɪsᴀʜɴᴀʙɪ
> ☁ ᴡᴀᴋᴛᴜʙᴜᴋᴀᴘᴜᴀsᴀ
> ☁ ᴀʟǫᴜʀᴀɴᴀᴜᴅɪᴏ
> ☁ ᴀsᴍᴀᴜʟʜᴜsɴᴀ
> ☁ ᴀʟǫᴜʀᴀɴ
> ☁ ʟɪsᴛsᴜʀᴀʜ
└─────────👊

┌『 👊𝙂𝘼𝙈𝙀 』
> ☁ ᴛᴛᴄ
> ☁ ᴅᴇʟᴛᴄ
> ☁ ꜱᴜɪᴛᴘᴠᴘ
> ☁ ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ
> ☁ ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ
> ☁ ᴛᴇʙᴀᴋ ʟɪʀɪᴋ
> ☁ ᴛᴇʙᴀᴋ ᴋᴀʟɪᴍᴀᴛ
> ☁ ᴛᴇʙᴀᴋ ʟᴀɢᴜ
> ☁ ᴛᴇʙᴀᴋ ʟᴏɴᴛᴏɴɢ
> ☁ ꜰᴀᴍɪʟʏ100
> ☁ ᴋᴜɪꜱᴍᴀᴛʜ ɴᴏᴏʙ
> ☁ ᴋᴜɪꜱᴍᴀᴛʜ ᴇᴀꜱʏ
> ☁ ᴋᴜɪꜱᴍᴀᴛʜ ᴍᴇᴅɪᴜᴍ
> ☁ ᴋᴜɪꜱᴍᴀᴛʜ ʜᴀʀᴅ
> ☁ ᴋᴜɪꜱᴍᴀᴛʜ ᴇxᴛʀᴇᴍᴇ
> ☁ ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ
> ☁ ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ2
└─────────👊

┌『 👊𝙁𝙐𝙉 』
> ☁ ᴀɴᴏɴɪᴍᴏᴜꜱ
> ☁ ᴀʀᴛɪɴᴀᴍᴀ 
> ☁ ᴀʀᴛɪᴍɪᴍᴘɪ 
> ☁ ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ 
> ☁ ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ
> ☁ ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ 
> ☁ ʀᴇᴊᴇᴋɪ 
> ☁ ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ 
> ☁ ᴘᴇᴋᴇʀᴊᴀᴀɴ 
> ☁ ᴀʀᴛɪᴛᴀʀᴏᴛ 
> ☁ ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ 
> ☁ ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ 
> ☁ ʜᴀʀɪꜱᴀɴɢᴀʀ 
> ☁ ʜᴀʀɪʙᴀɪᴋ
> ☁ ꜰᴇɴɢꜱʜᴜɪ 
> ☁ ɴᴀɢᴀʜᴀʀɪ 
> ☁ ʜᴀʀɪɴᴀᴀꜱ 
> ☁ ᴡᴇᴛᴏɴ 
> ☁ ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ 
> ☁ ᴀʀᴀʜʀᴇᴊᴇᴋɪ 
> ☁ ꜱɪꜰᴀᴛ 
> ☁ ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ 
> ☁ ᴍᴇᴍᴀɴᴄɪɴɢ 
> ☁ ᴍᴀꜱᴀꜱᴜʙᴜʀ 
> ☁ ᴢᴏᴅɪᴀᴋ
> ☁ ꜱʜɪᴏ 
└─────────👊

┌『 👊𝙏𝙀𝙓𝙏 𝙈𝘼𝙆𝙀𝙍 』
> ☁ ʙʟᴀᴄᴋᴘɪɴᴋ
> ☁ ɴᴇᴏɴ
> ☁ ɢʀᴇᴇɴɴᴇᴏɴ
> ☁ ᴀᴅᴠᴀɴᴄᴇɢʟᴏᴡ
> ☁ ғᴜᴛᴜʀᴇɴᴇᴏɴ
> ☁ sᴀɴᴅᴡʀɪᴛɪɴɢ
> ☁ sᴀɴᴅsᴜᴍᴍᴇʀ
> ☁ sᴀɴᴅᴇɴɢʀᴀᴠᴇᴅ
> ☁ ᴍᴇᴛᴀʟᴅᴀʀᴋ
> ☁ ɴᴇᴏɴʟɪɢʜᴛ
> ☁ ʜᴏʟᴏɢʀᴀᴘʜɪᴄ
> ☁ ᴛᴇxᴛ𝟷𝟿𝟷𝟽
> ☁ ᴍɪɴɪᴏɴ
> ☁ ᴅᴇʟᴜxᴇsɪʟᴠᴇʀ
> ☁ ɴᴇᴡʏᴇᴀʀᴄᴀʀᴅ
> ☁ ʙʟᴏᴏᴅғʀᴏsᴛᴇᴅ
> ☁ ʜᴀʟʟᴏᴡᴇᴇɴ
> ☁ ᴊᴏᴋᴇʀʟᴏɢᴏ
> ☁ ғɪʀᴇᴡᴏʀᴋsᴘᴀʀᴋʟᴇ
> ☁ ɴᴀᴛᴜʀᴇʟᴇᴀᴠᴇs
> ☁ ᴏxɪᴄ
> ☁ sᴛʀᴀᴡʙᴇʀʀʏ
> ☁ ʙᴏx𝟹ᴅ
> ☁ ʀᴏᴀᴅᴡᴀʀɴɪɴɢ
> ☁ ʙʀᴇᴀᴋᴡᴀʟʟ
> ☁ ɪᴄᴇᴄᴏʟᴅ
> ☁ ʟᴜxᴜʀʏ 
> ☁ ᴄʟᴏᴜᴅ
> ☁ sᴜᴍᴍᴇʀsᴀɴᴅ
> ☁ ʜᴏʀʀᴏʀʙʟᴏᴏᴅ
> ☁ ᴛʜᴜɴᴅᴇʀ
└─────────👊

┌『 👊𝙇𝙄𝙎𝙏 𝙈𝙐𝙎𝙄𝙆 』
> sound1
> sound2
> sound3
> sound4
> sound5
> sound6
> sound7
> sound8
> sound9
> sound10
> sound11
> sound12
> sound13
> sound14
> sound15
> sound16
> sound17
> sound18
> sound18
> sound20
> sound21
> sound22
> sound23
> sound24
> sound25
> sound26
> sound27
> sound28
> sound29
> sound30
> sound31
> sound32
> sound33
> sound34
> sound35
> sound36
> sound37
> sound38
> sound39
> sound40
> sound41
> sound42
> sound43
> sound44
> sound45
> sound46
> sound47
> sound48
> sound49
> sound50
> sound51
> sound52
> sound53
> sound54
> sound55
> sound56
> sound57
> sound58
> sound59
> sound60
> sound61
> sound62
> sound63
> sound64
> sound65
> sound66
> sound67
> sound68
> sound69
> sound70
> sound71
> sound72
> sound73
> sound74
> sound75
> sound76
> sound77
> sound78
> sound79
> sound80
> sound81
> sound82
> sound83
> sound84
> sound85
> sound86
> sound87
> sound88
> sound89
> sound90
> sound91
> sound92
> sound93
> sound94
> sound95
> sound96
> sound97
> sound98
> sound99
> sound100
> sound101
> sound102
> sound103
> sound104
> sound105
> sound106
> sound107
> sound108
> sound109
> sound110
> sound111
> sound112
> sound113
> sound114
> sound115
> sound116
> sound117
> sound118
> sound119
> sound120
> sound121
> sound122
> sound123
> sound124
> sound125
> sound126
> sound127
> sound128
> sound129
> sound130
> sound131
> sound132
> sound133
> sound134
> sound135
> sound136
> sound137
> sound138
> sound139
> sound140
> sound141
> sound142
> sound143
> sound144
> sound145
> sound146
> sound147
> sound148
> sound149
> sound150
> sound151
> sound152
> sound153
> sound154
> sound155
> sound156
> sound157
> sound158
> sound159
> sound160
> sound161
└─────────👊

┌『 👊𝘽𝙀𝙍𝙄𝙏𝘼 』
☁ ғᴀᴊᴀʀ
☁ ᴄɴɴ
☁ ʟᴀʏᴀʀᴋᴀᴄᴀ
☁ ᴄɴʙᴄ
☁ ᴛʀɪʙᴜɴ
☁ ɪɴᴅᴏᴢᴏɴᴇ
☁ ᴋᴏᴍᴘᴀs
☁ ᴅᴇᴛɪᴋ
☁ ᴅᴀɪʟʏ
☁ ɪɴᴇᴡs
☁ ᴏᴋᴇᴢᴏɴᴇ
☁ sɪɴᴅᴏ
☁ ᴛᴇᴍᴘᴏ
☁ ᴀɴᴛᴀʀᴀ
☁ ᴋᴏɴᴛᴀɴ
☁ ᴍᴇʀᴅᴇᴋᴀ
☁ ᴊᴀʟᴀɴᴛɪᴋᴜs-ᴍᴇᴍᴇ
└─────────👊

┌『 👊𝙂𝙍𝙊𝙐𝙋 』
☁ ᴡᴇʟᴄᴏᴍᴇ 
☁ ʙᴄɢᴄ 
☁ ᴏᴘᴇɴᴀɪ
☁ ʜɪᴅᴇᴛᴀɢ 
☁ ᴋɪᴄᴋ 
☁ ᴀᴅᴅ 
☁ ᴘʀᴏᴍᴏᴛᴇ 
☁ ᴅᴇᴍᴏᴛᴇ 
☁ sᴇɴᴅʟɪɴᴋɢᴄ 
☁ ᴇᴅɪᴛɢʀᴏᴜᴘ 
☁ ᴇᴅɪᴛɪɴғᴏ 
☁ ᴊᴏɪɴ 
☁ ᴇᴅɪᴛsᴜʙᴊᴇᴋ 
☁ ᴇᴅɪᴛᴅᴇsᴋ 
☁ ᴛᴀɢᴀʟʟ 
☁ ɪɴsᴘᴇᴄᴛ 
☁ ʟɪɴᴋɢʀᴏᴜᴘ
☁ ᴏᴘᴇɴɢʀᴏᴜᴘ
☁ ᴄʟᴏsᴇɢʀᴏᴜᴘ
☁ ʀᴇsᴇᴛʟɪɴᴋɢᴄ
☁ ᴘʀᴏᴍᴏᴛᴇᴀʟʟ
☁ ᴅᴇᴍᴏᴛᴇᴀʟʟ
☁ ʟᴀʀᴀɴɢᴀɴ
☁ ʙᴜᴀᴛsᴡ
☁ ʙᴜᴀᴛsᴡɪᴍᴀɢᴇ
☁ ʙᴜᴀᴛsᴡᴠɪᴅᴇᴏ
☁ sᴡɪɴ
☁ ᴠɴsᴡ
☁ ʙᴜᴀᴛsᴡᴘᴛᴠ
☁ ᴛᴏᴘᴛᴠ
☁ ʙᴜᴀᴛsᴡs
└─────────👊

┌『 𝘼𝘽𝙎𝙀𝙉 𝙂𝘾 』
☁ ᴍᴜʟᴀɪᴀʙsᴇɴ
☁ ᴄᴇᴋᴀʙsᴇɴ
☁ ʜᴀᴘᴜsᴀʙsᴇɴ
└─────────❥

┌『 👊𝙎𝙀𝘼𝙍𝘾𝙃 𝙈𝙀𝙉𝙐 』
☁ ɢᴏᴏɢʟᴇ
☁ sғɪʟᴇ
☁ ᴘɪɴᴛᴇsᴇʀᴛ
☁ ᴘʟᴀʏ
☁ ʏᴛsᴇᴀʀᴄʜ
└─────────👊

┌『 👊𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 』
☁ ᴀɴᴛɪʟɪɴᴋɢᴄ 
☁ ᴀɴᴛɪᴘʀᴏᴍᴏsɪ 
☁ ᴀɴᴛɪᴡᴀᴍᴇ  
☁ ᴀɴᴛɪʟɪɴᴋᴀʟʟ  
☁ ᴀɴᴛɪʟɪɴᴋᴛɪᴋᴛᴏᴋ  
☁ ᴀɴᴛɪʟɪɴᴋғʙ  
☁ ᴀɴᴛɪʟɪɴᴋᴛᴡɪᴛᴛᴇʀ  
☁ ᴀɴᴛɪʟɪɴᴋɪɢ  
☁ ᴀɴᴛɪʟɪɴᴋᴛɢ  
☁ ᴀɴᴛɪʟɪɴᴋʏᴛᴠɪᴅ  
☁ ᴀɴᴛɪʟɪɴᴋʏᴛᴄʜ  
☁ ᴀɴᴛɪᴠɪʀᴜs  
☁ ᴀɴᴛɪᴛᴏxɪᴄ  
☁ ᴀɴᴛɪᴡᴀᴍᴇ  
└─────────👊

┌『 👊𝙎𝙀𝙒𝘼𝘽𝙊𝙏 』
☁ ᴀᴅᴅsᴇᴡᴀ
☁ ᴅᴇʟsᴇᴡᴀ
☁ sᴇᴡᴀ
☁ sᴇᴡᴀʙᴏᴛ
└─────────👊

┌『 👊𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 』
☁ ғʙᴠɪᴅᴇᴏ 
☁ ᴍᴇᴅɪᴀғɪʀᴇ
☁ ғʙʀᴇᴇʟs 
☁ ɪɢᴠɪᴅᴇᴏ
☁ ɢɪᴛᴄʟᴏɴᴇ
☁ ɪɢʀᴇᴇʟs 
☁ ᴛᴡɪᴛᴠɪᴅᴇᴏ
☁ ᴛɪᴋᴛᴏᴋᴍᴘ𝟹
☁ ᴛɪᴋᴛᴏᴋᴠɪᴅᴇᴏ 
☁ ʏᴛᴍᴘ𝟹
☁ ʏᴛᴍᴘ𝟺 
☁ ʏᴛʀᴇᴇʟs
☁ ɢᴇᴛᴍᴜsɪᴄ 
☁ ɢᴇᴛᴠɪᴅᴇᴏ 
└─────────👊`
haikal.sendMessage(from, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `S A I T A M A - M U L T I - D E V I C E`,
body: `©DaffzOfficial`,
mediaType: 1,  
thumbnail: thum,
renderLargerThumbnail : true,
thumbnailUrl: ``,
sourceUrl: ``
}}, text: allmenu}, {quoted: m})
} 
break       
case 'credits' : case 'credit' : case 'kredit' : case 'kredits' :
m.reply(`𝐃𝐚𝐟𝐟𝐳𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥
SaY0uofficial
sᴀɪᴛᴀᴍᴀ-ᴍᴅ ( title < Wajib > )
Denz edt 
ᴅᴀғғᴢᴏғғɪᴄɪᴀʟ ( codding )
Taaofc
Hw Mods Wa ( base )
RiooOfficial
AlwaysAqioo ( plugins file )
RafatharOfficial
BEEXZY OFFC
Kirbotz ( base )
Riunzx ( supporter )
Subscriber ( Supporter )

Support by: 𝐃𝐚𝐟𝐟𝐳𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥

buy sc pm me +${owner}`)
break
case "jadibot": {
if (!isOwner) return reply('Khusus Owner')
if (m.isGroup) return reply("Maaf Kak Fitur Ini Hanya Bisa Di Gunakan Di Pribadi Chat")
await jadibot(haikal, fkontak, from)
}
break     
            case 'listjadibot': 
try {
let user = [... new Set([...global.conns.filter(danzz => danzz.user).map(danzz => danzz.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
y = await haikal.decodeJid(i.id)
te += " • User : @" + y.split("@")[0] + "\n"
te += " • Name : " + i.name + "\n\n"
}
haikal.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`Belum Ada User Yang Jadibot`)
}
break    
//===========================//
              case 'antilinkall': {
if (!isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot harus jadi Admin`)
if (!isAdmins && !isOwner) return reply(`Khusus admin & Owner gue`)
if (args[0] === "on") {
if (AntiLinkTwitter) return reply('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
reply('Success in turning on all antilink in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return reply('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
reply('Success in turning off all antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break      
case "sfile": {
	if (text.match(/(https:\/\/sfile.mobi\/)/gi)) {
		let res = await sfileDl(text)
		if (!res) throw 'Error :/'
		await m.reply(Object.keys(res).map(v => `*• ${v.capitalize()}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
		haikal.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype: res.mimetype }, { quoted: m })
	} else if (text) {
		let [query, page] = text.split`|`
		let res = await sfileSearch(query, page)
		if (!res.length) throw `Query "${text}" not found :/`
		res = res.map((v) => `*Title:* ${v.title}\n*Size:* ${v.size}\n*Link:* ${v.link}`).join`\n\n`
		m.reply(res)
	} else throw 'nama file nya goblok'
}
break
    case 'mediafire' : case 'mf': {
	if (args.length == 0) return reply(`Link Nya Nama?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`Link nya Error Gan`)
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 1000) return reply('Ups,Ini terlalu besar Kawan..')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
haikal.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
    case 'sc': case 'script': case 'sources': {
reply('Bot Masih Mode *Perkembangan* Belum 100% Dan belum di rilis oleh Yt DaffzOfficial Silahkan subscribe biar ga ke tinggalan Silahkan ketik command .credits untuk menampilkan credits dan .donasi untuk donasi.')
}
break
case 'antitoxic': {
if (!isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot harus jadi Admin`)
if (!isAdmins && !isOwner) return reply(`Khusus admin & Owner gue`)
if (args[0] === "on") {
if (antiToxic) return reply('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
reply('Success in turning on antitoxic in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return reply('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
reply('Success in turning off antitoxic in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break            
case 'shutdown':
if (!isOwner) return reply(`buat owner bego`)
reply(`Dadah ...`)
await sleep(3000)
process.exit()
break   
// 
   //  
        // anti menuu
case 'antiwame': {
if (!isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot harus jadi Admin`)
if (!isAdmins && !isOwner) return reply(`Khusus admin & Owner gue`)
if (args[0] === "on") {
if (antiWame) return reply('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
reply('Success in turning on antiwame in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return reply('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
reply('Success in turning off antiwame in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break     
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
if (!isAdmins && !isOwner) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return reply('Already activated')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
reply('Success in turning on youtube video antilink in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return reply('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
reply('Success in turning off youtube video antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
    case 'buysewa':{
        reply(`Silahkan Hubungi Nomor Di Bawah
https://wa.me/${owner}?text=Bang+Mau+Sewa+Bot+Berapaan?`)
    }
        break
        case 'addsewa':
if (cekUser("id", sender) == null) return haikal.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(`Hanya Di Group Bodoh`)
pler.push(m.chat)
fs.writeFileSync('./database/sewa.json', JSON.stringify(pler))
reply(`${command} Sukses Menambahkan Ke List Sewa✅`)
           break    
      case 'delsewa':
if (cekUser("id", sender) == null) return haikal.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(`Hanya Di Group Bodoh`)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(pler))
reply(`${command} Sukses Menghapus Dari List Sewa✅`)
break       
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
if (!isAdmins && !isOwner) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return reply('Already activated')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
reply('Success in turning on youtube channel antilink in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return reply('Already deactivated')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
reply('Success in turning off youtube channel antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
    case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
if (!isAdmins && !isOwner) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkFacebook) return reply('Already activated')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
reply('Success in turning on facebook antilink in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return reply('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
reply('Success in turning off facebook antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
if (!isAdmins && !isOwner) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkTelegram) return reply('Already activated')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
reply('Success in turning on telegram antilink in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return reply('Already deactivated')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
reply('Success in turning off telegram antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
if (!isAdmins && !isOwner) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkTiktok) return reply('Already activated')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
reply('Success in turning on tiktok antilink in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return reply('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
reply('Success in turning off tiktok antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
if (!isAdmins && !isOwner) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkTwitter) return reply('Already activated')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
reply('Success in turning on twitter antilink in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return reply('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
reply('Success in turning off twitter antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break  
 case 'kalkulator':{
	let text199 = `
┌──────────⳹   
│ • ᴛᴀᴍʙᴀʜ👨‍🦲
│ • ᴋᴀʟɪ👨‍🦲
│ • ʙᴀɢɪ👨‍🦲
│ • ᴋᴜʀᴀɴɢ👨‍🦲
└──────────⳹`
haikal.sendMessage(from, {text: text199}, {quoted: m})
}
break
case prefix+'tambah':{
if (!q) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`${nilai_one + nilai_two}`)
}
break
case prefix+'kurang':{
if (!q) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`yaitu ${nilai_one - nilai_two}`)
}
break
case prefix+'kali':{
if (!q) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`yaitu ${nilai_one * nilai_two}`)
}
break
case prefix+'bagi':{
if (!q) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`yaitu ${nilai_one / nilai_two}`)
}
break       
 case 'menfes': case 'confess':
if (Object.values(anon.anonymous).find(p => p.check(sender))) return reply("lu Masih di room")
if (m.isGroup) return reply(`private`)
if (args.length < 1) return reply(`Use ${prefix+command} number|your message\nExample ${prefix+command} ${owner}|Hi Owner`)
if (text > 700) return reply(`Panjang banget..`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
pesan = q.split('|')[1]
let cekno = await haikal.onWhatsApp(num)
if (cekno.length == 0) return reply(`Masukan nomor yg terdaftar di Whatsapp`)
if (num === m.sender) return reply(`Ayok langsung chat gw, gw owner nya +${owner}`)
if (num === botNumber) return reply(`Mau ${command} ke gw 🗿`)
var nomor = m.sender

const vaniconfesmsg = `Uy ada Orang asing ${command} Mu !



-------------------------------------->

Subject : Assalamualaikum
Pesan: ${pesan}

-------------------------------------->`

await haikal.sendMessage(num,
{ text: vaniconfesmsg,
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${botname}`,
"body": `${owner}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ``,
"sourceUrl": `${gr}`}}}, {quoted:m})

await haikal.sendMessage(num, {text:`You can also reply to the message by sending a message, if you don't want to reply, please type .leave and enter send button`}, { quoted : m })
lidt = `Success Sending Message
👤 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}
👥 Ke : wa.me/${q.split("|")[0].replace(/[^0-9]/g, '')}

•──•─────────•──•

Pesan Kamu : ${pesan}

•──•─────────•──•`
var check = Object.values(haikal.anonymous).find(p => p.state == "MENUNGGU...")
if (!check) {
haikal.createRoom(sender, num)
return reply(lidt)
}
break       
case 'pin': case 'pintesert': {
if (!text) return reply(`Salah Bukan gitu tapi .pin Paimon`)
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
case 'mulaiabsen': {
if (!isGroup) return reply('Hanya Di Group')
    const chatId = m.chat; 
    const userId = m.sender;

    
    if (absenData[chatId]) {
        throw 'Absen sudah dimulai di obrolan ini!';
    }

   
    absenData[chatId] = {
        admin: userId, 
        participants: [], 
    };

    
    m.reply('Absen telah dimulai! Gunakan perintah *.absen* untuk bergabung dalam absen ini.');
}
break;


case 'absen': {
if (!isGroup) return reply('Hanya Di Group')
    const chatId = m.chat; 
    const userId = m.sender; 

   
    if (!absenData[chatId]) {
        throw 'Tidak ada proses absen yang sedang berlangsung di obrolan ini!';
    }
    absenData[chatId].participants.push(userId);

    m.reply('Anda telah berhasil bergabung dalam proses absen!');
}
break;

case 'cekabsen': {
if (!isGroup) return reply('Hanya Di Group')
    const chatId = m.chat; 
    if (!absenData[chatId]) {
        throw 'Tidak ada proses absen yang sedang berlangsung di obrolan ini!';
    }

    
    const participants = absenData[chatId].participants;

    m.reply(`Daftar peserta absen:\n${participants.join(', ')}`);
}
break;

case 'hapusabsen': {
if (!isGroup) return reply('Hanya Di Group')
    const chatId = m.chat;
    if (absenData[chatId] && absenData[chatId].admin === m.sender) {
      
        delete absenData[chatId];
        
        m.reply('Proses absen telah dihapus!');
    } else {
        throw 'Anda tidak memiliki izin untuk menghapus proses absen!';
    }
}
break    
//================================================//
case "anonimous": case "anonymous": {
reply(`---------------------->
confess
menfes`)
}
break
//=================================================/
case "createqr": {
const qrcode = require('qrcode')
if (!text) return reply(`Penggunaan Salah Harusnya ${prefix+command} Beyzoofc`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
haikal.sendMessage(from, { image: data, caption: `Sukses Kak` }, { quoted: kalgans })
}
break
case "detectqr": {
try {
mee = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
reply(util.format(data[0]))
} catch (err) {
reply(`Reply Image Yang Ada Qr Nya`)
}
}
break
case 'bcvideo': case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if (!isOwner) return reply(`Khusus Daffz Aja`)
        if (!q) return reply(`*Enter Text*`)
        let getGroups = await haikal.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        reply(`\`\`\`Broadcasting in\`\`\` *${xeoncast.length}* \`\`\`Group Chat, in\`\`\` *${xeoncast.length * 1.5} seconds*`)
        for (let i of xeoncast) {
let txt = `*${global.ownerName}'s Broadcast*\n\n\`\`\`Message :\`\`\` *${q}*`
if(/image/.test(mime)) {
let media = await quoted.download()
await haikal.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await haikal.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        reply(`\`\`\`Successfuly Broadcasted in\`\`\` *${xeoncast.length} Groups*`)      
        break        
//=================================================//
case 'public': {
if (!isCreator) return m.reply('*khusus Premium*') 
haikal.public = true
m.reply('Sukse Change To Public')
}
break
//=================================================//
case 'self': {
if (!isCreator) return m.reply('*khusus Premium*') 
haikal.public = false
m.reply('Sukses Change To Self')
}
break
//=================================================//
case 'listpremium': case 'listprem': {
teks = '*Premium List*\n\n'
for (let haikal of prem) {
teks += `- ${haikal}\n`
}
teks += `\n*Total : ${prem.length}*`
haikal.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
}
    break
case 'addprem':{
if (!isOwner) return m.reply('khusus owner')
if (!args[0]) return reply(`Penggunaan ${prefix+command} Penggunaan :\n*.addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : .addprem @tag 30d`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await haikal.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{
if (!isOwner) return reply(`Hanya Untuk Owner`)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
/*=================================================
[ Proses ]
=================================================*/
case 'pengguna':  {
if (!isCreator) return m.reply('*khusus Premium*')
if (!args[0]) return reply(`*Contoh : ${command} add 6281214281312*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return reply('*Pengguna Ini telah Di Ban*')
banned.push(orgnye)
reply(`Succes ban Pengguna Ini`)
} else if (args[0] === "del") {
if (!isBane) return reply('*Pengguna Ini Telah Di hapus Dari Ban*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
reply(`*Berhasil Menghapus Pengguna yang Di Ban*`)
} else {
reply("Error")
}
}
break
case 'listban':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 teksooop = `*List Ban*\n\n`
for (let ii of banned) {
teksooop += `- ${ii}\n`
}
reply(teksooop)
break
case 'owner': case 'crator':{
 haikal.sendContact(from, global.owner, m)
}
break
//=================================================

//================================================
        // MALASSS
 case 'daftar':{
 if (cekUser("id", sender) !== null) return reply('Kamu sudah terdaftar !!')
var res_us = `${makeid(10)}`
var user_name = `${makeid(5)}`
let object_user = {"id": sender, "name": user_name, "seri": res_us, "premium": false }
db_user.push(object_user)
fs.writeFileSync('./database/user.json', JSON.stringify(db_user, 2, null))
var verifikasisukses =`
「 Info User 」

› ID : @${sender.split('@')[0]}
› Name : ${pushname}
› Seri : ${res_us}

⇒ Status : ${isCreator ? 'Premium' : 'Free'}
⇒ Waktu : ${time}
⇒ Tanggal Mendaftar : ${tanggal}
*══─══─══─══─═══─══*
Untuk Melanjutkan 
Silahkan Ketik .menu
`
haikal.sendMessage(from, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `D A F T A R - S U K S E S`,
body: `©DaffzOfficial`,
mediaType: 1,  
thumbnail: verifsukses,
renderLargerThumbnail : true,
thumbnailUrl: ``,
sourceUrl: ``
}}, text: verifikasisukses}, {quoted: m})
}
        break        
//=================================================
case 'openai':
if (!isCreator) return m.reply('*khusus Premium*') 
await loading()
 try {
if (global.keyopenai === '') return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file config.js\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${comand} Apa itu coding`)
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: text,
temperature: 0, // Nilai yang lebih tinggi berarti model akan mengambil lebih banyak risiko.
max_tokens: 2048, // Jumlah maksimum token yang dihasilkan dalam penyelesaian. Sebagian besar model memiliki panjang konteks 2048 token (kecuali untuk model terbaru, yang mendukung 4096).
top_p: 1, // alternatif untuk pengambilan sampel dengan suhu, disebut pengambilan sampel nukleus
frequency_penalty: 0.3, // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan frekuensi yang ada dalam teks sejauh ini, mengurangi kemungkinan model untuk mengulang baris yang sama kata demi kata.
presence_penalty: 0 // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan apakah mereka muncul dalam teks sejauh ini, meningkatkan kemungkinan model untuk membicarakan topik baru.
});
reply(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
reply("Maaf, sepertinya ada yang error :"+ error.message);
}
}
break
case 'closegroup': {
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!args[0]) return setReply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
setReply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
ehz.groupSettingUpdate(from, 'announcement')
setReply(`Waktu Telah Tiba!\nGrup Ditutup Oleh Bot Dikarenakan Tidak Ada Yg Menjaga Grup🙏\nGrup Akan Dibuka Sesuai Waktu Yg Ditentukan Oleh Admin`)
}, timer)
}
break
case 'opengroup': {
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!args[0]) return setReply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
setReply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
haikal.groupSettingUpdate(from, 'not_announcement')
setReply(`Tepat Waktu Group Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan`)
}, timer)
}
break
//=================================================//
case 'linkgroup': case 'linkgc': {
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await loading()
let response = await haikal.groupInviteCode(from)
haikal.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'resetlinkgc':
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await loading()
haikal.groupRevokeInvite(from)
break
//=================================================//
case 'sendlinkgc': {
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await loading()
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await haikal.groupInviteCode(from)
haikal.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })

}
break
//=================================================//
case 'kick': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'remove')
}
break
//=================================================//
case 'add': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'add')
}
break
//=================================================//
case 'promote': {
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'promote')
}
break
//=================================================//
case 'demote': {
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [botNumber], 'demote')
}
break
//=================================================//
case 'hidetag': {
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
await loading()
haikal.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
//=================================================//
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':
case 'attp':
if (isBan) return m.reply('*Lu Di Ban Owner*')
await loading()
if (args.length == 0) return reply(`Example: ${prefix + command} Znxn Xyz`)
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`)
haikal.sendMessage(from, { sticker : ini_buffer }, { quoted:m })
break
//=================================================
case 'editgroup': {   
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
if (args[0] === 'close'){
await haikal.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await haikal.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
haikal.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Group Open
Group Close`}, {quoted:m}) 
 }
}
break
//=================================================//
case 'editinfo': {
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
 if (args[0] === 'open'){
await haikal.groupSettingUpdate(from, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await haikal.groupSettingUpdate(from, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Editinfo Open
Editinfo Close`}, {quoted:m}) 

}
}
break
//=================================================//
case 'join': {
if (!isCreator) return m.reply('*khusus Premium*')
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
await haikal.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'editsubjek': {
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text nya ?'
await loading()
await haikal.groupUpdateSubject(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'editdesk':{
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text Nya ?'
await loading()
await haikal.groupUpdateDescription(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'tagall': {
if (!m.isGroup) return
await loading()
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
//=================================================//
case'demoteall':
if (!isCreator) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.groupParticipantsUpdate(from, mems, 'demote')
break
//=================================================//
case'promoteall':
if (!isCreator) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.groupParticipantsUpdate(from, mems, 'promote')
break
//=================================================//
case 'tutorial': {
await loading()
 m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
Tutorial Run Via Panel
https://youtu.be/Z3E3wrtAELI?si=wb2UqBKsJ7YI04vd`)
}
break
//=================================================//
case 'sewa':
if (isBan) return m.reply('*Lu Di Ban Owner*')
await loading()
m.reply(`¥ *Price Sewa Bot Saitama* €

🔏 3 hari = 10k
🔏 1 minggu = 15k
🔏 2 minggu = 25k
🔏 1 bulan = 40k

Untuk Melanjutkan Sewa Silahkan Ketik Contoh Di bawah
*Contoh => sewabot 1 minggu`)
break
//=================================================//
case 'sewabot':
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!isPremium) return reply('Lu Gada Izin Premium')
if (!text) return m.reply(`*Contoh* :\n#sewabot 1 minggu `)
await loading()
let cret = await haikal.groupCreate(args.join(" "), [])
let response = await haikal.groupInviteCode(cret.id)
haikal.sendMessage(m.chat, { text: `「 *Create Group Sewa* 」

Sewa Bot Selama *${text}* Sedang Dalam Prosess Silahkan Masuk Melalui Link Group Yang Sudah Di Sediakan..

_▸ Owner : ${botname}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}
`, m})
m.reply('pesan dan link group khusus sudah terkirim di chat privasi anda')
break
// ======= //

//=================================================//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
    await loading()
           if (/image/.test(mime)) {
           m.reply('wait')
                let media = await haikal.downloadMediaMessage(qmsg)
                let encmedia = await haikal.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            m.reply('wait')
                if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await haikal.downloadMediaMessage(qmsg)
                let encmedia = await      haikal.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                }
            }
            break
//=================================================//
case 'inspect': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
await loading()
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
haikal.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

©By ${botname}`
try {
pp = await haikal.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
haikal.sendFile(from, pp, "", m, { caption: tekse, mentions: await haikal.parseMention(tekse) })

})
}
break
//=================================================
case "welcome":
{
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
await loading()
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
}
}
break
//=================================================
case 'bcgc': case 'bcgroup': {
if (!isCreator) return m.reply('*Khusus Premium*')
await loading()
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
haikal.sendMessage(i, {text: `${text}`}, {quoted:m})
    }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
//=================================================//
case 'antilinkgc': {
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
//=================================================
case "antitoxic":
{
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Saitama Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcmm) return m.reply('Sudah Aktif')
wlcmm.push(from)
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `Fitur Anti Toxic Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcmm) return m.reply('Sudah Non Aktif')
let off = wlcmm.indexOf(from)
wlcmm.splice(off, 1)
m.reply('Sukses Mematikan Anti Toxic  di group ini')
}
}
break
//=================================================
case 'larangan': case 'peraturan': case "rules": {
haikal.sendMessage(from, { text : `
RULES FOR USE SAITAMA-MULTI DEVICE

• NO SPAM
• NO BUG BOT
• NO MAKE BOT DEATH
• NO ADD TO YOUR GROUP ( WITHOUT PREMISSION )
• NOT TRY HARAM COMMAND
• NOT ANGRY TO OWNER IF BOT ERROR
MORE...
===============================
VERSION : 1.0 || MADE BY DAFFZ OFFICIAL
===============================`
, mentions: participants.map(a => a.id)}, {quoted:m})
}
break
//=================================================//
case 'fuck': case 'ajg': case 'ngentod': case 'bangsat': case'anjing': case'babi': case'kontol': case'memek': case'penis': case 'ngewe': case 'yatim': case 'piatu': case 'pentil': case 'pepek': case 'tempi': case 'tempe': case 'bajingan': case 'ndasmu':{
if (!welcmm) return
if (!isBotAdmins) return m.reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
if (!m.isGroup) return m.reply('Jangan Toxic Coy Kalau Di group Dah Ku Kick Anjay')
if (isAdmins) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nAdmin sudah Toxic, admin bebas Toxic apapun`})
if (isCreator) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\Owner telah Toxic, owner bebas Toxic apa pun`})
await haikal.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
haikal.sendMessage(from, {text:`\`\`\`「 Kata Kata Toxic Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan toxic di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:hw})
}
break
//=================================================//
case 'yts': case 'ytsearch': {
if (!isCreator) return m.reply('*khusus Premium*')
if (!text) throw `Example : ${prefix + command} story wa anime`
let search = await yts(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
haikal.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
//=================================================
case 'ytmp3': case 'youtubemp3': {
if (!isCreator) return m.reply('*khusus Premium*')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
await loading ()
downloadMp3(text)
}
break
//=================================================
case 'ytmp4': case 'youtubemp4': {
if (!isCreator) return m.reply('*khusus Premium*')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let { ytv } = require('./lib/y2mate')
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
haikal.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP4\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
//=================================================
case 'getmusic': {
if (!isCreator) return m.reply('*khusus Premium*')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
await loading ()
downloadMp3(urls[text - 1])
}
break
//=================================================
case 'getvideo': {
if (!isCreator) return m.reply('*khusus Premium*')
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
haikal.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
//=================================================
case "ytreels": case "youtubereels":{
if (!isCreator) return m.reply('*khusus Premium*')
if (!text) return m.reply('Masukan Link Nya!!!')
await loading ()
downloadMp4(text)
}
break
//=================================================
case 'tiktokvideo': case 'tiktok':{
if (!isCreator) return m.reply('*khusus Premium*')
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
await loading ()
require('./lib/tiktok').Tiktok(q).then( data => {
haikal.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
}
break
//=================================================
case 'tiktokmp3':
case 'tiktokaudio':{
if (!isCreator) return m.reply('*khusus Premium*')
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
await loading ()
require('./lib/tiktok').Tiktok(q).then( data => {
haikal.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
//=================================================
case 'igvideo': case 'igreels':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/tv/CXwPLSIFDW0/?igshid=NTc4MTIwNjQ2YQ==`)
			await loading()
			axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				haikal.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4', caption : `silahkan ketik tovn atau to audio untuk merubah nya menjadi audio / vn`})
			})
			break
		
		case 'fbvideo':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
			await loading()
			axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				haikal.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4', caption : `silahkan ketik tovn atau to audio untuk merubah nya menjadi audio / vn` })
			})
			break
			
			case 'twitvideo':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
			axios.get(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				haikal.sendMessage(from, { video: { url: data.result.link[data.result.link.length - 1].link }, mimetype: 'video/mp4' })
			})
			break
//=================================================//
case 'wm': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
let teks = `${text}`
{
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(from, media, m, { packname: `${teks}`, author: `${botname}` })
await fs.unlinkSync(encmedia)
}
}
}
break
//=================================================//
case 'wmvideo':{
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
let teks = `${text}`
{
 if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
if (/video/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(from, media, m, { packname: `${teks}`, author: `${botname}` })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
}
break
//=================================================//
// Textprome //
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
	if (args.length == 0) return reply(`Example: ${prefix + command} Nahida-MD`)
	await loading()
	haikal.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${command}` } })
	break
//=================================================//
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 haikalgans = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await haikal.sendMessage(from, { audio: haikalgans, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6285601059864',
title: `Saitama-MD`,
sourceUrl: `https://wa.me/6285601059864`, 
thumbnail: thumb
}
}})
break
//=================================================//
case 'gambar': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted:m})
}
break
//=================================================//
case 'art':
case 'awoo':
case 'bts':
case 'cogan':
case 'elaina':
case 'exo':
case 'elf':
case 'estetic':
case 'kanna':
case 'loli':
case 'waifu':
case 'shota':
case 'husbu':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
case 'quotesimage':
await loading()
haikal.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}` } })
break
//=================================================//
case 'neko' :
m.reply('*Fitur ini sengaja eror karena anda akan dapat dosa dan pemilik bot juga*')
        break
//=================================================//
        
//==============//
case 'waifu' :
m.reply(`ups di gagal in ama ziyo`)
break
//=================================================//
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
haikal.sendImage(from, data.url, 'Success Coy', m)
})
break
//=================================================//
case 'fajar':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'cnn':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'tribun':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'indozone':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'kompas':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'detik':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'daily':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'inews':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'sindo':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'antara':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "kontan":
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "merdeka":
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "jalantikus":
await loading()
var reis = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${reis}`
teks += ""
haikal.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break
//=================================================
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
await loading()
var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
reply(data.result)
break
//=================================================
case 'listsurah':
await loading()
axios
.get(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
.then(({ data }) => {
var text = 'List Surah:\n'
for (var x in data.result) {
text += `${x}. ${data.result[x]}\n`
}
reply(text)
})
.catch(console.error)
break
//=================================================
case 'alquran':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
axios
.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var ayat = data.result.ayat
var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
}
text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
reply(text)
})
.catch(console.error)
break
//=================================================
case 'alquranaudio':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
haikal.sendMessage(from, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${apikey}` }, mimetype: 'audio/mp4' })
break
//=================================================
case 'asmaulhusna':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
axios
.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
.then(({ data }) => {
var text = `No : ${data.result.index}\n`
text += `Latin: ${data.result.latin}\n`
text += `Arab : ${data.result.ar}\n`
text += `Indonesia : ${data.result.id}\n`
text += `English : ${data.result.en}`
reply(text)
})
.catch(console.error)
break
//=================================================
case 'kisahnabi':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
axios
.get(`https://api.lolhuman.xyz/api/kisahnabi/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var text = `Name : ${data.result.name}\n`
text += `Lahir : ${data.result.thn_kelahiran}\n`
text += `Umur : ${data.result.age}\n`
text += `Tempat : ${data.result.place}\n`
text += `Story : \n${data.result.story}`
reply(text)
})
.catch(console.error)
break

//=================================================
case 'smeme':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Balas Image Dengan Caption ${prefix + command}`
if (!quoted) throw `Balas Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
m.reply('*Sabar Cuy Loading*')
mee = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
haikal.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
}
break
//=================================================
case 'toimage': case 'toimg': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (!quoted) throw `Balas sticker video Dengan Caption ${prefix + command}`
if (/video/.test(mime)) {
let { webp2mp4File } = require('./lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, {quoted:m})
await fs.unlinkSync(media)
}
}
break
case 'jadwalsholat':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
axios
.get(`https://api.lolhuman.xyz/api/sholat/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var text = `Wilayah : ${data.result.wilayah}\n`
text += `Tanggal : ${data.result.tanggal}\n`
text += `Sahur : ${data.result.sahur}\n`
text += `Imsak : ${data.result.imsak}\n`
text += `Subuh : ${data.result.subuh}\n`
text += `Terbit : ${data.result.terbit}\n`
text += `Dhuha : ${data.result.dhuha}\n`
text += `Dzuhur : ${data.result.dzuhur}\n`
text += `Ashar : ${data.result.ashar}\n`
text += `Maghrib : ${data.result.imsak}\n`
text += `Isya : ${data.result.isya}`
reply(text)
})
.catch(console.error)
break        
case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
await loading()
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await haikal.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${haikal.user.name}.mp3`}, { quoted : m })
}
break
//=================================================//
case 'toaudio': case 'audio': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await haikal.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
//=================================================//
case 'tovn': case 'voice': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
m.reply('*Sabar Cuy Loading*')
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6285601059864',
title: `Saitama-MD`,
sourceUrl: `https://wa.me/6285601059864`, 
thumbnail: thumb
}
}})
}
break
//=================================================//
case 'togif': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:m})
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//=================================================//
case "quotes":
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 var resi = await Quotes()
teks = `\nAuthor: ${resi.author}\n`
teks = `\nQuotes:\n`
teks = `${resi.quotes}\n`
reply(teks)
break
//=================================================//
case "darkjoke": case "darkjokes":
await loading()
 var ress = await Darkjokes()
teks = "*Darkjokes*"
haikal.sendMessage(m.chat, { image : { url : ress }, caption: teks }, { quoted:m })
break
//=================================================//
case 'emojimix': { 
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} belanja`
 let anu = await primbon.tafsir_mimpi(text)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} Nahida-MD, 7, 7, 2005, Putri, 16, 11, 2004`
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} Nahida-MD`
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} Nahida-MD, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} Nahida-MD|Putri`
 let [nama1, nama2] = text.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendImage(from,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} Nahida-MD, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} XDDCC WA, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
 let [nama, tgl, bln, thn, untuk] = text.split`,`
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} Nahida-MD, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} Nahida-MD, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
 let [tgl, bln, thn, siklus] = text.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'zodiak': case 'zodiac': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix+ command} 7 7 2005`
 let zodiak = [
 ["capricorn", new Date(1970, 0, 1)],
 ["aquarius", new Date(1970, 0, 20)],
 ["pisces", new Date(1970, 1, 19)],
 ["aries", new Date(1970, 2, 21)],
 ["taurus", new Date(1970, 3, 21)],
 ["gemini", new Date(1970, 4, 21)],
 ["cancer", new Date(1970, 5, 22)],
 ["leo", new Date(1970, 6, 23)],
 ["virgo", new Date(1970, 7, 23)],
 ["libra", new Date(1970, 8, 23)],
 ["scorpio", new Date(1970, 9, 23)],
 ["sagittarius", new Date(1970, 10, 22)],
 ["capricorn", new Date(1970, 11, 22)]
 ].reverse()

 function getZodiac(month, day) {
 let d = new Date(1970, month - 1, day)
 return zodiak.find(([_,_d]) => d >= _d)[0]
 }
 let date = new Date(text)
 if (date == 'Invalid Date') throw date
 let d = new Date()
 let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
 let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
 let zodiac = await getZodiac(birth[1], birth[2])
 let anu = await primbon.zodiak(zodiac)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
 let anu = await primbon.shio(text)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================//
case 'google': {
 if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
//=================================================//
case 'pembayaran': case 'nope': case 'listpayment':{
await loading()
m.reply(`© Hay Kak ${pushname} 👋 Selamat ${salam}
Pembayaran Silahkan Nope Di Bawah Yah : 

${payment}

Terima Kasih`)
}
break
//=================================================//
case 'couple': {
await loading()
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, {quoted:m})
haikal.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, {quoted:m})
}
break
//=================================================//
case 'coffe': case 'kopi': {
await loading()
haikal.sendMessage(from, {image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`},{quoted:m})
}
break
//=================================================//
case 'getname': {
if (!isCreator) return m.reply('*khusus Premium*')
await loading()
if (qtod === "true") {
namenye = await haikal.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
haikal.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (!isCreator) return m.reply('*khusus Premium*')
await loading()
if (qtod === "true") {
try {
pporg = await haikal.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(from, { image : { url : pporg }, caption:`Done` }, {quoted:m})
} else if (qtod === "false") {
try {
pporgs = await haikal.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(from, { image : { url : pporgs }, caption:`Done` }, {quoted:m})
}
}
break


//=================================================//
case "setppbot": {
if (!isCreator) return m.reply(`Buat owner Doang`)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await haikal.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await haikal.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Sukses`)
} else {
var memeg = await haikal.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(`Sukses`)
}
}
        break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isCreator) return m.reply('khusus creator bot')
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await haikal.downloadAndSaveMediaMessage(m)
await haikal.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply('done')
}
break
//=================================================//
case 'block': {
if (!isCreator) return m.reply('*Khusus Premium*')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isCreator) return m.reply('*Khusus Premium*')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'stalktiktok':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
haikal.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
break
//=================================================//
case 'infogempa':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/infogempa?apikey=${apikey}`)
var caption = `Lokasi : ${data.result.lokasi}\n`
caption += `Waktu : ${data.result.waktu}\n`
caption += `Potensi : ${data.result.potensi}\n`
caption += `Magnitude : ${data.result.magnitude}\n`
caption += `Kedalaman : ${data.result.kedalaman}\n`
caption += `Koordinat : ${data.result.koordinat}`
haikal.sendMessage(from, { image: { url: data.result.map }, caption })
break
//=================================================
case 'lirik':
if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/lirik?apikey=${apikey}&query=${command}`)
reply(data.result)
break
//=================================================//
case 'jadwaltv':
if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/${args[0]}?apikey=${apikey}`)
var txtayaj = `Jadwal TV ${args[0].toUpperCase()}\n`
for (var x in data.result) {
txtayaj += `${x} - ${data.result[x]}\n`
}
reply(txtayaj)
break
//=================================================
case 'jadwaltvnow':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apikey}`)
var txtayajas = `Jadwal TV Now :\n`
for (var x in data.result) {
txtayajas += `${x.toUpperCase()}${data.result[x]}\n\n`
}
reply(txtayajas)
break
//=================================================
case 'cerpen':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cerpen?apikey=${apikey}`)
var textpp = `Title : ${data.result.title}\n`
textpp += `Creator : ${data.result.creator}\n`
textpp += `Story :\n${data.result.cerpen}`
reply(textpp)
break
//=================================================
case 'ceritahoror':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${apikey}`)
var caption = `Title : ${data.result.title}\n`
caption += `Desc : ${data.result.desc}\n`
caption += `Story :\n${data.result.story}\n`
haikal.sendMessage(from, { image: { url: data.result.thumbnail }, caption })
break
//=================================================
case 'cuaca':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${args[0]}?apikey=${apikey}`)
var textppp = `Tempat : ${data.result.tempat}\n`
textppp += `Cuaca : ${data.result.cuaca}\n`
textppp += `Angin : ${data.result.angin}\n`
textppp += `Description : ${data.result.description}\n`
textppp += `Kelembapan : ${data.result.kelembapan}\n`
textppp += `Suhu : ${data.result.suhu}\n`
textppp += `Udara : ${data.result.udara}\n`
textppp += `Permukaan laut : ${data.result.permukaan_laut}\n`
haikal.sendMessage(from, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
reply(textppp)
break
//=================================================
case 'afk': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${pushname}... Telah Afk Dengan Alasan ${text ? ': ' + text : ''}`)
}
break
//=================================================
case 'buatsw':{
if (!isCreator) return m.reply('*Khusus Premium*')
let men = [];
for (let x of pengguna) {
men.push(x)
const result = [ x ]
if (!m.quoted && !text) throw 'reply pesan'
if (m.quoted && m.quoted.mtype === 'conversation' && !text) _m = haikal.sendMessage('status@broadcast', {
text: m.quoted.text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
if (!m.quoted && text) _m = haikal.sendMessage('status@broadcast', {
text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
}
await loading ()
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case "buatswimage":{
if (!isCreator) return m.reply('*Khusus Premium*')
await loading ()
 if (!quoted) throw `Balas image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Balas image dengan caption *${prefix + command}*`
const media = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage('status@broadcast', { image: { url: media }}, {statusJidList: pengguna})
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case "buatswvideo":{
if (!isCreator) return m.reply('*Khusus Premium*')
await loading ()
 if (!quoted) throw `Balas video Dengan Caption ${prefix + command}`
if (!/video/.test(mime)) throw `Balas video dengan caption *${prefix + command}*`
const media = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage('status@broadcast', { video: { url: media }}, {statusJidList: pengguna})
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'swin':{
if (!isCreator) return m.reply('*Khusus Premium*')
await loading ()
if (!text) return m.reply(`masukin text nya`)
haikal.sendMessage('status@broadcast', {
text: `${text}`
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: pengguna
});
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'vnsw':{
if (!isCreator) return m.reply('*Khusus Premium*')
await loading ()
if (!text) return m.reply(`masukin text nya yang ada di database listvn`)
var huy = fs.readFileSync(`./database/Audio/${text}.mp3`)
haikal.sendMessage('status@broadcast', {audio: huy, mimetype: 'audio/mp4', ptt:true},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'inisw':{
if (!isCreator) return m.reply('*Khusus Premium*')
await loading ()
if (!text) return m.reply(`masukin text nya yang ada di database listvn`)
var buu = fs.readFileSync(`./database/Audio/${text}.mp3`)
haikal.sendMessage('status@broadcast', {audio: buu, mimetype:'audio/mp4', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6285601059864',
title: `Saitama-MD`,
sourceUrl: `https://wa.me/6285601059864`, 
thumbnail: thumb}}},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'hapusdb':
if (!isCreator) return m.reply('*Khusus Premium*')
await loading ()
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281111111111@s.whatsapp.net`)
yakiii = text.split("|")[0].replace(/[^0-9]/g, '')
unnnp = pengguna.indexOf(yakiii)
pengguna.splice(unnnp, 1)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
m.reply(`Nomor ${yakiii} Telah Di Hapus Dari Database!!!`)
break
//=================================================//
case 'listdb':
if (!isCreator) return m.reply('*Khusus Premium*')
await loading ()
if (isBan) return m.reply('*Lu Di Ban Owner*')
 teksoooo = '*List Database*\n\n'
for (let i of pengguna) {
teksoooo += `- ${i}\n`
}
teksoooo += `\n*Total : ${pengguna.length}*`
haikal.sendMessage(from, { text: teksoooo.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": pengguna } })
break
//=================================================
case "buatswptv":
{
if (!isCreator) return m.reply('*Khusus Premium*')
await loading ()
 if (!m.quoted) throw `Balas Video Dengan Caption ${prefix + command}`
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
	"ptvMessage": ppt
}), { userJid: from, quoted:m})
haikal.relayMessage('status@broadcast', ptv.message, {
statusJidList: pengguna
})
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'toptv':
{
if (!isCreator) return m.reply('*Khusus Premium*')
await loading ()
 if (!m.quoted) throw `Balas Video Dengan Caption ${prefix + command}`
  if (/video/.test(mime)) {
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
	"ptvMessage": ppt
}), { userJid: from, quoted:m})
haikal.relayMessage(from, ptv.message, { messageId: ptv.key.id })
}
}
break
//=================================================
case "buatsws":{
if (!isCreator) return m.reply('*Khusus Premium*')
await loading ()
 if (!quoted) throw `Balas Sticker Dengan Caption ${prefix + command}`
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
const media = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage('status@broadcast', { sticker: { url: media }}, {statusJidList: pengguna})
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
//=================================================
case 'family100': {
 if ('family100'+from in _family100) {
 m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
 throw false
 }
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
 let random = anu[Math.floor(Math.random() * anu.length)]
 let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 _family100['family100'+from] = {
 id: 'family100'+from,
 pesan: await haikal.sendText(from, hasil, m),
 ...random,
 terjawab: Array.from(random.jawaban, () => false),
 hadiah: 6,
 }
}
break
//=================================================//
case 'tebak': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
 if (args[0] === "lagu") {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await JSON.parse(fs.readFileSync('./database/Games/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await haikal.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 haikal.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/82811457aa4fc6b7ebebe.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'gambar') {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 haikal.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/82811457aa4fc6b7ebebe.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 haikal.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/82811457aa4fc6b7ebebe.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 haikal.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/82811457aa4fc6b7ebebe.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 haikal.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/82811457aa4fc6b7ebebe.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 haikal.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(3000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/82811457aa4fc6b7ebebe.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break
//=================================================//
case 'kuismath': case 'math': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let { genMath, modes } = require('./src/math')
 if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
 let result = await genMath(text.toLowerCase())
 haikal.sendText(from, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 3000).toFixed(2)} detik`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
}
break
//=================================================//
case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await haikal.sendText(room.x, str, m, { mentions: parseMention(str) } )
await haikal.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
//=================================================//
case 'delttc': case 'delttt': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
delete this.game[roomnya.id]
m.reply(`Berhasil delete session room tictactoe !`)
}
break
//=================================================//
case 'suitpvp': case 'suit': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await haikal.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) haikal.sendText(from, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
//=================================================
case 'jadibug': {
if (!isCreator) return m.reply('*khusus Premium*')
if (!text) throw `Contoh : ${prefix + command} ʜᴡ ᴍᴏᴅꜱ ᴡᴀ`
let teks = `${text}`
{
const cap = `${teks} ${buttonkal}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
haikal.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
}
break
 //=================================================
case  'qc':{
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return m.reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await haikal.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await haikal.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
haikal.sendMessage(from,{image: buffer},{quoted : hw})
})
}
break
//=================================================//
case  'qcstick':{
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return m.reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await haikal.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await haikal.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await haikal.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, 
author: global.author, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break 
//=================================================
case 'delete':{
haikal.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break
case 'kartuintro':
reply(`0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 🎗️」*
│ *Nama    :* 
│ *Umur     :* 
│ *Hobby   :* 
│ *Kelas     :* 
│ *Asal       :* 
│ *Status    :* 
│  
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙`)
break
        // kata kata sunda
case 'promosi,yo' :
if (isBan) return m.reply('*so asik*')
m.reply(`🚩 *OPEN MURID UNBAN: 19K*

 ( PROMO TODD )
*BY: DAFFZOFFICIAL*

*KEUNTUNGAN:*
•BISA UNBAN SPAM/PERMA
•BISA UNBAN HARD/BATU
•BISA JADI KANG UNBAN
•DAPAT METHODE FRESH
•MATHODE KE BAKAR AKAN DI GANTI
•BISA BALMON JIKA NIAT
•DI JAMIN GA NYESEL
•DI AJARIN  AMPE BISA

*PANEL PTERODACTYL* : 2K/GB AKTIF 20DAY
*JADI BOT WA* : 10K/2MINGGU
*SEWA BOT* : 8K/ MINGGU

*SUBDOMAIN* 3K / DOMAIN

*BUY METHODE UNBAN*
SPAM 15K
PERMA BIASA 19K
▬▭▬▭▬▭▬▭▬▬▭▬▬▭▬
*MINAT?PM ME::*
#izin admin`)
break
case 'yo,intro' :
if (isBan) return m.reply('*Apcb*')
m.reply(`0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 🎗️」*
│ *Nama    : Daffz Official* 
│ *Umur     :19 Tahun* 
│ *Hobby   : Codding NodeJs* 
│ *Kelas     : Atas* 
│ *Asal       : Indramayu* 
│ *Status    : Nikah Sm KathrinJKT48* 
│  
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙`)
 break
case 'remini': {
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			haikal.sendMessage(m.chat, { image: proses, caption: m.success}, { quoted: m})
			}
			break
//=================================================
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply('*khusus Premium*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
 m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply('*khusus Premium*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return m.reply('*khusus Premium*')
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
