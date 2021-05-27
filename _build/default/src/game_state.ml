open Ecs
type turn = Playing | Win
type end_game = Goal | Truck

type t = {

  frog : Entity.t;
  (*player1 : Entity.t;
  player2 : Entity.t;
  mutable score1 : int;
  mutable score2 : int;*)
  car1 : Entity.t;
  car2 : Entity.t;
  goal : Entity.t;
  truck1 : Entity.t;
  truck2 : Entity.t;
  truck3 : Entity.t;
  missile : Entity.t;
  tpin : Entity.t;
  tpout : Entity.t;
  _wall_right : Entity.t;
  mutable end_game : end_game;
  mutable turn : turn;
}

let state = ref {
  frog = Entity.dummy;
  (*player1 = Entity.dummy;
  player2 = Entity.dummy;
  score1 = 0;
  score2 = 0;*)
  goal = Entity.dummy;
  car1 = Entity.dummy;
  car2 = Entity.dummy;
  truck1 = Entity.dummy;
  truck2 = Entity.dummy;
  truck3 = Entity.dummy;
  missile = Entity.dummy;
  tpin = Entity.dummy;
  tpout = Entity.dummy;
  _wall_right = Entity.dummy;
  end_game = Goal;
  turn = Playing; (*PlayerLost1*)
}

let get_frog () = !state.frog
(*let get_player1 () = !state.player1
let get_player2 () = !state.player2
let get_score1 () = !state.score1
let get_score2 () = !state.score2*)
let get_goal () = !state.goal
let get_turn () = !state.turn
let get_end_game () = !state.end_game
let get_truck1 () = !state.truck1
let get_truck2 () = !state.truck2
let get_truck3 () = !state.truck3
let get_car1 () = !state.car1
let get_car2 () = !state.car2
let get_missile () = !state.missile
let get_tpin () = !state.tpin
let get_tpout () = !state.tpout
let get__wall_right () = !state._wall_right

let play () = !state.turn <- Playing
(*let player_score e =
  if e == !state.player1 then begin
    !state.score1 <- !state.score1 + 1;
    !state.turn <- Player2Lost
  end else if e == !state.player2 then begin
    !state.score1 <- !state.score2 + 1;
    !state.turn <- Player1Lost
  end else
    failwith (Format.asprintf "Invalid player Entity %a" Entity.pp e)*)


let init f g t1 t2 t3 c1 c2 m tpi tpo =
  state := { !state with frog = f; goal = g;truck1 = t1;truck2 = t2;truck3 = t3;car1 = c1;car2 = c2;missile = m;tpin = tpi;tpout = tpo}