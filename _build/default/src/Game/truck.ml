open Component_defs
open System_defs
open Ecs


let change_surface e img =
    Surface.set e (Texture.create_animation img 4 1 320 160 320 160)


let create name  imageright imageleft  x y =
  let e = Entity.create () in
  Position.set e { x = x; y = y};
  Velocity.set e {x = +300.; y = 0.0};
  Mass.set e infinity;
  Box.set e {width = Globals.truck_width; height=Globals.truck_height };
  Name.set e name;
  (*Surface.set e Texture.black;*)
 (* Surface.set e (Texture.create_image img 10 30);*)
  (*Surface.set e (Texture.create_animation imageright  8 1 60 66 60 66);*)
    Surface.set e (Texture.create_animation imageright  4 1 320 160 320 160);

  
  CollisionResolver.set e (fun _ e2 -> let name = Name.get e2 in
  if (name = "wall_right"||name="tpin") then change_surface e imageleft else if name =  "wall_left" then 
  change_surface e imageright);
  
  
  Collision_S.register e;
  Move_S.register e;
  Draw_S.register e;
  e

   
  