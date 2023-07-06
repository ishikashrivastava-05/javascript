// function total(n,p,c,m){
//          let sum = p+c+m; 
//          console.log(`${n} sum =${sum}`);
//           let per = percentage(n,sum);
//           division(per);
         
//     }
//     function percentage(n,sum){
//         let per = sum/300*100;
//         console.log(`${n}percentage = ${per}`);
//         return(per);
//     }
    
//     function division(per){
//         let division;
//         if (per >= 90){
//         division="first division"
//         }
//         else if( per >=80){
//             division="second divison"
//         }
//         else if(per >= 60){
//             division="Third division"
//         }
//         else{

//             division="fail"
//         } 
            
//         console.log(`division:${division}`);  
//     }
//     total("mayank",79,38,57);

function total(n,p,c,m){
    let sum = p+c+m;
    console.log(`${n} sum = ${sum}`);
    percentage(n,sum);
}
  function percentage (n,sum ){
    let percentage = sum/300*100;
    console.log(`${n} percentage = ${percentage}`);


    if(percentage >= 60){
        console.log("First Division")}
        else if(percentage >=45 && percentage < 60){
            console.log("second division")
        }
        else{
            console.log("fail")
        }

    }
    total("mayank",79,89,55);
    total("rishi",54,64,87);
     total("ayu",9,89,3);
     total("edeb",50,50,50)

  
  
  





 
        

    
