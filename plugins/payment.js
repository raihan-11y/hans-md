import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
	let payi = `
╭─「 • *ᴘᴜʟꜱᴀ* • 」
│ • *ᴛʜʀᴇᴇ* ${pay.pulsa}
╰─────

╭─「 • *ᴇ-ᴡᴀʟʟᴇᴛ* • 」
│ • *ᴅᴀɴᴀ* 085893143129
│ • *ɢᴏᴘᴀʏ* 085776018007
│ • *ᴏᴠᴏ* 085776018007
╰─────

◛˖ _*ᴊɪᴋᴀ ꜱᴜᴅᴀʜ ᴍᴇᴍʙᴀʏᴀʀ*_\n_*ꜱɪʟᴀʜᴋᴀɴ ᴋɪʀɪᴍ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴀʏᴀʀᴀɴ ᴋᴇ ᴏᴡɴᴇʀ ʙᴏᴛ...*_`
await conn.sendFile(m.chat, fs.readFileSync('./media/qris.jpg'), 'qris.jpg', payi, m)
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
export default handler
