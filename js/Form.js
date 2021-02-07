class Form 
{
    constructor() {}
  
    display()
    {
      var title = createElement('h1')
      title.html("Car Racing Game");
      title.position(300, 50);
      
      var input = createInput("Enter your name here");
      var button = createButton('Play');
     
      
      input.position(300, 150);
      button.position(300, 220);

      button.mousePressed(function()
                          {
                               input.hide();
                               button.hide();
  
                                var name =  input.value();

                                playerCount= playerCount+1;

                               player.updateName(name);
                               player.updateCount(playerCount);

                                var greeting = createElement('h2');
                                greeting.html("Hello " +  name);
                                greeting.position(300, 100);
                         });

    }
}
