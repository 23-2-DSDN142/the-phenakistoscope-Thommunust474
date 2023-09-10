const SLICE_COUNT = 18;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.draw_slits(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
pScope.load_image("earth" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 15, 15, 25);  //lets us draw the whole circle background, ignoring the boundaries


    var layer1 = new PLayer(sun);
    layer1.mode( RING );
    layer1.set_boundary( -150, -1050 );

    var layer2 = new PLayer(alien);
    layer2.mode( RING );
    layer2.set_boundary( 900, 1000 );

    var layer4 = new PLayer(moon);
    layer4.mode( RING );
    layer4.set_boundary( 150, -1200 );

    var layer5 = new PLayer(rocket);
    layer5.mode( SWIRL(1) );
    layer5.set_boundary( 100, 700 );

    var layer3 = new PLayer(centre);
    layer3.mode( RING );
    layer3.set_boundary( 0, 0 );

}

function sun(x, y, animation, pScope){ //draw sun
  
  scale(animation.wave(0.1));

  fill(243, 229, 171);
  ellipse(800,1850,400,400); // draw sun

}

function moon(x, y, animation, pScope){
  
  scale(animation.frame*22);
  fill(178, 190, 181);
  ellipse(-400,300,100,100); // draw moon

}
s
function centre(x, y, animation, pScope){

    scale(1.6);
  pScope.draw_image("earth",x,y);

}

function alien(x, y, animation, pScope){ //draw UFO

  scale(animation.wave(0.003));
  noStroke();
  fill(230,230,230);
  ellipse(1850,150,130,160);
  rect(1780,95,50,110);
  stroke(0);
  fill(240, 100, 100);
  ellipse(1850,115,25,25);
  ellipse(1850,150,25,25);
  ellipse(1850,185,25,25);

}

function rocket(x, y, animation, pScope){ //draw Rocket
  
  scale(animation.wave(0.1));

  fill(243, 249, 240);
  ellipse(0,0,100,150); // draw rocket main

  fill(255,0,0); //rocket boosters
  ellipse(-30,70,40,70); // left rocket
  ellipse(30,70,40,70); // right rocket
  fill(140,20,20);
  ellipse(30,53,40,30);
  ellipse(-30,53,-40,30);
  stroke(50,50,50);

  stroke(0);
  fill(160,160,200);
  ellipse(0, -40, 40, 40); // glass
  
  stroke(0); //rocket detail
  line(20,-5,-20,-5);
  line(20,5,-20,5);
  line(20,15,-20,15);
  line(20,25,-20,25);
}