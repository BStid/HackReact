const commentCtrl = require("./controllers/commentCtrl");
const ratingCtrl = require("./controllers/ratingCtrl");

const { getUser, editUserAbout } = require("./controllers/userCtrl");
const { getLesson, getQuiz, getImages } = require("./controllers/lessonCtrl");

const express = require("express");

module.exports = app => {
  //user
  app.post("/api/user/favorites");
  app.get("/api/user", getUser);
  app.get("/api/user/all");
  app.get("/api/completed/:user_id");
  app.put("/api/user/:user_id", editUserAbout);
  app.put("/api/completed_counter");
  app.put("/api/drill_counter");

  //lessons
  app.post("/api/lesson"); //create new lesson, return lesson id
  app.post("/api/completed/:lesson_id"); //to create a new row in completed_lessons
  app.post("/api/image/:lesson_id");
  app.delete("/api/lesson/:lesson_id");
  app.put("/api/completed/:lesson_id");
  app.put("/api/lesson/:lesson_id");
  app.put("/api/image/:lesson_id");
  app.get("/api/lesson/all");
  app.get("/api/lesson/:lesson_id", getLesson);
  app.get("/api/lesson/:user_id");
  app.get("/api/images", getImages);

  //quiz
  app.get("/api/quiz/:quiz_id");

  //comment
  app.post("/api/comment/:lesson_id");
  app.delete("/api/comment/:comment_id");
  app.get("/api/comment/:lesson_id");

  //rating
  app.put("/api/rating/:lesson_id");
  app.get("/api/rating/:lesson_id");
};
