/**
GLOBAL VARIABLES
**/
var levelNames = ["kids","easy","medium","hard"];
var setting;
var currentLevel = 0;
var selectedSalt = [];

var kidssettings = {
  "animal" : [
              {"img":"kids/animal/bird.png","category":"fruit","saltcode":"101"},
              {"img":"kids/animal/black-cat.png","category":"fruit","saltcode":"102"},
              {"img":"kids/animal/chicken.png","category":"fruit","saltcode":"103"},
              {"img":"kids/animal/cow.png","category":"fruit","saltcode":"104"},
              {"img":"kids/animal/dog.png","category":"fruit","saltcode":"105"},
              {"img":"kids/animal/jellyfish.png","category":"fruit","saltcode":"106"},
              {"img":"kids/animal/lobster.png","category":"fruit","saltcode":"107"},
              {"img":"kids/animal/squirrel.png","category":"fruit","saltcode":"108"},
              {"img":"kids/animal/turtle.png","category":"fruit","saltcode":"109"},

          ],
  "fruit"  : [
              {"img":"kids/fruit/apple.png","category":"kid","saltcode":"201"},
              {"img":"kids/fruit/banana.png","category":"kid","saltcode":"202"},
              {"img":"kids/fruit/cherry.png","category":"kid","saltcode":"203"},
              {"img":"kids/fruit/grape.png","category":"kid","saltcode":"204"},
              {"img":"kids/fruit/lemon.png","category":"kid","saltcode":"205"},
              {"img":"kids/fruit/orange.png","category":"kid","saltcode":"206"},
              {"img":"kids/fruit/pear.png","category":"kid","saltcode":"207"},
              {"img":"kids/fruit/strawberry.png","category":"kid","saltcode":"208"},
              {"img":"kids/fruit/watermelon.png","category":"kid","saltcode":"209"},
          ],
  "kid" : [
              {"img":"kids/kid/astronaut.png","category":"monster","saltcode":"301"},
              {"img":"kids/kid/chef.png","category":"monster","saltcode":"302"},
              {"img":"kids/kid/girl.png","category":"monster","saltcode":"303"},
              {"img":"kids/kid/kid.png","category":"monster","saltcode":"304"},
              {"img":"kids/kid/lady.png","category":"monster","saltcode":"305"},
              {"img":"kids/kid/mom.png","category":"monster","saltcode":"306"},
              {"img":"kids/kid/pirate.png","category":"monster","saltcode":"307"},
              {"img":"kids/kid/prince.png","category":"monster","saltcode":"308"},
              {"img":"kids/kid/princess.png","category":"monster","saltcode":"309"},
          ],
  "monster" : [
              {"img":"kids/monster/art.png","category":"animal","saltcode":"401"},
              {"img":"kids/monster/chet.png","category":"animal","saltcode":"402"},
              {"img":"kids/monster/cute.png","category":"animal","saltcode":"403"},
              {"img":"kids/monster/fish.png","category":"animal","saltcode":"404"},
              {"img":"kids/monster/jsullivan.png","category":"animal","saltcode":"405"},
              {"img":"kids/monster/mike.png","category":"animal","saltcode":"406"},
              {"img":"kids/monster/randy.png","category":"animal","saltcode":"407"},
              {"img":"kids/monster/scary.png","category":"animal","saltcode":"408"},
              {"img":"kids/monster/terry.png","category":"animal","saltcode":"409"},
          ],
};


function createPassArea(settings) {
    for (var i=0;i<settings.length;i++) {
      category = settings[i].category;
      saltcode = settings[i].saltcode;
      img = settings[i].img;
      $('#passArea').append('<div id="'+saltcode+'" category = "'+category+'" class="passImg"><img src="img/'+img+'"></div>');
    }
};

$(document).on('click', '.passImg', function(){ 
  currentLevel = currentLevel+1;
  // Holds the product ID of the clicked element
  $('#passArea').empty();
      category = jQuery(this).attr("category");
      saltcode = jQuery(this).attr("id");
      selectedSalt[currentLevel] = saltcode;
      console.log('Salt List :'+ selectedSalt);
  
  if(currentLevel != Object.keys(setting).length) {
      createPassArea(setting[category]);
    }else{
      console.log(createRandomPass());
    }
  });



function createRandomPass() {
  var pass = "";
    for(salt in selectedSalt){
      console.log(pass);
      pass += selectedSalt[salt];
    }
  return pass;
}

function initPassCreator(level){
  if (level == "kids" ){
    setting = kidssettings;
    createPassArea(kidssettings.animal);
  }else{
    //OTHER LEVELS 
  }

}


