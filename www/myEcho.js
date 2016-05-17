var countplygin = {
calculate:function (sucess,error,parameter){
	cordova.exec(sucess,exec,"TestPL","SetTestPL",[parameter])
  }
}
module.exports = countplygin;
