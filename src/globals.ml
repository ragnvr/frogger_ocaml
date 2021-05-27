let canvas_width = 800
let canvas_height = 600
let ball_size = 20
let wall_thickness = 0

let score_zone_width = 40
let score_zone_height = canvas_height - 2* wall_thickness

let paddle_width = 20
let paddle_height = 80

let frog_width = 50
let frog_height = 50

let truck_width = 100
let truck_height = 50

let car_width = 50
let car_height = 50

let missile_width = 50
let missile_height = 25




let player_init_y = float (canvas_height / 2 - paddle_height / 2)

let player1_init_x = float score_zone_width
let player2_init_x = float (canvas_width - score_zone_width - paddle_width)
let ball_init_y = float (canvas_height / 2 - ball_size / 2)
let ball_player1_init_x = player1_init_x +. float (paddle_width) +. 10.0
let ball_player2_init_x = player2_init_x -. 10.0 -. float ball_size

let frog_init_x =  float (canvas_width/2)
let frog_init_y = float (canvas_height / 2 ) +. float (canvas_height/3) +. 60.
let goal_init_x =  float (canvas_width/2) -. 400.
let goal_init_y = float (canvas_height / 2 ) -. float (canvas_height/3) -. 100.

let truck1_init_x = float (canvas_width/2) -. 400.
let truck1_init_y = float (canvas_height / 2 ) +. float (canvas_height/3) +. 10.
let truck2_init_x = float (canvas_width/2)
let truck2_init_y = float (canvas_height / 2 ) +. float (canvas_height/3) -. 90.

let truck3_init_x = float (canvas_width/2)
let truck3_init_y = float (canvas_height / 2 ) +. float (canvas_height/3) -. 390.


let car1_init_x = float (canvas_width/2) -. 400.
let car1_init_y = float (canvas_height / 2 ) +. float (canvas_height/3) -. 190.
let car2_init_x = float (canvas_width/2) 
let car2_init_y = float (canvas_height / 2 ) +. float (canvas_height/3) -. 290.
let tpin_init_x = float (canvas_width/2) -. 60.
let tpin_init_y = float (canvas_height / 2 ) +. float (canvas_height/3)
let tpout_init_x = float (canvas_width/2) 
let tpout_init_y = float (canvas_height / 2 ) +. float (canvas_height/3) -. 500.
let missile_init_x = float (canvas_width/2)
let missile_init_y = float (canvas_height / 2 ) +. float (canvas_height/3) -. 490.


let frog_size = 100

(*let frog = Frog.create "frog" 0.0 50.0;*)