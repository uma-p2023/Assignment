let str='madam'
 function isPalindrome(str)
 {
 	let length=str.length;
 	for(let i=0;i<length/2;i++)
 	{
 		if(str[i]!==str[length -1 -i])
 		{
 			return 'it is not a palindrome'
 		}
 	}
 	return 'it is a palindrome'
 }


 console.log(isPalindrome(str))