const bodyParser = require('body-parser');

module.exports = app => {
  // HTTPリクエストのbodyをJSONとして解析するようにミドルウェアをインストール
  app.use(bodyParser.json());

  // TODO: ここ以降にAPIの実装内容を追加していく
};
