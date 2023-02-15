const newFolderName = function (folders) {

const length = folders.length + 1
const folder = 'New Folder (' + length + ')'
if (folders === null) {
return 'New Folder'
} else  { return folder }
  //for (let i = 0; i < length; i++) {
   // if (i === length) {
      //return folders.length
     // const folder = 'New Folder (' + (j + 1) + ')'
      
}
  //}
  //}return folder
//}
console.log(newFolderName(['New Folder', 'New Folder (2)']))
