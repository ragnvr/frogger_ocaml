open Ecs
type turn = Playing | Win
type end_game = Goal | Truck
val init : Entity.t -> Entity.t -> Entity.t -> Entity.t -> Entity.t -> Entity.t -> Entity.t -> Entity.t -> Entity.t -> Entity.t -> unit
val get_turn : unit -> turn
val play : unit -> unit
(*val player_score : Entity.t -> unit*)
(*val get_player1 : unit -> Entity.t
val get_player2 : unit -> Entity.t*)
val get_frog : unit -> Entity.t
val get_goal : unit -> Entity.t
val get_truck1 : unit -> Entity.t
val get_truck2 : unit -> Entity.t
val get_truck3 : unit -> Entity.t
val get_car1 : unit -> Entity.t
val get_car2 : unit -> Entity.t
val get_missile : unit -> Entity.t
val get_tpin : unit -> Entity.t
val get_tpout : unit -> Entity.t
val get__wall_right : unit -> Entity.t
val get_end_game : unit -> end_game