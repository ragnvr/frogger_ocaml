(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Ecs_Component_MissingComponent=
      caml_new_string("Ecs.Component.MissingComponent"),
     Stdlib_format=global_data.Stdlib__format,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib=global_data.Stdlib,
     Ecs=[0];
    caml_register_global(2,Ecs,"Ecs");
    var
     c=[0,0],
     _a_=
      [0,
       [11,caml_new_string("<e:"),[4,0,0,0,[12,62,0]]],
       caml_new_string("<e:%d>")];
    function create(param){c[1]++;return c[1]}
    function pp(ppf,e){return caml_call3(Stdlib_format[123],ppf,_a_,e)}
    function hash(i){return i}
    function equal(a,b){return a === b?1:0}
    var
     compare=runtime.caml_compare,
     Table=caml_call1(Stdlib_hashtbl[25],[0,equal,hash]),
     Ecs_Entity=[0,create,pp,hash,equal,compare,-1,Table];
    caml_register_global(5,Ecs_Entity,"Ecs__Entity");
    function Make(T)
     {var elem_list=[0,0],elem_table=caml_call1(Table[1],16);
      function register(e)
       {var
         _l_=1 - caml_call2(Table[11],elem_table,e),
         _m_=
          _l_
           ?(caml_call3(Table[5],elem_table,e,0),
             elem_list[1]
             =
             [0,e,elem_list[1]],
             0)
           :_l_;
        return _m_}
      function unregister(e)
       {caml_call2(Table[6],elem_table,e);
        var _j_=elem_list[1];
        function _k_(x){return runtime.caml_notequal(x,e)}
        elem_list[1] = caml_call2(Stdlib_list[36],_k_,_j_);
        return 0}
      function init(param){return caml_call1(T[1],0)}
      function update(dt){return caml_call2(T[2],dt,elem_list[1])}
      return [0,init,update,register,unregister]}
    var systems=[0,0];
    function register(m){systems[1] = [0,m,systems[1]];return 0}
    function init_all(param)
     {var _h_=systems[1];
      function _i_(m){return caml_call1(m[1],0)}
      return caml_call2(Stdlib_list[15],_i_,_h_)}
    function update_all(dt)
     {var _f_=systems[1];
      function _g_(m){return caml_call1(m[2],dt)}
      return caml_call2(Stdlib_list[15],_g_,_f_)}
    var Ecs_System=[0,Make,systems,register,init_all,update_all];
    caml_register_global(7,Ecs_System,"Ecs__System");
    var
     MissingComponent=
      [248,cst_Ecs_Component_MissingComponent,runtime.caml_fresh_oo_id(0)],
     Ecs_Component=
      [0,
       function(T)
        {var elements=caml_call1(Table[1],16);
         function set(e,v){return caml_call3(Table[10],elements,e,v)}
         function get(e)
          {try
            {var _d_=caml_call2(Table[7],elements,e);return _d_}
           catch(_e_)
            {_e_ = caml_wrap_exception(_e_);
             if(_e_ === Stdlib[8])throw [0,MissingComponent,[0,e,T[1]]];
             throw _e_}}
         function members(param)
          {var _b_=0;
           function _c_(k,v,a){return [0,[0,k,v],a]}
           return caml_call3(Table[14],_c_,elements,_b_)}
         function has_component(e){return caml_call2(Table[11],elements,e)}
         function delete$0(e){return caml_call2(Table[6],elements,e)}
         return [0,set,get,members,has_component,delete$0]},
       MissingComponent];
    caml_register_global(9,Ecs_Component,"Ecs__Component");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuZWNzLm9ianMvZWNzLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJjIiwiY3JlYXRlIiwicHAiLCJwcGYiLCJlIiwiaGFzaCIsImkiLCJlcXVhbCIsImEiLCJiIiwiY29tcGFyZSIsImVsZW1lbnRzIiwic2V0IiwidiIsImdldCIsIm1lbWJlcnMiLCJrIiwiaGFzX2NvbXBvbmVudCIsImRlbGV0ZSQwIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBSVFBOzs7OzthQURGQyxjQUdBLGNBRkVELElBR0E7YUFFRkUsR0FBR0MsSUFBSUMsR0FBSSxxQ0FBUkQsUUFBSUMsRUFBaUM7YUFFeENDLEtBQUtDLEdBQUksT0FBSkEsQ0FBSzthQUVWQyxNQUFNQyxFQUFFQyxHQUFJLE9BQU5ELE1BQUVDLEtBQVU7O0tBRWxCQzs0Q0FGQUgsTUFGQUY7bUJBUkFKLE9BTUFDLEdBRUFHLEtBRUFFLE1BRUFHOzs7TTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQ1ZGLElBREVDLFNBQ0Y7a0JBRUVDLElBQUlSLEVBQUVTLEdBQUksNEJBSFZGLFNBR0lQLEVBQUVTLEVBQXFDO1NBRjdDLFNBR0VDLElBQUlWO1dBQUk7YUFDViw0QkFMRU8sU0FJSVA7Ozs7dUJBRzBDO1NBTmhELFNBUUVXO1dBQWE7d0JBQXVCQyxFQUFFSCxFQUFFTCxHQUFLLGFBQVRRLEVBQUVILEdBQUVMLEVBQWdCO1dBQTNDLGdDQVRiRyxhQVNxRTtTQVJ2RSxTQVVFTSxjQUFjYixHQUFJLDRCQVhsQk8sU0FXY1AsRUFBK0I7U0FWL0MsU0FZRWMsU0FBT2QsR0FBSSwyQkFiWE8sU0FhT1AsRUFBa0M7bUJBVnpDUSxJQUNBRSxJQUtBQyxRQUVBRSxjQUVBQzs7O1UiLCJzb3VyY2VzIjpbIi9ob21lL2pvdnlhbi9mcm9nZ2VyL19idWlsZC9kZWZhdWx0L2xpYi9lY3MvZW50aXR5Lm1sIiwiL2hvbWUvam92eWFuL2Zyb2dnZXIvX2J1aWxkL2RlZmF1bHQvbGliL2Vjcy9jb21wb25lbnQubWwiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlIEUgPSBzdHJ1Y3RcbiAgdHlwZSB0ID0gaW50XG5cbiAgbGV0IGNyZWF0ZSA9XG4gICAgbGV0IGMgPSByZWYgMCBpblxuICAgIGZ1biAoKSAtPlxuICAgICAgaW5jciBjO1xuICAgICAgIWNcblxuICBsZXQgcHAgcHBmIGUgPSBGb3JtYXQuZnByaW50ZiBwcGYgXCI8ZTolZD5cIiBlXG5cbiAgbGV0IGhhc2ggaSA9IGlcblxuICBsZXQgZXF1YWwgYSBiID0gYSA9PSBiXG5cbiAgbGV0IGNvbXBhcmUgYSBiID0gY29tcGFyZSBhIGJcbmVuZFxuXG5tb2R1bGUgVGFibGUgPSBIYXNodGJsLk1ha2UgKEUpXG5pbmNsdWRlIEVcblxubGV0IGR1bW15ID0gLTFcbiIsImV4Y2VwdGlvbiBNaXNzaW5nQ29tcG9uZW50IG9mIChFbnRpdHkudCAqIHN0cmluZylcblxubW9kdWxlIE1ha2UgKFQgOiBzaWcgdHlwZSB0IHZhbCBuYW1lIDogc3RyaW5nIGVuZCkgPVxuc3RydWN0XG4gIGxldCBlbGVtZW50cyA6IFQudCBFbnRpdHkuVGFibGUudCA9XG4gICAgRW50aXR5LlRhYmxlLmNyZWF0ZSAxNlxuXG4gIGxldCBzZXQgZSB2ID0gRW50aXR5LlRhYmxlLnJlcGxhY2UgZWxlbWVudHMgZSB2XG4gIGxldCBnZXQgZSA9IHRyeVxuICAgIEVudGl0eS5UYWJsZS5maW5kIGVsZW1lbnRzIGVcbiAgd2l0aFxuICAgIE5vdF9mb3VuZCAtPiByYWlzZSAoTWlzc2luZ0NvbXBvbmVudChlLCBULm5hbWUpKVxuXG4gIGxldCBtZW1iZXJzICgpID0gRW50aXR5LlRhYmxlLmZvbGQgKGZ1biBrIHYgYSAtPiAoaywgdikgOjogYSkgZWxlbWVudHMgW11cblxuICBsZXQgaGFzX2NvbXBvbmVudCBlID0gRW50aXR5LlRhYmxlLm1lbSBlbGVtZW50cyBlXG5cbiAgbGV0IGRlbGV0ZSBlID0gRW50aXR5LlRhYmxlLnJlbW92ZSBlbGVtZW50cyBlXG5lbmRcbiJdfQ==
