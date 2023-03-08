const newFolderName = function (folders) {
  const checks = 500
  if (!folders.includes('New Folder')) {
    return 'New Folder'
  } else {
    for (let i = 2; i < checks; i++) {
      if (!folders.includes(`New Folder (${i})`)) {
        return `New Folder (${i})`
      }
    }
  }
}
module.exports = { newFolderName }
