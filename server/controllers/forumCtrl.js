const makePost = (req, res) => {
  let { user_id, post_title, post_content } = req.body;
  let db = req.app.get("db");
  db.add_post(user_id, post_title, post_content)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).send(err => console.log(err)));
};

module.exports = {
  makePost
};
