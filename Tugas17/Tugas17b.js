
  function getCharCodes(s){
    let charCodeArr = [];

    for(let i = 0; i < s.length; i++){
      let code = s.charCodeAt(i);
      charCodeArr.push(code);
    }
    return charCodeArr;
  }
  console.log("Lorem");

  console.log(getCharCodes("Lorem "));
