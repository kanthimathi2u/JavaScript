/*Have the function PalindromeCreator(str) take the str parameter being passed and determine if it is possible to create 
a palindromic string of minimum length 3 characters by removing 1 or 2 characters. For example: if str is "abjchba" 
then you can remove the characters jc to produce "abhba" which is a palindrome. For this example your program should 
return the two characters that were removed with no delimiter and in the order they appear in the string, so jc. 
If 1 or 2 characters cannot be removed to produce a palindrome, then return the string not possible. 
If the input string is already a palindrome, your program should return the string palindrome. 

The input will only contain lowercase alphabetic characters. Your program should always attempt to create the 
longest palindromic substring by removing 1 or 2 characters (see second sample test case as an example). 
The 2 characters you remove do not have to be adjacent in the string. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function PalindromeCreator(str) { 

  // code goes here  
  
  for (var i = 0; i < str.length; i++) 
  {
      subStr=str.substring(i, str.length);
      var reChar = '';
      //To remove any other special charaters
      var regExp = /[^A-Za-z0-9]/g;
      var inputStr = subStr.replace(regExp, '');
      var reverseStr = inputStr.split('').reverse().join('');
      if(reverseStr === inputStr)
      {
          //console.log(subStr + " is a Palindrom\n");
          if (subStr.length > 1){
              reChar = str.substring(0, i);
              //reChar = str[i];
          } else
          {
              reChar = 'not possible';
          }
          
          break;
      }else
      {
         // console.log(subStr + " is NOT a Palindrom\n");
          part1 = str.substring(0, i);
          part2 = str.substring(i + 1, str.length);
          subStr = part1 + part2;
          PalindromeCreator(subStr);
      }
      
  }
  
  return reChar; 
         
}
   
// keep this function call here 
PalindromeCreator(readline());