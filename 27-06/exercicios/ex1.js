

        
     function validarDiferenca(){
            var r1 = [2,4,6,8];
            var r2 = [3,4,5,7,9];       
            var r3 = [];    
            r1.forEach(function (element, index, array) {
                if(r2.indexOf(element) == -1)
                    r3.push(element);
        });
                else if(r1.indexOf(element) == -1)
                    r3.push(element);
});
            console.log(r3)
    
        }

        validarDiferenca()
    
    

