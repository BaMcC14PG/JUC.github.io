//console.log("Console Test.")

function downloadFiles(){
  var exeFile = "/resources/setup.exe";
  var msiFile = "/resources/PackageTrackerInstaller.msi";

  var link = document.createElement('a');
  link.setAttribute('href', exeFile);
  link.setAttribute('download', '');
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();

  link.setAttribute('href', msiFile);
  link.click();

  document.body.removeChild(link)
}