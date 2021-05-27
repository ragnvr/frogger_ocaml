open Component_defs
open System_defs
open Ecs

let walls = Entity.Table.create 17

let create_horizontal name x y =
  let e = Entity.create () in
  Entity.Table.add walls e () ;
  Position.set e { x = x; y = y};
  Velocity.set e Vector.zero;
  Mass.set e infinity;
  Box.set e {width = Globals.canvas_width; height=Globals.wall_thickness };
  Name.set e name;
  Surface.set e Texture.red;

  (* Systems *)
  Collision_S.register e;
  (*Draw_S.register e;*)
  e
  
  let create_vertical name x y =
  let e = Entity.create () in
  Entity.Table.add walls e () ;
  Position.set e { x = x; y = y};
  Velocity.set e Vector.zero;
  Mass.set e infinity;
  Box.set e {width = Globals.wall_thickness; height= Globals.canvas_height};
  Name.set e name;
  Surface.set e Texture.red;

  (* Systems *)
  Collision_S.register e;
  (*Draw_S.register e;*)
  e
  
let _is_wall e = Entity.Table.mem walls e
