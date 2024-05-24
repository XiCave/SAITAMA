require("./lib/module")
require("./lib/color")
require("./jadibot")
require("../config")
require("./lib/spinner")
require("./lib/upload")
require("../mess")
require("./lib/exif")
require("./lib/tiktok")
require("./lib/canvas")

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})