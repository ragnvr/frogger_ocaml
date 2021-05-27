(* Question 3.7 *)
open Ecs
open Component_defs
open System_defs

let create img =
  let e = Entity.create () in
  Position.set e Vector.zero;
  Box.set e { width = Globals.canvas_width; height = Globals.canvas_height};
  Surface.set e (Texture.create_image img Globals.canvas_width Globals.canvas_height);
  
  Draw_S.register e;
  e
