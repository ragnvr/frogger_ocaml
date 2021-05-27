open Ecs
open Gfx
open Component_defs

let bg_img = Gfx.load_image "images/bgimg.png"

(*let frog_img = Gfx.load_image "images/grenouille.png"*)
let frog_animation_droit = Gfx.load_image "images/frog-droite.png"
let frog_animation_haut  = Gfx.load_image "images/frog-haut.png"
let frog_animation_bas = Gfx.load_image "images/frog-bas.png"
let frog_animation_gauche = Gfx.load_image "images/frog-gauche.png"
let missileleftimg = Gfx.load_image "images/missileleftimg.png"
let missilerightimg  = Gfx.load_image "images/missilerightimg.png"

let sharkright = Gfx.load_image "images/sharkright.png"
let sharkleft = Gfx.load_image "images/sharkleft.png"

let frog_animation = Gfx.load_image "images/frog-bas.png"

let goalimg = Gfx.load_image "images/goalimg.jpg"

let carimg = Gfx.load_image "images/carimg.png"
(*let frog = Frog.create "frog" frog_img 50.0 50.0*)




let init_game _dt =
  System.init_all ();
 
 (*let player1 =
    Player.create "player1" Globals.player1_init_x Globals.player_init_y
  in
  let player2 =
    Player.create "player2" Globals.player2_init_x Globals.player_init_y
  in*)
  
  (*let frog = Frog.create "frog"  Globals.frog_init_x Globals.frog_init_y in*)
  
(* let frog = Frog.create "frog" frog_img Globals.frog_init_x Globals.frog_init_y in*)
  let missile = Missile.create "missile"  missilerightimg missileleftimg Globals.missile_init_x Globals.missile_init_y  in
  let frog = Frog.create "frog" frog_animation (* rajouté pour 4.7 *)
                      Globals.frog_init_x Globals.frog_init_y in
  let goal = Goal.create "goal" Globals.goal_init_x Globals.goal_init_y goalimg in
  
  (*let car = Car.create "car" Globals.car_init_x Globals.car_init_y in *)
  (*let truck1 = Truck.create "truck1" Globals.truck1_init_x Globals.truck1_init_y in*)
  let truck1 = Truck.create "truck1" sharkright sharkleft  Globals.truck1_init_x Globals.truck1_init_y in
  
  let truck2 = Truck.create "truck2" sharkright sharkleft Globals.truck2_init_x Globals.truck2_init_y in
  let truck3 = Truck.create "truck3" sharkright sharkleft Globals.truck3_init_x Globals.truck3_init_y in
  
  let car1 = Car.create "car1" Globals.car1_init_x Globals.car1_init_y carimg  in
  let car2 = Car.create "car2" Globals.car2_init_x Globals.car2_init_y carimg  in
  let tpin =  Tpin.create "tpin" Globals.tpin_init_x Globals.tpin_init_y in
  let tpout =  Tpout.create "tpout" Globals.tpout_init_x Globals.tpout_init_y in
  
  
  let _wall_top = Wall.create_horizontal "wall_top" 0.0 0.0 in
  let _wall_bottom = Wall.create_horizontal "wall_bottom" 0.0 600.0 in
  let _wall_left = Wall.create_vertical "wall_left" 0.0 0.0 in
  let _wall_right = Wall.create_vertical "wall_right" 800.0 20.0 in
  let _bg = Bg.create bg_img in
  
  (*let _bg = Bg.create bg_img in (* Question 3.8 *)*)
  
  (*
  let _iwall_left = Score_zone.create "wall_left" player2 0.0 20.0 in
  let _iwall_rght = Score_zone.create "wall_right" player1 760.0 20.0 in
  *)

  
  (*let _iwall_left = Score_zone.create "wall_left" frog 50.0 20.0 in*)
  

 (* let _bg = Bg.create bg_img in*) (* Question 3.8 *)
 
  Input_handler.register_command (KeyDown "z") (fun () -> Frog.move_up frog frog_animation_haut );
  Input_handler.register_command (KeyDown "s") (fun () -> Frog.move_down frog frog_animation_bas);
  Input_handler.register_command (KeyDown "d") (fun () -> Frog.move_right frog frog_animation_droit );
  Input_handler.register_command (KeyDown "q") (fun () -> Frog.move_left frog frog_animation_gauche );

  Input_handler.register_command (KeyUp "z") (fun () -> Frog.stop frog);
  Input_handler.register_command (KeyUp "s") (fun () -> Frog.stop frog);
  Input_handler.register_command (KeyUp "d") (fun () -> Frog.stop frog);
  Input_handler.register_command (KeyUp "q") (fun () -> Frog.stop frog);


  Input_handler.register_command (KeyDown "a") (fun () -> Frog.reset frog Globals.frog_init_x Globals.frog_init_y);


  Game_state.init frog goal truck1 truck2 truck3 car1 car2 missile tpin tpout;

  
  false

let chain_functions f_list =
  let funs = ref f_list in
  fun dt -> match !funs with
               [] -> false
              | f :: ll ->
                 if f dt then true
                 else begin
                  funs := ll;
                  true
                 end
          
let update dt =
  (* Update all systems *)
  System.update_all dt;
  (* Repeat indefinitely *)
  false

let game_over _dt = false

let play_game dt =
  (* Update all systems *)
  System.update_all dt;
  let frog = Game_state.get_frog () in
  let goal = Game_state.get_goal () in
  let truck1 = Game_state.get_truck1 () in
  let truck2 = Game_state.get_truck2 () in
  let truck3 = Game_state.get_truck3 () in
  
  let car1 = Game_state.get_car1 () in
  let car2 = Game_state.get_car2 () in
  let fpos = Position.get frog in
  let fbox = Box.get frog in
  let gpos = Position.get goal in
  let gbox = (*Box.get goal*)Rect.{width = 10;height = 10} in
  let tpos1 = Position.get truck1 in
  let tbox1 = Box.get truck1 in
  let tpos2 = Position.get truck2 in
  let tbox2 = Box.get truck2 in
  let tpos3 = Position.get truck3 in
  let tbox3 = Box.get truck3 in
  
  let cbox1 = Box.get car1 in
  let cpos1 = Position.get car1 in
  let cbox2 = Box.get car2 in
  let cpos2 = Position.get car2 in
  if Rect.intersect fpos fbox gpos gbox || Rect.intersect fpos fbox tpos1 tbox1 || Rect.intersect fpos fbox tpos2 tbox2 || Rect.intersect fpos fbox cpos1 cbox1 || Rect.intersect fpos fbox cpos2 cbox2 || Rect.intersect fpos fbox tpos3 tbox3 then false else true
  (*Tester les conditions d'arrêt
  si pas d'arrêt renvoyer True
  si arrêt: enregistrer la condition dans game_state et renvoyer false*)
  

  
  
  
  (*Game_state.get_score1 () < 10 && Game_state.get_score2 () < 10*)
  
let update_loop () = Gfx.main_loop update

let load_graphics _dt =
   not (Gfx.image_ready frog_animation)|| not(Gfx.image_ready goalimg) || not (Gfx.image_ready carimg) || not (Gfx.image_ready bg_img )   (* question 3.6 *)


(*
let () =
  init ();
  update_loop ()
  false 
  *)
  
let () = Gfx.main_loop (
        chain_functions [
           load_graphics; (* à rajouter pour question 3.6 *)
            init_game;
            play_game;
            
            game_over 
        ])
 