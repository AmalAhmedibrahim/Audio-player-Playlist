var PlayList = '<div class="SongInfo"> ';

function getData(dataURL){
  var Data=  $.getJSON(dataURL,function(data){


           $.each( data, function( key1, val1 ) {
            $.each(val1 ,function( key2, val2 ) {
              addData(val2.name,val2.artist,val2.url);
              //console.log(val2.url);

             });
          });

          PlayList += '</div>';
          $('#Container').html(PlayList);
  });

}
function addData(name,artist,url){
  PlayList += '<ul><li>'
  //PlayList += '<li>'
  PlayList += '<h1>'+ name +'</h1>';
  PlayList += '<audio src="'+url+ '" controls autoplay> </audio>' ;
  PlayList += '<h2>'+ artist +'</h2>';
  PlayList += '<p>'+'  '+'</p>';
  PlayList +='</li>'
  PlayList +='<hr>'
  PlayList += '</ul></div>';
  $('#Container').html(PlayList);
}


x= getData('https://api.myjson.com/bins/11qzy0');
addData('Eye of the tiger','Survivor',"http://thenomadgeek.com/pa-test/wp-content/uploads/2018/09/eye-of-the-tiger.mp3");
