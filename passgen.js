/**
GLOBAL VARIABLES
**/
var levelNames = ["kids","easy","medium","hard"];
var setting;
var categories;
var currentLevel = 0;
var selectedSalt = [];

var kidsCategories = ["animal","fruit","kid","monster"];
var kidssettings = {
  "animal" : [
              {"img":"kids/animal/bird.png","saltcode":"101"},
              {"img":"kids/animal/black-cat.png","saltcode":"102"},
              {"img":"kids/animal/chicken.png","saltcode":"103"},
              {"img":"kids/animal/cow.png","saltcode":"104"},
              {"img":"kids/animal/dog.png","saltcode":"105"},
              {"img":"kids/animal/jellyfish.png","saltcode":"106"},
              {"img":"kids/animal/lobster.png","saltcode":"107"},
              {"img":"kids/animal/squirrel.png","saltcode":"108"},
              {"img":"kids/animal/turtle.png","saltcode":"109"},

          ],
  "fruit"  : [
              {"img":"kids/fruit/apple.png","saltcode":"201"},
              {"img":"kids/fruit/banana.png","saltcode":"202"},
              {"img":"kids/fruit/cherry.png","saltcode":"203"},
              {"img":"kids/fruit/grape.png","saltcode":"204"},
              {"img":"kids/fruit/lemon.png","saltcode":"205"},
              {"img":"kids/fruit/orange.png","saltcode":"206"},
              {"img":"kids/fruit/pear.png","saltcode":"207"},
              {"img":"kids/fruit/strawberry.png","saltcode":"208"},
              {"img":"kids/fruit/watermelon.png","saltcode":"209"},
          ],
  "kid" : [
              {"img":"kids/kid/astronaut.png","saltcode":"301"},
              {"img":"kids/kid/chef.png","saltcode":"302"},
              {"img":"kids/kid/girl.png","saltcode":"303"},
              {"img":"kids/kid/kid.png","saltcode":"304"},
              {"img":"kids/kid/lady.png","saltcode":"305"},
              {"img":"kids/kid/mom.png","saltcode":"306"},
              {"img":"kids/kid/pirate.png","saltcode":"307"},
              {"img":"kids/kid/prince.png","saltcode":"308"},
              {"img":"kids/kid/princess.png","saltcode":"309"},
          ],
  "monster" : [
              {"img":"kids/monster/art.png","saltcode":"401"},
              {"img":"kids/monster/chet.png","saltcode":"402"},
              {"img":"kids/monster/cute.png","saltcode":"403"},
              {"img":"kids/monster/fish.png","saltcode":"404"},
              {"img":"kids/monster/jsullivan.png","saltcode":"405"},
              {"img":"kids/monster/mike.png","saltcode":"406"},
              {"img":"kids/monster/randy.png","saltcode":"407"},
              {"img":"kids/monster/scary.png","saltcode":"408"},
              {"img":"kids/monster/terry.png","saltcode":"409"},
          ],
};


function createPassArea(settings) {
    for (var i=0;i<settings.length;i++) {
      category = categories[(currentLevel+1)%settings.length];
      console.log(category);
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
    categories = kidsCategories;
    createPassArea(kidssettings.animal);
  }else{
    //OTHER LEVELS 
  }

}


