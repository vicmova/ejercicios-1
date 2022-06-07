/* 
7) Inicio REACT. En base al siguiente código, crear programa CON FUNCIONES,
donde hay una constante con temperatura y el ordenador responde dependiendo
del valor:
Valor temp. entre 0 y 10oC -> ‘Mucho frío’
Valor temp. entre 10 y 20oC -> ‘Temperatura media
Valor temp. entre 20 y 30oC -> ‘Calor
*/
export default Temperatura() {

    const grados = 1;

        function comprobar(dato){
    
            const grados = Number(dato)
    
            const resultado = (grados >= 0 && grados < 10) ? `Mucho frío.`
    
            : (grados >=10 && grados <= 20) ? `Temperatura media.`
    
            : `Calor.`
    
       
        
      
        
     
    }

    

}