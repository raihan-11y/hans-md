function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: 𓄀𝙵𝙰𝚁𝙸𝙳࿐\nitem1.TEL;waid=6285893143129:6285893143129\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;Email Owner: stokridzstore@gmail.com@gmail.com\nORG: INI OWNER\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler