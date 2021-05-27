(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_mul=runtime.caml_mul,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    function caml_call10(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
     {return f.length == 10
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9])}
    var
     global_data=runtime.caml_get_global_data(),
     zero=[254,0.,0.],
     name=caml_new_string("position"),
     name$0=caml_new_string("velocity"),
     name$1=caml_new_string("mass"),
     name$2=caml_new_string("box"),
     name$3=caml_new_string("texture"),
     name$4=caml_new_string("name"),
     name$5=caml_new_string("resolver"),
     name$6=caml_new_string("owner"),
     cst_game_canvas_800x600=caml_new_string("game_canvas:800x600:"),
     cst_wall_right=caml_new_string("wall_right"),
     cst_tpin=caml_new_string("tpin"),
     cst_wall_left=caml_new_string("wall_left"),
     cst_wall_right$0=caml_new_string("wall_right"),
     cst_wall_left$0=caml_new_string("wall_left"),
     cst_wall_right$1=caml_new_string("wall_right"),
     cst_tpin$0=caml_new_string("tpin"),
     cst_missile=caml_new_string("missile"),
     gbox=[0,10,10],
     cst_missile$0=caml_new_string("missile"),
     cst_frog=caml_new_string("frog"),
     cst_goal=caml_new_string("goal"),
     cst_truck1=caml_new_string("truck1"),
     cst_truck2=caml_new_string("truck2"),
     cst_truck3=caml_new_string("truck3"),
     cst_car1=caml_new_string("car1"),
     cst_car2=caml_new_string("car2"),
     cst_tpin$1=caml_new_string("tpin"),
     cst_tpout=caml_new_string("tpout"),
     cst_wall_top=caml_new_string("wall_top"),
     cst_wall_bottom=caml_new_string("wall_bottom"),
     cst_wall_left$1=caml_new_string("wall_left"),
     cst_wall_right$2=caml_new_string("wall_right"),
     cst_images_bgimg_png=caml_new_string("images/bgimg.png"),
     cst_images_frog_droite_png=caml_new_string("images/frog-droite.png"),
     cst_images_frog_haut_png=caml_new_string("images/frog-haut.png"),
     cst_images_frog_bas_png=caml_new_string("images/frog-bas.png"),
     cst_images_frog_gauche_png=caml_new_string("images/frog-gauche.png"),
     cst_images_missileleftimg_png=
      caml_new_string("images/missileleftimg.png"),
     cst_images_missilerightimg_png=
      caml_new_string("images/missilerightimg.png"),
     cst_images_sharkright_png=caml_new_string("images/sharkright.png"),
     cst_images_sharkleft_png=caml_new_string("images/sharkleft.png"),
     cst_images_frog_bas_png$0=caml_new_string("images/frog-bas.png"),
     cst_images_goalimg_jpg=caml_new_string("images/goalimg.jpg"),
     cst_images_carimg_png=caml_new_string("images/carimg.png"),
     Stdlib_format=global_data.Stdlib__format,
     Gfx=global_data.Gfx,
     Stdlib_array=global_data.Stdlib__array,
     Ecs_Component=global_data.Ecs__Component,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_float=global_data.Stdlib__float,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib_option=global_data.Stdlib__option,
     Stdlib=global_data.Stdlib,
     Ecs_System=global_data.Ecs__System,
     Ecs_Entity=global_data.Ecs__Entity,
     Stdlib_random=global_data.Stdlib__random,
     Game=[0];
    caml_register_global(132,Game,"Game__");
    var
     _a_=
      [0,
       [12,40,[8,0,0,0,[11,caml_new_string(", "),[8,0,0,0,[12,41,0]]]]],
       caml_new_string("(%f, %f)")],
     _b_=
      [0,
       [11,
        caml_new_string("[w:"),
        [4,0,0,0,[11,caml_new_string(",h:"),[4,0,0,0,[12,93,0]]]]],
       caml_new_string("[w:%d,h:%d]")],
     _c_=[254,300.,0.],
     _d_=[0,40,40],
     _e_=[254,0.,0.],
     _f_=[0,40,40],
     _g_=[254,0.,0.],
     _i_=[254,0.,100.],
     _h_=[254,0.,-100.],
     _j_=[254,300.,0.],
     _k_=[0,40,40],
     _l_=[254,0.,0.],
     _n_=[254,600.,0.],
     _m_=[254,600.,0.],
     _w_=[254,-300.,0.],
     _v_=[254,300.,0.],
     _u_=[254,0.,300.],
     _t_=[254,0.,-300.],
     _s_=[254,0.,0.],
     _q_=[0,40,40],
     _r_=[254,0.,0.],
     _p_=[254,0.,0.],
     _x_=[1,caml_new_string("z")],
     _y_=[1,caml_new_string("s")],
     _z_=[1,caml_new_string("d")],
     _A_=[1,caml_new_string("q")],
     _B_=[0,caml_new_string("z")],
     _C_=[0,caml_new_string("s")],
     _D_=[0,caml_new_string("d")],
     _E_=[0,caml_new_string("q")],
     _F_=[1,caml_new_string("a")];
    function add(a,b){return [254,a[1] + b[1],a[2] + b[2]]}
    function sub(a,b){return [254,a[1] - b[1],a[2] - b[2]]}
    function mult(k,a){return [254,k * a[1],k * a[2]]}
    function dot(a,b){return a[1] * b[1] + a[2] * b[2]}
    function norm(a){return Math.sqrt(dot(a,a))}
    function normalize(a){return mult(1. / norm(a),a)}
    function pp(fmt,a)
     {return caml_call4(Stdlib_format[123],fmt,_a_,a[1],a[2])}
    function is_zero(v)
     {var _aR_=v[1] == 0.?1:0,_aS_=_aR_?v[2] == 0.?1:0:_aR_;return _aS_}
    var Game_Vector=[0,add,sub,mult,dot,norm,normalize,pp,zero,is_zero];
    caml_register_global(134,Game_Vector,"Game__Vector");
    function top_left(v,b){return v}
    function top_right(v,b){return [254,v[1] + b[1],v[2]]}
    function bottom_left(v,b){return [254,v[1],v[2] + b[2]]}
    function bottom_right(v,b){return [254,v[1] + b[1],v[2] + b[2]]}
    function center(v,b){return [254,v[1] + 0.5 * b[1],v[2] + 0.5 * b[2]]}
    function mdiff(v1,b1,v2,b2)
     {var
       x=v1[1] - v2[1] - b2[1],
       y=v1[2] - v2[2] - b2[2],
       h=b1[2] + b2[2] | 0,
       w=b1[1] + b2[1] | 0;
      return [0,[254,x,y],[0,w,h]]}
    function has_origin(v,b)
     {var _aN_=v[1] < 0.?1:0;
      if(_aN_)
       {var _aO_=0. < v[1] + b[1]?1:0;
        if(_aO_)
         var _aP_=v[2] < 0.?1:0,_aQ_=_aP_?0. < v[2] + b[2]?1:0:_aP_;
        else
         var _aQ_=_aO_}
      else
       var _aQ_=_aN_;
      return _aQ_}
    function intersect(v1,b1,v2,b3)
     {var match=mdiff(v1,b1,v2,b3),b=match[2],v=match[1];
      return has_origin(v,b)}
    function pp$0(fmt,b)
     {return caml_call4(Stdlib_format[123],fmt,_b_,b[1],b[2])}
    var
     Game_Rect=
      [0,
       top_left,
       top_right,
       bottom_left,
       bottom_right,
       center,
       mdiff,
       has_origin,
       intersect,
       pp$0];
    caml_register_global(135,Game_Rect,"Game__Rect");
    var
     black=[0,caml_call4(Gfx[11],0,0,0,255)],
     red=[0,caml_call4(Gfx[11],255,0,0,255)],
     blue=[0,caml_call4(Gfx[11],0,0,255,255)],
     gray=[0,caml_call4(Gfx[11],128,128,128,255)];
    function create_image(img,w,h)
     {var os=caml_call2(Gfx[5],w,h);
      caml_call6(Gfx[17],os,img,0,0,w,h);
      return [1,os]}
    function create_animation(img,num_w,num_h,sw,sh,dw,dh)
     {function _aC_(param){return caml_call2(Gfx[5],dw,dh)}
      var
       frames=caml_call2(Stdlib_array[2],caml_mul(num_w,num_h),_aC_),
       x=[0,0],
       y=[0,0],
       _aE_=num_h - 1 | 0,
       _aD_=0;
      if(! (_aE_ < 0))
       {var j=_aD_;
        for(;;)
         {var _aG_=num_w - 1 | 0,_aF_=0;
          if(! (_aG_ < 0))
           {var i=_aF_;
            for(;;)
             {var
               _aK_=caml_mul(j,num_w) + i | 0,
               _aI_=y[1],
               _aJ_=x[1],
               _aL_=caml_check_bound(frames,_aK_)[1 + _aK_];
              caml_call10(Gfx[18],_aL_,img,_aJ_,_aI_,sw,sh,0,0,dw,dh);
              x[1] = x[1] + sw | 0;
              var _aM_=i + 1 | 0;
              if(_aG_ !== i){var i=_aM_;continue}
              break}}
          x[1] = 0;
          y[1] = y[1] + sh | 0;
          var _aH_=j + 1 | 0;
          if(_aE_ !== j){var j=_aH_;continue}
          break}}
      return [2,[0,frames,0]]}
    function get_frame(anim,dir)
     {var
       _aB_=anim[2],
       f=caml_check_bound(anim[1],_aB_)[1 + _aB_],
       d=0 < dir?1:0 <= dir?0:-1,
       len=anim[1].length - 1;
      anim[2] = runtime.caml_mod((anim[2] + len | 0) + d | 0,len);
      return f}
    var
     Game_Texture=
      [0,black,red,blue,gray,create_image,create_animation,get_frame];
    caml_register_global(138,Game_Texture,"Game__Texture");
    var
     Position=caml_call1(Ecs_Component[1],[0,name]),
     Velocity=caml_call1(Ecs_Component[1],[0,name$0]),
     Mass=caml_call1(Ecs_Component[1],[0,name$1]),
     Box=caml_call1(Ecs_Component[1],[0,name$2]),
     Surface=caml_call1(Ecs_Component[1],[0,name$3]),
     Name=caml_call1(Ecs_Component[1],[0,name$4]),
     CollisionResolver=caml_call1(Ecs_Component[1],[0,name$5]),
     Owner=caml_call1(Ecs_Component[1],[0,name$6]),
     Game_Component_defs=
      [0,Position,Velocity,Mass,Box,Surface,Name,CollisionResolver,Owner];
    caml_register_global(140,Game_Component_defs,"Game__Component_defs");
    function init(param){return 0}
    function update(dt,el)
     {function _am_(i,e1)
       {function _an_(j,e2)
         {var _ao_=i < j?1:0;
          if(_ao_)
           {var
             pos1=caml_call1(Position[2],e1),
             box1=caml_call1(Box[2],e1),
             pos2=caml_call1(Position[2],e2),
             box2=caml_call1(Box[2],e2),
             v1=caml_call1(Velocity[2],e1),
             v2=caml_call1(Velocity[2],e2),
             match=mdiff(pos2,box2,pos1,box1),
             s_rect=match[2],
             s_pos=match[1],
             _ap_=has_origin(s_pos,s_rect);
            if(_ap_)
             var _aq_=is_zero(v1),_ar_=_aq_?is_zero(v2):_aq_,_as_=1 - _ar_;
            else
             var _as_=_ap_;
            if(_as_)
             {var
               a=[254,s_pos[1],0.],
               b=[254,s_rect[1] + s_pos[1],0.],
               c=[254,0.,s_pos[2]],
               d=[254,0.,s_rect[2] + s_pos[2]],
               _at_=[0,b,[0,c,[0,d,0]]],
               _au_=
                function(min_v,v)
                 {var _aA_=norm(min_v);return norm(v) < _aA_?v:min_v},
               n=caml_call3(Stdlib_list[21],_au_,a,_at_),
               n_v1=norm(v1),
               n_v2=norm(v2),
               s=n_v1 + n_v2,
               n1=n_v1 / s,
               n2=n_v2 / s,
               delta_pos1=mult(n1,n),
               delta_pos2=mult(- n2,n),
               _av_=add(pos1,delta_pos1);
              caml_call2(Position[1],e1,_av_);
              var _aw_=add(pos2,delta_pos2);
              caml_call2(Position[1],e2,_aw_);
              var
               n$0=normalize(n),
               v=sub(v1,v2),
               m1=caml_call1(Mass[2],e1),
               m2=caml_call1(Mass[2],e2);
              if(caml_call1(Stdlib_float[14],m1))
               if(caml_call1(Stdlib_float[14],m2))
                if(n_v1 == 0.)
                 var m1$0=m1,m2$0=1.,switch$0=1;
                else
                 if(n_v2 == 0.)
                  var m1$0=1.,m2$0=m2,switch$0=1;
                 else
                  var m1$0=0.,m2$0=0.,switch$0=1;
               else
                var switch$0=0;
              else
               var switch$0=0;
              if(! switch$0)var m1$0=m1,m2$0=m2;
              var
               j$0=-2. * dot(v,n$0) / (1. / m1$0 + 1. / m2$0),
               new_v1=add(v1,mult(j$0 / m1$0,n$0)),
               new_v2=sub(v2,mult(j$0 / m2$0,n$0));
              caml_call2(Velocity[1],e1,new_v1);
              caml_call2(Velocity[1],e2,new_v2);
              if(caml_call1(CollisionResolver[4],e1))
               caml_call2(caml_call1(CollisionResolver[2],e1),e1,e2);
              var _ax_=caml_call1(CollisionResolver[4],e2);
              if(_ax_)
               return caml_call2(caml_call1(CollisionResolver[2],e2),e2,e1);
              var _ay_=_ax_}
            else
             var _ay_=_as_;
            var _az_=_ay_}
          else
           var _az_=_ao_;
          return _az_}
        return caml_call2(Stdlib_list[16],_an_,el)}
      return caml_call2(Stdlib_list[16],_am_,el)}
    var Game_Collision_system=[0,init,update];
    caml_register_global(143,Game_Collision_system,"Game__Collision_system");
    var commands=caml_call2(Stdlib_hashtbl[1],0,17);
    function register_command(ev,f)
     {var _al_=0 !== ev?1:0;
      return _al_?caml_call3(Stdlib_hashtbl[5],commands,ev,f):_al_}
    function get_commands(ev)
     {return caml_call2(Stdlib_hashtbl[8],commands,ev)}
    var Game_Input_handler=[0,register_command,get_commands];
    caml_register_global(145,Game_Input_handler,"Game__Input_handler");
    function init$0(param){return 0}
    function update$0(dt,el)
     {for(;;)
       {var ev=caml_call1(Gfx[21],0);
        if(typeof ev === "number")return 0;
        var _aj_=get_commands(ev),_ak_=function(f){return caml_call1(f,0)};
        caml_call2(Stdlib_list[15],_ak_,_aj_);
        continue}}
    var Game_Control_system=[0,init$0,update$0];
    caml_register_global(146,Game_Control_system,"Game__Control_system");
    var ctx=[0,0];
    function init$1(param)
     {var match=caml_call1(Gfx[4],cst_game_canvas_800x600),c=match[2];
      ctx[1] = [0,c];
      return 0}
    function update$1(dt,el)
     {var ctx$0=caml_call1(Stdlib_option[4],ctx[1]);
      caml_call5(Gfx[13],ctx$0,0,0,800,600);
      function _ai_(e)
       {var
         pos=caml_call1(Position[2],e),
         box=caml_call1(Box[2],e),
         surface=caml_call1(Surface[2],e);
        switch(surface[0])
         {case 0:
           var color=surface[1];
           return caml_call6
                   (Gfx[12],ctx$0,pos[1] | 0,pos[2] | 0,box[1],box[2],color);
          case 1:
           var render=surface[1];
           return caml_call6
                   (Gfx[9],ctx$0,render,pos[1] | 0,pos[2] | 0,box[1],box[2]);
          default:
           var
            anim=surface[1],
            v=caml_call1(Velocity[2],e),
            d=v[1] < 0.?-1:0. < v[1]?1:0,
            render$0=get_frame(anim,d);
           return caml_call6
                   (Gfx[9],ctx$0,render$0,pos[1] | 0,pos[2] | 0,box[1],box[2])}}
      return caml_call2(Stdlib_list[15],_ai_,el)}
    var Game_Draw_system=[0,ctx,init$1,update$1];
    caml_register_global(148,Game_Draw_system,"Game__Draw_system");
    var
     Game_Globals=
      [0,
       800,
       600,
       20,
       0,
       40,
       600,
       20,
       80,
       50,
       50,
       100,
       50,
       50,
       50,
       50,
       25,
       260,
       40,
       740,
       290,
       70.,
       710.,
       400,
       560.,
       0.,
       0.,
       0.,
       510.,
       400,
       410.,
       400,
       110.,
       0.,
       310.,
       400,
       210.,
       340.,
       500.,
       400,
       0.,
       400,
       10.,
       100];
    caml_register_global(149,Game_Globals,"Game__Globals");
    var
     canvas_width=800,
     canvas_height=600,
     wall_thickness=0,
     paddle_width=20,
     paddle_height=80,
     truck_width=100,
     truck_height=50,
     car_width=50,
     car_height=50,
     missile_width=50,
     missile_height=25,
     frog_init_x=400,
     frog_init_y=560.,
     goal_init_x=0.,
     goal_init_y=0.,
     truck1_init_x=0.,
     truck1_init_y=510.,
     truck2_init_x=400,
     truck2_init_y=410.,
     truck3_init_x=400,
     truck3_init_y=110.,
     car1_init_x=0.,
     car1_init_y=310.,
     car2_init_x=400,
     car2_init_y=210.,
     tpin_init_x=340.,
     tpin_init_y=500.,
     tpout_init_x=400,
     tpout_init_y=0.,
     missile_init_x=400,
     missile_init_y=10.,
     frog_size=100;
    function init$2(param){return 0}
    var time=[0,0.];
    function update$2(dt,el)
     {var
       delta_t=
        caml_call2(Stdlib[16],0.0166666666666666664,1000. * (dt - time[1]));
      time[1] = dt;
      function _ah_(e)
       {var
         pos=caml_call1(Position[2],e),
         speed=mult(delta_t,caml_call1(Velocity[2],e));
        return caml_call2
                (Position[1],e,[254,pos[1] + speed[1],pos[2] + speed[2]])}
      return caml_call2(Stdlib_list[15],_ah_,el)}
    var Game_Move_system=[0,init$2,time,update$2];
    caml_register_global(151,Game_Move_system,"Game__Move_system");
    var
     Control_S=caml_call1(Ecs_System[1],Game_Control_system),
     Draw_S=caml_call1(Ecs_System[1],[0,init$1,update$1]),
     Move_S=caml_call1(Ecs_System[1],[0,init$2,update$2]),
     Collision_S=caml_call1(Ecs_System[1],Game_Collision_system);
    caml_call1(Ecs_System[3],Draw_S);
    caml_call1(Ecs_System[3],Move_S);
    caml_call1(Ecs_System[3],Control_S);
    caml_call1(Ecs_System[3],Collision_S);
    var Game_System_defs=[0,Control_S,Draw_S,Move_S,Collision_S];
    caml_register_global(153,Game_System_defs,"Game__System_defs");
    var walls=caml_call1(Ecs_Entity[7][1],17);
    function create_horizontal(name,x,y)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call3(Ecs_Entity[7][5],walls,e,0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,[0,canvas_width,wall_thickness]);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,red);
      caml_call1(Collision_S[3],e);
      return e}
    function create_vertical(name,x,y)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call3(Ecs_Entity[7][5],walls,e,0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,[0,wall_thickness,canvas_height]);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,red);
      caml_call1(Collision_S[3],e);
      return e}
    var Game_Wall=[0,create_horizontal,create_vertical];
    caml_register_global(155,Game_Wall,"Game__Wall");
    function change_surface(e,img)
     {var _ag_=create_animation(img,4,1,320,160,320,160);
      return caml_call2(Surface[1],e,_ag_)}
    function create(name,imageright,imageleft,x,y)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Velocity[1],e,_c_);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,[0,truck_width,truck_height]);
      caml_call2(Name[1],e,name);
      var _ad_=create_animation(imageright,4,1,320,160,320,160);
      caml_call2(Surface[1],e,_ad_);
      function _ae_(param,e2)
       {var name=caml_call1(Name[2],e2);
        if(! caml_string_equal(name,cst_wall_right))
         if(! caml_string_equal(name,cst_tpin))
          {var _af_=caml_string_equal(name,cst_wall_left);
           return _af_?change_surface(e,imageright):_af_}
        return change_surface(e,imageleft)}
      caml_call2(CollisionResolver[1],e,_ae_);
      caml_call1(Collision_S[3],e);
      caml_call1(Move_S[3],e);
      caml_call1(Draw_S[3],e);
      return e}
    var Game_Truck=[0,change_surface,create];
    caml_register_global(156,Game_Truck,"Game__Truck");
    function create$0(name,x,y)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Box[1],e,_d_);
      caml_call2(Velocity[1],e,_e_);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,blue);
      caml_call1(Draw_S[3],e);
      return e}
    var Game_Tpout=[0,create$0];
    caml_register_global(157,Game_Tpout,"Game__Tpout");
    function create$1(name,x,y)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Box[1],e,_f_);
      caml_call2(Velocity[1],e,_g_);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,blue);
      caml_call1(Collision_S[3],e);
      caml_call1(Draw_S[3],e);
      return e}
    var Game_Tpin=[0,create$1];
    caml_register_global(158,Game_Tpin,"Game__Tpin");
    var
     state=
      [0,
       [0,
        Ecs_Entity[6],
        Ecs_Entity[6],
        Ecs_Entity[6],
        Ecs_Entity[6],
        Ecs_Entity[6],
        Ecs_Entity[6],
        Ecs_Entity[6],
        Ecs_Entity[6],
        Ecs_Entity[6],
        Ecs_Entity[6],
        Ecs_Entity[6],
        0,
        0]];
    function get_frog(param){return state[1][1]}
    function get_goal(param){return state[1][4]}
    function get_turn(param){return state[1][13]}
    function get_end_game(param){return state[1][12]}
    function get_truck1(param){return state[1][5]}
    function get_truck2(param){return state[1][6]}
    function get_truck3(param){return state[1][7]}
    function get_car1(param){return state[1][2]}
    function get_car2(param){return state[1][3]}
    function get_missile(param){return state[1][8]}
    function get_tpin(param){return state[1][9]}
    function get_tpout(param){return state[1][10]}
    function get_wall_right(param){return state[1][11]}
    function play(param){state[1][13] = 0;return 0}
    function init$3(f,g,t1,t2,t3,c1,c2,m,tpi,tpo)
     {var _ac_=state[1];
      state[1] = [0,f,c1,c2,g,t1,t2,t3,m,tpi,tpo,_ac_[11],_ac_[12],_ac_[13]];
      return 0}
    var
     Game_Game_state=
      [0,
       init$3,
       get_turn,
       play,
       get_frog,
       get_goal,
       get_truck1,
       get_truck2,
       get_truck3,
       get_car1,
       get_car2,
       get_missile,
       get_tpin,
       get_tpout,
       get_wall_right,
       get_end_game];
    caml_register_global(159,Game_Game_state,"Game__Game_state");
    function create$2(name,x,y)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,[0,paddle_width,paddle_height]);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,black);
      caml_call1(Collision_S[3],e);
      caml_call1(Control_S[3],e);
      caml_call1(Draw_S[3],e);
      caml_call1(Move_S[3],e);
      return e}
    function reset(e,x,y){return caml_call2(Position[1],e,[254,x,y])}
    function move_up(e)
     {var _ab_=0 === get_turn(0)?1:0;
      return _ab_?caml_call2(Velocity[1],e,_h_):_ab_}
    function move_down(e)
     {var _aa_=0 === get_turn(0)?1:0;
      return _aa_?caml_call2(Velocity[1],e,_i_):_aa_}
    function stop(e){return caml_call2(Velocity[1],e,zero)}
    var Game_Player=[0,create$2,reset,move_up,move_down,stop];
    caml_register_global(160,Game_Player,"Game__Player");
    function change_surface$0(e,img)
     {var _$_=create_image(img,333,217);return caml_call2(Surface[1],e,_$_)}
    function create$3(name,imageright,imageleft,x,y)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Velocity[1],e,_j_);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,[0,missile_width,missile_height]);
      caml_call2(Name[1],e,name);
      var _Y_=create_image(imageright,333,217);
      caml_call2(Surface[1],e,_Y_);
      function _Z_(param,e2)
       {var name=caml_call1(Name[2],e2);
        if(caml_string_equal(name,cst_wall_right$0))
         return change_surface$0(e,imageleft);
        var ___=caml_string_equal(name,cst_wall_left$0);
        return ___?change_surface$0(e,imageright):___}
      caml_call2(CollisionResolver[1],e,_Z_);
      caml_call1(Collision_S[3],e);
      caml_call1(Move_S[3],e);
      caml_call1(Draw_S[3],e);
      return e}
    var Game_Missile=[0,change_surface$0,create$3];
    caml_register_global(161,Game_Missile,"Game__Missile");
    function create$4(name,x,y,img)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Box[1],e,_k_);
      caml_call2(Velocity[1],e,_l_);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Name[1],e,name);
      var _X_=create_image(img,679,614);
      caml_call2(Surface[1],e,_X_);
      caml_call1(Draw_S[3],e);
      return e}
    var Game_Goal=[0,create$4];
    caml_register_global(162,Game_Goal,"Game__Goal");
    function run(param){return 0}
    var Game$0=[0,run];
    caml_register_global(163,Game$0,"Game");
    function create$5(img)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,zero);
      caml_call2(Box[1],e,[0,canvas_width,canvas_height]);
      var _W_=create_image(img,canvas_width,canvas_height);
      caml_call2(Surface[1],e,_W_);
      caml_call1(Draw_S[3],e);
      return e}
    var Game_Bg=[0,create$5];
    caml_register_global(164,Game_Bg,"Game__Bg");
    function reset_car(e,y)
     {caml_call2(Position[1],e,[254,0.,y]);
      return caml_call2(Velocity[1],e,_m_)}
    function create$6(name,x,y,img)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Velocity[1],e,_n_);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,[0,car_width,car_height]);
      caml_call2(Name[1],e,name);
      var _T_=create_animation(img,8,1,60,66,60,66);
      caml_call2(Surface[1],e,_T_);
      function _U_(param,e2)
       {var
         name=caml_call1(Name[2],e2),
         _V_=caml_string_equal(name,cst_wall_right$1);
        return _V_?reset_car(e,y):_V_}
      caml_call2(CollisionResolver[1],e,_U_);
      caml_call1(Collision_S[3],e);
      caml_call1(Move_S[3],e);
      caml_call1(Draw_S[3],e);
      return e}
    var Game_Car=[0,reset_car,create$6];
    caml_register_global(165,Game_Car,"Game__Car");
    function random_dir(tmin,tmax,n)
     {var
       t=tmin + caml_call1(Stdlib_random[9],tmax - tmin),
       x=n * Math.cos(t),
       y=n * Math.sin(t);
      return [254,x,y]}
    var pi=3.14159265358979312;
    function _o_(e,x,y)
     {caml_call2(Velocity[1],e,_p_);
      return caml_call2(Position[1],e,[254,x,y])}
    function create$7(name,img,x,y)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Box[1],e,_q_);
      caml_call2(Velocity[1],e,_r_);
      caml_call2(Mass[1],e,10.);
      caml_call2(Name[1],e,name);
      var _Q_=create_animation(img,3,1,25,35,frog_size,frog_size);
      caml_call2(Surface[1],e,_Q_);
      function _R_(param,e2)
       {var name=caml_call1(Name[2],e2);
        if(caml_string_equal(name,cst_tpin$0))
         return _o_(e,tpout_init_x,tpout_init_y);
        var _S_=caml_string_equal(name,cst_missile);
        return _S_?_o_(e,frog_init_x,frog_init_y):_S_}
      caml_call2(CollisionResolver[1],e,_R_);
      caml_call1(Collision_S[3],e);
      caml_call1(Control_S[3],e);
      caml_call1(Move_S[3],e);
      caml_call1(Draw_S[3],e);
      return e}
    function reset$0(e,x,y)
     {caml_call2(Velocity[1],e,_s_);
      return caml_call2(Position[1],e,[254,x,y])}
    function move_up$0(e,img)
     {var _P_=create_animation(img,3,1,25,35,frog_size,frog_size);
      caml_call2(Surface[1],e,_P_);
      return caml_call2(Velocity[1],e,_t_)}
    function move_down$0(e,img)
     {var _O_=create_animation(img,3,1,25,35,frog_size,frog_size);
      caml_call2(Surface[1],e,_O_);
      return caml_call2(Velocity[1],e,_u_)}
    function move_right(e,img)
     {var _N_=create_animation(img,3,1,25,35,frog_size,frog_size);
      caml_call2(Surface[1],e,_N_);
      return caml_call2(Velocity[1],e,_v_)}
    function move_left(e,img)
     {var _M_=create_animation(img,3,1,25,35,frog_size,frog_size);
      caml_call2(Surface[1],e,_M_);
      return caml_call2(Velocity[1],e,_w_)}
    function stop$0(e){return caml_call2(Velocity[1],e,zero)}
    var
     Game_Frog=
      [0,
       random_dir,
       pi,
       create$7,
       reset$0,
       move_up$0,
       move_down$0,
       move_right,
       move_left,
       stop$0];
    caml_register_global(167,Game_Frog,"Game__Frog");
    var
     bg_img=caml_call1(Gfx[14],cst_images_bgimg_png),
     frog_animation_droit=caml_call1(Gfx[14],cst_images_frog_droite_png),
     frog_animation_haut=caml_call1(Gfx[14],cst_images_frog_haut_png),
     frog_animation_bas=caml_call1(Gfx[14],cst_images_frog_bas_png),
     frog_animation_gauche=caml_call1(Gfx[14],cst_images_frog_gauche_png),
     missileleftimg=caml_call1(Gfx[14],cst_images_missileleftimg_png),
     missilerightimg=caml_call1(Gfx[14],cst_images_missilerightimg_png),
     sharkright=caml_call1(Gfx[14],cst_images_sharkright_png),
     sharkleft=caml_call1(Gfx[14],cst_images_sharkleft_png),
     frog_animation=caml_call1(Gfx[14],cst_images_frog_bas_png$0),
     goalimg=caml_call1(Gfx[14],cst_images_goalimg_jpg),
     carimg=caml_call1(Gfx[14],cst_images_carimg_png);
    function init_game(dt)
     {caml_call1(Ecs_System[4],0);
      var
       missile=
        create$3
         (cst_missile$0,
          missilerightimg,
          missileleftimg,
          missile_init_x,
          missile_init_y),
       frog=create$7(cst_frog,frog_animation,frog_init_x,frog_init_y),
       goal=create$4(cst_goal,goal_init_x,goal_init_y,goalimg),
       truck1=
        create(cst_truck1,sharkright,sharkleft,truck1_init_x,truck1_init_y),
       truck2=
        create(cst_truck2,sharkright,sharkleft,truck2_init_x,truck2_init_y),
       truck3=
        create(cst_truck3,sharkright,sharkleft,truck3_init_x,truck3_init_y),
       car1=create$6(cst_car1,car1_init_x,car1_init_y,carimg),
       car2=create$6(cst_car2,car2_init_x,car2_init_y,carimg),
       tpin=create$1(cst_tpin$1,tpin_init_x,tpin_init_y),
       tpout=create$0(cst_tpout,tpout_init_x,tpout_init_y);
      create_horizontal(cst_wall_top,0.,0.);
      create_horizontal(cst_wall_bottom,0.,600.);
      create_vertical(cst_wall_left$1,0.,0.);
      create_vertical(cst_wall_right$2,800.,20.);
      create$5(bg_img);
      register_command
       (_x_,function(param){return move_up$0(frog,frog_animation_haut)});
      register_command
       (_y_,function(param){return move_down$0(frog,frog_animation_bas)});
      register_command
       (_z_,function(param){return move_right(frog,frog_animation_droit)});
      register_command
       (_A_,function(param){return move_left(frog,frog_animation_gauche)});
      register_command(_B_,function(param){return stop$0(frog)});
      register_command(_C_,function(param){return stop$0(frog)});
      register_command(_D_,function(param){return stop$0(frog)});
      register_command(_E_,function(param){return stop$0(frog)});
      register_command
       (_F_,function(param){return reset$0(frog,frog_init_x,frog_init_y)});
      init$3(frog,goal,truck1,truck2,truck3,car1,car2,missile,tpin,tpout);
      return 0}
    function chain_functions(f_list)
     {var funs=[0,f_list];
      return function(dt)
       {var _L_=funs[1];
        if(_L_)
         {var ll=_L_[2],f=_L_[1];return caml_call1(f,dt)?1:(funs[1] = ll,1)}
        return 0}}
    function update$3(dt){caml_call1(Ecs_System[5],dt);return 0}
    function game_over(dt){return 0}
    function play_game(dt)
     {caml_call1(Ecs_System[5],dt);
      var
       frog=get_frog(0),
       goal=get_goal(0),
       truck1=get_truck1(0),
       truck2=get_truck2(0),
       truck3=get_truck3(0),
       car1=get_car1(0),
       car2=get_car2(0),
       fpos=caml_call1(Position[2],frog),
       fbox=caml_call1(Box[2],frog),
       gpos=caml_call1(Position[2],goal),
       tpos1=caml_call1(Position[2],truck1),
       tbox1=caml_call1(Box[2],truck1),
       tpos2=caml_call1(Position[2],truck2),
       tbox2=caml_call1(Box[2],truck2),
       tpos3=caml_call1(Position[2],truck3),
       tbox3=caml_call1(Box[2],truck3),
       cbox1=caml_call1(Box[2],car1),
       cpos1=caml_call1(Position[2],car1),
       cbox2=caml_call1(Box[2],car2),
       cpos2=caml_call1(Position[2],car2);
      if(! intersect(fpos,fbox,gpos,gbox))
       if(! intersect(fpos,fbox,tpos1,tbox1))
        if(! intersect(fpos,fbox,tpos2,tbox2))
         if(! intersect(fpos,fbox,cpos1,cbox1))
          if(! intersect(fpos,fbox,cpos2,cbox2))
           if(! intersect(fpos,fbox,tpos3,tbox3))return 1;
      return 0}
    function update_loop(param){return caml_call1(Gfx[22],update$3)}
    function load_graphics(dt)
     {var _H_=1 - caml_call1(Gfx[15],frog_animation);
      if(_H_)
       var _I_=_H_;
      else
       {var _J_=1 - caml_call1(Gfx[15],goalimg);
        if(_J_)
         var _I_=_J_;
        else
         var
          _K_=1 - caml_call1(Gfx[15],carimg),
          _I_=_K_ || 1 - caml_call1(Gfx[15],bg_img)}
      return _I_}
    var
     _G_=
      chain_functions
       ([0,load_graphics,[0,init_game,[0,play_game,[0,game_over,0]]]]);
    caml_call1(Gfx[22],_G_);
    var
     Game_Frogger_all=
      [0,
       bg_img,
       frog_animation_droit,
       frog_animation_haut,
       frog_animation_bas,
       frog_animation_gauche,
       missileleftimg,
       missilerightimg,
       sharkright,
       sharkleft,
       frog_animation,
       goalimg,
       carimg,
       init_game,
       chain_functions,
       update$3,
       game_over,
       play_game,
       update_loop,
       load_graphics];
    caml_register_global(168,Game_Frogger_all,"Game__Frogger_all");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuZ2FtZS5vYmpzL2dhbWUuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbInplcm8iLCJuYW1lIiwibmFtZSQwIiwibmFtZSQxIiwibmFtZSQyIiwibmFtZSQzIiwibmFtZSQ0IiwibmFtZSQ1IiwibmFtZSQ2IiwiZ2JveCIsImFkZCIsImEiLCJiIiwic3ViIiwibXVsdCIsImsiLCJkb3QiLCJub3JtIiwibm9ybWFsaXplIiwicHAiLCJmbXQiLCJpc196ZXJvIiwidiIsInRvcF9sZWZ0IiwidG9wX3JpZ2h0IiwiYm90dG9tX2xlZnQiLCJib3R0b21fcmlnaHQiLCJjZW50ZXIiLCJtZGlmZiIsInYxIiwiYjEiLCJ2MiIsImIyIiwieCIsInkiLCJoIiwidyIsImhhc19vcmlnaW4iLCJpbnRlcnNlY3QiLCJiMyIsInBwJDAiLCJibGFjayIsInJlZCIsImJsdWUiLCJncmF5IiwiY3JlYXRlX2ltYWdlIiwiaW1nIiwib3MiLCJjcmVhdGVfYW5pbWF0aW9uIiwibnVtX3ciLCJudW1faCIsInN3Iiwic2giLCJkdyIsImRoIiwiZnJhbWVzIiwiaiIsImkiLCJnZXRfZnJhbWUiLCJhbmltIiwiZGlyIiwiZiIsImQiLCJsZW4iLCJpbml0IiwidXBkYXRlIiwiZHQiLCJlbCIsImUxIiwiZTIiLCJwb3MxIiwiYm94MSIsInBvczIiLCJib3gyIiwic19yZWN0Iiwic19wb3MiLCJjIiwibWluX3YiLCJuIiwibl92MSIsIm5fdjIiLCJzIiwibjEiLCJuMiIsImRlbHRhX3BvczEiLCJkZWx0YV9wb3MyIiwibiQwIiwibTEiLCJtMiIsIm0xJDAiLCJtMiQwIiwiaiQwIiwibmV3X3YxIiwibmV3X3YyIiwiY29tbWFuZHMiLCJyZWdpc3Rlcl9jb21tYW5kIiwiZXYiLCJnZXRfY29tbWFuZHMiLCJpbml0JDAiLCJ1cGRhdGUkMCIsImN0eCIsImluaXQkMSIsInVwZGF0ZSQxIiwiY3R4JDAiLCJlIiwicG9zIiwiYm94Iiwic3VyZmFjZSIsImNvbG9yIiwicmVuZGVyIiwicmVuZGVyJDAiLCJpbml0JDIiLCJ0aW1lIiwidXBkYXRlJDIiLCJkZWx0YV90Iiwic3BlZWQiLCJ3YWxscyIsImNyZWF0ZV9ob3Jpem9udGFsIiwiY3JlYXRlX3ZlcnRpY2FsIiwiY2hhbmdlX3N1cmZhY2UiLCJjcmVhdGUiLCJpbWFnZXJpZ2h0IiwiaW1hZ2VsZWZ0IiwiY3JlYXRlJDAiLCJjcmVhdGUkMSIsInN0YXRlIiwiZ2V0X2Zyb2ciLCJnZXRfZ29hbCIsImdldF90dXJuIiwiZ2V0X2VuZF9nYW1lIiwiZ2V0X3RydWNrMSIsImdldF90cnVjazIiLCJnZXRfdHJ1Y2szIiwiZ2V0X2NhcjEiLCJnZXRfY2FyMiIsImdldF9taXNzaWxlIiwiZ2V0X3RwaW4iLCJnZXRfdHBvdXQiLCJnZXRfd2FsbF9yaWdodCIsInBsYXkiLCJpbml0JDMiLCJnIiwidDEiLCJ0MiIsInQzIiwiYzEiLCJjMiIsIm0iLCJ0cGkiLCJ0cG8iLCJjcmVhdGUkMiIsInJlc2V0IiwibW92ZV91cCIsIm1vdmVfZG93biIsInN0b3AiLCJjaGFuZ2Vfc3VyZmFjZSQwIiwiY3JlYXRlJDMiLCJjcmVhdGUkNCIsInJ1biIsImNyZWF0ZSQ1IiwicmVzZXRfY2FyIiwiY3JlYXRlJDYiLCJyYW5kb21fZGlyIiwidG1pbiIsInRtYXgiLCJ0IiwicGkiLCJjcmVhdGUkNyIsInJlc2V0JDAiLCJtb3ZlX3VwJDAiLCJtb3ZlX2Rvd24kMCIsIm1vdmVfcmlnaHQiLCJtb3ZlX2xlZnQiLCJzdG9wJDAiLCJiZ19pbWciLCJmcm9nX2FuaW1hdGlvbl9kcm9pdCIsImZyb2dfYW5pbWF0aW9uX2hhdXQiLCJmcm9nX2FuaW1hdGlvbl9iYXMiLCJmcm9nX2FuaW1hdGlvbl9nYXVjaGUiLCJtaXNzaWxlbGVmdGltZyIsIm1pc3NpbGVyaWdodGltZyIsInNoYXJrcmlnaHQiLCJzaGFya2xlZnQiLCJmcm9nX2FuaW1hdGlvbiIsImdvYWxpbWciLCJjYXJpbWciLCJpbml0X2dhbWUiLCJtaXNzaWxlIiwiZnJvZyIsImdvYWwiLCJ0cnVjazEiLCJ0cnVjazIiLCJ0cnVjazMiLCJjYXIxIiwiY2FyMiIsInRwaW4iLCJ0cG91dCIsImNoYWluX2Z1bmN0aW9ucyIsImZfbGlzdCIsImZ1bnMiLCJsbCIsInVwZGF0ZSQzIiwiZ2FtZV9vdmVyIiwicGxheV9nYW1lIiwiZnBvcyIsImZib3giLCJncG9zIiwidHBvczEiLCJ0Ym94MSIsInRwb3MyIiwidGJveDIiLCJ0cG9zMyIsInRib3gzIiwiY2JveDEiLCJjcG9zMSIsImNib3gyIiwiY3BvczIiLCJ1cGRhdGVfbG9vcCIsImxvYWRfZ3JhcGhpY3MiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXSUE7S0NWdURDO0tBQ0FDO0tBQ0hDO0tBQ0pDO0tBQ1FDO0tBQ0pDO0tBQ21DQztLQUNoQ0M7Ozs7Ozs7Ozs7S0N5SHJEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUZoSUZDLElBQUlDLEVBQUVDLEdBQUksWUFBTkQsT0FBRUMsS0FBRkQsT0FBRUMsS0FBc0M7YUFDNUNDLElBQUlGLEVBQUVDLEdBQUksWUFBTkQsT0FBRUMsS0FBRkQsT0FBRUMsS0FBc0M7YUFFNUNFLEtBQUtDLEVBQUVKLEdBQUksWUFBTkksSUFBRUosS0FBRkksSUFBRUosS0FBZ0M7YUFFdkNLLElBQUlMLEVBQUVDLEdBQUksT0FBTkQsT0FBRUMsT0FBRkQsT0FBRUMsSUFBNEI7YUFDbENLLEtBQUtOLEdBQVMscUJBQVRBLEtBQWtCO2FBQ3ZCTyxVQUFVUCxHQUFpQixzQkFBakJBLEtBQTBCO2FBQ3BDUSxHQUFHQyxJQUFJVDtNQUFJLHFDQUFSUyxRQUFJVCxVQUF5QzthQUdoRFUsUUFBUUM7TUFBSSxTQUFKQSxlQUFJLFVBQUpBLCtCQUEwQjt1QkFYbENaLElBQ0FHLElBRUFDLEtBRUFFLElBQ0FDLEtBQ0FDLFVBQ0FDLEdBRUFuQixLQUNBcUI7O2FHVEFFLFNBQVNELEVBQUVWLEdBQUssT0FBUFUsQ0FBUTthQUNqQkUsVUFBVUYsRUFBRVYsR0FBSSxZQUFOVSxPQUFFVixLQUFGVSxLQUF5QzthQUNuREcsWUFBWUgsRUFBRVYsR0FBSSxZQUFOVSxZQUFFVixLQUF3QzthQUV0RGMsYUFBYUosRUFBRVYsR0FBSSxZQUFOVSxPQUFFVixLQUFGVSxPQUFFVixLQUVLO2FBRXBCZSxPQUFPTCxFQUFFVixHQUFJLFlBQU5VLGFBQUVWLEtBQUZVLGFBQUVWLEtBR1o7YUFFR2dCLE1BQU1DLEdBQUdDLEdBQUdDLEdBQUdDO01BRWpCO1NBRlFILFFBQU1FLFFBQUdDO09BRWpCLEVBRlFILFFBQU1FLFFBQUdDO09BRWpCLEVBRldGLFFBQU1FO09BRWpCLEVBRldGLFFBQU1FO01BRWpCLGVBQUlDLEVBQ0FDLE1BRUFFLEVBREFELEdBRXFDO2FBRXZDRSxXQUFXZixFQUFFVjtNQUNmLFNBRGFVO01BQ2I7c0JBRGFBLE9BQUVWOztrQkFBRlUsb0NBQUVWOzs7OztpQkFDb0U7YUFFakYwQixVQUFVVCxHQUFHQyxHQUFHQyxHQUFHUTtNQUNWLGdCQURDVixHQUFHQyxHQUFHQyxHQUFHUSxJQUNWO3dCQUFQakIsRUFBR1YsRUFDTzthQUVaNEIsS0FBR3BCLElBQUlSO01BQUkscUNBQVJRLFFBQUlSLFVBQXFEOzs7O09BNUI1RFc7T0FDQUM7T0FDQUM7T0FFQUM7T0FJQUM7T0FLQUM7T0FRQVM7T0FHQUM7T0FJQUU7O0lDcEJjOztLQUNGO0tBQ0M7S0FDQTthQUliSyxhQUFhQyxJQUFJVixFQUFFRDtNQUNaLElBQUxZLEdBQUssa0JBRFVYLEVBQUVEO01BRXJCLG1CQURJWSxHQURXRCxRQUFJVixFQUFFRDtNQUVyQixVQURJWSxHQUVJO0lBUE8sU0FXYkMsaUJBQWlCRixJQUFJRyxNQUFNQyxNQUFNQyxHQUFHQyxHQUFHQyxHQUFHQztNQUM1QyxxQkFBa0QseUJBRFRELEdBQUdDLEdBQ2dDO01BQS9EO3lDQUFiLFNBRHVCTCxNQUFNQztPQUNoQjs7WUFEZ0JBO09BQ2hCOztZQUdiTTtRQUNFO21CQUxxQlAsY0FLckI7OztZQUNFOzs2QkFGSk8sRUFKdUJQLFNBS3JCUTtlQUNFLEtBSEF2QjtlQUdBLEtBSkFEO2VBSW9CLHNCQUxwQnNCO2NBS0EseUJBTmVULGNBQWdCSyxHQUFHQyxPQUFHQyxHQUFHQztjQU14QyxPQUpBckIsT0FGK0JrQjtjQU0vQixTQURGTTs7O1VBSUE7aUJBTkV2QixPQUhrQ2tCO1VBS3BDLFNBREZJOzs7TUFRQSxhQVhJRCxVQVdzQztJQXZCM0IsU0EwQmJHLFVBQVVDLEtBQUtDO01BQ2pCO1lBRFlEO09BQ1osbUJBRFlBO09BQ1osTUFEaUJDO09BS2pCLElBTFlEO01BS1osNEJBTFlBLFVBS1JJLFdBSEFELE1BR0FDO01BQUosT0FKSUYsQ0FNSDtJQWpDYzs7U0FIYnBCLE1BQ0FDLElBQ0FDLEtBQ0FDLEtBSUFDLGFBT0FHLGlCQWVBVTtJQTFCYTs7NkNIYjBDekQ7S0dhMUMsd0NIWjBDQztLR1kxQyxvQ0hYdUNDO0tHV3ZDLG1DSFZtQ0M7S0dVbkMsdUNIVDJDQztLR1MzQyxvQ0hSdUNDO0tHUXZDLGlESFAwRUM7S0dPMUUscUNITjBDQztLR00xQzs7O2FDWGJ3RCxZQUFVLFFBQUU7YUFFWkMsT0FBT0MsR0FBSUM7TUFDYixjQUFnQlYsRUFBRVc7UUFDaEIsY0FBZ0JaLEVBQUVhO1VBS2hCLFNBTllaLElBQ0VEO1VBS2Q7WUFFYTt5Q0FSQ1k7YUFTRCx1QkFUQ0E7YUFXRCw0QkFWR0M7YUFXSCx1QkFYR0E7YUFhTCwwQkFkR0Q7YUFlSCwwQkFkS0M7YUFnQk0sWUFOaEJHLEtBQ0FDLEtBSkFILEtBQ0FDO2FBUWdCOzthQUVqQixnQkFGQ0ksTUFBT0Q7WUFFUjthQUNJLGlCQU5IN0MsSUFNRyxVQUFxQixRQUx4QkU7OztZQU1HOztzQkFKSDRDO2VBSUcsT0FKSUQsWUFBUEM7ZUFJRyxVQUpIQTtlQUlHLFVBSklELFlBQVBDO2VBSUcsUUFHQy9ELEtBQ0FnRSxLQUNBZDtlQUxEO3lCQU15QmUsTUFBTXZEO2tCQUNaLGNBRE11RCxPQUN2QixZQUQ2QnZELFlBQU51RCxLQUM2QjtlQURqRCxrQ0FKSmxFO2VBU08sVUFsQlhrQjtlQW1CVyxVQWxCWEU7ZUFrQlcsRUFEUGdELE9BQ0FDO2VBQU8sR0FEUEQsT0FFQUU7ZUFETyxHQUFQRCxPQUNBQztlQUdhLGdCQUZiQyxHQVJBSjtlQVdhLGtCQUZiSyxHQVRBTDtlQVlZLFNBL0JoQlIsS0E2QkljO2NBRUosdUJBdkNRaEI7Y0FxQkwsU0FtQmEsSUE3QmhCSSxLQTJCSWE7Y0FFSix1QkF2Q1VoQjtjQW9CUDtlQXNCSyxjQWhCSlM7ZUFrQkksTUEvQlJqRCxHQUNBRTtlQXVDUyxzQkF0RERxQztlQXVEQyxzQkF0RENDO2NBd0RMLCtCQUhEa0I7a0JBR3lCLDRCQUZ6QkM7bUJBdkJBVDtxQkF3QkFVLEtBRkFGLEdBRUlHOztvQkF2QkpWO3NCQXVCQVMsUUFBSUMsS0FESkY7O3NCQUNBQyxRQUFJQzs7Ozs7Z0NBQUpELEtBRkFGLEdBRUlHLEtBREpGO2NBbENEO2VBNENpQixjQXBCaEJsRSxFQUZBZ0UsYUFhQUcsWUFBSUM7ZUFZSyxXQXREYjdELEdBc0QyQixLQUp2QjhELE1BUkFGLEtBYkFIO2VBMEJTLFdBdERidkQsR0FzRDJCLEtBTHZCNEQsTUFSSUQsS0FiSko7Y0E0QkosdUJBdkVRbEIsR0FvRUp3QjtjQUlKLHVCQXZFVXZCLEdBb0VOd0I7Y0FLRCxtQ0ExRUt6QjtlQTBFNkQsV0FBMUIsZ0NBMUVuQ0EsT0FDRUM7Y0FvQlAsU0FzREEsZ0NBMUVPQTtjQTBFUDtzQkFBd0MsMkNBMUVqQ0EsT0FERkQ7Y0FxQkw7OztZQWJJOzs7cUJBcUVWO1FBNUVMLHVDQUZXRCxHQStFTDtNQTlFUix1Q0FEYUEsR0ErRUQ7aUNBakZWSCxLQUVBQzs7SUNKVyxJQUFYNkIsU0FBVzthQUdYQyxpQkFBaUJDLEdBQUduQztNQUN0QixlQURtQm1DO01BQ25CLFlBQ0UsNkJBTEFGLFNBR2lCRSxHQUFHbkMsT0FFTTtJQUxmLFNBT1hvQyxhQUFhRDtNQUFLLG9DQVBsQkYsU0FPYUUsR0FBaUM7SUFQbkMsMEJBR1hELGlCQUlBRTtJQVBXO2FDQVhDLGNBQVUsUUFBRTthQUVaQyxTQUFPakMsR0FBSUM7TUFHVDtRQUFNLElBRU42QixHQUZNO2tCQUVOQTtRQUZNLElBR29CLGtCQUQxQkEsSUFDMEIsY0FBWG5DLEdBQUssa0JBQUxBLElBQVM7UUFBeEI7aUJBR1k7K0JBWGRxQyxPQUVBQzs7UUNEQUM7YUFDQUM7TUFDUztrQkFBSnpCO01BQUksUUFDRTthQUVYMEIsU0FBT3BDLEdBQUlDO01BQ0gsSUFBTm9DLE1BQU0sNEJBTlJIO01BT0YsbUJBRElHO01BQ0osY0FDZUM7UUFDSDtvQ0FER0E7U0FFSCxzQkFGR0E7U0FHQyw4QkFIREE7UUFHQyxPQUFWRzs7V0FFVyxJQUFUQyxNQUZGRDtXQUVXOzRCQVBiSixNQUdFRSxzQkFDQUMsY0FHRUU7O1dBT1ksSUFBVkMsT0FUSkY7V0FTYzsyQkFkaEJKLE1BY01NLE9BWEpKLHNCQUNBQzs7V0FlUTtpQkFkUkM7WUFjZ0IseUJBakJQSDtZQWlCTyxFQUFKbEY7WUFFUyxtQkFIYnFDLEtBRUlHO1dBQ1M7MkJBckJ2QnlDLE1BcUJjTyxTQWxCWkwsc0JBQ0FDLGVBbUJpRDtNQXRCdkQsdUNBRmF2QyxHQXlCUDs0QkE5QkppQyxJQUNBQyxPQUlBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQ0xBUyxjQUFVLFFBQUU7UUFFWkM7YUFDQUMsU0FBTy9DLEdBQUdDO01BQ0U7T0FBVitDO1FBQVUscURBRExoRCxLQURQOEM7TUFFWSxVQURMOUM7TUFDSyxjQUVDc0M7UUFDSDtvQ0FER0E7U0FFRCxXQUpWVSxRQUk4Qix1QkFGbkJWO1FBRUQ7NkJBRkNBLE9BQ1RDLFNBQ0FVLFNBREFWLFNBQ0FVLFVBQzJEO01BTG5ELHVDQURGaEQsR0FPTjs0QkFWSjRDLE9BRUFDLEtBQ0FDOzs7O3dDREZBWixPQUlBQzt3Q0NMQVMsT0FHQUU7O0lDR0Y7SUFDQTtJQUNBO0lBQ0E7OztRQ1BFRyxNQUFRO2FBRVJDLGtCQUFrQnBILEtBQUtnQyxFQUFFQztNQUNuQixJQUFKc0UsRUFBSTtNQUNSLDRCQUpFWSxNQUdFWjtNQUVKLHVCQUZJQSxPQURxQnZFLEVBQUVDO01BSTNCLHVCQUhJc0UsRVhJRnhHO01XQUYsbUJBSkl3RztNQUtKLGtCQUxJQTtNQU1KLG1CQU5JQSxFQURnQnZHO01BUXBCLHNCQVBJdUcsRVBLRjlEO01PS0YsMEJBVkk4RDtNQVVKLE9BVklBLENBWUg7SUFmUyxTQWlCTmMsZ0JBQWdCckgsS0FBS2dDLEVBQUVDO01BQ25CLElBQUpzRSxFQUFJO01BQ1IsNEJBbkJFWSxNQWtCRVo7TUFFSix1QkFGSUEsT0FEcUJ2RSxFQUFFQztNQUkzQix1QkFISXNFLEVYWEZ4RztNV2VGLG1CQUpJd0c7TUFLSixrQkFMSUE7TUFNSixtQkFOSUEsRUFEZ0J2RztNQVFwQixzQkFQSXVHLEVQVkY5RDtNT29CRiwwQkFWSThEO01BVUosT0FWSUEsQ0FZSDtJQTlCUyxpQkFFUmEsa0JBZUVDO0lBakJNO2FDQ1JDLGVBQWVmLEVBQUUxRDtNQUNILDBCQURHQTtNQUNILDZCQURDMEQsT0FDaUQ7YUFHaEVnQixPQUFPdkgsS0FBTXdILFdBQVdDLFVBQVd6RixFQUFFQztNQUMvQixJQUFKc0UsRUFBSTtNQUNSLHVCQURJQSxPQURpQ3ZFLEVBQUVDO01BR3ZDLHVCQUZJc0U7TUFHSixtQkFISUE7TUFJSixrQkFKSUE7TUFLSixtQkFMSUEsRUFES3ZHO01BQ0QsU0FTUSxpQkFWRHdIO01BVWIsc0JBVEVqQjtNQVNGLG9CQUc2Qm5DO1FBQWlCLElBQVBwRSxLQUFPLG1CQUFqQm9FO1FBQzNCLHVCQURxQ3BFO2NBQ2hCLGtCQURnQkE7V0FDcUMsMkJBRHJDQTtXQUNxQyxZQUM5RSxlQWRJdUcsRUFEV2lCO1FBYzRCLHNCQWJ2Q2pCLEVBRHNCa0IsVUFlQztNQUYzQixnQ0FaSWxCO01BaUJKLDBCQWpCSUE7TUFrQkoscUJBbEJJQTtNQW1CSixxQkFuQklBO01BbUJKLE9BbkJJQSxDQW9CSDtzQkF6QkNlLGVBSUFDOzthQ0xBRyxTQUFPMUgsS0FBS2dDLEVBQUVDO01BQ1IsSUFBSnNFLEVBQUk7TUFFUix1QkFGSUEsT0FEVXZFLEVBQUVDO01BSWhCLGtCQUhJc0U7TUFJSix1QkFKSUE7TUFLSixtQkFMSUE7TUFNSixtQkFOSUEsRUFES3ZHO01BUVQsc0JBUEl1RyxFVFFGN0Q7TVNFRixxQkFWSTZEO01BVUosT0FWSUEsQ0FXSDtzQkFaQ21COzthQ0FBQyxTQUFPM0gsS0FBS2dDLEVBQUVDO01BQ1IsSUFBSnNFLEVBQUk7TUFFUix1QkFGSUEsT0FEVXZFLEVBQUVDO01BSWhCLGtCQUhJc0U7TUFJSix1QkFKSUE7TUFLSixtQkFMSUE7TUFNSixtQkFOSUEsRUFES3ZHO01BUVQsc0JBUEl1RyxFVlFGN0Q7TVVHRiwwQkFYSTZEO01BWUoscUJBWklBO01BWUosT0FaSUEsQ0FhSDtxQkFkQ29COzs7S0NxQkFDOzs7Ozs7Ozs7Ozs7Ozs7O2FBb0JBQyxnQkFBYyxPQXBCZEQsV0FvQnlCO2FBS3pCRSxnQkFBYyxPQXpCZEYsV0F5QnlCO2FBQ3pCRyxnQkFBYyxPQTFCZEgsWUEwQnlCO2FBQ3pCSSxvQkFBa0IsT0EzQmxCSixZQTJCaUM7YUFDakNLLGtCQUFnQixPQTVCaEJMLFdBNEI2QjthQUM3Qk0sa0JBQWdCLE9BN0JoQk4sV0E2QjZCO2FBQzdCTyxrQkFBZ0IsT0E5QmhCUCxXQThCNkI7YUFDN0JRLGdCQUFjLE9BL0JkUixXQStCeUI7YUFDekJTLGdCQUFjLE9BaENkVCxXQWdDeUI7YUFDekJVLG1CQUFpQixPQWpDakJWLFdBaUMrQjthQUMvQlcsZ0JBQWMsT0FsQ2RYLFdBa0N5QjthQUN6QlksaUJBQWUsT0FuQ2ZaLFlBbUMyQjthQUMzQmEsc0JBQXFCLE9BcENyQmIsWUFvQ3VDO2FBRXZDYyxZQUFVLHlCQUFzQjthQVloQ0MsT0FBSy9FLEVBQUVnRixFQUFFQyxHQUFHQyxHQUFHQyxHQUFHQyxHQUFHQyxHQUFHQyxFQUFFQyxJQUFJQztNQUNoQyxTQW5ERXhCO01BbURGLGNBRE9oRSxFQUFhb0YsR0FBR0MsR0FBZEwsRUFBRUMsR0FBR0MsR0FBR0MsR0FBU0csRUFBRUMsSUFBSUM7TUFDaEMsUUFBcUk7Ozs7T0FEbklUO09BeEJBWjtPQVlBVztPQWxCQWI7T0FLQUM7T0FHQUc7T0FDQUM7T0FDQUM7T0FDQUM7T0FDQUM7T0FDQUM7T0FDQUM7T0FDQUM7T0FDQUM7T0FUQVQ7O2FDL0NBcUIsU0FBT3JKLEtBQUtnQyxFQUFFQztNQUNSLElBQUpzRSxFQUFJO01BQ1IsdUJBRElBLE9BRFV2RSxFQUFFQztNQUdoQix1QkFGSXNFLEVoQktGeEc7TWdCRkYsbUJBSEl3RztNQUlKLGtCQUpJQTtNQUtKLG1CQUxJQSxFQURLdkc7TUFPVCxzQkFOSXVHLEVaS0YvRDtNWUtGLDBCQVZJK0Q7TUFXSix3QkFYSUE7TUFZSixxQkFaSUE7TUFhSixxQkFiSUE7TUFhSixPQWJJQSxDQWNIO2FBRUMrQyxNQUFNL0MsRUFBRXZFLEVBQUVDLEdBQ1osOEJBRFFzRSxPQUFFdkUsRUFBRUMsR0FDbUI7YUFFN0JzSCxRQUFRaEQ7TUFDUDtrQkFDRCx1QkFGUUEsV0FFOEI7YUFFdENpRCxVQUFVakQ7TUFDVDtrQkFDRCx1QkFGVUEsV0FFMkI7YUFFckNrRCxLQUFLbEQsR0FDUCw4QkFET0EsRWhCdEJMeEcsS2dCdUJ3Qjt1QkE3QnhCc0osU0FpQkFDLE1BR0FDLFFBSUFDLFVBSUFDOzthQzdCQUMsaUJBQWVuRCxFQUFFMUQ7TUFDSCxxQkFER0EsYUFDSCw2QkFEQzBELE1BQ21DO2FBR2xEb0QsU0FBTzNKLEtBQU13SCxXQUFXQyxVQUFXekYsRUFBRUM7TUFDL0IsSUFBSnNFLEVBQUk7TUFDUix1QkFESUEsT0FEaUN2RSxFQUFFQztNQUd2Qyx1QkFGSXNFO01BR0osbUJBSElBO01BSUosa0JBSklBO01BS0osbUJBTElBLEVBREt2RztNQUNELFFBT08sYUFSQXdIO01BUWQsc0JBUEdqQjtNQU9ILG1CQUU4Qm5DO1FBQWlCLElBQVBwRSxLQUFPLG1CQUFqQm9FO1FBQzVCLHFCQURzQ3BFO2dCQUNYLGlCQVYxQnVHLEVBRHNCa0I7UUFVc0IsUUFDaUIsa0JBRHhCekg7UUFDd0IsV0FDakUsaUJBWEl1RyxFQURXaUIsZUFZWTtNQUYzQixnQ0FUSWpCO01BZUosMEJBZklBO01BZ0JKLHFCQWhCSUE7TUFpQkoscUJBakJJQTtNQWlCSixPQWpCSUEsQ0FrQkg7d0JBdkJDbUQsaUJBSUFDOzthQ0ZBQyxTQUFPNUosS0FBS2dDLEVBQUVDLEVBQUVZO01BQ1YsSUFBSjBELEVBQUk7TUFFUix1QkFGSUEsT0FEVXZFLEVBQUVDO01BSWhCLGtCQUhJc0U7TUFJSix1QkFKSUE7TUFLSixtQkFMSUE7TUFNSixtQkFOSUEsRUFES3ZHO01BQ0QsUUFPTSxhQVJJNkM7TUFRbEIsc0JBUEkwRDtNQVdKLHFCQVhJQTtNQVdKLE9BWElBLENBWUg7cUJBYkNxRDs7YUNEQUMsV0FDSCxRQUFFO2tCQURDQTs7YUNBQUMsU0FBT2pIO01BQ0QsSUFBSjBELEVBQUk7TUFDUix1QkFESUEsRXBCS0Z4RztNb0JIRixrQkFGSXdHO01BQUksUUFHTSxhQUpMMUQ7TUFJVCxzQkFISTBEO01BS0oscUJBTElBO01BS0osT0FMSUEsQ0FNSDttQkFQQ3VEOzthQ0RDQyxVQUFVeEQsRUFBR3RFO01BQ2hCLHVCQURhc0UsVUFBR3RFO01BQ2hCLDhCQURhc0UsTUFFd0I7YUFHbkN5RCxTQUFPaEssS0FBS2dDLEVBQUVDLEVBQUVZO01BQ1YsSUFBSjBELEVBQUk7TUFDUix1QkFESUEsT0FEVXZFLEVBQUVDO01BR2hCLHVCQUZJc0U7TUFHSixtQkFISUE7TUFJSixrQkFKSUE7TUFLSixtQkFMSUEsRUFES3ZHO01BQ0QsUUFNTSxpQkFQSTZDO01BT2xCLHNCQU5JMEQ7TUFNSixtQkFPK0JuQztRQUFpQjtpQ0FBakJBO1NBQzVCLHNCQURzQ3BFO1FBQ3RDLFdBQXlCLFVBZHhCdUcsRUFEWXRFLE1BZXlCO01BRHpDLGdDQWJJc0U7TUFrQkosMEJBbEJJQTtNQW1CSixxQkFuQklBO01Bb0JKLHFCQXBCSUE7TUFvQkosT0FwQklBLENBcUJIO29CQTNCRXdELFVBS0RDOzthQ0xBQyxXQUFXQyxLQUFLQyxLQUFLdEY7TUFDUDtTQURIcUYsT0FDRyw0QkFERUMsT0FBTEQ7T0FFYixFQUZ1QnJGLElBRXZCLFNBREl1RjtPQUVKLEVBSHVCdkYsSUFHdkIsU0FGSXVGO01BRUosWUFESXBJLEVBQ0FDLEVBQ2tCO0lBQ1QsSUFBWG9JO0lBQVcsYUFFTDlELEVBQUV2RSxFQUFFQztNQUNaLHVCQURRc0U7TUFDUiw4QkFEUUEsT0FBRXZFLEVBQUVDLEdBRWtCO0lBSmpCLFNBUVhxSSxTQUFPdEssS0FBSzZDLElBQUliLEVBQUVDO01BQ1osSUFBSnNFLEVBQUk7TUFFUix1QkFGSUEsT0FEY3ZFLEVBQUVDO01BSXBCLGtCQUhJc0U7TUFJSix1QkFKSUE7TUFLSixtQkFMSUE7TUFNSixtQkFOSUEsRUFES3ZHO01BQ0QsUUFRTSxpQkFUQTZDO01BU2Qsc0JBUkkwRDtNQVFKLG1CQUkrQm5DO1FBQWlCLElBQVBwRSxLQUFPLG1CQUFqQm9FO1FBQzVCLHFCQURzQ3BFO2dCQUNuQixJQWJsQnVHO1FBWTRDLFFBQ2lDLGtCQUR4Q3ZHO1FBQ3dDLFdBQXFCLElBYmxHdUcsOEJBYXVKO01BRDNKLGdDQVpJQTtNQXNCSiwwQkF0QklBO01BdUJKLHdCQXZCSUE7TUF3QkoscUJBeEJJQTtNQXlCSixxQkF6QklBO01BeUJKLE9BekJJQSxDQTBCSDtJQW5DWSxTQTREVmdFLFFBQU1oRSxFQUFFdkUsRUFBRUM7TUFDYix1QkFEU3NFO01BQ1QsOEJBRFNBLE9BQUV2RSxFQUFFQyxHQUVpQjtJQTlEakIsU0EwRVh1SSxVQUFRakUsRUFBRTFEO01BRUkseUJBRkpBO01BRVYsc0JBRlEwRDtNQUVSLDhCQUZRQSxNQUc4QjtJQTdFM0IsU0ErRVhrRSxZQUFVbEUsRUFBRTFEO01BRUUseUJBRkZBO01BRVosc0JBRlUwRDtNQUVWLDhCQUZVQSxNQUcyQjtJQWxGMUIsU0FvRlhtRSxXQUFXbkUsRUFBRTFEO01BQ0MseUJBRERBO01BQ2Isc0JBRFcwRDtNQUNYLDhCQURXQSxNQUUwQjtJQXRGMUIsU0F5RlhvRSxVQUFVcEUsRUFBRTFEO01BQ0UseUJBREZBO01BQ1osc0JBRFUwRDtNQUNWLDhCQURVQSxNQUU0QjtJQTNGM0IsU0E4RlhxRSxPQUFLckUsR0FDUCw4QkFET0EsRXRCNUZMeEcsS3NCNkZ3QjtJQS9GYjs7O09BTFhrSztPQUtBSTtPQVFBQztPQW9EQ0M7T0FjREM7T0FLQUM7T0FLQUM7T0FLQUM7T0FLQUM7SUE5Rlc7O0twQkxGO0tBR2M7S0FDQTtLQUNGO0tBQ0c7S0FDUDtLQUNFO0tBRU47S0FDRDtLQUVLO0tBRVA7S0FFRDthQU1UYSxVQUFVeEg7TUFDWjtNQVljOzs7O1VBNUJaa0g7VUFEQUQ7OztPQThCUyx1QkF4QlRJO09BMEJTLCtDQXhCVEM7T0E0Qlc7MEJBakNYSCxXQUNBQztPQWtDVzswQkFuQ1hELFdBQ0FDO09BbUNXOzBCQXBDWEQsV0FDQUM7T0FxQ1MsK0NBL0JURztPQWdDUywrQ0FoQ1RBO09BaUNVO09BQ0M7TUFHRztNQUNHO01BQ0Y7TUFDQztNQUNSLFNBMURSWDtNQXlFRjs0QkFBd0QsaUJBcENwRGMsS0FqQ0ZaLG9CQXFFMkY7TUFDN0Y7NEJBQXdELG1CQXJDcERZLEtBaENGWCxtQkFxRTRGO01BQzlGOzRCQUF3RCxrQkF0Q3BEVyxLQWxDRmIscUJBd0UrRjtNQUNqRzs0QkFBd0QsaUJBdkNwRGEsS0EvQkZWLHNCQXNFK0Y7TUFFakcscUNBQXNELGNBekNsRFUsS0F5Q2dFO01BQ3BFLHFDQUFzRCxjQTFDbERBLEtBMENnRTtNQUNwRSxxQ0FBc0QsY0EzQ2xEQSxLQTJDZ0U7TUFDcEUscUNBQXNELGNBNUNsREEsS0E0Q2dFO01BR3BFOzRCQUF3RCxlQS9DcERBLDZCQStDMkc7TUFHL0csT0FsRElBLEtBRUFDLEtBSUFDLE9BRUFDLE9BQ0FDLE9BRUFDLEtBQ0FDLEtBYkFQLFFBY0FRLEtBQ0FDO01Bb0NKLFFBR0s7SUF6RU0sU0EyRVRDLGdCQUFnQkM7TUFDbEIsSUFBSUMsUUFEY0Q7TUFDbEIsZ0JBQ0lwSTtRQUFNLFFBRE5xSTtRQUNNO2NBRVNDLFVBQUwzSSxTQUNJLGtCQURKQSxFQUZWSyxPQURBcUksVUFHZUM7UUFEQSxRQU1EO0lBcEZQLFNBc0ZUQyxTQUFPdkksSUFFVCx5QkFGU0EsSUFFVCxRQUVLO0lBMUZNLFNBNEZUd0ksVUFBVXhJLElBQU0sUUFBSztJQTVGWixTQThGVHlJLFVBQVV6STtNQUVaLHlCQUZZQTtNQUdEOztPQUNBO09BQ0U7T0FDQTtPQUNBO09BRUY7T0FDQTtPQUNBLDRCQVJQMEg7T0FTTyx1QkFUUEE7T0FVTyw0QkFUUEM7T0FXUSw2QkFWUkM7T0FXUSx3QkFYUkE7T0FZUSw2QkFYUkM7T0FZUSx3QkFaUkE7T0FhUSw2QkFaUkM7T0FhUSx3QkFiUkE7T0FlUSx3QkFiUkM7T0FjUSw2QkFkUkE7T0FlUSx3QkFkUkM7T0FlUSw2QkFmUkE7TUFnQkQsZUFmQ1UsS0FDQUMsS0FDQUMsS0FDQXJNO1lBWXFDLFVBZnJDbU0sS0FDQUMsS0FHQUUsTUFDQUM7YUFVNkUsVUFmN0VKLEtBQ0FDLEtBS0FJLE1BQ0FDO2NBUXFILFVBZnJITixLQUNBQyxLQVdBUyxNQURBRDtlQUk2SixVQWY3SlQsS0FDQUMsS0FhQVcsTUFEQUQ7Z0JBRXFNLFVBZnJNWCxLQUNBQyxLQU9BTSxNQUNBQztNQU0rTyxRQUFlO0lBeEh2UCxTQW1JVEssbUJBQWlCLDBCQTdDakJoQixTQTZDcUM7SUFuSTVCLFNBcUlUaUIsY0FBY3hKO01BQ1gsK0JBMUlIcUg7TUEwSUc7OztRQUFzQywrQkF4SXpDQztRQXdJeUM7OztTQUFpQztxQ0F0STFFQztVQXNJMEUsZUFBZ0MsbUJBdkoxR1g7TUFvSmlCLFVBR2tIO0lBVWhIOzs7V0FYbkI0QyxpQkEvSEFoQyxhQXdGQWlCLGFBRkFEO0lBb0RLO0lBQWM7OztPQWpLbkI1QjtPQUdBQztPQUNBQztPQUNBQztPQUNBQztPQUNBQztPQUNBQztPQUVBQztPQUNBQztPQUVBQztPQUVBQztPQUVBQztPQU1BQztPQXFFQVc7T0FXQUk7T0FNQUM7T0FFQUM7T0FxQ0FjO09BRUFDO0lBV0s7VSIsInNvdXJjZXMiOlsiL2hvbWUvam92eWFuL2Zyb2dnZXIvX2J1aWxkL2RlZmF1bHQvc3JjL0dhbWUgL3ZlY3Rvci5tbCIsIi9ob21lL2pvdnlhbi9mcm9nZ2VyL19idWlsZC9kZWZhdWx0L3NyYy9jb21wb25lbnRfZGVmcy5tbCIsIi9ob21lL2pvdnlhbi9mcm9nZ2VyL19idWlsZC9kZWZhdWx0L3NyYy9mcm9nZ2VyX2FsbC5tbCIsIi9ob21lL2pvdnlhbi9mcm9nZ2VyL19idWlsZC9kZWZhdWx0L3NyYy9HYW1lIC9yZWN0Lm1sIiwiL2hvbWUvam92eWFuL2Zyb2dnZXIvX2J1aWxkL2RlZmF1bHQvc3JjL3RleHR1cmUubWwiLCIvaG9tZS9qb3Z5YW4vZnJvZ2dlci9fYnVpbGQvZGVmYXVsdC9zcmMvY29sbGlzaW9uX3N5c3RlbS5tbCIsIi9ob21lL2pvdnlhbi9mcm9nZ2VyL19idWlsZC9kZWZhdWx0L3NyYy9pbnB1dF9oYW5kbGVyLm1sIiwiL2hvbWUvam92eWFuL2Zyb2dnZXIvX2J1aWxkL2RlZmF1bHQvc3JjL2NvbnRyb2xfc3lzdGVtLm1sIiwiL2hvbWUvam92eWFuL2Zyb2dnZXIvX2J1aWxkL2RlZmF1bHQvc3JjL2RyYXdfc3lzdGVtLm1sIiwiL2hvbWUvam92eWFuL2Zyb2dnZXIvX2J1aWxkL2RlZmF1bHQvc3JjL21vdmVfc3lzdGVtLm1sIiwiL2hvbWUvam92eWFuL2Zyb2dnZXIvX2J1aWxkL2RlZmF1bHQvc3JjL3N5c3RlbV9kZWZzLm1sIiwiL2hvbWUvam92eWFuL2Zyb2dnZXIvX2J1aWxkL2RlZmF1bHQvc3JjL0dhbWUgL3dhbGwubWwiLCIvaG9tZS9qb3Z5YW4vZnJvZ2dlci9fYnVpbGQvZGVmYXVsdC9zcmMvR2FtZSAvdHJ1Y2subWwiLCIvaG9tZS9qb3Z5YW4vZnJvZ2dlci9fYnVpbGQvZGVmYXVsdC9zcmMvR2FtZSAvdHBvdXQubWwiLCIvaG9tZS9qb3Z5YW4vZnJvZ2dlci9fYnVpbGQvZGVmYXVsdC9zcmMvR2FtZSAvdHBpbi5tbCIsIi9ob21lL2pvdnlhbi9mcm9nZ2VyL19idWlsZC9kZWZhdWx0L3NyYy9nYW1lX3N0YXRlLm1sIiwiL2hvbWUvam92eWFuL2Zyb2dnZXIvX2J1aWxkL2RlZmF1bHQvc3JjL0dhbWUgL3BsYXllci5tbCIsIi9ob21lL2pvdnlhbi9mcm9nZ2VyL19idWlsZC9kZWZhdWx0L3NyYy9HYW1lIC9taXNzaWxlLm1sIiwiL2hvbWUvam92eWFuL2Zyb2dnZXIvX2J1aWxkL2RlZmF1bHQvc3JjL0dhbWUgL2dvYWwubWwiLCIvaG9tZS9qb3Z5YW4vZnJvZ2dlci9fYnVpbGQvZGVmYXVsdC9zcmMvZ2FtZS5tbCIsIi9ob21lL2pvdnlhbi9mcm9nZ2VyL19idWlsZC9kZWZhdWx0L3NyYy9HYW1lIC9iZy5tbCIsIi9ob21lL2pvdnlhbi9mcm9nZ2VyL19idWlsZC9kZWZhdWx0L3NyYy9HYW1lIC9jYXIubWwiLCIvaG9tZS9qb3Z5YW4vZnJvZ2dlci9fYnVpbGQvZGVmYXVsdC9zcmMvR2FtZSAvZnJvZy5tbCJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIHQgPSB7IHggOiBmbG9hdCA7IHkgOiBmbG9hdCB9XG5sZXQgYWRkIGEgYiA9IHsgeCA9IGEueCArLiBiLng7IHkgPSBhLnkgKy4gYi55IH1cbmxldCBzdWIgYSBiID0geyB4ID0gYS54IC0uIGIueDsgeSA9IGEueSAtLiBiLnkgfVxuXG5sZXQgbXVsdCBrIGEgPSB7IHggPSBrKi4gYS54OyB5ID0gayouIGEueSB9XG5cbmxldCBkb3QgYSBiID0gYS54ICouIGIueCArLiBhLnkgKi4gYi55XG5sZXQgbm9ybSBhID0gc3FydCAoZG90IGEgYSlcbmxldCBub3JtYWxpemUgYSA9IG11bHQgKDEuMCAvLiBub3JtIGEpIGFcbmxldCBwcCBmbXQgYSA9IEZvcm1hdC5mcHJpbnRmIGZtdCBcIiglZiwgJWYpXCIgYS54IGEueVxuXG5sZXQgemVybyA9IHsgeCA9IDAuMDsgeSA9IDAuMCB9XG5sZXQgaXNfemVybyB2ID0gdi54ID0gMC4wICYmIHYueSA9IDAuMCIsIm9wZW4gRWNzXG5tb2R1bGUgUG9zaXRpb24gPSBDb21wb25lbnQuTWFrZShzdHJ1Y3QgaW5jbHVkZSBWZWN0b3IgbGV0IG5hbWUgPSBcInBvc2l0aW9uXCIgZW5kKVxubW9kdWxlIFZlbG9jaXR5ID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IGluY2x1ZGUgVmVjdG9yIGxldCBuYW1lID0gXCJ2ZWxvY2l0eVwiIGVuZClcbm1vZHVsZSBNYXNzID0gQ29tcG9uZW50Lk1ha2UgKHN0cnVjdCB0eXBlIHQgPSBmbG9hdCBsZXQgbmFtZSA9IFwibWFzc1wiIGVuZClcbm1vZHVsZSBCb3ggPSBDb21wb25lbnQuTWFrZShzdHJ1Y3QgaW5jbHVkZSBSZWN0IGxldCBuYW1lID0gXCJib3hcIiBlbmQpXG5tb2R1bGUgU3VyZmFjZSA9IENvbXBvbmVudC5NYWtlIChzdHJ1Y3QgaW5jbHVkZSBUZXh0dXJlIGxldCBuYW1lID0gXCJ0ZXh0dXJlXCIgZW5kKVxubW9kdWxlIE5hbWUgPSBDb21wb25lbnQuTWFrZShzdHJ1Y3QgdHlwZSB0ID0gc3RyaW5nIGxldCBuYW1lID0gXCJuYW1lXCIgZW5kKVxubW9kdWxlIENvbGxpc2lvblJlc29sdmVyID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IHR5cGUgdCA9IEVudGl0eS50IC0+IEVudGl0eS50IC0+IHVuaXQgbGV0IG5hbWUgPSBcInJlc29sdmVyXCIgZW5kKVxubW9kdWxlIE93bmVyID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IHR5cGUgdCA9IEVudGl0eS50IGxldCBuYW1lID0gXCJvd25lclwiIGVuZCkiLCJvcGVuIEVjc1xub3BlbiBHZnhcbm9wZW4gQ29tcG9uZW50X2RlZnNcblxubGV0IGJnX2ltZyA9IEdmeC5sb2FkX2ltYWdlIFwiaW1hZ2VzL2JnaW1nLnBuZ1wiXG5cbigqbGV0IGZyb2dfaW1nID0gR2Z4LmxvYWRfaW1hZ2UgXCJpbWFnZXMvZ3Jlbm91aWxsZS5wbmdcIiopXG5sZXQgZnJvZ19hbmltYXRpb25fZHJvaXQgPSBHZngubG9hZF9pbWFnZSBcImltYWdlcy9mcm9nLWRyb2l0ZS5wbmdcIlxubGV0IGZyb2dfYW5pbWF0aW9uX2hhdXQgID0gR2Z4LmxvYWRfaW1hZ2UgXCJpbWFnZXMvZnJvZy1oYXV0LnBuZ1wiXG5sZXQgZnJvZ19hbmltYXRpb25fYmFzID0gR2Z4LmxvYWRfaW1hZ2UgXCJpbWFnZXMvZnJvZy1iYXMucG5nXCJcbmxldCBmcm9nX2FuaW1hdGlvbl9nYXVjaGUgPSBHZngubG9hZF9pbWFnZSBcImltYWdlcy9mcm9nLWdhdWNoZS5wbmdcIlxubGV0IG1pc3NpbGVsZWZ0aW1nID0gR2Z4LmxvYWRfaW1hZ2UgXCJpbWFnZXMvbWlzc2lsZWxlZnRpbWcucG5nXCJcbmxldCBtaXNzaWxlcmlnaHRpbWcgID0gR2Z4LmxvYWRfaW1hZ2UgXCJpbWFnZXMvbWlzc2lsZXJpZ2h0aW1nLnBuZ1wiXG5cbmxldCBzaGFya3JpZ2h0ID0gR2Z4LmxvYWRfaW1hZ2UgXCJpbWFnZXMvc2hhcmtyaWdodC5wbmdcIlxubGV0IHNoYXJrbGVmdCA9IEdmeC5sb2FkX2ltYWdlIFwiaW1hZ2VzL3NoYXJrbGVmdC5wbmdcIlxuXG5sZXQgZnJvZ19hbmltYXRpb24gPSBHZngubG9hZF9pbWFnZSBcImltYWdlcy9mcm9nLWJhcy5wbmdcIlxuXG5sZXQgZ29hbGltZyA9IEdmeC5sb2FkX2ltYWdlIFwiaW1hZ2VzL2dvYWxpbWcuanBnXCJcblxubGV0IGNhcmltZyA9IEdmeC5sb2FkX2ltYWdlIFwiaW1hZ2VzL2NhcmltZy5wbmdcIlxuKCpsZXQgZnJvZyA9IEZyb2cuY3JlYXRlIFwiZnJvZ1wiIGZyb2dfaW1nIDUwLjAgNTAuMCopXG5cblxuXG5cbmxldCBpbml0X2dhbWUgX2R0ID1cbiAgU3lzdGVtLmluaXRfYWxsICgpO1xuIFxuICgqbGV0IHBsYXllcjEgPVxuICAgIFBsYXllci5jcmVhdGUgXCJwbGF5ZXIxXCIgR2xvYmFscy5wbGF5ZXIxX2luaXRfeCBHbG9iYWxzLnBsYXllcl9pbml0X3lcbiAgaW5cbiAgbGV0IHBsYXllcjIgPVxuICAgIFBsYXllci5jcmVhdGUgXCJwbGF5ZXIyXCIgR2xvYmFscy5wbGF5ZXIyX2luaXRfeCBHbG9iYWxzLnBsYXllcl9pbml0X3lcbiAgaW4qKVxuICBcbiAgKCpsZXQgZnJvZyA9IEZyb2cuY3JlYXRlIFwiZnJvZ1wiICBHbG9iYWxzLmZyb2dfaW5pdF94IEdsb2JhbHMuZnJvZ19pbml0X3kgaW4qKVxuICBcbigqIGxldCBmcm9nID0gRnJvZy5jcmVhdGUgXCJmcm9nXCIgZnJvZ19pbWcgR2xvYmFscy5mcm9nX2luaXRfeCBHbG9iYWxzLmZyb2dfaW5pdF95IGluKilcbiAgbGV0IG1pc3NpbGUgPSBNaXNzaWxlLmNyZWF0ZSBcIm1pc3NpbGVcIiAgbWlzc2lsZXJpZ2h0aW1nIG1pc3NpbGVsZWZ0aW1nIEdsb2JhbHMubWlzc2lsZV9pbml0X3ggR2xvYmFscy5taXNzaWxlX2luaXRfeSAgaW5cbiAgbGV0IGZyb2cgPSBGcm9nLmNyZWF0ZSBcImZyb2dcIiBmcm9nX2FuaW1hdGlvbiAoKiByYWpvdXTDqSBwb3VyIDQuNyAqKVxuICAgICAgICAgICAgICAgICAgICAgIEdsb2JhbHMuZnJvZ19pbml0X3ggR2xvYmFscy5mcm9nX2luaXRfeSBpblxuICBsZXQgZ29hbCA9IEdvYWwuY3JlYXRlIFwiZ29hbFwiIEdsb2JhbHMuZ29hbF9pbml0X3ggR2xvYmFscy5nb2FsX2luaXRfeSBnb2FsaW1nIGluXG4gIFxuICAoKmxldCBjYXIgPSBDYXIuY3JlYXRlIFwiY2FyXCIgR2xvYmFscy5jYXJfaW5pdF94IEdsb2JhbHMuY2FyX2luaXRfeSBpbiAqKVxuICAoKmxldCB0cnVjazEgPSBUcnVjay5jcmVhdGUgXCJ0cnVjazFcIiBHbG9iYWxzLnRydWNrMV9pbml0X3ggR2xvYmFscy50cnVjazFfaW5pdF95IGluKilcbiAgbGV0IHRydWNrMSA9IFRydWNrLmNyZWF0ZSBcInRydWNrMVwiIHNoYXJrcmlnaHQgc2hhcmtsZWZ0ICBHbG9iYWxzLnRydWNrMV9pbml0X3ggR2xvYmFscy50cnVjazFfaW5pdF95IGluXG4gIFxuICBsZXQgdHJ1Y2syID0gVHJ1Y2suY3JlYXRlIFwidHJ1Y2syXCIgc2hhcmtyaWdodCBzaGFya2xlZnQgR2xvYmFscy50cnVjazJfaW5pdF94IEdsb2JhbHMudHJ1Y2syX2luaXRfeSBpblxuICBsZXQgdHJ1Y2szID0gVHJ1Y2suY3JlYXRlIFwidHJ1Y2szXCIgc2hhcmtyaWdodCBzaGFya2xlZnQgR2xvYmFscy50cnVjazNfaW5pdF94IEdsb2JhbHMudHJ1Y2szX2luaXRfeSBpblxuICBcbiAgbGV0IGNhcjEgPSBDYXIuY3JlYXRlIFwiY2FyMVwiIEdsb2JhbHMuY2FyMV9pbml0X3ggR2xvYmFscy5jYXIxX2luaXRfeSBjYXJpbWcgIGluXG4gIGxldCBjYXIyID0gQ2FyLmNyZWF0ZSBcImNhcjJcIiBHbG9iYWxzLmNhcjJfaW5pdF94IEdsb2JhbHMuY2FyMl9pbml0X3kgY2FyaW1nICBpblxuICBsZXQgdHBpbiA9ICBUcGluLmNyZWF0ZSBcInRwaW5cIiBHbG9iYWxzLnRwaW5faW5pdF94IEdsb2JhbHMudHBpbl9pbml0X3kgaW5cbiAgbGV0IHRwb3V0ID0gIFRwb3V0LmNyZWF0ZSBcInRwb3V0XCIgR2xvYmFscy50cG91dF9pbml0X3ggR2xvYmFscy50cG91dF9pbml0X3kgaW5cbiAgXG4gIFxuICBsZXQgX3dhbGxfdG9wID0gV2FsbC5jcmVhdGVfaG9yaXpvbnRhbCBcIndhbGxfdG9wXCIgMC4wIDAuMCBpblxuICBsZXQgX3dhbGxfYm90dG9tID0gV2FsbC5jcmVhdGVfaG9yaXpvbnRhbCBcIndhbGxfYm90dG9tXCIgMC4wIDYwMC4wIGluXG4gIGxldCBfd2FsbF9sZWZ0ID0gV2FsbC5jcmVhdGVfdmVydGljYWwgXCJ3YWxsX2xlZnRcIiAwLjAgMC4wIGluXG4gIGxldCBfd2FsbF9yaWdodCA9IFdhbGwuY3JlYXRlX3ZlcnRpY2FsIFwid2FsbF9yaWdodFwiIDgwMC4wIDIwLjAgaW5cbiAgbGV0IF9iZyA9IEJnLmNyZWF0ZSBiZ19pbWcgaW5cbiAgXG4gICgqbGV0IF9iZyA9IEJnLmNyZWF0ZSBiZ19pbWcgaW4gKCogUXVlc3Rpb24gMy44ICopKilcbiAgXG4gICgqXG4gIGxldCBfaXdhbGxfbGVmdCA9IFNjb3JlX3pvbmUuY3JlYXRlIFwid2FsbF9sZWZ0XCIgcGxheWVyMiAwLjAgMjAuMCBpblxuICBsZXQgX2l3YWxsX3JnaHQgPSBTY29yZV96b25lLmNyZWF0ZSBcIndhbGxfcmlnaHRcIiBwbGF5ZXIxIDc2MC4wIDIwLjAgaW5cbiAgKilcblxuICBcbiAgKCpsZXQgX2l3YWxsX2xlZnQgPSBTY29yZV96b25lLmNyZWF0ZSBcIndhbGxfbGVmdFwiIGZyb2cgNTAuMCAyMC4wIGluKilcbiAgXG5cbiAoKiBsZXQgX2JnID0gQmcuY3JlYXRlIGJnX2ltZyBpbiopICgqIFF1ZXN0aW9uIDMuOCAqKVxuIFxuICBJbnB1dF9oYW5kbGVyLnJlZ2lzdGVyX2NvbW1hbmQgKEtleURvd24gXCJ6XCIpIChmdW4gKCkgLT4gRnJvZy5tb3ZlX3VwIGZyb2cgZnJvZ19hbmltYXRpb25faGF1dCApO1xuICBJbnB1dF9oYW5kbGVyLnJlZ2lzdGVyX2NvbW1hbmQgKEtleURvd24gXCJzXCIpIChmdW4gKCkgLT4gRnJvZy5tb3ZlX2Rvd24gZnJvZyBmcm9nX2FuaW1hdGlvbl9iYXMpO1xuICBJbnB1dF9oYW5kbGVyLnJlZ2lzdGVyX2NvbW1hbmQgKEtleURvd24gXCJkXCIpIChmdW4gKCkgLT4gRnJvZy5tb3ZlX3JpZ2h0IGZyb2cgZnJvZ19hbmltYXRpb25fZHJvaXQgKTtcbiAgSW5wdXRfaGFuZGxlci5yZWdpc3Rlcl9jb21tYW5kIChLZXlEb3duIFwicVwiKSAoZnVuICgpIC0+IEZyb2cubW92ZV9sZWZ0IGZyb2cgZnJvZ19hbmltYXRpb25fZ2F1Y2hlICk7XG5cbiAgSW5wdXRfaGFuZGxlci5yZWdpc3Rlcl9jb21tYW5kIChLZXlVcCBcInpcIikgKGZ1biAoKSAtPiBGcm9nLnN0b3AgZnJvZyk7XG4gIElucHV0X2hhbmRsZXIucmVnaXN0ZXJfY29tbWFuZCAoS2V5VXAgXCJzXCIpIChmdW4gKCkgLT4gRnJvZy5zdG9wIGZyb2cpO1xuICBJbnB1dF9oYW5kbGVyLnJlZ2lzdGVyX2NvbW1hbmQgKEtleVVwIFwiZFwiKSAoZnVuICgpIC0+IEZyb2cuc3RvcCBmcm9nKTtcbiAgSW5wdXRfaGFuZGxlci5yZWdpc3Rlcl9jb21tYW5kIChLZXlVcCBcInFcIikgKGZ1biAoKSAtPiBGcm9nLnN0b3AgZnJvZyk7XG5cblxuICBJbnB1dF9oYW5kbGVyLnJlZ2lzdGVyX2NvbW1hbmQgKEtleURvd24gXCJhXCIpIChmdW4gKCkgLT4gRnJvZy5yZXNldCBmcm9nIEdsb2JhbHMuZnJvZ19pbml0X3ggR2xvYmFscy5mcm9nX2luaXRfeSk7XG5cblxuICBHYW1lX3N0YXRlLmluaXQgZnJvZyBnb2FsIHRydWNrMSB0cnVjazIgdHJ1Y2szIGNhcjEgY2FyMiBtaXNzaWxlIHRwaW4gdHBvdXQ7XG5cbiAgXG4gIGZhbHNlXG5cbmxldCBjaGFpbl9mdW5jdGlvbnMgZl9saXN0ID1cbiAgbGV0IGZ1bnMgPSByZWYgZl9saXN0IGluXG4gIGZ1biBkdCAtPiBtYXRjaCAhZnVucyB3aXRoXG4gICAgICAgICAgICAgICBbXSAtPiBmYWxzZVxuICAgICAgICAgICAgICB8IGYgOjogbGwgLT5cbiAgICAgICAgICAgICAgICAgaWYgZiBkdCB0aGVuIHRydWVcbiAgICAgICAgICAgICAgICAgZWxzZSBiZWdpblxuICAgICAgICAgICAgICAgICAgZnVucyA6PSBsbDtcbiAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgZW5kXG4gICAgICAgICAgXG5sZXQgdXBkYXRlIGR0ID1cbiAgKCogVXBkYXRlIGFsbCBzeXN0ZW1zICopXG4gIFN5c3RlbS51cGRhdGVfYWxsIGR0O1xuICAoKiBSZXBlYXQgaW5kZWZpbml0ZWx5ICopXG4gIGZhbHNlXG5cbmxldCBnYW1lX292ZXIgX2R0ID0gZmFsc2VcblxubGV0IHBsYXlfZ2FtZSBkdCA9XG4gICgqIFVwZGF0ZSBhbGwgc3lzdGVtcyAqKVxuICBTeXN0ZW0udXBkYXRlX2FsbCBkdDtcbiAgbGV0IGZyb2cgPSBHYW1lX3N0YXRlLmdldF9mcm9nICgpIGluXG4gIGxldCBnb2FsID0gR2FtZV9zdGF0ZS5nZXRfZ29hbCAoKSBpblxuICBsZXQgdHJ1Y2sxID0gR2FtZV9zdGF0ZS5nZXRfdHJ1Y2sxICgpIGluXG4gIGxldCB0cnVjazIgPSBHYW1lX3N0YXRlLmdldF90cnVjazIgKCkgaW5cbiAgbGV0IHRydWNrMyA9IEdhbWVfc3RhdGUuZ2V0X3RydWNrMyAoKSBpblxuICBcbiAgbGV0IGNhcjEgPSBHYW1lX3N0YXRlLmdldF9jYXIxICgpIGluXG4gIGxldCBjYXIyID0gR2FtZV9zdGF0ZS5nZXRfY2FyMiAoKSBpblxuICBsZXQgZnBvcyA9IFBvc2l0aW9uLmdldCBmcm9nIGluXG4gIGxldCBmYm94ID0gQm94LmdldCBmcm9nIGluXG4gIGxldCBncG9zID0gUG9zaXRpb24uZ2V0IGdvYWwgaW5cbiAgbGV0IGdib3ggPSAoKkJveC5nZXQgZ29hbCopUmVjdC57d2lkdGggPSAxMDtoZWlnaHQgPSAxMH0gaW5cbiAgbGV0IHRwb3MxID0gUG9zaXRpb24uZ2V0IHRydWNrMSBpblxuICBsZXQgdGJveDEgPSBCb3guZ2V0IHRydWNrMSBpblxuICBsZXQgdHBvczIgPSBQb3NpdGlvbi5nZXQgdHJ1Y2syIGluXG4gIGxldCB0Ym94MiA9IEJveC5nZXQgdHJ1Y2syIGluXG4gIGxldCB0cG9zMyA9IFBvc2l0aW9uLmdldCB0cnVjazMgaW5cbiAgbGV0IHRib3gzID0gQm94LmdldCB0cnVjazMgaW5cbiAgXG4gIGxldCBjYm94MSA9IEJveC5nZXQgY2FyMSBpblxuICBsZXQgY3BvczEgPSBQb3NpdGlvbi5nZXQgY2FyMSBpblxuICBsZXQgY2JveDIgPSBCb3guZ2V0IGNhcjIgaW5cbiAgbGV0IGNwb3MyID0gUG9zaXRpb24uZ2V0IGNhcjIgaW5cbiAgaWYgUmVjdC5pbnRlcnNlY3QgZnBvcyBmYm94IGdwb3MgZ2JveCB8fCBSZWN0LmludGVyc2VjdCBmcG9zIGZib3ggdHBvczEgdGJveDEgfHwgUmVjdC5pbnRlcnNlY3QgZnBvcyBmYm94IHRwb3MyIHRib3gyIHx8IFJlY3QuaW50ZXJzZWN0IGZwb3MgZmJveCBjcG9zMSBjYm94MSB8fCBSZWN0LmludGVyc2VjdCBmcG9zIGZib3ggY3BvczIgY2JveDIgfHwgUmVjdC5pbnRlcnNlY3QgZnBvcyBmYm94IHRwb3MzIHRib3gzIHRoZW4gZmFsc2UgZWxzZSB0cnVlXG4gICgqVGVzdGVyIGxlcyBjb25kaXRpb25zIGQnYXJyw6p0XG4gIHNpIHBhcyBkJ2FycsOqdCByZW52b3llciBUcnVlXG4gIHNpIGFycsOqdDogZW5yZWdpc3RyZXIgbGEgY29uZGl0aW9uIGRhbnMgZ2FtZV9zdGF0ZSBldCByZW52b3llciBmYWxzZSopXG4gIFxuXG4gIFxuICBcbiAgXG4gICgqR2FtZV9zdGF0ZS5nZXRfc2NvcmUxICgpIDwgMTAgJiYgR2FtZV9zdGF0ZS5nZXRfc2NvcmUyICgpIDwgMTAqKVxuICBcbmxldCB1cGRhdGVfbG9vcCAoKSA9IEdmeC5tYWluX2xvb3AgdXBkYXRlXG5cbmxldCBsb2FkX2dyYXBoaWNzIF9kdCA9XG4gICBub3QgKEdmeC5pbWFnZV9yZWFkeSBmcm9nX2FuaW1hdGlvbil8fCBub3QoR2Z4LmltYWdlX3JlYWR5IGdvYWxpbWcpIHx8IG5vdCAoR2Z4LmltYWdlX3JlYWR5IGNhcmltZykgfHwgbm90IChHZnguaW1hZ2VfcmVhZHkgYmdfaW1nICkgICAoKiBxdWVzdGlvbiAzLjYgKilcblxuXG4oKlxubGV0ICgpID1cbiAgaW5pdCAoKTtcbiAgdXBkYXRlX2xvb3AgKClcbiAgZmFsc2UgXG4gICopXG4gIFxubGV0ICgpID0gR2Z4Lm1haW5fbG9vcCAoXG4gICAgICAgIGNoYWluX2Z1bmN0aW9ucyBbXG4gICAgICAgICAgIGxvYWRfZ3JhcGhpY3M7ICgqIMOgIHJham91dGVyIHBvdXIgcXVlc3Rpb24gMy42ICopXG4gICAgICAgICAgICBpbml0X2dhbWU7XG4gICAgICAgICAgICBwbGF5X2dhbWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGdhbWVfb3ZlciBcbiAgICAgICAgXSlcbiAiLCJvcGVuIFZlY3RvclxuXG50eXBlIHQgPSB7IHdpZHRoIDogaW50OyBoZWlnaHQgOiBpbnQgfVxubGV0IHRvcF9sZWZ0IHYgX2IgPSB2XG5sZXQgdG9wX3JpZ2h0IHYgYiA9IHsgdiB3aXRoIHggPSB2LnggKy4gZmxvYXQgYi53aWR0aCB9XG5sZXQgYm90dG9tX2xlZnQgdiBiID0geyB2IHdpdGggeSA9IHYueSArLiBmbG9hdCBiLmhlaWdodCB9XG5cbmxldCBib3R0b21fcmlnaHQgdiBiID0geyB4ID0gdi54ICsuIGZsb2F0IGIud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHYueSArLiBmbG9hdCBiLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5sZXQgY2VudGVyIHYgYiA9IHsgXG4gIHggPSB2LnggKy4gMC41ICouIGZsb2F0IGIud2lkdGg7XG4gIHkgPSB2LnkgKy4gMC41ICouIGZsb2F0IGIuaGVpZ2h0O1xufVxuXG5sZXQgbWRpZmYgdjEgYjEgdjIgYjIgPVxuICAoKiBXZSB1c2UgdGhlIE1pbmtvd3NraSBkaWZmZXJlbmNlIG9mIEJveDEgYW5kIEJveDIgKilcbiAgbGV0IHggPSB2MS54IC0uIHYyLnggLS4gZmxvYXQgYjIud2lkdGggaW5cbiAgbGV0IHkgPSB2MS55IC0uIHYyLnkgLS4gZmxvYXQgYjIuaGVpZ2h0IGluXG4gIGxldCBoID0gYjEuaGVpZ2h0ICsgYjIuaGVpZ2h0IGluXG4gIGxldCB3ID0gYjEud2lkdGggKyBiMi53aWR0aCBpblxuICAoe3ggPSB4OyB5ID0geX0sIHt3aWR0aCA9IHc7IGhlaWdodCA9IGh9KVxuIFxubGV0IGhhc19vcmlnaW4gdiBiID1cbiAgdi54IDwgMC4wICYmIHYueCArLiBmbG9hdCBiLndpZHRoID4gMC4wICYmIHYueSA8IDAuMCAmJiB2LnkgKy4gZmxvYXQgYi5oZWlnaHQgPiAwLjAgIFxuXG5sZXQgaW50ZXJzZWN0IHYxIGIxIHYyIGIzID1cbiAgbGV0IHYsIGIgPSBtZGlmZiB2MSBiMSB2MiBiMyBpbiBcbiAgaGFzX29yaWdpbiB2IGJcblxubGV0IHBwIGZtdCBiID0gRm9ybWF0LmZwcmludGYgZm10IFwiW3c6JWQsaDolZF1cIiBiLndpZHRoIGIuaGVpZ2h0XG4iLCIoKiBRdWVzdGlvbiA0LjIgKilcbnR5cGUgYW5pbWF0aW9uID0ge1xuICBmcmFtZXMgOiBHZngucmVuZGVyIGFycmF5O1xuICBtdXRhYmxlIGN1cnJlbnQgOiBpbnRcbn1cblxudHlwZSB0ID0gXG4gIENvbG9yIG9mIEdmeC5jb2xvciAgKCogUXVlc3Rpb24gMy4xIGF2ZWMgYXVzc2kgbGVzIG1vZGlmcyBkZXMgNCBjb3VsZXVycyBjaS1kZXNzb3VzICopXG58IEltYWdlIG9mIEdmeC5yZW5kZXIgKCogUXVlc3Rpb24gMy4zICopXG58IEFuaW1hdGlvbiBvZiBhbmltYXRpb24gKCogUXVlc3Rpb24gNC4yICopXG5cbmxldCBibGFjayA9IENvbG9yICggR2Z4LmNvbG9yIDAgMCAwIDI1NSlcbmxldCByZWQgPSBDb2xvciAoR2Z4LmNvbG9yIDI1NSAwIDAgMjU1KVxubGV0IGJsdWUgPSBDb2xvciAoR2Z4LmNvbG9yIDAgMCAyNTUgMjU1KVxubGV0IGdyYXkgPSBDb2xvciAoR2Z4LmNvbG9yIDEyOCAxMjggMTI4IDI1NSlcblxuXG4oKiBRdWVzdGlvbiAzLjQgKilcbmxldCBjcmVhdGVfaW1hZ2UgaW1nIHcgaCA9IFxuICBsZXQgb3MgPSBHZnguY3JlYXRlX29mZnNjcmVlbiB3IGggaW5cbiAgR2Z4LmRyYXdfaW1hZ2Vfc2NhbGUgb3MgaW1nIDAgMCB3IGg7XG4gIEltYWdlIG9zXG5cblxuKCogUXVlc3Rpb24gNC4zICAqKVxubGV0IGNyZWF0ZV9hbmltYXRpb24gaW1nIG51bV93IG51bV9oIHN3IHNoIGR3IGRoID1cbiAgbGV0IGZyYW1lcyA9IEFycmF5LmluaXQgKG51bV93ICogbnVtX2gpIChmdW4gXyAtPiBHZnguY3JlYXRlX29mZnNjcmVlbiBkdyBkaCkgaW5cbiAgbGV0IHggPSByZWYgMCBpblxuICBsZXQgeSA9IHJlZiAwIGluXG4gIGZvciBqID0gMCB0byBudW1faCAtIDEgZG9cbiAgICBmb3IgaSA9IDAgdG8gbnVtX3cgLSAxIGRvXG4gICAgICBHZnguZHJhd19pbWFnZV9mdWxsIGZyYW1lcy4oaiAqIG51bV93ICsgaSkgaW1nICF4ICF5IHN3IHNoIDAgMCBkdyBkaDtcbiAgICAgIHggOj0gIXggKyBzdztcbiAgICBkb25lO1xuICAgIHggOj0gMDtcbiAgICB5IDo9ICF5ICsgc2g7XG4gIGRvbmU7XG4gIEFuaW1hdGlvbiB7IGN1cnJlbnQgPSAwOyBmcmFtZXMgPSBmcmFtZXMgfVxuXG4gICgqIFF1ZXN0aW9uIDQuNCAqKVxubGV0IGdldF9mcmFtZSBhbmltIGRpciA9XG4gIGxldCBmID0gYW5pbS5mcmFtZXMuKGFuaW0uY3VycmVudCkgaW5cbiAgbGV0IGQgPSBcbiAgICBpZiBkaXIgPiAwIHRoZW4gMSBlbHNlIGlmIGRpciA8IDAgdGhlbiAtMSBlbHNlIDBcbiAgaW5cbiAgbGV0IGxlbiA9IEFycmF5Lmxlbmd0aCBhbmltLmZyYW1lcyBpblxuICBhbmltLmN1cnJlbnQgPC0gKGFuaW0uY3VycmVudCArIGxlbiArIGQpIG1vZCBsZW47XG4gIGZcblxuXG5cbiIsIm9wZW4gQ29tcG9uZW50X2RlZnNcblxuXG5sZXQgaW5pdCAoKSA9ICgpXG5cbmxldCB1cGRhdGUgX2R0IGVsID1cbiAgTGlzdC5pdGVyaSAoZnVuIGkgZTEgLT5cbiAgICBMaXN0Lml0ZXJpIChmdW4gaiBlMiAtPlxuICAgICAgKCogVW5lIGRvdWJsZSBib3VjbGUgcXVpIMOpdml0ZSBkZSBjb21wYXJlciBkZXV4IGZvaXNcbiAgICAgICAgIGxlcyBvYmpldHMgOiBzaSBvbiBjb21wYXJlIEEgZXQgQiwgb24gbmUgY29tcGFyZSBwYXMgQiBldCBBLlxuICAgICAgICAgSWwgZmF1ZHJhIGFtw6lsaW9yZXIgY2VsYSBzaSBvbiBhIGJlYXVjb3VwICg+IDMwKSBvYmpldHMgc2ltdWx0YW7DqW1lbnQuXG4gICAgICAqKVxuICAgICAgaWYgaiA+IGkgdGhlbiBiZWdpblxuICAgICAgICAoKiBsZXMgY29tcG9zYW50cyBkdSByZWN0YW5nbGUgcjEgKilcbiAgICAgICAgbGV0IHBvczEgPSBQb3NpdGlvbi5nZXQgZTEgaW5cbiAgICAgICAgbGV0IGJveDEgPSBCb3guZ2V0IGUxIGluXG4gICAgICAgICgqIGxlcyBjb21wb3NhbnRzIGR1IHJlY3RhbmdsZSByMiAqKVxuICAgICAgICBsZXQgcG9zMiA9IFBvc2l0aW9uLmdldCBlMiBpblxuICAgICAgICBsZXQgYm94MiA9IEJveC5nZXQgZTIgaW5cbiAgICAgICAgKCogbGVzIHZpdGVzc2VzICopXG4gICAgICAgIGxldCB2MSA9IFZlbG9jaXR5LmdldCBlMSBpblxuICAgICAgICBsZXQgdjIgPSBWZWxvY2l0eS5nZXQgZTIgaW5cbiAgICAgICAgKCogWzFdIGxhIHNvdXN0cmFjdGlvbiBkZSBNaW5rb3dza2kgKilcbiAgICAgICAgbGV0IHNfcG9zLCBzX3JlY3QgPSBSZWN0Lm1kaWZmIHBvczIgYm94MiBwb3MxIGJveDEgaW5cbiAgICAgICAgKCogWzJdIHNpIGludGVyc2VjdGlvbiBldCB1biBkZXMgb2JqZXRzIGV0IG1vYmlsZSwgbGVzIG9iamV0cyByZWJvbmRpc3NlbnQgKilcbiAgICAgICAgaWYgUmVjdC5oYXNfb3JpZ2luIHNfcG9zIHNfcmVjdCAmJlxuICAgICAgICAgIG5vdCAoVmVjdG9yLmlzX3plcm8gdjEgJiYgVmVjdG9yLmlzX3plcm8gdjIpXG4gICAgICAgICAgdGhlbiBiZWdpblxuICAgICAgICAgICAgKCogWzNdIGxlIHBsdXMgcGV0aXQgZGVzIHZlY3RldXJzIGEgYiBjIGQgKilcbiAgICAgICAgICAgIGxldCBhID0gVmVjdG9yLnsgeCA9IHNfcG9zLng7IHkgPSAwLjB9IGluXG4gICAgICAgICAgICBsZXQgYiA9IFZlY3Rvci57IHggPSBmbG9hdCBzX3JlY3Qud2lkdGggKy4gc19wb3MueDsgeSA9IDAuMCB9IGluXG4gICAgICAgICAgICBsZXQgYyA9IFZlY3Rvci57IHggPSAwLjA7IHkgPSBzX3Bvcy55IH0gaW5cbiAgICAgICAgICAgIGxldCBkID0gVmVjdG9yLnsgeCA9IDAuMDsgeSA9IGZsb2F0IHNfcmVjdC5oZWlnaHQgKy4gc19wb3MueX0gaW4gXG4gICAgICAgICAgICBsZXQgbiA9IExpc3QuZm9sZF9sZWZ0IChmdW4gbWluX3YgdiAtPlxuICAgICAgICAgICAgICBpZiBWZWN0b3Iubm9ybSB2ICA8IFZlY3Rvci5ub3JtIG1pbl92IHRoZW4gdiBlbHNlIG1pbl92KSBcbiAgICAgICAgICAgICAgYSBbIGI7IGMgOyBkXVxuICAgICAgICAgICAgaW5cbiAgICAgICAgICAgICgqICBbNF0gcmFwcG9ydCBkZXMgdml0ZXNzZXMgZXQgZMOpcGxhY2VtZW50IGRlcyBvYmpldHMgKilcbiAgICAgICAgICAgIGxldCBuX3YxID0gVmVjdG9yLm5vcm0gdjEgaW5cbiAgICAgICAgICAgIGxldCBuX3YyID0gVmVjdG9yLm5vcm0gdjIgaW5cbiAgICAgICAgICAgIGxldCBzID0gKG5fdjEgKy4gbl92MikgaW5cbiAgICAgICAgICAgIGxldCBuMSA9IG5fdjEgLy4gcyBpblxuICAgICAgICAgICAgbGV0IG4yID0gbl92MiAvLiBzIGluXG4gICAgICAgICAgICBsZXQgZGVsdGFfcG9zMSA9IFZlY3Rvci5tdWx0IG4xIG4gaW5cbiAgICAgICAgICAgIGxldCBkZWx0YV9wb3MyID0gVmVjdG9yLm11bHQgKEZsb2F0Lm5lZyBuMikgbiBpblxuICAgICAgICAgICAgUG9zaXRpb24uc2V0IGUxIChWZWN0b3IuYWRkIHBvczEgZGVsdGFfcG9zMSk7XG4gICAgICAgICAgICBQb3NpdGlvbi5zZXQgZTIgKFZlY3Rvci5hZGQgcG9zMiBkZWx0YV9wb3MyKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAoKiBbNV0gT24gbm9ybWFsaXNlIG4gKG9uIGNhbGN1bGUgdW4gdmVjdGV1ciBkZSBtw6ptZSBkaXJlY3Rpb24gbWFpcyBkZSBub3JtZSAxKSAqKVxuICAgICAgICAgICAgbGV0IG4gPSBWZWN0b3Iubm9ybWFsaXplIG4gaW5cbiAgICAgICAgICAgICgqIFs2XSBWaXRlc3NlIHJlbGF0aXZlIGVudHJlIHYyIGV0IHYxICopXG4gICAgICAgICAgICBsZXQgdiA9IFZlY3Rvci5zdWIgdjEgdjIgaW5cblxuICAgICAgICAgICAgKCogUHLDqXBhcmF0aW9uIGF1IGNhbGN1bCBkZSBsJ2ltcHVsc2lvbiAqKVxuICAgICAgICAgICAgKCogRWxhc3RpY2l0w6kgZml4ZS4gRW4gcHJhdGlxdWUsIGwnZWxhc3RpY2l0w6kgcGV1dCDDqnRyZSBzdG9ja8OpZSBkYW5zXG4gICAgICAgICAgICAgICBsZXMgb2JqZXRzIGNvbW1lIHVuIGNvbXBvc2FudCA6IDEgcG91ciBsYSBiYWxsZSBldCBsZXMgbXVycywgMC41IHBvdXJcbiAgICAgICAgICAgICAgIGRlcyBvYnN0YWNsZXMgYWJzb3JiYW50cywgMS4yIHBvdXIgZGVzIG9ic3RhY2xlcyByZWJvbmRpc3NhbnQsIOKApiAqKVxuICAgICAgICAgICAgbGV0IGUgPSAxLjAgaW5cblxuICAgICAgICAgICAgKCogbm9ybWFsaXNhdGlvbiBkZXMgbWFzc2VzICopXG4gICAgICAgICAgICBsZXQgbTEgPSBNYXNzLmdldCBlMSBpblxuICAgICAgICAgICAgbGV0IG0yID0gTWFzcy5nZXQgZTIgaW4gICAgXG4gICAgICAgICAgICBsZXQgbTEsIG0yID0gXG4gICAgICAgICAgICAgIGlmIEZsb2F0LmlzX2luZmluaXRlIG0xICYmIEZsb2F0LmlzX2luZmluaXRlIG0yIHRoZW5cbiAgICAgICAgICAgICAgICBpZiBuX3YxID0gMC4wIHRoZW4gbTEsIDEuMCBlbHNlIGlmIG5fdjIgPSAwLjAgdGhlbiAxLjAsIG0yIGVsc2VcbiAgICAgICAgICAgICAgICAgIDAuMCwgMC4wXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgbTEsIG0yXG4gICAgICAgICAgICBpblxuICAgICAgICAgICAgKCogWzddIGNhbGN1bCBkZSBsJ2ltcHVsc2lvbiAqKVxuICAgICAgICAgICAgbGV0IGogPVxuICAgICAgICAgICAgICAgKC0uKDEuMCArLiBlKSAqLiBWZWN0b3IuZG90IHYgbikvLiAoICgxLiAvLiBtMSkgKy4gKDEuIC8uIG0yKSlcbiAgICAgICAgICAgIGluXG4gICAgICAgICAgICAoKiBbOF0gY2FsY3VsIGRlcyBub3V2ZWxsZXMgdml0ZXNzZXMgKilcbiAgICAgICAgICAgIGxldCBuZXdfdjEgPSBWZWN0b3IuYWRkIHYxIChWZWN0b3IubXVsdCAoai8uIG0xKSBuKSBpblxuICAgICAgICAgICAgbGV0IG5ld192MiA9IFZlY3Rvci5zdWIgdjIgKFZlY3Rvci5tdWx0IChqLy4gbTIpIG4pIGluXG4gICAgICAgICAgICAoKiBbOV0gbWlzZSDDoCBqb3VyIGRlcyB2aXRlc3NlcyAqKVxuICAgICAgICAgICAgVmVsb2NpdHkuc2V0IGUxIG5ld192MTtcbiAgICAgICAgICAgIFZlbG9jaXR5LnNldCBlMiBuZXdfdjI7XG4gICAgICAgICAgICAoKiBbMTBdIGFwcGVsIGRlcyByZXNvbHZldXJzICopXG4gICAgICAgICAgICBpZiBDb2xsaXNpb25SZXNvbHZlci5oYXNfY29tcG9uZW50IGUxIHRoZW4gKENvbGxpc2lvblJlc29sdmVyLmdldCBlMSkgZTEgZTI7XG4gICAgICAgICAgICBpZiBDb2xsaXNpb25SZXNvbHZlci5oYXNfY29tcG9uZW50IGUyIHRoZW4gKENvbGxpc2lvblJlc29sdmVyLmdldCBlMikgZTIgZTFcbiAgICAgICAgICBlbmRcbiAgICAgIGVuZFxuICAgICAgKSBlbCkgZWxcbiIsIlxubGV0IGNvbW1hbmRzID0gSGFzaHRibC5jcmVhdGUgMTdcblxuXG5sZXQgcmVnaXN0ZXJfY29tbWFuZCBldiBmID1cbiAgaWYgZXYgIT0gR2Z4Lk5vRXZlbnQgdGhlblxuICAgIEhhc2h0YmwuYWRkIGNvbW1hbmRzICBldiBmXG5cbmxldCBnZXRfY29tbWFuZHMgZXYgPSBIYXNodGJsLmZpbmRfYWxsIGNvbW1hbmRzIGV2IiwiXG5sZXQgaW5pdCAoKSA9ICgpXG5cbmxldCB1cGRhdGUgX2R0IF9lbCA9XG4gICgqIENoZWNrIGZvciBrZXlib2FyZCBldmVudHMgKilcbiAgbGV0IHJlYyBsb29wX2V2ZW50cyAoKSA9XG4gICAgICBtYXRjaCBHZngucG9sbF9ldmVudCAoKSB3aXRoXG4gICAgIE5vRXZlbnQgLT4gKClcbiAgICB8IGV2IC0+IFxuICAgICAgTGlzdC5pdGVyIChmdW4gZiAtPiBmICgpKSAoSW5wdXRfaGFuZGxlci5nZXRfY29tbWFuZHMgZXYpO1xuICAgICAgbG9vcF9ldmVudHMgKClcbiAgICBpblxuICAgIGxvb3BfZXZlbnRzICgpXG4iLCJvcGVuIENvbXBvbmVudF9kZWZzXG5cbmxldCBjdHggPSByZWYgTm9uZVxubGV0IGluaXQgKCkgPVxuICBsZXQgXywgYyA9IEdmeC5jcmVhdGUgXCJnYW1lX2NhbnZhczo4MDB4NjAwOlwiICBpblxuICBjdHggOj0gU29tZSBjXG5cbmxldCB1cGRhdGUgX2R0IGVsID1cbiAgbGV0IGN0eCA9IE9wdGlvbi5nZXQgIWN0eCBpblxuICBHZnguY2xlYXJfcmVjdCBjdHggMCAwIDgwMCA2MDA7XG4gIExpc3QuaXRlciAoZnVuIGUgLT5cbiAgICBsZXQgcG9zID0gUG9zaXRpb24uZ2V0IGUgaW5cbiAgICBsZXQgYm94ID0gQm94LmdldCBlIGluXG4gICAgbGV0IHN1cmZhY2UgPSBTdXJmYWNlLmdldCBlIGluICgqIFF1ZXN0aW9uIDMuMiAqKVxuICAgIG1hdGNoIHN1cmZhY2Ugd2l0aFxuICAgIENvbG9yIGNvbG9yIC0+IEdmeC5maWxsX3JlY3QgY3R4IChpbnRfb2ZfZmxvYXQgcG9zLngpXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGludF9vZl9mbG9hdCBwb3MueSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LndpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAoKiBRdWVzdGlvbiAzLjMgKilcbiAgICB8IEltYWdlIHJlbmRlciAtPiBHZnguYmxpdF9zY2FsZSBjdHggcmVuZGVyIChpbnRfb2ZfZmxvYXQgcG9zLngpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbnRfb2ZfZmxvYXQgcG9zLnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LmhlaWdodFxuICAgIHwgQW5pbWF0aW9uIGFuaW0gLT4gKCogUXVlc3Rpb24gNC41ICopXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBWZWxvY2l0eS5nZXQgZSBpblxuICAgICAgICAgICAgICAgIGxldCBkID0gaWYgdi54IDwgMC4wIHRoZW4gLTEgZWxzZSBpZiB2LnggPiAwLjAgdGhlbiAxIGVsc2UgMCBpblxuICAgICAgICAgICAgICAgIGxldCByZW5kZXIgPSBUZXh0dXJlLmdldF9mcmFtZSBhbmltIGQgaW5cbiAgICAgICAgICAgICAgICBHZnguYmxpdF9zY2FsZSBjdHggcmVuZGVyIChpbnRfb2ZfZmxvYXQgcG9zLngpXG4gICAgICAgICAgICAgICAgKGludF9vZl9mbG9hdCBwb3MueSkgYm94LndpZHRoIGJveC5oZWlnaHRcbiAgICApIGVsXG4iLCJvcGVuIENvbXBvbmVudF9kZWZzXG5cbmxldCBpbml0ICgpID0gKClcblxubGV0IHRpbWUgPSByZWYgMC4wXG5sZXQgdXBkYXRlIGR0IGVsID1cbiAgbGV0IGRlbHRhX3QgPSBtaW4gKDEuIC8uIDYwLikgKDEwMDAuICouKGR0IC0uICF0aW1lKSkgaW5cbiAgdGltZSA6PSBkdDtcbiAgTGlzdC5pdGVyIChmdW4gZSAtPlxuICAgIGxldCBwb3MgPSBQb3NpdGlvbi5nZXQgZSBpblxuICAgIGxldCBzcGVlZCA9IFZlY3Rvci5tdWx0IGRlbHRhX3QgKFZlbG9jaXR5LmdldCBlKSBpblxuICAgIFBvc2l0aW9uLnNldCBlICh7IHggPSBwb3MueCArLiBzcGVlZC54OyB5ID0gcG9zLnkgKy4gc3BlZWQueSB9KVxuICAgICkgZWxcbiIsIm9wZW4gRWNzXG5cbm1vZHVsZSBDb250cm9sX1MgPSBTeXN0ZW0uTWFrZSAoQ29udHJvbF9zeXN0ZW0pXG5tb2R1bGUgRHJhd19TID0gU3lzdGVtLk1ha2UoRHJhd19zeXN0ZW0pXG5tb2R1bGUgTW92ZV9TID0gU3lzdGVtLk1ha2UoTW92ZV9zeXN0ZW0pXG5tb2R1bGUgQ29sbGlzaW9uX1MgPSBTeXN0ZW0uTWFrZShDb2xsaXNpb25fc3lzdGVtKVxuXG5sZXQgKCkgPVxuICBTeXN0ZW0ucmVnaXN0ZXIgKG1vZHVsZSBEcmF3X1MpO1xuICBTeXN0ZW0ucmVnaXN0ZXIgKG1vZHVsZSBNb3ZlX1MpO1xuICBTeXN0ZW0ucmVnaXN0ZXIgKG1vZHVsZSBDb250cm9sX1MpO1xuICBTeXN0ZW0ucmVnaXN0ZXIgKG1vZHVsZSBDb2xsaXNpb25fUykiLCJvcGVuIENvbXBvbmVudF9kZWZzXG5vcGVuIFN5c3RlbV9kZWZzXG5vcGVuIEVjc1xuXG5sZXQgd2FsbHMgPSBFbnRpdHkuVGFibGUuY3JlYXRlIDE3XG5cbmxldCBjcmVhdGVfaG9yaXpvbnRhbCBuYW1lIHggeSA9XG4gIGxldCBlID0gRW50aXR5LmNyZWF0ZSAoKSBpblxuICBFbnRpdHkuVGFibGUuYWRkIHdhbGxzIGUgKCkgO1xuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geX07XG4gIFZlbG9jaXR5LnNldCBlIFZlY3Rvci56ZXJvO1xuICBNYXNzLnNldCBlIGluZmluaXR5O1xuICBCb3guc2V0IGUge3dpZHRoID0gR2xvYmFscy5jYW52YXNfd2lkdGg7IGhlaWdodD1HbG9iYWxzLndhbGxfdGhpY2tuZXNzIH07XG4gIE5hbWUuc2V0IGUgbmFtZTtcbiAgU3VyZmFjZS5zZXQgZSBUZXh0dXJlLnJlZDtcblxuICAoKiBTeXN0ZW1zICopXG4gIENvbGxpc2lvbl9TLnJlZ2lzdGVyIGU7XG4gICgqRHJhd19TLnJlZ2lzdGVyIGU7KilcbiAgZVxuICBcbiAgbGV0IGNyZWF0ZV92ZXJ0aWNhbCBuYW1lIHggeSA9XG4gIGxldCBlID0gRW50aXR5LmNyZWF0ZSAoKSBpblxuICBFbnRpdHkuVGFibGUuYWRkIHdhbGxzIGUgKCkgO1xuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geX07XG4gIFZlbG9jaXR5LnNldCBlIFZlY3Rvci56ZXJvO1xuICBNYXNzLnNldCBlIGluZmluaXR5O1xuICBCb3guc2V0IGUge3dpZHRoID0gR2xvYmFscy53YWxsX3RoaWNrbmVzczsgaGVpZ2h0PSBHbG9iYWxzLmNhbnZhc19oZWlnaHR9O1xuICBOYW1lLnNldCBlIG5hbWU7XG4gIFN1cmZhY2Uuc2V0IGUgVGV4dHVyZS5yZWQ7XG5cbiAgKCogU3lzdGVtcyAqKVxuICBDb2xsaXNpb25fUy5yZWdpc3RlciBlO1xuICAoKkRyYXdfUy5yZWdpc3RlciBlOyopXG4gIGVcbiAgXG5sZXQgX2lzX3dhbGwgZSA9IEVudGl0eS5UYWJsZS5tZW0gd2FsbHMgZVxuIiwib3BlbiBDb21wb25lbnRfZGVmc1xub3BlbiBTeXN0ZW1fZGVmc1xub3BlbiBFY3NcblxuXG5sZXQgY2hhbmdlX3N1cmZhY2UgZSBpbWcgPVxuICAgIFN1cmZhY2Uuc2V0IGUgKFRleHR1cmUuY3JlYXRlX2FuaW1hdGlvbiBpbWcgNCAxIDMyMCAxNjAgMzIwIDE2MClcblxuXG5sZXQgY3JlYXRlIG5hbWUgIGltYWdlcmlnaHQgaW1hZ2VsZWZ0ICB4IHkgPVxuICBsZXQgZSA9IEVudGl0eS5jcmVhdGUgKCkgaW5cbiAgUG9zaXRpb24uc2V0IGUgeyB4ID0geDsgeSA9IHl9O1xuICBWZWxvY2l0eS5zZXQgZSB7eCA9ICszMDAuOyB5ID0gMC4wfTtcbiAgTWFzcy5zZXQgZSBpbmZpbml0eTtcbiAgQm94LnNldCBlIHt3aWR0aCA9IEdsb2JhbHMudHJ1Y2tfd2lkdGg7IGhlaWdodD1HbG9iYWxzLnRydWNrX2hlaWdodCB9O1xuICBOYW1lLnNldCBlIG5hbWU7XG4gICgqU3VyZmFjZS5zZXQgZSBUZXh0dXJlLmJsYWNrOyopXG4gKCogU3VyZmFjZS5zZXQgZSAoVGV4dHVyZS5jcmVhdGVfaW1hZ2UgaW1nIDEwIDMwKTsqKVxuICAoKlN1cmZhY2Uuc2V0IGUgKFRleHR1cmUuY3JlYXRlX2FuaW1hdGlvbiBpbWFnZXJpZ2h0ICA4IDEgNjAgNjYgNjAgNjYpOyopXG4gICAgU3VyZmFjZS5zZXQgZSAoVGV4dHVyZS5jcmVhdGVfYW5pbWF0aW9uIGltYWdlcmlnaHQgIDQgMSAzMjAgMTYwIDMyMCAxNjApO1xuXG4gIFxuICBDb2xsaXNpb25SZXNvbHZlci5zZXQgZSAoZnVuIF8gZTIgLT4gbGV0IG5hbWUgPSBOYW1lLmdldCBlMiBpblxuICBpZiAobmFtZSA9IFwid2FsbF9yaWdodFwifHxuYW1lPVwidHBpblwiKSB0aGVuIGNoYW5nZV9zdXJmYWNlIGUgaW1hZ2VsZWZ0IGVsc2UgaWYgbmFtZSA9ICBcIndhbGxfbGVmdFwiIHRoZW4gXG4gIGNoYW5nZV9zdXJmYWNlIGUgaW1hZ2VyaWdodCk7XG4gIFxuICBcbiAgQ29sbGlzaW9uX1MucmVnaXN0ZXIgZTtcbiAgTW92ZV9TLnJlZ2lzdGVyIGU7XG4gIERyYXdfUy5yZWdpc3RlciBlO1xuICBlXG5cbiAgIFxuICAiLCJvcGVuIENvbXBvbmVudF9kZWZzXG5vcGVuIFN5c3RlbV9kZWZzXG5vcGVuIEVjc1xuXG5sZXQgY3JlYXRlIG5hbWUgeCB5ID1cbiAgbGV0IGUgPSBFbnRpdHkuY3JlYXRlICgpIGluXG4gICgqIGNvbXBvbmVudHMgKilcbiAgUG9zaXRpb24uc2V0IGUge3ggPSB4OyB5ID0geSB9O1xuICBCb3guc2V0IGUge3dpZHRoID0gNDAgOyBoZWlnaHQgPSA0MH07XG4gIFZlbG9jaXR5LnNldCBlIHsgeCA9IDAuMDsgeSA9IDAuMCB9O1xuICBNYXNzLnNldCBlIGluZmluaXR5O1xuICBOYW1lLnNldCBlIG5hbWU7XG4gIFN1cmZhY2Uuc2V0IGUgVGV4dHVyZS5ibHVlO1xuXG4gICgqIHN5c3RlbXMgKilcbiAgRHJhd19TLnJlZ2lzdGVyIGU7XG4gIGUiLCJvcGVuIENvbXBvbmVudF9kZWZzXG5vcGVuIFN5c3RlbV9kZWZzXG5vcGVuIEVjc1xuXG5sZXQgY3JlYXRlIG5hbWUgeCB5ID1cbiAgbGV0IGUgPSBFbnRpdHkuY3JlYXRlICgpIGluXG4gICgqIGNvbXBvbmVudHMgKilcbiAgUG9zaXRpb24uc2V0IGUge3ggPSB4OyB5ID0geSB9O1xuICBCb3guc2V0IGUge3dpZHRoID0gNDAgOyBoZWlnaHQgPSA0MH07XG4gIFZlbG9jaXR5LnNldCBlIHsgeCA9IDAuMDsgeSA9IDAuMCB9O1xuICBNYXNzLnNldCBlIGluZmluaXR5O1xuICBOYW1lLnNldCBlIG5hbWU7XG4gIFN1cmZhY2Uuc2V0IGUgVGV4dHVyZS5ibHVlO1xuXG5cbiAgKCogc3lzdGVtcyAqKVxuICBDb2xsaXNpb25fUy5yZWdpc3RlciBlO1xuICBEcmF3X1MucmVnaXN0ZXIgZTtcbiAgZSIsIm9wZW4gRWNzXG50eXBlIHR1cm4gPSBQbGF5aW5nIHwgV2luXG50eXBlIGVuZF9nYW1lID0gR29hbCB8IFRydWNrXG5cbnR5cGUgdCA9IHtcblxuICBmcm9nIDogRW50aXR5LnQ7XG4gICgqcGxheWVyMSA6IEVudGl0eS50O1xuICBwbGF5ZXIyIDogRW50aXR5LnQ7XG4gIG11dGFibGUgc2NvcmUxIDogaW50O1xuICBtdXRhYmxlIHNjb3JlMiA6IGludDsqKVxuICBjYXIxIDogRW50aXR5LnQ7XG4gIGNhcjIgOiBFbnRpdHkudDtcbiAgZ29hbCA6IEVudGl0eS50O1xuICB0cnVjazEgOiBFbnRpdHkudDtcbiAgdHJ1Y2syIDogRW50aXR5LnQ7XG4gIHRydWNrMyA6IEVudGl0eS50O1xuICBtaXNzaWxlIDogRW50aXR5LnQ7XG4gIHRwaW4gOiBFbnRpdHkudDtcbiAgdHBvdXQgOiBFbnRpdHkudDtcbiAgX3dhbGxfcmlnaHQgOiBFbnRpdHkudDtcbiAgbXV0YWJsZSBlbmRfZ2FtZSA6IGVuZF9nYW1lO1xuICBtdXRhYmxlIHR1cm4gOiB0dXJuO1xufVxuXG5sZXQgc3RhdGUgPSByZWYge1xuICBmcm9nID0gRW50aXR5LmR1bW15O1xuICAoKnBsYXllcjEgPSBFbnRpdHkuZHVtbXk7XG4gIHBsYXllcjIgPSBFbnRpdHkuZHVtbXk7XG4gIHNjb3JlMSA9IDA7XG4gIHNjb3JlMiA9IDA7KilcbiAgZ29hbCA9IEVudGl0eS5kdW1teTtcbiAgY2FyMSA9IEVudGl0eS5kdW1teTtcbiAgY2FyMiA9IEVudGl0eS5kdW1teTtcbiAgdHJ1Y2sxID0gRW50aXR5LmR1bW15O1xuICB0cnVjazIgPSBFbnRpdHkuZHVtbXk7XG4gIHRydWNrMyA9IEVudGl0eS5kdW1teTtcbiAgbWlzc2lsZSA9IEVudGl0eS5kdW1teTtcbiAgdHBpbiA9IEVudGl0eS5kdW1teTtcbiAgdHBvdXQgPSBFbnRpdHkuZHVtbXk7XG4gIF93YWxsX3JpZ2h0ID0gRW50aXR5LmR1bW15O1xuICBlbmRfZ2FtZSA9IEdvYWw7XG4gIHR1cm4gPSBQbGF5aW5nOyAoKlBsYXllckxvc3QxKilcbn1cblxubGV0IGdldF9mcm9nICgpID0gIXN0YXRlLmZyb2dcbigqbGV0IGdldF9wbGF5ZXIxICgpID0gIXN0YXRlLnBsYXllcjFcbmxldCBnZXRfcGxheWVyMiAoKSA9ICFzdGF0ZS5wbGF5ZXIyXG5sZXQgZ2V0X3Njb3JlMSAoKSA9ICFzdGF0ZS5zY29yZTFcbmxldCBnZXRfc2NvcmUyICgpID0gIXN0YXRlLnNjb3JlMiopXG5sZXQgZ2V0X2dvYWwgKCkgPSAhc3RhdGUuZ29hbFxubGV0IGdldF90dXJuICgpID0gIXN0YXRlLnR1cm5cbmxldCBnZXRfZW5kX2dhbWUgKCkgPSAhc3RhdGUuZW5kX2dhbWVcbmxldCBnZXRfdHJ1Y2sxICgpID0gIXN0YXRlLnRydWNrMVxubGV0IGdldF90cnVjazIgKCkgPSAhc3RhdGUudHJ1Y2syXG5sZXQgZ2V0X3RydWNrMyAoKSA9ICFzdGF0ZS50cnVjazNcbmxldCBnZXRfY2FyMSAoKSA9ICFzdGF0ZS5jYXIxXG5sZXQgZ2V0X2NhcjIgKCkgPSAhc3RhdGUuY2FyMlxubGV0IGdldF9taXNzaWxlICgpID0gIXN0YXRlLm1pc3NpbGVcbmxldCBnZXRfdHBpbiAoKSA9ICFzdGF0ZS50cGluXG5sZXQgZ2V0X3Rwb3V0ICgpID0gIXN0YXRlLnRwb3V0XG5sZXQgZ2V0X193YWxsX3JpZ2h0ICgpID0gIXN0YXRlLl93YWxsX3JpZ2h0XG5cbmxldCBwbGF5ICgpID0gIXN0YXRlLnR1cm4gPC0gUGxheWluZ1xuKCpsZXQgcGxheWVyX3Njb3JlIGUgPVxuICBpZiBlID09ICFzdGF0ZS5wbGF5ZXIxIHRoZW4gYmVnaW5cbiAgICAhc3RhdGUuc2NvcmUxIDwtICFzdGF0ZS5zY29yZTEgKyAxO1xuICAgICFzdGF0ZS50dXJuIDwtIFBsYXllcjJMb3N0XG4gIGVuZCBlbHNlIGlmIGUgPT0gIXN0YXRlLnBsYXllcjIgdGhlbiBiZWdpblxuICAgICFzdGF0ZS5zY29yZTEgPC0gIXN0YXRlLnNjb3JlMiArIDE7XG4gICAgIXN0YXRlLnR1cm4gPC0gUGxheWVyMUxvc3RcbiAgZW5kIGVsc2VcbiAgICBmYWlsd2l0aCAoRm9ybWF0LmFzcHJpbnRmIFwiSW52YWxpZCBwbGF5ZXIgRW50aXR5ICVhXCIgRW50aXR5LnBwIGUpKilcblxuXG5sZXQgaW5pdCBmIGcgdDEgdDIgdDMgYzEgYzIgbSB0cGkgdHBvID1cbiAgc3RhdGUgOj0geyAhc3RhdGUgd2l0aCBmcm9nID0gZjsgZ29hbCA9IGc7dHJ1Y2sxID0gdDE7dHJ1Y2syID0gdDI7dHJ1Y2szID0gdDM7Y2FyMSA9IGMxO2NhcjIgPSBjMjttaXNzaWxlID0gbTt0cGluID0gdHBpO3Rwb3V0ID0gdHBvfSIsIm9wZW4gQ29tcG9uZW50X2RlZnNcbm9wZW4gU3lzdGVtX2RlZnNcbm9wZW4gRWNzXG5cblxubGV0IGNyZWF0ZSBuYW1lIHggeSA9XG4gIGxldCBlID0gRW50aXR5LmNyZWF0ZSAoKSBpblxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geX07XG4gIFZlbG9jaXR5LnNldCBlIFZlY3Rvci56ZXJvO1xuICBNYXNzLnNldCBlIGluZmluaXR5O1xuICBCb3guc2V0IGUge3dpZHRoID0gR2xvYmFscy5wYWRkbGVfd2lkdGg7IGhlaWdodD1HbG9iYWxzLnBhZGRsZV9oZWlnaHQgfTtcbiAgTmFtZS5zZXQgZSBuYW1lO1xuICBTdXJmYWNlLnNldCBlIFRleHR1cmUuYmxhY2s7XG5cblxuICAoKiBzeXN0ZW1zICopXG4gIENvbGxpc2lvbl9TLnJlZ2lzdGVyIGU7XG4gIENvbnRyb2xfUy5yZWdpc3RlciBlO1xuICBEcmF3X1MucmVnaXN0ZXIgZTtcbiAgTW92ZV9TLnJlZ2lzdGVyIGU7XG4gIGVcblxubGV0IHJlc2V0IGUgeCB5ID0gXG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHg7IHkgPSB5IH1cblxubGV0IG1vdmVfdXAgZSA9XG4gIGlmIEdhbWVfc3RhdGUuZ2V0X3R1cm4gKCkgPT0gUGxheWluZyB0aGVuXG4gICAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gMC4wOyB5ID0gLTEwMC4wIH1cbiAgXG5sZXQgbW92ZV9kb3duIGUgPVxuICBpZiBHYW1lX3N0YXRlLmdldF90dXJuICgpID09IFBsYXlpbmcgdGhlblxuICAgIFZlbG9jaXR5LnNldCBlIHsgeCA9IDAuMDsgeSA9IDEwMC4wIH1cblxubGV0IHN0b3AgZSA9XG4gIFZlbG9jaXR5LnNldCBlIFZlY3Rvci56ZXJvXG4gICIsIm9wZW4gQ29tcG9uZW50X2RlZnNcbm9wZW4gU3lzdGVtX2RlZnNcbm9wZW4gRWNzXG5cbmxldCBjaGFuZ2Vfc3VyZmFjZSBlIGltZyA9XG4gICAgU3VyZmFjZS5zZXQgZSAoVGV4dHVyZS5jcmVhdGVfaW1hZ2UgaW1nIDMzMyAyMTcgIClcblxuXG5sZXQgY3JlYXRlIG5hbWUgIGltYWdlcmlnaHQgaW1hZ2VsZWZ0ICB4IHkgPVxuICBsZXQgZSA9IEVudGl0eS5jcmVhdGUgKCkgaW5cbiAgUG9zaXRpb24uc2V0IGUgeyB4ID0geDsgeSA9IHl9O1xuICBWZWxvY2l0eS5zZXQgZSB7eCA9ICszMDAuOyB5ID0gMC4wfTtcbiAgTWFzcy5zZXQgZSBpbmZpbml0eTtcbiAgQm94LnNldCBlIHt3aWR0aCA9IEdsb2JhbHMubWlzc2lsZV93aWR0aDsgaGVpZ2h0PUdsb2JhbHMubWlzc2lsZV9oZWlnaHQgfTtcbiAgTmFtZS5zZXQgZSBuYW1lO1xuICAoKlN1cmZhY2Uuc2V0IGUgVGV4dHVyZS5ncmF5OyopXG4gICBTdXJmYWNlLnNldCBlIChUZXh0dXJlLmNyZWF0ZV9pbWFnZSBpbWFnZXJpZ2h0IDMzMyAyMTcgICk7XG4gICBcbiAgQ29sbGlzaW9uUmVzb2x2ZXIuc2V0IGUgKGZ1biBfIGUyIC0+IGxldCBuYW1lID0gTmFtZS5nZXQgZTIgaW5cbiAgaWYgKG5hbWUgPSBcIndhbGxfcmlnaHRcIikgdGhlbiBjaGFuZ2Vfc3VyZmFjZSBlIGltYWdlbGVmdCBlbHNlIGlmIG5hbWUgPSAgXCJ3YWxsX2xlZnRcIiB0aGVuIFxuICBjaGFuZ2Vfc3VyZmFjZSBlIGltYWdlcmlnaHQpO1xuXG4gIFxuICAgKCogc3lzdGVtcyAqKVxuICBDb2xsaXNpb25fUy5yZWdpc3RlciBlO1xuICBNb3ZlX1MucmVnaXN0ZXIgZTtcbiAgRHJhd19TLnJlZ2lzdGVyIGU7XG4gIGUiLCJvcGVuIENvbXBvbmVudF9kZWZzXG5vcGVuIFN5c3RlbV9kZWZzXG5vcGVuIEVjc1xuXG5cblxubGV0IGNyZWF0ZSBuYW1lIHggeSBpbWcgPVxuICBsZXQgZSA9IEVudGl0eS5jcmVhdGUgKCkgaW5cbiAgKCogY29tcG9uZW50cyAqKVxuICBQb3NpdGlvbi5zZXQgZSB7eCA9IHg7IHkgPSB5IH07XG4gIEJveC5zZXQgZSB7d2lkdGggPSA0MCA7IGhlaWdodCA9IDQwfTtcbiAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gMC4wOyB5ID0gMC4wIH07XG4gIE1hc3Muc2V0IGUgaW5maW5pdHk7XG4gIE5hbWUuc2V0IGUgbmFtZTtcbiAgU3VyZmFjZS5zZXQgZSAoVGV4dHVyZS5jcmVhdGVfaW1hZ2UgaW1nIDY3OSA2MTQgICk7XG4gICgqU3VyZmFjZS5zZXQgZSBUZXh0dXJlLnJlZDsqKVxuXG4gICgqIHN5c3RlbXMgKilcbiAgRHJhd19TLnJlZ2lzdGVyIGU7XG4gIGUiLCJcblxuXG5cblxubGV0IHJ1biAoKSA9XG5cdCgpXG4iLCIoKiBRdWVzdGlvbiAzLjcgKilcbm9wZW4gRWNzXG5vcGVuIENvbXBvbmVudF9kZWZzXG5vcGVuIFN5c3RlbV9kZWZzXG5cbmxldCBjcmVhdGUgaW1nID1cbiAgbGV0IGUgPSBFbnRpdHkuY3JlYXRlICgpIGluXG4gIFBvc2l0aW9uLnNldCBlIFZlY3Rvci56ZXJvO1xuICBCb3guc2V0IGUgeyB3aWR0aCA9IEdsb2JhbHMuY2FudmFzX3dpZHRoOyBoZWlnaHQgPSBHbG9iYWxzLmNhbnZhc19oZWlnaHR9O1xuICBTdXJmYWNlLnNldCBlIChUZXh0dXJlLmNyZWF0ZV9pbWFnZSBpbWcgR2xvYmFscy5jYW52YXNfd2lkdGggR2xvYmFscy5jYW52YXNfaGVpZ2h0KTtcbiAgXG4gIERyYXdfUy5yZWdpc3RlciBlO1xuICBlXG4iLCJvcGVuIENvbXBvbmVudF9kZWZzXG5vcGVuIFN5c3RlbV9kZWZzXG5vcGVuIEVjc1xuXG4gbGV0IHJlc2V0X2NhciBlICB5ICA9XG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IDAuMDsgeSA9IHl9O1xuICBWZWxvY2l0eS5zZXQgZSB7IHggPSA2MDAuMDsgeSA9IDAuMCB9XG4gXG5cbmxldCBjcmVhdGUgbmFtZSB4IHkgaW1nICA9XG4gIGxldCBlID0gRW50aXR5LmNyZWF0ZSAoKSBpblxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geX07XG4gIFZlbG9jaXR5LnNldCBlIHt4ID0gKzYwMC47IHkgPSAwLjB9O1xuICBNYXNzLnNldCBlIGluZmluaXR5O1xuICBCb3guc2V0IGUge3dpZHRoID0gR2xvYmFscy5jYXJfd2lkdGg7IGhlaWdodD1HbG9iYWxzLmNhcl9oZWlnaHQgfTtcbiAgTmFtZS5zZXQgZSBuYW1lO1xuICBTdXJmYWNlLnNldCBlIChUZXh0dXJlLmNyZWF0ZV9hbmltYXRpb24gaW1nICA4IDEgNjAgNjYgNjAgNjYpO1xuIFxuICAoKlN1cmZhY2Uuc2V0IGUgVGV4dHVyZS5ibGFjazsqKVxuICBcbiAgKCpcbiAgQ29sbGlzaW9uUmVzb2x2ZXIuc2V0IGUgKGZ1biBlMSBlMiAtPiBpZiBDb2xsaXNpb25SZXNvbHZlci5oYXNfY29tcG9uZW50IGUyICYmIE5hbWUuZ2V0IGUxID09IFwiY2FyMVwiIHRoZW4gcmVzZXRfY2FyIGUxIEdsb2JhbHMuY2FyMV9pbml0X3ggR2xvYmFscy5jYXIxX2luaXRfeSAgZWxzZSBpZiBDb2xsaXNpb25SZXNvbHZlci5oYXNfY29tcG9uZW50IGUyICYmIE5hbWUuZ2V0IGUxID09IFwiY2FyMlwiIHRoZW4gcmVzZXRfY2FyIGUxIEdsb2JhbHMuY2FyMl9pbml0X3ggR2xvYmFscy5jYXIyX2luaXRfeSk7XG4qKVxuICBDb2xsaXNpb25SZXNvbHZlci5zZXQgZSAoZnVuIF8gZTIgLT4gbGV0IG5hbWUgPSBOYW1lLmdldCBlMiBpblxuICBpZiBuYW1lID0gXCJ3YWxsX3JpZ2h0XCIgdGhlbiByZXNldF9jYXIgZSB5KTtcbiAgXG4gIFxuICAgKCogc3lzdGVtcyAqKVxuICBDb2xsaXNpb25fUy5yZWdpc3RlciBlO1xuICBNb3ZlX1MucmVnaXN0ZXIgZTtcbiAgRHJhd19TLnJlZ2lzdGVyIGU7XG4gIGUiLCJvcGVuIENvbXBvbmVudF9kZWZzXG5vcGVuIFN5c3RlbV9kZWZzXG5vcGVuIEVjc1xuXG5sZXQgcmFuZG9tX2RpciB0bWluIHRtYXggbiA9XG4gIGxldCB0ID0gdG1pbiArLiBSYW5kb20uZmxvYXQgKHRtYXggLS4gdG1pbikgaW5cbiAgbGV0IHggPSBuICouIGNvcyB0IGluXG4gIGxldCB5ID0gbiAqLiBzaW4gdCBpblxuICBWZWN0b3IueyB4ID0geDsgeSA9IHl9XG5sZXQgcGkgPSAyLiAqLiBhc2luIDEuMFxuXG5sZXQgcmVzZXQgZSB4IHkgID1cbiAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gMC4wOyB5ID0gMC4wIH07XG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHg7IHkgPSB5fVxuXG5cblxubGV0IGNyZWF0ZSBuYW1lIGltZyB4IHkgPVxuICBsZXQgZSA9IEVudGl0eS5jcmVhdGUgKCkgaW5cbiAgKCogY29tcG9uZW50cyAqKVxuICBQb3NpdGlvbi5zZXQgZSB7eCA9IHg7IHkgPSB5IH07XG4gIEJveC5zZXQgZSB7d2lkdGggPSA0MCA7IGhlaWdodCA9IDQwfTtcbiAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gMC4wOyB5ID0gMC4wIH07XG4gIE1hc3Muc2V0IGUgMTAuMDtcbiAgTmFtZS5zZXQgZSBuYW1lO1xuICgqIFN1cmZhY2Uuc2V0IGUgKFRleHR1cmUuY3JlYXRlX2ltYWdlIGltZyAxMCAzMCk7KilcbiAgU3VyZmFjZS5zZXQgZSAoVGV4dHVyZS5jcmVhdGVfYW5pbWF0aW9uIGltZyAzIDEgMjUgMzUgR2xvYmFscy5mcm9nX3NpemUgR2xvYmFscy5mcm9nX3NpemUpO1xuICBcbiAgXG4gIFxuICBDb2xsaXNpb25SZXNvbHZlci5zZXQgZSAoZnVuIF8gZTIgLT4gbGV0IG5hbWUgPSBOYW1lLmdldCBlMiBpblxuICBpZiBuYW1lID0gXCJ0cGluXCIgdGhlbiByZXNldCBlIEdsb2JhbHMudHBvdXRfaW5pdF94IEdsb2JhbHMudHBvdXRfaW5pdF95ICBlbHNlIGlmIG5hbWUgPVwibWlzc2lsZVwiIHRoZW4gcmVzZXQgZSAgICAgICBHbG9iYWxzLmZyb2dfaW5pdF94IEdsb2JhbHMuZnJvZ19pbml0X3kpO1xuICBcbiAgKCpcbiAgQ29sbGlzaW9uUmVzb2x2ZXIuc2V0IGUgKGZ1biBfIGUyIC0+IGxldCBuYW1lID0gTmFtZS5nZXQgZTIgaW5cbiAgaWYgbmFtZSA9IFwibWlzc2lsZVwiIHRoZW4gcmVzZXQgZSBHbG9iYWxzLmZyb2dfaW5pdF94IEdsb2JhbHMuZnJvZ19pbml0X3kgKTtcbiAgKilcblxuXG4gICgqIHN5c3RlbXMgKilcbiAgQ29sbGlzaW9uX1MucmVnaXN0ZXIgZTtcbiAgQ29udHJvbF9TLnJlZ2lzdGVyIGU7XG4gIE1vdmVfUy5yZWdpc3RlciBlO1xuICBEcmF3X1MucmVnaXN0ZXIgZTtcbiAgZVxuXG5cblxuXG4oKmxldCBjcmVhdGUgbmFtZSB4IHkgPVxuICBsZXQgZSA9IEVudGl0eS5jcmVhdGUgKCkgaW5cbiAgUG9zaXRpb24uc2V0IGUgeyB4ID0geDsgeSA9IHl9O1xuICBWZWxvY2l0eS5zZXQgZSBWZWN0b3IuemVybztcbiAgTWFzcy5zZXQgZSBpbmZpbml0eTtcbiAgQm94LnNldCBlIHt3aWR0aCA9IEdsb2JhbHMuZnJvZ193aWR0aDsgaGVpZ2h0PUdsb2JhbHMuZnJvZ19oZWlnaHQgfTtcbiAgTmFtZS5zZXQgZSBuYW1lO1xuICBTdXJmYWNlLnNldCBlIFRleHR1cmUuYmxhY2s7XG5cbiAgXG4gICAoKiBzeXN0ZW1zICopXG4gIENvbGxpc2lvbl9TLnJlZ2lzdGVyIGU7XG4gIENvbnRyb2xfUy5yZWdpc3RlciBlO1xuICBEcmF3X1MucmVnaXN0ZXIgZTtcbiAgTW92ZV9TLnJlZ2lzdGVyIGU7XG4gIGVcbiAqKVxuXG5cblxuIGxldCByZXNldCBlIHggeSAgPVxuICBWZWxvY2l0eS5zZXQgZSB7IHggPSAwLjA7IHkgPSAwLjAgfTtcbiAgUG9zaXRpb24uc2V0IGUgeyB4ID0geDsgeSA9IHl9XG4gIFxuICgqbGV0IGxhdW5jaCBlID1cblxuICAgIG1hdGNoIEdhbWVfc3RhdGUuZ2V0X3R1cm4gKCkgd2l0aFxuICAgIFBsYXlpbmcgLT4gKClcbiAgICB8IF8gLT5cbiAgICAgIGxldCB2ID0gcmFuZG9tX2RpciAofi0ucGkvLiAzLjApIChwaSAvLiAzLjApIDIwMC4wIGluXG4gICAgICBWZWxvY2l0eS5zZXQgZSB2O1xuICAgICAgR2FtZV9zdGF0ZS5wbGF5KCkqKVxuICAgICAgXG4gICAgICBcbmxldCBtb3ZlX3VwIGUgaW1nID1cbiAgICAoKmlmIEdhbWVfc3RhdGUuZ2V0X3R1cm4gKCkgPT0gUGxheWluZyB0aGVuKilcbiAgICBTdXJmYWNlLnNldCBlIChUZXh0dXJlLmNyZWF0ZV9hbmltYXRpb24gaW1nIDMgMSAyNSAzNSBHbG9iYWxzLmZyb2dfc2l6ZSBHbG9iYWxzLmZyb2dfc2l6ZSk7XG4gICAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gMC4wOyB5ID0gLTMwMC4wIH1cbiAgXG5sZXQgbW92ZV9kb3duIGUgaW1nID1cbiAgKCppZiBHYW1lX3N0YXRlLmdldF90dXJuICgpID09IFBsYXlpbmcgdGhlbiopXG4gICAgU3VyZmFjZS5zZXQgZSAoVGV4dHVyZS5jcmVhdGVfYW5pbWF0aW9uIGltZyAzIDEgMjUgMzUgR2xvYmFscy5mcm9nX3NpemUgR2xvYmFscy5mcm9nX3NpemUpO1xuICAgIFZlbG9jaXR5LnNldCBlIHsgeCA9IDAuMDsgeSA9IDMwMC4wIH1cbiAgICBcbmxldCBtb3ZlX3JpZ2h0IGUgaW1nID1cbiAgICBTdXJmYWNlLnNldCBlIChUZXh0dXJlLmNyZWF0ZV9hbmltYXRpb24gaW1nIDMgMSAyNSAzNSBHbG9iYWxzLmZyb2dfc2l6ZSBHbG9iYWxzLmZyb2dfc2l6ZSk7XG4gICAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gMzAwLjA7IHkgPSAwLjAgfSAgICBcbiAgICBcbiAgICBcbmxldCBtb3ZlX2xlZnQgZSBpbWcgPVxuICAgIFN1cmZhY2Uuc2V0IGUgKFRleHR1cmUuY3JlYXRlX2FuaW1hdGlvbiBpbWcgMyAxIDI1IDM1IEdsb2JhbHMuZnJvZ19zaXplIEdsb2JhbHMuZnJvZ19zaXplKTtcbiAgICBWZWxvY2l0eS5zZXQgZSB7IHggPSAtMzAwLjA7IHkgPSAwLjAgfSAgICBcblxuXG5sZXQgc3RvcCBlID1cbiAgVmVsb2NpdHkuc2V0IGUgVmVjdG9yLnplcm9cbiJdfQ==
