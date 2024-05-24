const mess = {
wait: '*[ `AWAIT` ]* ->  MOHON MENUNGGU BEBERAPA SAAT',
query: '*[ `REQUIRE` ]* ->  MASUKAN QUERY',
search: '*[ `SEARCHING` ]*  -> SEDANG MENCARI MOHON DI TUNGGU',
scrap: '*[ `SCRAPPING` ]* ->  SEDANG MEMUAT, MOHON DI TUNGGU',
success: '*[ `SUCCESS` ]* ->  PERMINTAAN ANDA TELAH SUKSES',
done: '*[ `SUCCESS` ]* ->  PERMINTAAN ANDA TELAH SUKSES',
limit: '*[ `LIMIT` ]* ->  OH TIDAK KAMU KE HABISAN LIMIT',
claimOn: '*[ `BLOCK` ]* ->  OH TIDAK, KAMU SUDAH MENGAMBILNYA',
wrongFormat: '*[ `WRONG` ]* ->  KAMU MEMBERI FORMAT YANG SALAH',
error: {
stick: '*[ `UNDEFINED` ]* ->  SEPERTINYA BUKAN  STIKER ITU',
},
block:{
err: '*[ `MAINTANCE` ]* ->  SEDANG DI PERBAIKI,COBA LAGI NANTI',
fitur: '*[ `MAINTANCE` ]* ->  COMMAND DI BLOKIR, COBA LAGI NANTI',
},
only: {
premium: '*[ `DENIED` ]* ->  AKSES ANDA TELAH DI TOLAK',
private: '*[ `REQUIRE` ]* ->  GUNAKAN DI PRIVATE, COBA LAGI',
group: '*[ `REQUIRE` ]* ->  ANDA HARUS DI DALAM GROUP',
ownerB: '*[ `DENIED` ]* ->  MAAF INI HANYA UNTUK PEMILIK BOT',
owner: '*[ `DENIED` ]* ->  MAAF INI HANYA UNTUK PEMILIK',
admin: '*[ `ADMIN` ]* ->  MAAF INI HANYA UNTUK ADMIN',
badmin: '*[ `ADMIN` ]* ->  BOT HARUS MENJADI ADMIN'
},
query: {
       text: "*[ `REQUIRE` ]* ->  MASUKAN TESK DAN COBALAGI",
       link: "*[ `REQUIRE` ]* ->  MASUKAN LINK DAN COBALAGI",
   }
   
global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})