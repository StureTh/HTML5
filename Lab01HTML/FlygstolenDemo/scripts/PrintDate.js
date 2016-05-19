function printdate() {
    var dd = new Date().getDate();
    var mm = new Date().getMonth() + 1;
    var yyyy = new Date().getFullYear();

    document.getElementById('writedate').value = yyyy + '-0' + mm + '-' + dd;
  
}
