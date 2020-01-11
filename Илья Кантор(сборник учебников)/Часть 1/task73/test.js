// 'use strict'

'use strict'

let list = {  
 value: 1,  
 next: { 
  value: 2,    
  next: {  
   value: 3,     
   next: {      
    value: 4,     
    next: null  
   }  
  }  
 } 
};

function reverseList(list) {
		
	if (list.next) {  
	reverseList(list.next); 
	} 
 
  alert(list.value);
}

reverseList(list);
