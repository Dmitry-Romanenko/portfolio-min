import{T as c,r as s,a as C,L as y,j as e,p as u,c as w}from"./index-JgtQfWzy.js";import{u as f,a as _,b as d,c as S,C as v,L as M,d as k}from"./Loader-d8SBkWIw.js";const l=a=>a===Object(a)&&!Array.isArray(a)&&typeof a!="function";function b(a,t){const n=f(p=>p.gl),o=_(c,l(a)?Object.values(a):a);return s.useLayoutEffect(()=>{t==null||t(o)},[t]),s.useEffect(()=>{if("initTexture"in n){let p=[];Array.isArray(o)?p=o:o instanceof C?p=[o]:l(o)&&(p=Object.values(o)),p.forEach(r=>{r instanceof C&&n.initTexture(r)})}},[n,o]),s.useMemo(()=>{if(l(a)){const p={};let r=0;for(const g in a)p[g]=o[r++];return p}else return o},[a,o])}b.preload=a=>_.preload(c,a);b.clear=a=>_.clear(c,a);const P=a=>{const t=s.useRef(),{nodes:n,materials:o,animations:i}=d("/models/laptop.glb"),{ref:p,actions:r}=S(i,t),g=b(a.texture);return s.useEffect(()=>{r["Take 001"]&&(r["Take 001"].stop(),r["Take 001"].timeScale=2,r["Take 001"].setLoop(y,1),r["Take 001"].clampWhenFinished=!0,r["Take 001"].play())},[a.texture]),e.jsx("group",{ref:p,...a,dispose:null,children:e.jsx("group",{name:"Sketchfab_Scene",children:e.jsx("group",{name:"Sketchfab_model",rotation:[-Math.PI/2,0,0],scale:.918,children:e.jsx("group",{name:"laptop_leatherfbx",rotation:[Math.PI/2,0,0],children:e.jsx("group",{name:"Object_2",children:e.jsxs("group",{name:"RootNode",children:[e.jsx("group",{name:"pCube1",position:[0,.1,0],scale:[3.6,.2,2.4],children:e.jsx("group",{name:"transform10"})}),e.jsx("group",{name:"pCube2",position:[0,.15,0],scale:[3.6,.1,2.4],children:e.jsx("group",{name:"transform2"})}),e.jsx("group",{name:"pCylinder1",position:[0,.192,-1.15],rotation:[-.384,0,Math.PI/2],scale:[.075,1.5,.075],children:e.jsx("mesh",{name:"pCylinder1_phong1_0",castShadow:!0,geometry:n.pCylinder1_phong1_0.geometry,material:o.phong1})}),e.jsxs("group",{name:"pCylinder3",position:[1.654,.192,-1.15],rotation:[-Math.PI/9,0,Math.PI/2],scale:[.075,.15,.075],children:[e.jsx("mesh",{name:"pCylinder3_phong1_0",castShadow:!0,geometry:n.pCylinder3_phong1_0.geometry,material:o.phong1}),e.jsx("group",{name:"pCube134",position:[17.195,11.027,-2.966],rotation:[0,.14,-Math.PI/2],scale:[23,26,.133],children:e.jsx("mesh",{name:"pCube134_blinn1_0",castShadow:!0,geometry:n.pCube134_blinn1_0.geometry,material:o.blinn1,children:e.jsx("meshMatcapMaterial",{map:g})})}),e.jsx("group",{name:"pCylinder2",position:[0,22.053,0],children:e.jsx("mesh",{name:"pCylinder2_phong1_0",castShadow:!0,geometry:n.pCylinder2_phong1_0.geometry,material:o.phong1})}),e.jsx("group",{name:"pCube4",position:[15.072,11.027,-2.725],rotation:[0,-1.431,-Math.PI/2],scale:[24,.667,32],children:e.jsx("mesh",{name:"pCube4_phong1_0",castShadow:!0,geometry:n.pCube4_phong1_0.geometry,material:o.phong1})})]}),e.jsx("group",{name:"pCube6",position:[-1.743,.15,.365],scale:[.1,.01,.08],children:e.jsx("mesh",{name:"pCube6_lambert1_0",castShadow:!0,geometry:n.pCube6_lambert1_0.geometry,material:o.lambert1})}),e.jsx("group",{name:"pCube7",position:[1.743,.15,.365],scale:[.1,.01,.08],children:e.jsx("mesh",{name:"pCube7_phong3_0",castShadow:!0,geometry:n.pCube7_phong3_0.geometry,material:o.phong3})}),e.jsx("group",{name:"pCube8",position:[1.743,.15,.128],scale:[.1,.01,.08],children:e.jsx("mesh",{name:"pCube8_phong3_0",castShadow:!0,geometry:n.pCube8_phong3_0.geometry,material:o.phong3})}),e.jsxs("group",{name:"group1",children:[e.jsx("group",{name:"pCube3",position:[-1.62,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube3_phong2_0",castShadow:!0,geometry:n.pCube3_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube13",position:[-1.44,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube13_phong2_0",castShadow:!0,geometry:n.pCube13_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube14",position:[-1.26,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube14_phong2_0",castShadow:!0,geometry:n.pCube14_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube15",position:[-1.08,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube15_phong2_0",castShadow:!0,geometry:n.pCube15_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube16",position:[-.9,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube16_phong2_0",castShadow:!0,geometry:n.pCube16_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube17",position:[-.72,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube17_phong2_0",castShadow:!0,geometry:n.pCube17_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube18",position:[-.54,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube18_phong2_0",castShadow:!0,geometry:n.pCube18_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube19",position:[-.36,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube19_phong2_0",castShadow:!0,geometry:n.pCube19_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube20",position:[-.18,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube20_phong2_0",castShadow:!0,geometry:n.pCube20_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube21",position:[0,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube21_phong2_0",castShadow:!0,geometry:n.pCube21_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube22",position:[.18,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube22_phong2_0",castShadow:!0,geometry:n.pCube22_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube23",position:[.36,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube23_phong2_0",castShadow:!0,geometry:n.pCube23_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube24",position:[.54,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube24_phong2_0",castShadow:!0,geometry:n.pCube24_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube25",position:[.72,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube25_phong2_0",castShadow:!0,geometry:n.pCube25_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube26",position:[.9,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube26_phong2_0",castShadow:!0,geometry:n.pCube26_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube27",position:[1.08,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube27_phong2_0",castShadow:!0,geometry:n.pCube27_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube28",position:[1.26,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube28_phong2_0",castShadow:!0,geometry:n.pCube28_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube29",position:[1.44,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube29_phong2_0",castShadow:!0,geometry:n.pCube29_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube30",position:[1.62,.185,-.63],scale:[.1,.05,.075],children:e.jsx("mesh",{name:"pCube30_phong2_0",castShadow:!0,geometry:n.pCube30_phong2_0.geometry,material:o.phong2})})]}),e.jsxs("group",{name:"group2",children:[e.jsx("group",{name:"pCube5",position:[-1.62,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube5_phong2_0",castShadow:!0,geometry:n.pCube5_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube31",position:[-1.44,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube31_phong2_0",castShadow:!0,geometry:n.pCube31_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube32",position:[-1.26,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube32_phong2_0",castShadow:!0,geometry:n.pCube32_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube33",position:[-1.08,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube33_phong2_0",castShadow:!0,geometry:n.pCube33_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube34",position:[-.9,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube34_phong2_0",castShadow:!0,geometry:n.pCube34_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube35",position:[-.72,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube35_phong2_0",castShadow:!0,geometry:n.pCube35_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube36",position:[-.54,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube36_phong2_0",castShadow:!0,geometry:n.pCube36_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube37",position:[-.36,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube37_phong2_0",castShadow:!0,geometry:n.pCube37_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube38",position:[-.18,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube38_phong2_0",castShadow:!0,geometry:n.pCube38_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube39",position:[0,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube39_phong2_0",castShadow:!0,geometry:n.pCube39_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube40",position:[.18,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube40_phong2_0",castShadow:!0,geometry:n.pCube40_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube41",position:[.36,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube41_phong2_0",castShadow:!0,geometry:n.pCube41_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube42",position:[.54,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube42_phong2_0",castShadow:!0,geometry:n.pCube42_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube43",position:[.72,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube43_phong2_0",castShadow:!0,geometry:n.pCube43_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube113",position:[.99,.185,-.43],scale:[.3,.05,.1],children:e.jsx("mesh",{name:"pCube113_phong2_0",castShadow:!0,geometry:n.pCube113_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube45",position:[1.26,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube45_phong2_0",castShadow:!0,geometry:n.pCube45_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube46",position:[1.44,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube46_phong2_0",castShadow:!0,geometry:n.pCube46_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube47",position:[1.62,.185,-.43],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube47_phong2_0",castShadow:!0,geometry:n.pCube47_phong2_0.geometry,material:o.phong2})})]}),e.jsxs("group",{name:"group3",children:[e.jsx("group",{name:"pCube112",position:[-1.57,.185,-.23],scale:[.2,.05,.1],children:e.jsx("mesh",{name:"pCube112_phong2_0",castShadow:!0,geometry:n.pCube112_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube76",position:[-1.36,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube76_phong2_0",castShadow:!0,geometry:n.pCube76_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube75",position:[-1.18,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube75_phong2_0",castShadow:!0,geometry:n.pCube75_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube74",position:[-1,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube74_phong2_0",castShadow:!0,geometry:n.pCube74_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube73",position:[-.82,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube73_phong2_0",castShadow:!0,geometry:n.pCube73_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube72",position:[-.64,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube72_phong2_0",castShadow:!0,geometry:n.pCube72_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube71",position:[-.46,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube71_phong2_0",castShadow:!0,geometry:n.pCube71_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube70",position:[-.28,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube70_phong2_0",castShadow:!0,geometry:n.pCube70_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube69",position:[-.1,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube69_phong2_0",castShadow:!0,geometry:n.pCube69_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube68",position:[.08,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube68_phong2_0",castShadow:!0,geometry:n.pCube68_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube67",position:[.265,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube67_phong2_0",castShadow:!0,geometry:n.pCube67_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube66",position:[.44,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube66_phong2_0",castShadow:!0,geometry:n.pCube66_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube65",position:[.62,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube65_phong2_0",castShadow:!0,geometry:n.pCube65_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube64",position:[.8,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube64_phong2_0",castShadow:!0,geometry:n.pCube64_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube116",position:[1.03,.185,-.13],scale:[.2,.05,.3],children:e.jsx("mesh",{name:"pCube116_phong2_0",castShadow:!0,geometry:n.pCube116_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube50",position:[1.26,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube50_phong2_0",castShadow:!0,geometry:n.pCube50_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube49",position:[1.44,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube49_phong2_0",castShadow:!0,geometry:n.pCube49_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube48",position:[1.62,.185,-.23],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube48_phong2_0",castShadow:!0,geometry:n.pCube48_phong2_0.geometry,material:o.phong2})})]}),e.jsxs("group",{name:"group4",children:[e.jsx("group",{name:"pCube111",position:[-1.53,.185,-.03],scale:[.275,.05,.1],children:e.jsx("mesh",{name:"pCube111_phong2_0",castShadow:!0,geometry:n.pCube111_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube89",position:[-1.28,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube89_phong2_0",castShadow:!0,geometry:n.pCube89_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube88",position:[-1.1,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube88_phong2_0",castShadow:!0,geometry:n.pCube88_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube87",position:[-.92,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube87_phong2_0",castShadow:!0,geometry:n.pCube87_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube86",position:[-.74,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube86_phong2_0",castShadow:!0,geometry:n.pCube86_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube85",position:[-.56,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube85_phong2_0",castShadow:!0,geometry:n.pCube85_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube84",position:[-.38,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube84_phong2_0",castShadow:!0,geometry:n.pCube84_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube83",position:[-.2,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube83_phong2_0",castShadow:!0,geometry:n.pCube83_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube82",position:[-.02,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube82_phong2_0",castShadow:!0,geometry:n.pCube82_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube81",position:[.16,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube81_phong2_0",castShadow:!0,geometry:n.pCube81_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube80",position:[.34,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube80_phong2_0",castShadow:!0,geometry:n.pCube80_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube79",position:[.52,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube79_phong2_0",castShadow:!0,geometry:n.pCube79_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube78",position:[.7,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube78_phong2_0",castShadow:!0,geometry:n.pCube78_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube77",position:[.88,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube77_phong2_0",castShadow:!0,geometry:n.pCube77_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube53",position:[1.26,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube53_phong2_0",castShadow:!0,geometry:n.pCube53_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube52",position:[1.44,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube52_phong2_0",castShadow:!0,geometry:n.pCube52_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube51",position:[1.62,.185,-.03],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube51_phong2_0",castShadow:!0,geometry:n.pCube51_phong2_0.geometry,material:o.phong2})})]}),e.jsxs("group",{name:"group5",children:[e.jsx("group",{name:"pCube110",position:[-1.58,.185,.17],scale:[.175,.05,.1],children:e.jsx("mesh",{name:"pCube110_phong2_0",castShadow:!0,geometry:n.pCube110_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube103",position:[-1.38,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube103_phong2_0",castShadow:!0,geometry:n.pCube103_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube101",position:[-1.2,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube101_phong2_0",castShadow:!0,geometry:n.pCube101_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube100",position:[-1.02,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube100_phong2_0",castShadow:!0,geometry:n.pCube100_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube99",position:[-.84,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube99_phong2_0",castShadow:!0,geometry:n.pCube99_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube98",position:[-.66,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube98_phong2_0",castShadow:!0,geometry:n.pCube98_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube97",position:[-.48,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube97_phong2_0",castShadow:!0,geometry:n.pCube97_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube96",position:[-.3,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube96_phong2_0",castShadow:!0,geometry:n.pCube96_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube95",position:[-.12,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube95_phong2_0",castShadow:!0,geometry:n.pCube95_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube94",position:[.06,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube94_phong2_0",castShadow:!0,geometry:n.pCube94_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube93",position:[.24,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube93_phong2_0",castShadow:!0,geometry:n.pCube93_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube92",position:[.42,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube92_phong2_0",castShadow:!0,geometry:n.pCube92_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube91",position:[.6,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube91_phong2_0",castShadow:!0,geometry:n.pCube91_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube114",position:[.84,.185,.17],scale:[.27,.05,.1],children:e.jsx("mesh",{name:"pCube114_phong2_0",castShadow:!0,geometry:n.pCube114_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube60",position:[1.08,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube60_phong2_0",castShadow:!0,geometry:n.pCube60_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube56",position:[1.26,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube56_phong2_0",castShadow:!0,geometry:n.pCube56_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube55",position:[1.44,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube55_phong2_0",castShadow:!0,geometry:n.pCube55_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube54",position:[1.62,.185,.17],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube54_phong2_0",castShadow:!0,geometry:n.pCube54_phong2_0.geometry,material:o.phong2})})]}),e.jsxs("group",{name:"group6",children:[e.jsx("group",{name:"pCube109",position:[-1.58,.185,.37],scale:[.175,.05,.1],children:e.jsx("mesh",{name:"pCube109_phong2_0",castShadow:!0,geometry:n.pCube109_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube102",position:[-1.38,.185,.37],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube102_phong2_0",castShadow:!0,geometry:n.pCube102_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube104",position:[-1.2,.185,.37],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube104_phong2_0",castShadow:!0,geometry:n.pCube104_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube105",position:[-1.02,.185,.37],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube105_phong2_0",castShadow:!0,geometry:n.pCube105_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube117",position:[-.39,.185,.37],scale:[1,.05,.1],children:e.jsx("mesh",{name:"pCube117_phong2_0",castShadow:!0,geometry:n.pCube117_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube108",position:[.24,.185,.37],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube108_phong2_0",castShadow:!0,geometry:n.pCube108_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube107",position:[.42,.185,.37],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube107_phong2_0",castShadow:!0,geometry:n.pCube107_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube115",position:[.66,.185,.37],scale:[.22,.05,.1],children:e.jsx("mesh",{name:"pCube115_phong2_0",castShadow:!0,geometry:n.pCube115_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube62",position:[.9,.185,.37],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube62_phong2_0",castShadow:!0,geometry:n.pCube62_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube61",position:[1.08,.185,.37],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube61_phong2_0",castShadow:!0,geometry:n.pCube61_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube59",position:[1.26,.185,.37],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube59_phong2_0",castShadow:!0,geometry:n.pCube59_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube58",position:[1.44,.185,.37],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube58_phong2_0",castShadow:!0,geometry:n.pCube58_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube57",position:[1.62,.185,.37],scale:[.1,.05,.1],children:e.jsx("mesh",{name:"pCube57_phong2_0",castShadow:!0,geometry:n.pCube57_phong2_0.geometry,material:o.phong2})})]}),e.jsx("group",{name:"pCylinder4",position:[-1.718,.143,.8],rotation:[0,0,Math.PI/2],scale:[.02,.1,.02],children:e.jsx("group",{name:"transform1"})}),e.jsx("group",{name:"pCylinder5",position:[-1.718,.143,.9],rotation:[0,0,Math.PI/2],scale:[.02,.1,.02],children:e.jsx("group",{name:"transform3"})}),e.jsx("group",{name:"pCube122",children:e.jsx("group",{name:"transform4"})}),e.jsx("group",{name:"pCube123",children:e.jsx("group",{name:"transform6"})}),e.jsx("group",{name:"pCube124",position:[-1.772,.146,0],rotation:[0,0,Math.PI/2],scale:[.05,.2,.1],children:e.jsx("group",{name:"transform5"})}),e.jsx("group",{name:"pCube125",position:[-1.772,.102,0],rotation:[0,0,Math.PI/2],scale:[.04,.2,.04],children:e.jsx("group",{name:"transform7"})}),e.jsx("group",{name:"pCube126",children:e.jsx("group",{name:"transform8"})}),e.jsx("group",{name:"pCube127",position:[-1.772,.102,0],rotation:[0,0,Math.PI/2],scale:[.04,.2,.04],children:e.jsx("group",{name:"transform9"})}),e.jsx("group",{name:"pCube128",children:e.jsx("group",{name:"transform12"})}),e.jsx("group",{name:"pCube129",children:e.jsx("group",{name:"transform14"})}),e.jsx("group",{name:"pCube130",position:[-1.817,.148,-.263],scale:[.1,.02,.06],children:e.jsx("group",{name:"transform11"})}),e.jsx("group",{name:"pCube131",children:e.jsx("mesh",{name:"pCube131_phong1_0",castShadow:!0,geometry:n.pCube131_phong1_0.geometry,material:o.phong1})}),e.jsx("group",{name:"pCube132",position:[-1.743,.139,-.263],scale:[.1,.005,.04],children:e.jsx("mesh",{name:"pCube132_lambert1_0",castShadow:!0,geometry:n.pCube132_lambert1_0.geometry,material:o.lambert1})}),e.jsx("group",{name:"pCylinder6",position:[-1.236,.054,-1.169],rotation:[Math.PI/2,0,0],scale:[.03,.1,.03],children:e.jsx("group",{name:"transform13"})}),e.jsx("group",{name:"pCylinder7",position:[-1.235,.054,-1.118],rotation:[Math.PI/2,0,0],scale:[.01,.05,.01],children:e.jsx("mesh",{name:"pCylinder7_lambert1_0",castShadow:!0,geometry:n.pCylinder7_lambert1_0.geometry,material:o.lambert1})}),e.jsx("group",{name:"pCube133",children:e.jsx("mesh",{name:"pCube133_phong1_0",castShadow:!0,geometry:n.pCube133_phong1_0.geometry,material:o.phong1})}),e.jsxs("group",{name:"group7",children:[e.jsx("group",{name:"pCube119",position:[1.17,-.005,.9],rotation:[-Math.PI,0,-Math.PI],scale:[.5,.02,.1],children:e.jsx("mesh",{name:"pCube119_phong1_0",castShadow:!0,geometry:n.pCube119_phong1_0.geometry,material:o.phong1})}),e.jsx("group",{name:"pCube120",position:[-1.17,-.005,-.78],rotation:[0,0,-Math.PI],scale:[-.65,-.026,-.13],children:e.jsx("mesh",{name:"pCube120_phong1_0",castShadow:!0,geometry:n.pCube120_phong1_0.geometry,material:o.phong1})}),e.jsx("group",{name:"pCube121",position:[1.17,-.005,-.78],rotation:[-Math.PI,0,-Math.PI],scale:[.65,.026,.13],children:e.jsx("mesh",{name:"pCube121_phong1_0",castShadow:!0,geometry:n.pCube121_phong1_0.geometry,material:o.phong1})}),e.jsx("group",{name:"pCube118",position:[-1.17,-.005,.9],rotation:[0,0,-Math.PI],scale:[-.5,-.02,-.1],children:e.jsx("mesh",{name:"pCube118_phong1_0",castShadow:!0,geometry:n.pCube118_phong1_0.geometry,material:o.phong1})})]}),e.jsx("group",{name:"directionalLight1",position:[0,7.255,9.09],rotation:[.836,0,0],children:e.jsx("group",{name:"Object_278",rotation:[Math.PI/2,0,0],children:e.jsx("group",{name:"Object_279"})})}),e.jsx("group",{name:"aiSkyDomeLight1"}),e.jsx("group",{name:"pCube135",position:[0,.195,.765],scale:[.7,.001,.4],children:e.jsx("mesh",{name:"pCube135_phong4_0",castShadow:!0,geometry:n.pCube135_phong4_0.geometry,material:o.phong4})}),e.jsx("group",{name:"pCube136",position:[1.18,.2,-.921],scale:[.2,.01,.05],children:e.jsx("mesh",{name:"pCube136_phong2_0",castShadow:!0,geometry:n.pCube136_phong2_0.geometry,material:o.phong2})}),e.jsx("group",{name:"pCube137",position:[1,.2,-.921],rotation:[-Math.PI,0,0],scale:[-.1,-.01,-.05],children:e.jsx("mesh",{name:"pCube137_phong2_0",castShadow:!0,geometry:n.pCube137_phong2_0.geometry,material:o.phong2})})]})})})})})})};d.preload("/models/laptop.glb");const I="data:image/svg+xml,%3csvg%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8%200C3.58%200%200%203.58%200%208C0%2011.54%202.29%2014.53%205.47%2015.59C5.87%2015.66%206.02%2015.42%206.02%2015.21C6.02%2015.02%206.01%2014.39%206.01%2013.72C4%2014.09%203.48%2013.23%203.32%2012.78C3.23%2012.55%202.84%2011.84%202.5%2011.65C2.22%2011.5%201.82%2011.13%202.49%2011.12C3.12%2011.11%203.57%2011.7%203.72%2011.94C4.44%2013.15%205.59%2012.81%206.05%2012.6C6.12%2012.08%206.33%2011.73%206.56%2011.53C4.78%2011.33%202.92%2010.64%202.92%207.58C2.92%206.71%203.23%205.99%203.74%205.43C3.66%205.23%203.38%204.41%203.82%203.31C3.82%203.31%204.49%203.1%206.02%204.13C6.66%203.95%207.34%203.86%208.02%203.86C8.7%203.86%209.38%203.95%2010.02%204.13C11.55%203.09%2012.22%203.31%2012.22%203.31C12.66%204.41%2012.38%205.23%2012.3%205.43C12.81%205.99%2013.12%206.7%2013.12%207.58C13.12%2010.65%2011.25%2011.33%209.47%2011.53C9.76%2011.78%2010.01%2012.26%2010.01%2013.01C10.01%2014.08%2010%2014.94%2010%2015.21C10%2015.42%2010.15%2015.67%2010.55%2015.59C13.71%2014.53%2016%2011.53%2016%208C16%203.58%2012.42%200%208%200Z'%20transform='scale(64)'%20fill='white'/%3e%3c/svg%3e",N="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='50px'%20height='50px'%20fill-rule='nonzero'%3e%3cg%20fill='%23ffffff'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M8.03125,8.45703c-0.26088,0.00188%20-0.52094,0.1055%20-0.71094,0.3125c-3.925,4.272%20-6.32031,9.97147%20-6.32031,16.23047c0,6.259%202.39531,11.95847%206.32031,16.23047c0.38,0.414%201.03659,0.41262%201.43359,0.01563l2.12891,-2.12891c0.383,-0.383%200.38058,-0.99253%200.01758,-1.39453c-3.045,-3.37%20-4.90039,-7.83366%20-4.90039,-12.72266c0,-4.889%201.85539,-9.35266%204.90039,-12.72266c0.363,-0.402%200.36542,-1.01053%20-0.01758,-1.39453l-2.12891,-2.12891c-0.1985,-0.1985%20-0.46178,-0.29875%20-0.72266,-0.29687zM41.96875,8.45703c-0.26112,-0.00162%20-0.52416,0.09838%20-0.72266,0.29688l-2.13086,2.13086c-0.383,0.383%20-0.38058,0.99058%20-0.01758,1.39258c3.046,3.369%204.90234,7.83366%204.90234,12.72266c0,4.889%20-1.85539,9.35266%20-4.90039,12.72266c-0.363,0.402%20-0.36542,1.01053%200.01758,1.39453l2.12891,2.12891c0.397,0.397%201.05359,0.39738%201.43359,-0.01562c3.925,-4.272%206.32031,-9.97147%206.32031,-16.23047c0,-6.259%20-2.39531,-11.95847%20-6.32031,-16.23047c-0.19,-0.207%20-0.44981,-0.31087%20-0.71094,-0.3125zM35.625,14.83789c-0.26987,-0.01338%20-0.54541,0.08251%20-0.75391,0.29101l-2.13086,2.13086c-0.359,0.359%20-0.39827,0.93717%20-0.07227,1.32617c1.456,1.738%202.33203,3.97506%202.33203,6.41406c0,2.439%20-0.87603,4.67511%20-2.33203,6.41211c-0.326,0.389%20-0.28674,0.96717%200.07227,1.32617l2.13086,2.13281c0.417,0.417%201.09642,0.37959%201.48242,-0.06641c2.272,-2.629%203.64648,-6.05669%203.64648,-9.80469c0,-3.748%20-1.37448,-7.17569%20-3.64648,-9.80469c-0.193,-0.223%20-0.45864,-0.34405%20-0.72852,-0.35742zM14.375,14.83984c-0.26988,0.01337%20-0.53552,0.13442%20-0.72852,0.35742c-2.272,2.628%20-3.64648,6.05473%20-3.64648,9.80273c0,3.748%201.37448,7.17569%203.64648,9.80469c0.386,0.446%201.06542,0.48341%201.48242,0.06641l2.13086,-2.13086c0.359,-0.359%200.39827,-0.93717%200.07227,-1.32617c-1.456,-1.738%20-2.33203,-3.97506%20-2.33203,-6.41406c0,-2.439%200.87603,-4.67511%202.33203,-6.41211c0.326,-0.389%200.28674,-0.96717%20-0.07227,-1.32617l-2.13086,-2.13281c-0.2085,-0.2085%20-0.48403,-0.30244%20-0.75391,-0.28906zM25,19c-3.314,0%20-6,2.686%20-6,6c0,3.314%202.686,6%206,6c3.314,0%206,-2.686%206,-6c0,-3.314%20-2.686,-6%20-6,-6z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",T=({children:a})=>{const t=s.useRef(null);return k(()=>{if(t.current){const{rotation:n}=t.current;n.y=Math.sin(Date.now()*.001)*.2}}),e.jsx("group",{ref:t,children:a})},R=()=>{const a=u.length,[t,n]=s.useState(0),[o,i]=s.useState(u[t]),p=s.useRef(null),r=s.useRef(null),g=()=>{u.length-1===t?n(0):n(m=>m+1)},x=()=>{t<=0?n(a-1):n(m=>m-1)},j=m=>{n(m)};return s.useEffect(()=>{i(u[t])},[t]),s.useEffect(()=>{p.current&&r.current&&(p.current.style.animation="swipe-dot 2s 0.5s infinite",r.current.style.animation="swipe-hand 2s infinite")},[]),e.jsx("section",{id:"projects",className:"section-padding bg-[url('./assets/ornaments/proj-section-ornament.svg')] bg-cover bg-[center_65%] bg-no-repeat",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"My Projects"}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 xl:grid-cols-2",children:[e.jsx("div",{className:"relative flex min-h-[300px] overflow-hidden rounded-[2rem] bg-surface-nightfall p-5 text-white before:absolute before:left-0 before:right-0 before:top-0 before:z-[1] before:h-full before:w-full before:bg-transparent before:bg-[url('./assets/textures/noise.svg')] before:bg-repeat before:opacity-[0.12] before:content-[''] md:p-8 xl:min-h-[500px] xl:items-center",children:e.jsxs("div",{className:"z-10 w-full",children:[e.jsx("div",{className:"glow-text mb-5 text-center text-2xl font-bold md:text-left",children:o.title}),e.jsx("div",{className:"mb-5 text-left text-base font-normal",children:o.text}),e.jsxs("div",{className:"mb-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between",children:[e.jsx("div",{className:"m-auto flex w-[250px] flex-wrap justify-center gap-2 md:m-0 md:justify-normal",children:o.stack.map((m,h)=>e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-lg bg-surface-nightfall-deep",children:e.jsx("img",{className:"z-2 relative h-5 w-5 object-contain",src:m,alt:""})},h))}),e.jsxs("div",{className:"glow-text flex justify-center gap-3",children:[o.github&&e.jsxs("a",{href:o.github,className:"flex items-center justify-center gap-2",children:[e.jsx("span",{children:"Github"}),e.jsx("img",{className:"z-2 relative h-5 w-5 object-contain",src:I,alt:""})]}),o.github&&o.live&&e.jsx("span",{children:"/"}),o.live&&e.jsxs("a",{href:o.live,className:"flex items-center justify-center gap-2",children:[e.jsx("span",{children:"Live"}),e.jsx("img",{className:"z-2 relative h-5 w-5 object-contain",src:N,alt:""})]})]})]}),e.jsxs("div",{className:"m-auto flex items-center justify-center gap-4",children:[e.jsx("button",{onClick:x,className:"glow-text flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-50 text-sm text-white hover:bg-surface-nightfall-deep",children:"❮"}),e.jsx("div",{className:"flex max-w-[150px] flex-wrap justify-center gap-2",id:"dots",children:[...new Array(a)].map((m,h)=>e.jsx("button",{onClick:()=>j(h),className:w({"bg-opacity-70":h===t},{"bg-opacity-30":h!==t},"h-3 w-3 cursor-pointer rounded-full bg-white transition-colors duration-300")},h))}),e.jsx("button",{onClick:g,className:"glow-text flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-50 text-sm text-white hover:bg-surface-nightfall-deep",children:"❯"})]})]})}),e.jsx("div",{className:"relative row-start-1 h-[250px] overflow-hidden rounded-[2rem] sm-576:h-[350px] sm:min-h-[400px] xl:row-auto xl:min-h-[500px]",children:e.jsx(v,{style:{width:"100%"},camera:{position:[3,7,10],fov:30},children:e.jsxs(s.Suspense,{fallback:e.jsx(M,{}),children:[e.jsx("directionalLight",{position:[0,10,0],intensity:5}),e.jsx(T,{children:e.jsx("group",{scale:1.5,position:[0,-1.5,0],children:e.jsx(P,{texture:o.img})})})]})})})]})]})})};export{R as default};