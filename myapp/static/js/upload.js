function checkFileExt(file){
  if(!hasExtension(file.value)){
    document.getElementsByClassName("error")[0].innerHTML = 'File format should be XLS or XLSX';
  }else{
    document.getElementsByClassName("error")[0].innerHTML = '';
  }
}
function checkFormSubmit(){
  return (hasExtension(document.getElementsByClassName("input-file")[0].value));
}
function hasExtension(fileName, exts = ['.xls','.xlsx']) {
    return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
}