open Component_defs
open System_defs
open Ecs

let change_surface e img =
    Surface.set e (Texture.create_image img 333 217  )


let create name  imageright imageleft  x y =
  let e = Entity.create () in
  Position.set e { x = x; y = y};
  Velocity.set e {x = +300.; y = 0.0};
  Mass.set e infinity;
  Box.set e {width = Globals.missile_width; height=Globals.missile_height };
  Name.set e name;
  (*Surface.set e Texture.gray;*)
   Surface.set e (Texture.create_image imageright 333 217  );
   
  CollisionResolver.set e (fun _ e2 -> let name = Name.get e2 in
  if (name = "wall_right") then change_surface e imageleft else if name =  "wall_left" then 
  change_surface e imageright);

  
   (* systems *)
  Collision_S.register e;
  Move_S.register e;
  Draw_S.register e;
  e