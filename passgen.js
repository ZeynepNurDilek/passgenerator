//"levelname", "folder" ,"size"
var settings ={ 
      "first":[
          {"img":"test", "category":"animal"}, 
          {"img":"test2", "category":"fruit"}, 
          {"img":"test3", "category":"fruit"}
      ],
      "animal":[
        {"img2":"123", "category":"fruit"}
      ],
      "fruit":[
        {"img3":"id","category":"animal"}
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






$(document).ready(function() {


  createPassArea(settings.first);
});