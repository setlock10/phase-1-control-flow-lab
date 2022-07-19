function scuberGreetingForFeet(rideLength){
  // Write your code here!
  if (rideLength<=400){ return 'This one is on me!';  }
  
  if ((rideLength>400)&&(rideLength<2000)){ return 'That will be twenty bucks.'; }

  if ((rideLength>400)&&(rideLength<2000)){ return 'That will be twenty bucks.'; }

  if ((rideLength>2000)&&(rideLength<2500)){ return 'I will gladly take your thirty bucks.'; }

  if (rideLength>2500){ return 'No can do.'; }

  
      


    
}

function ternaryCheckCity(cityName){
  // Write your code here!
  // if (cityName=='NYC')
  //     return 'Ok, sounds good.';
  // else

  return cityName=='NYC'? 'Ok, sounds good.':'No go.';

}

function switchOnCharmFromTip(tipQuality){
  // Write your code here!
  if (tipQuality=='generous')
  {
  return 'Thank you so much.';
  }
  if (tipQuality=='not as generous')
  {
  return 'Thank you.';
  }

  else 
  return 'Bye.';



}