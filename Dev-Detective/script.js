const profileName = document.querySelector("[data-name]");
const joinDate = document.querySelector("[data-joinDate]");
const userImg = document.querySelector("[data-user-img]");
const profLink = document.querySelector("[data-profLink]");
const bio = document.querySelector("[data-bio]");
const repos = document.querySelector("[data-repo]");
const follower = document.querySelector("[data-flollower]");
const following = document.querySelector("[data-following]");
const locationProfile = document.querySelector("[data-location]");
const blog = document.querySelector("[data-blog]");
const twitter = document.querySelector("[data-twitter]");
const company = document.querySelector("[data-company]");
const inputName = document.querySelector("[data-input]");
const searchForm = document.querySelector(".search-container");
const resetBtn = document.querySelector(".reset");
const darkTheme = document.querySelector(".dark-theme");
const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");
const lightTheme = document.querySelector(".lignt-theme");
function renderData(data) {
  resetBtn.classList.remove("active");
  if (data?.login !== undefined) {
    profileName.innerText = data?.name;
    bio.innerText = data?.bio;
    joinDate.innerText = data?.created_at;
    userImg.src = `${data?.avatar_url}`;
    profLink.href = data?.html_url;
    repos.innerText = data?.public_repos;
    follower.innerText = data?.followers;
    following.innerText = data?.following;
    locationProfile.innerText = data?.location;
    blog.innerText = data?.blog;
    twitter.innerText = data?.twitter_username;
    company.innerText = data?.company;
  } else {
    alert("user do not exist");
  }
}
async function getData(profName) {
  resetBtn.classList.remove("active");
  try {
    const res = await fetch(` https://api.github.com/users/${profName}`);
    const data = await res.json();
    renderData(data);
  } catch (err) {
    alert("Error", err);
  }
}

function myFunction() {
  resetBtn.classList.add("active");
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameOfProf = inputName.value;
  if (nameOfProf === "") {
    return;
  }

  getData(nameOfProf);
});

let profName = "thepranaygupta";
getData(profName);
resetBtn.classList.remove("active");
// lightTheme.classList.add("active");

function dark() {
  wrapper.classList.add("dark");
  container.classList.add("dark");
  lightTheme.classList.add("active");
  darkTheme.classList.add("not-visible");
  searchForm.classList.add("dark");
}

function light() {
  wrapper.classList.remove("dark");
  container.classList.remove("dark");
  lightTheme.classList.remove("active");
  darkTheme.classList.remove("not-visible");
  searchForm.classList.remove("dark");
}
