"use strict";
var self = module.exports;
function init() {
	Homey.log("----------------App initiated-----------------");
	Homey.log("Welcome to the magic 8ball APP");
	//capture some speech
	 Homey.manager('speech-input').on('speech', self.onSpeech)

 
}
// Animation after start of app
LedAnimate("green", 5000);

// Listen for speech
module.exports.onSpeech = function(speech) {
    Homey.log("Speech is triggered");

    var language= "default";

language = Homey.manager('i18n').getLanguage();   
Homey.log ("User language: " + language);
        Homey.log ("User said this: " + speech.transcript);
//array with answers
var answers = [
  'Signs point to yes.',  'Yess. No. Yes. - No. Yes. ---Nyo.', 'Yess. No. Yes.  -  No. Yes. ---Yess.','Yess.', 'Reply hazy, try again.', 'Without a doubt.', 'My sources say no.', 
  'As I see it, yes.', 'You may rely on it.', 'Concentrate and ask again.', 'Outlook not so good.', 
  'It is decidedly so.', 'Better not tell you now.', 'Very doubtful.', 'Yes - definitely.', 'It is certain.',
  'Cannot predict now.', 'Most likely.', 'Ask again later.', 'My reply is nyo.', 'Outlook good.', 
  'Dont count on it.', ];
   
  //generate random number based on array length
var answer = Math.floor(Math.random() * answers.length);
//log answer in console
  Homey.log ("Answer: " + answers[answer]);
  //say answer
  Homey.manager('speech-output').say( (answers[answer]) );
}


function LedAnimate(colorInput, duration) {
Homey.manager('ledring').animate(
    // animation name (choose from loading, pulse, progress, solid)
    'loading',
    
    // optional animation-specific options
    {
       
	   color: colorInput,
        rpm: 300 // change rotations per minute
    },
    
    // priority
    'INFORMATIVE',
    
    // duration
    duration,
    
    // callback
    function( err, success ) {
        if( err ) return Homey.error(err);
        Homey.log("Animation played succesfully");
	
    }
);
}

module.exports.init = init;

