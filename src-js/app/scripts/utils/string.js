if (!String.prototype.contains) {
  String.prototype.contains = function (text, caseInsensitive) {
    if (!text) return true;

    if (caseInsensitive) return this.toLowerCase().indexOf(text.toLowerCase()) != -1;

    return this.indexOf(text) != -1;
  };
}