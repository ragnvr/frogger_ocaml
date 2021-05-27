open Component_defs
open System_defs
open Ecs

 let reset_car e  y  =
  Position.set e { x = 0.0; y = y};
  Velocity.set e { x = 600.0; y = 0.0 }
 

let create name x y img  =
  let e = Entity.create () in
  Position.set e { x = x; y = y};
  Velocity.set e {x = +600.; y = 0.0};
  Mass.set e infinity;
  Box.set e {width = Globals.car_width; height=Globals.car_height };
  Name.set e name;
  Surface.set e (Texture.create_animation img  8 1 60 66 60 66);
 
  (*Surface.set e Texture.black;*)
  
  (*
  CollisionResolver.set e (fun e1 e2 -> if CollisionResolver.has_component e2 && Name.get e1 == "car1" then reset_car e1 Globals.car1_init_x Globals.car1_init_y  else if CollisionResolver.has_component e2 && Name.get e1 == "car2" then reset_car e1 Globals.car2_init_x Globals.car2_init_y);
*)
  CollisionResolver.set e (fun _ e2 -> let name = Name.get e2 in
  if name = "wall_right" then reset_car e y);
  
  
   (* systems *)
  Collision_S.register e;
  Move_S.register e;
  Draw_S.register e;
  e