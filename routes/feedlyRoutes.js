const { Router } = require("express");
const router = Router();
const axios = require("axios");
const Article = require("../data/models/article");
const Category = require("../data/models/feedlyCategory");
const StreamId = require("../data/models/feedlyStreamId");
const FeedlyArticle = require("../data/models/feedlyArticle");
const mongoose = require("mongoose");

const baseUrl = `https://cloud.feedly.com/v3/`;

const getCategoryStream = (req, res) => {
    
  Category.find()
    .limit()
    .exec()
    .then(categories => {
      categories.map(category => {
        axios({
          method: "GET",
          url: `${baseUrl}streams/ids?`,
          params: { streamId: category.id },
          headers: {
            Authorization:
              "OAuth AyCIEtdYucbSKlppncbpVe8JlyoJ7M2C-MTuhXXekzStZGkrDRScscSpYkMoeVvSvourGh5U4nKW-h8LQToH1zeNVq8yV5osg00NP-KaD6noCwhCXATltOtTz4gVdW-tccjxP0AwppU8nL3vmjGxlYkVDoX7lydlpZMWniqJf2T_58zL8z_n6j2Q8jVrTlYLCyHddOg3MfMGxi1vvUvF7NnKhXQ2cGwNfdWOciXH5Qo4tYyc2CoS3H4:feedlydev"
          }
        }).then(result => {
          streamId = new StreamId({
            label: category.label,
            streamId: category.id,
            entry_ids: result.data.ids
          });

          streamId.save();
        });
      });
      res.send(`job's done.`);
    });
};

const writeEntry = (req, res) => {
  StreamId.find()
    .limit()
    .exec()
    .then(ids => {
      let allIds = [];
      let allTitles = [];
      ids.map(category => {
        for (const entryId of category.entry_ids) {
          allIds.push(entryId);
        }
      });

      allIds.forEach(entry => {
        const entryId = entry;
        axios({
          method: "GET",
          url: `${baseUrl}entries/${entryId}`,
          headers: {
            Authorization:
              "OAuth AyCIEtdYucbSKlppncbpVe8JlyoJ7M2C-MTuhXXekzStZGkrDRScscSpYkMoeVvSvourGh5U4nKW-h8LQToH1zeNVq8yV5osg00NP-KaD6noCwhCXATltOtTz4gVdW-tccjxP0AwppU8nL3vmjGxlYkVDoX7lydlpZMWniqJf2T_58zL8z_n6j2Q8jVrTlYLCyHddOg3MfMGxi1vvUvF7NnKhXQ2cGwNfdWOciXH5Qo4tYyc2CoS3H4:feedlydev"
          }
        }).then(result => {
          const firstEntry = result.data[0];
          const feedlyArticle = new FeedlyArticle({
            id: firstEntry.id,
            originId: firstEntry.originId,
            fingerprint: firstEntry.fingerprint,
            content: firstEntry.content,
            title: firstEntry.title,
            alternate: firstEntry.alternate,
            crawled: firstEntry.crawled,
            published: firstEntry.published,
            origin: firstEntry.origin,
            unread: firstEntry.unread,
            categories: firstEntry.categories,
            commonTopics: firstEntry.commonTopics
          });
          feedlyArticle.save();
          res.send("1 out of 220 article saved");
        });
      });
    });
};

const writeCategory = (req, res) => {
  axios({
    method: "GET",
    url: `${baseUrl}categories`,
    headers: {
      Authorization:
        "OAuth AyCIEtdYucbSKlppncbpVe8JlyoJ7M2C-MTuhXXekzStZGkrDRScscSpYkMoeVvSvourGh5U4nKW-h8LQToH1zeNVq8yV5osg00NP-KaD6noCwhCXATltOtTz4gVdW-tccjxP0AwppU8nL3vmjGxlYkVDoX7lydlpZMWniqJf2T_58zL8z_n6j2Q8jVrTlYLCyHddOg3MfMGxi1vvUvF7NnKhXQ2cGwNfdWOciXH5Qo4tYyc2CoS3H4:feedlydev"
    }
  }).then(result => {
    result.data
      .map(item => {
        const category = new Category({
          id: item.id,
          label: item.label
        });
        category.save();
      })
      .then(res.send(`categories saved`));
  });
};

const emptyCategory = (req, res) => {
  Category.remove()
    .exec()
    .then(res.send(`all categories emptied`));
};

const getEntry = (req, res) => {
    res.send(req.body.category)
}

const emptyEntry = (req, res) => {
    FeedlyArticle.remove()
                 .exec()
                 .then(res.send(`all feedly articles scraped`))
}

// router.post("/entry", writeEntry);
router.post("/category", writeCategory);
router.post("/stream", getCategoryStream);
router.delete("/category", emptyCategory);
router.get("/entry", getEntry)
router.delete("/entry", emptyEntry)

module.exports = router;
