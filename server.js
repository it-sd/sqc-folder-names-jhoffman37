const newFolderName = function (folders) {
if (folders == null) {
return "New Folder"
}
  else  {
  for (i = 0; i != folders.length; i++) {
    if (i == folders.length) {
      return "New Folder (" + (i + 1) + ")"
}
console.log(newFolderName())
