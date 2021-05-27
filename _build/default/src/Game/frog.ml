open Component_defs
open System_defs
open Ecs

let random_dir tmin tmax n =
  let t = tmin +. Random.float (tmax -. tmin) in
  let x = n *. cos t in
  let y = n *. sin t in
  Vector.{ x = x; y = y}
let pi = 2. *. asin 1.0

let reset e x y  =
  Velocity.set e { x = 0.0; y = 0.0 };
  Position.set e { x = x; y = y}



let create name img x y =
  let e = Entity.create () in
  (* components *)
  Position.set e {x = x; y = y };
  Box.set e {width = 40 ; height = 40};
  Velocity.set e { x = 0.0; y = 0.0 };
  Mass.set e 10.0;
  Name.set e name;
 (* Surface.set e (Texture.create_image img 10 30);*)
  Surface.set e (Texture.create_animation img 3 1 25 35 Globals.frog_size Globals.frog_size);
  
  
  
  CollisionResolver.set e (fun _ e2 -> let name = Name.get e2 in
  if name = "tpin" then reset e Globals.tpout_init_x Globals.tpout_init_y  else if name ="missile" then reset e       Globals.frog_init_x Globals.frog_init_y);
  
  (*
  CollisionResolver.set e (fun _ e2 -> let name = Name.get e2 in
  if name = "missile" then reset e Globals.frog_init_x Globals.frog_init_y );
  *)


  (* systems *)
  Collision_S.register e;
  Control_S.register e;
  Move_S.register e;
  Draw_S.register e;
  e




(*let create name x y =
  let e = Entity.create () in
  Position.set e { x = x; y = y};
  Velocity.set e Vector.zero;
  Mass.set e infinity;
  Box.set e {width = Globals.frog_width; height=Globals.frog_height };
  Name.set e name;
  Surface.set e Texture.black;

  
   (* systems *)
  Collision_S.register e;
  Control_S.register e;
  Draw_S.register e;
  Move_S.register e;
  e
 *)



 let reset e x y  =
  Velocity.set e { x = 0.0; y = 0.0 };
  Position.set e { x = x; y = y}
  
 (*let launch e =

    match Game_state.get_turn () with
    Playing -> ()
    | _ ->
      let v = random_dir (~-.pi/. 3.0) (pi /. 3.0) 200.0 in
      Velocity.set e v;
      Game_state.play()*)
      
      
let move_up e img =
    (*if Game_state.get_turn () == Playing then*)
    Surface.set e (Texture.create_animation img 3 1 25 35 Globals.frog_size Globals.frog_size);
    Velocity.set e { x = 0.0; y = -300.0 }
  
let move_down e img =
  (*if Game_state.get_turn () == Playing then*)
    Surface.set e (Texture.create_animation img 3 1 25 35 Globals.frog_size Globals.frog_size);
    Velocity.set e { x = 0.0; y = 300.0 }
    
let move_right e img =
    Surface.set e (Texture.create_animation img 3 1 25 35 Globals.frog_size Globals.frog_size);
    Velocity.set e { x = 300.0; y = 0.0 }    
    
    
let move_left e img =
    Surface.set e (Texture.create_animation img 3 1 25 35 Globals.frog_size Globals.frog_size);
    Velocity.set e { x = -300.0; y = 0.0 }    


let stop e =
  Velocity.set e Vector.zero
