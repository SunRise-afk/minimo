(()=>{"use strict";var e="";const t=[e+"b30212342f09f57a1a2cf3d13dfa90f4.png",e+"73d7e39f38f4096c852370680800188d.png",e+"acbd2b344a5ee2926ea50b647f996ae8.png",e+"60546895251e4ce75338c6abc6eabf20.png",e+"fdf8cc7bc27e033b70ffb5bc813aeba1.png",e+"11fa8dcfb62dcde3d7c919c9353d0c55.png"],n=document.querySelector(".load_button"),a=document.querySelector(".loading_plug");let c=!1;const s=()=>{const e=document.createElement("div");e.classList.add("post_item");const n=document.createElement("div");n.classList.add("post_img_container");const a=document.createElement("img");a.src=t[Math.floor(Math.random()*t.length)];const c=document.createElement("p");c.innerText="Lifestyle",c.classList.add("sub_p");const s=document.createElement("h2");s.innerText="Lorem Ipsum",s.classList.add("heading");const d=document.createElement("h2");return d.innerText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ad sequi minima dolorem nesciunt natus quisquam quos cumque eum ipsam.",d.classList.add("paragraph"),e.append(n),n.append(a),e.append(c),e.append(s),e.append(d),e};n.addEventListener("click",(()=>{c||(c=!0,a.classList.add("active"),new Promise(((e,t)=>{setTimeout((()=>{e()}),1500)})).then((()=>{document.querySelectorAll(".posts")[1].getElementsByClassName("container")[0].append(s(),s()),a.classList.remove("active"),c=!1})))}))})();