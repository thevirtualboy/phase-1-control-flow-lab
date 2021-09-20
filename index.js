function scuberGreetingForFeet(someNumber){
  if (someNumber <= 400) {
    return ('This one is on me!');
  } else if (someNumber >= 2001 && someNumber < 2501) {
    return ('I will gladly take your thirty bucks.');
  } else if (someNumber >= 2501) {
    return ('No can do.');
  }
}

function ternaryCheckCity(city){
  let cityResponse = city === 'NYC' ? (cityResponse = 'Ok, sounds good.') : (cityResponse = 'No go.');
  return cityResponse;
}

function switchOnCharmFromTip(generosity){
  switch (generosity) {
    case generosity = 'generous':
      return ('Thank you so much.');
      break;
    case generosity = 'not as generous':
      return ('Thank you.');
      break;
    default:
      return ('Bye.');
  }
}