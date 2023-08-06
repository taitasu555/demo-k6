## 準備

install k6: `brew install k6`

## 実行例

- `k6 run sample.js`
- `k6 run sample2.js`

```
ex: 5sの間、20rpsで負荷をかけたい
k6 run sample.js -d 10s --rps 20 -u *vusを適宜調整する

ex 40(最大100) vusで20rpsの負荷を5秒かける
k6 run sample2.js

optionについての詳細
https://k6.io/docs/using-k6/k6-options/reference/
https://k6.io/docs/using-k6/scenarios/

```

## 実行結果について

```
data_received：合計データ受信数
data_sent：総データ送信数
http_req_blocked：ブロッキングされた時間
http_req_connecting：TCP接続にかかった時間
http_req_duration：リクエスト送信からレスポンスを受け取るまでの時間
expected_response：http_req_durationの中でもHTTPステータスコードが200~399のリクエストのみの値
http_req_failed：リクエストが失敗した数
http_req_receiving：レスポンスを受信していた時間
http_req_sending：リクエストを送信していた時間
http_req_tls_handshaking：TLSハンドシェイクにかかった時間
http_req_waiting：レスポンスを待っていた時間
http_reqs：送信されたリクエスト数
iteration_duration：１イテレーションにかかった全ての時間
iterations：１VUが実行したイテレーションの数
vus：VU数
vus_max：最大VU数

https://k6.io/docs/get-started/results-output/
```


### 参考、引用記事
https://k6.io/docs/
https://engineering.dena.com/blog/2021/10/healthcare-load-testing/
https://syossan.hateblo.jp/entry/2022/12/06/113407
