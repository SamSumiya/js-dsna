Date.prototype.lastYear = function () {
  //   console.log(this)
  const convertedTime = this.toLocaleDateString().split('/');
  const len = convertedTime.length;
  const year = convertedTime[len - 1];
  const LastYear = +year - 1;
  return LastYear.toString();
};

new Date('1900-10-10').lastYear();
