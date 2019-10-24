const functions = {
    sum: (a,b) => {
        return a+b; 
    },
    capitalizeString: (string) => {
        return string[0].toUpperCase() + string.slice(1); 
    }, 
    reverseString: (string) => {
        return string.split('').reverse().join(''); 
    }, 
    calculator: {
        add: (a,b) => {
            return a+b; 
        },
        subtract: (a,b) => {
            return a-b; 
        }, 
        multiply: (a,b) => {
            return a*b; 
        }, 
        divide: (a,b) => {
            return a/b; 
        }
    }, 
    cipher: (str, key) => {
        const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let abcArray = abc.map(a => a); 
		str = str.toLowerCase();
		
		for(let i= 0; i < key; i++){
        	let temp = abcArray.shift();
			abcArray.push(temp);
		}
		let cipher = ''; 
		
		for(let i=0; i< str.length; i++) {
        let index = abc.indexOf(str[i]); 
            if (index !== -1) {
				cipher += abcArray[index];
            } else {
			cipher += ' '; 
            }
		}
		return cipher;
    }, 
    anaylzeArray: {
        average: (array) => {
           let sumTotal = array.reduce((startValue,element) => startValue + element); 
            return sumTotal / array.length; 
        }, 
        min: (array) => Math.min(...array),
        max: (array) => Math.max(...array), 
        length: (array) => array.length 
    }

    
}



module.exports = functions; 