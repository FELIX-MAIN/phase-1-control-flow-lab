function scuberGreetingForFeet(){
  // Write your code here!
  const ride = ""
  if (ride <= 400){
    console.log('Rides on me')
  }
  else if (ride>2000){
    console.log('I will gladly take your 30 bucks')
  }
  else(ride>2500)
    console.log('No can do')
}
    console.log(scuberGreetingForFeet())
    //END

function ternaryCheckCity(){
  // Write your code here!
  function ternaryCheckCity(NYC){
    return (NYC ? 'Okay,Sounds good' : 'No go');
  }
  
  console.log(ternaryCheckCity(true));
  
  console.log(ternaryCheckCity(false));  

}
//END

function switchOnCharmFromTip(){
  // Write your code here!
  const expr = 'tip';
switch (expr) {
  case 'Generous':
    console.log('Thank you so much.');
    break;
    
  case 'Not as Generous':
    console.log('Thank you.');
    break;

  case 'thanks for everything':
    console.log('Bye');
  default:
    console.log('Thank you');
}

}
