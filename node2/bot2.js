console.log("node is starting");

var Twit=require('twit');
var config= require('./config');

var T = new Twit(config);
tweetIt();
setInterval(tweetIt,1000*20);

function tweetIt(){
  var r=Math.floor(Math.random()*100);
    var tweet= {
       status: '# this is the random number '+ r + " genarated from node.js"
     };
    T.post('statuses/update',tweet,tweeted);

    function tweeted(err, data, response) {
      if(err)
      {
         console.log("something went wrong");
    }
      else
      {console.log("success");}
    };
}
