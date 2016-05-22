//"levelname", "folder" ,"size"

//level names for 
var levelNames = ["kids","easy","medium","hard"];

var categories = [{
  "kids": [{
    "animal" : [
      "bird","black-cat","chicken","cow","dog","jellyfish","lobster","squirrel","tuna","turtle"
    ],
    "fruit": [],
    "kid": [],
  }],
  "easy": [{}],
  "medium": [{}],
  "hard": [{}],
}];



function getFirstJson(){
  var first = [{"img":"animal/bird.png", "category":"animal", "saltcode" :"100"}, 
          {"img":"fruit/apple.png", "category":"fruit", "saltcode" :"200"}, 
          {"img":"test3", "category":"fruit", "saltcode" :"300"}];
  return first;
};

console.log(Object.keys(categories[0].kids[0])[0]);

var settings = {
  "first" : [ {"img": "kids/animal/bird.png","category":"animal","saltcode":"100"},
              {"img": "kids/fruit/apple.png","category":"fruit","saltcode":"200"},
              {"img": "kids/kid/astronaut.png","category":"kid","saltcode":"300"},
            ],

  "animal" : [{"img":"kids/animal/bird.png","category":"animal","saltcode":"101"},
              {"img":"kids/animal/black-cat.png","category":"animal","saltcode":"102"},
              {"img":"kids/animal/chicken.png","category":"animal","saltcode":"103"},
            ],
  "fruit"  : [{"img":"kids/fruit/apple.png","category":"fruit","saltcode":"201"},
              {"img":"kids/fruit/banana.png","category":"fruit","saltcode":"202"},
              {"img":"kids/fruit/cherry.png","category":"fruit","saltcode":"203"},
            ],
  "kid" : [{"img":"kids/kid/astronaut.png","category":"kid","saltcode":"301"},
           {"img":"kids/kid/chef.png","category":"kid","saltcode":"302"},
           {"img":"kids/kid/girl.png","category":"kid","saltcode":"303"},
          ],
};

var settingsasd = { 
      "first": getFirstJson(),
      "animal":[
        {"img2":"123", "category":"fruit","saltcode" :"101"},
      ],
      "fruit":[
        {"img3":"id","category":"animal","saltcode" :"201"},
      ]
};




var currentLevel =0;

var selectedImg = [];

function createPassArea(settings) {
  // fo
    console.log(settings);
    for (var i=0;i<settings.length;i++) {
      category = settings[i].category
      img = settings[i].img
      $('#passArea').append('<div id="'+category+'" class="passImg"><img src="img/'+img+'"></div>');

    }

  

};

$(document).on('click', '.passImg', function(){ 
  currentLevel=currentLevel+1;
  // Holds the product ID of the clicked element
    console.log('lenght of settings '+Object.keys(settings).length)
  if(currentLevel == Object.keys(settings).length) {
      $('#passArea').empty();
      console.log('secimtamam');
      console.log('selectedImg'+selectedImg);
    } else {
      $('#passArea').empty();
      category=jQuery(this).attr("id");
      console.log('secilen ID '+category);
      
      console.log('current level '+ currentLevel);
      selectedImg[selectedImg.length]=$(this).find('img:first').attr('img');
      console.log('select Img List '+selectedImg);
      createPassArea(settings[category]);

    }
  });



function createRandomPass() {

}


