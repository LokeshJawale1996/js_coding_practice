function caesarCipher(s, k) {
    
       let x = s.replace(/[A-Z]/g, newLetter => String.fromCharCode((newLetter.charCodeAt(0)-65 + k) % 26 + 65));
    // replace else
        return x.replace(/[a-z]/g, newLetter => String.fromCharCode((newLetter.charCodeAt(0)-97 + k) % 26 + 97));
    }
    
    let str = "middle-Outz"
    console.log(caesarCipher(str,2));

    //okffng-Qwvb


    
    // let originalAlpha = 'abcdefghijklmnopqrstuvwxyz';
        // let spliStr = s.split('');
        // let splitAplha=originalAlpha.split('');
        // let req='';
        // let req1 = originalAlpha.slice(0,k);
        // let req3 = originalAlpha.slice(k);
        // req=req3+req1;
        // // console.log(req);
        
        // // console.log(req.slice(0,originalAlpha.length/2))
        // for(let i =0;i < s.length;i++){
           
        //           for(let j =0;j < req.length;i++){
      
      
        //      spliStr(i) === req.charAt(j);
      
         
         
        // }
        // }
        //             console.log(spliStr(i))
    
        // return spliStr.charAt(i).join('');
        // replace uppercase first