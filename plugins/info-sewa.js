let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = ` ---『 *LIST HARGA* 』---
❏──「 *Sewa Bot* 」
│ • *1 Minggu:* Rp.5.000
│ • *2 Minggu:* Rp.10.000
│ • *1 Bulan:* Rp.25.000
│ • *Permanen:* Rp.40.000
❏──────────────๑
❏──「 *Premium* 」
│ • *1 Minggu:* Rp.5.000
│ • *2 Minggu:* Rp.10.000
│ • *1 Bulan:* Rp.20.000
│ • *Permanen:* Rp.30.000
❏──────────────๑
*Premium itu hanya akses fitur premium saja kak seperti hdr, remini dll dan tidak bisa di masukkan ke grup*

_Sewa bot bisa bisa memasukkan bot ke grup dan mendapatkan premium jadi bisa akses fitur premium di bot_
❏──「 *Pembayaran* 」
│ • *Ovo:* 0857-7601-8007
│ • *Dana:* 0858-9314-3129
│ • *Qris:* Hub owner
❏──────────────๑
│ Hubungi Owner!!!
│wa.me/6285893143129
❏──────────────๑
 _2023 © 𓄀𝙵𝙰𝚁𝙸𝙳 𝙷𝙾𝚂𝚃࿐_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['menuprem']
handler.tags = ['main']
handler.command = /^(sewa|sewabot|prem)$/i

export default handler