import "./style.scss";
import post1 from "./assets/images/post1.png";
import post2 from "./assets/images/post2.png";
import post3 from "./assets/images/post3.png";
import post4 from "./assets/images/post4.png";
import post5 from "./assets/images/post5.png";
import post6 from "./assets/images/post6.png";
const images = [post1, post2, post3, post4, post5, post6];
const lorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ad sequi minima dolorem nesciunt natus quisquam quos cumque eum ipsam.";

const loadButton = document.querySelector(".load_button");
const loadingPlug = document.querySelector(".loading_plug");
let loading = false;
const createPost = () => {
  const postItem = document.createElement("div");
  postItem.classList.add("post_item");
  const postImgContainer = document.createElement("div");
  postImgContainer.classList.add("post_img_container");
  const postImage = document.createElement("img");
  postImage.src = images[Math.floor(Math.random() * images.length)];
  const postTheme = document.createElement("p");
  postTheme.innerText = "Lifestyle";
  postTheme.classList.add("sub_p");
  const postHeading = document.createElement("h2");
  postHeading.innerText = "Lorem Ipsum";
  postHeading.classList.add("heading");
  const postParagraph = document.createElement("h2");
  postParagraph.innerText = lorem;
  postParagraph.classList.add("paragraph");
  postItem.append(postImgContainer);
  postImgContainer.append(postImage);
  postItem.append(postTheme);
  postItem.append(postHeading);
  postItem.append(postParagraph);
  return postItem;
};
loadButton.addEventListener("click", () => {
  if (loading) {
    return;
  }
  loading = true;
  loadingPlug.classList.add("active");
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });
  promise.then(() => {
    document
      .querySelectorAll(".posts")[1]
      .getElementsByClassName("container")[0]
      .append(createPost(), createPost());
    loadingPlug.classList.remove("active");
    loading = false;
  });
});
