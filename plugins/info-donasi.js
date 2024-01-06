let handler = async (m, { conn, usedPrefix }) => {
	let donasi = `
╭─「 • *ᴘᴜʟꜱᴀ* • 」
│ • *TELKOM* ${pay.pulsa}
╰─────

╭─「 • *ᴇ-ᴡᴀʟʟᴇᴛ* • 」
│ • *ᴅᴀɴᴀ* 0858-9314-3129
│ • *ɢᴏᴘᴀʏ* 0857-7601-8006
│ • *ᴏᴠᴏ* hubungi owner
╰─────

_◛˖ ᴛᴇʀɪᴍᴀᴋᴀꜱɪʜ ᴜɴᴛᴜᴋ ʏᴀɴɢ ꜱᴜᴅᴀʜ ʙᴇʀᴅᴏɴᴀꜱɪ_`
await conn.sendFile(m.chat, pay.qris, 'qris.jpg', donasi, m)
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
export default handler