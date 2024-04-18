export const sumarRango = (numeroInicial, numeroFinal)=>{
    let resultado=0;
    for (let i =numeroInicial; i <= numeroFinal; i++){
        resultado += i
    }
    return resultado;
}

// const saludo = ()=>{
//     return "Hola mundo"
// }

// export default{
//     saludo,
//     sumarRango
// }