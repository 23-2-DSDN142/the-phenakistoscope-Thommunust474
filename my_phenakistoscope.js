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

  new PLayer(null, 10, 10, 10);  //lets us draw the whole circle background, ignoring the boundaries


    var layer1 = new PLayer(sun);
    layer1.mode( RING );
    layer1.set_boundary( -150, -1050 );

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

function sun(x, y, animation, pScope){
  
  scale(animation.wave(0.1));

  fill(243, 229, 171);
  ellipse(800,1900,400,400); // draw sun
  triangle(100,1000,2000,500);

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

function rocket(x, y, animation, pScope){
  
  scale(animation.wave(0.1));

  fill(243, 249, 240);
  ellipse(0,0,100,150); // draw rocket main
  fill(255,0,0);
  ellipse(-30,70,40,70); // left rocket
  ellipse(30,70,40,70); // right rocket
  stroke(50,50,50);
  fill(200,200,200);
  ellipse(0, -40, 40, 40); // glass

}