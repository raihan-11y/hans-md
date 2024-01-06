let handler = async (m, { conn }) => {
conn.reply(m.chat, `_List Group 𓄀𝙵𝙰𝚁𝙸𝙳࿐_
*Offcial Group*
${link.gc}

*Ytb Farid_Modz Telegram*
https://t.me/Farid_Modz
`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
