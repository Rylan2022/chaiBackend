require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const githubdata = {
  login: "Rylan2022",
  id: 114771398,
  node_id: "U_kgDOBtdFxg",
  avatar_url: "https://avatars.githubusercontent.com/u/114771398?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Rylan2022",
  html_url: "https://github.com/Rylan2022",
  followers_url: "https://api.github.com/users/Rylan2022/followers",
  following_url:
    "https://api.github.com/users/Rylan2022/following{/other_user}",
  gists_url: "https://api.github.com/users/Rylan2022/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Rylan2022/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Rylan2022/subscriptions",
  organizations_url: "https://api.github.com/users/Rylan2022/orgs",
  repos_url: "https://api.github.com/users/Rylan2022/repos",
  events_url: "https://api.github.com/users/Rylan2022/events{/privacy}",
  received_events_url: "https://api.github.com/users/Rylan2022/received_events",
  type: "User",
  site_admin: false,
  name: "Rakesh Molla",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Turning dreams into plans. 🚀 | Adventure seeker | Coffee enthusiast ☕",
  twitter_username: null,
  public_repos: 7,
  public_gists: 0,
  followers: 1,
  following: 8,
  created_at: "2022-09-30T18:34:24Z",
  updated_at: "2024-08-17T05:30:45Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/media", (req, res) => {
  res.send("Rakeshmolla");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please login chai or code#</h1>");
});

app.get("/youtub", (req, res) => {
  res.send("<h2>Chai peo gaa@</h2>");
});

app.get("/github", (req, res) => {
    res.json(githubdata);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
