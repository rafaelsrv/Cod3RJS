let arrayProgressivo = []
let Resultado = []
function SegundoMaiorNumeroDoArray(array){
   let n2=(a,b)=> {
        if(a>b)  return 1;
        if(a<b)  return -1;
        return 0    
        

    }
    arrayProgressivo = array.sort(n2)
    Resultado = arrayProgressivo[arrayProgressivo.length-2]
    return  Resultado
    }

    
   
        
        

console.log(SegundoMaiorNumeroDoArray([1,2,3,70,30,20,90,1200]))