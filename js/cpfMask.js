/* mask handler */
function fMask(objeto,mask) {
  obj=objeto
  masker=mask
  setTimeout("fMaskEx()",1)
}

/* mask execution */
function fMaskEx() {
  obj.value=masker(obj.value)
}

/* mask function for CPF model */
function mCPF(cpf){
  cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return cpf
}