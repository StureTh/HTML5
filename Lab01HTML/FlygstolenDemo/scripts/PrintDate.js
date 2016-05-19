function printdate() {
    var dd = new Date().getDate();
    var mm = new Date().getMonth() + 1;
    var yyy = new Date().getFullYear();

    document.getElementById('writedate').value = yyy + '-0' + mm + '-' + dd;
  
}
