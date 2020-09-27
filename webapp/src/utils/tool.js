import request from './request';
export async function fetchData(ele){
    const data = await request.get('/vcode');
    if(data.code == 1){
      ele.innerHTML=data.data
    }
  }
export async function checkName(value){
    const data = await request.get('/forget/check',{...value});
    if(data.code == 1){
        return 1
    }else{
        return 0
    }
}
export async function checkSame(value){
    if(value || {}){
        
        value = Object.values(value);
        console.log(value)
        let j=0,resultArr=[];
        for(let i = 0 ;i<value.length;i++){
          while(j<value.length){
             if (value[j] === value[i]){
                resultArr.push(true)
                j++
             }else{
                resultArr.push(false)
                 j=value.length;
                 
             }
          }
            
        }
        console.log(resultArr)
        return resultArr
    }
}
export async function getActiveData(data){
    return new Promise( (res,rej)=>{
      rej(data)
    })
}

export async function verify(token){
  const result =await request.get('/jwtverify',{
      authorization:token
    })
    let {code} = result;
    return code;
}