open Component_defs
open System_defs
open Ecs



let create name x y img =
  let e = Entity.create () in
  (* components *)
  Position.set e {x = x; y = y };
  Box.set e {width = 40 ; height = 40};
  Velocity.set e { x = 0.0; y = 0.0 };
  Mass.set e infinity;
  Name.set e name;
  Surface.set e (Texture.create_image img 679 614  );
  (*Surface.set e Texture.red;*)

  (* systems *)
  Draw_S.register e;
  e