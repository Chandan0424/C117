quick_draw_data_set= ['pen','paper','book','bottle']
random_number= Math.floor((Math.random()*quick_draw_data_set.length)+1)
Element_of_array= quick_draw_data_set[random_number];
timer_counter= 0;
timer_check="";
drawn_sketch="";
answer_holder="";
score= 0;

console.log(Element_of_array);

function preload(){}

function setup(){
    cavas=createCanvas(400,400);
    cavas.center();
}

function draw(){}