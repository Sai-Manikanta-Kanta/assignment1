const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName, fileContent).then(() => {
		console.log("file content created to the specified file")
	}).catch((error) => {
		console.log(`An error encountered with ${error}`)
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName).then((content) => {
		console.log(`Required content is ${content}`)
	}).catch((error) => {
		console.log(`An error encountered with ${error}`)
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName, fileContent).then(() => {
		console.log("file content uploaded to the specified file")
	}).catch((error) => {
		console.log(`An error encountered with ${error}`)
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName).then(() => {
		console.log("File deleted successfully")
	}).catch((error) => {
		console.log(`An error encountered with ${error}`)
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }