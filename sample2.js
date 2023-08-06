import { sleep, group } from "k6";
import http from "k6/http";

//詳細=>https://k6.io/docs/using-k6/scenarios/
export const options = {
  scenarios: {
    example: {
      // https://k6.io/docs/using-k6/scenarios/executors/
      executor: "constant-arrival-rate", //一定のリクエスト送出
      duration: "5s",
      // timeUnitで指定された時間毎に反復するテスト回数
      rate: 20,
      // rateを反復させる時間
      timeUnit: "1s",
      // 初期に割り当てられるVUS数
      preAllocatedVUs: 40,
      // VUSが足りなかった場合に増える最大VUS数
      maxVUs: 100,
    },
  },
};

export default function main() {
  let response;

  group("load test for http://example.com/", function () {
    response = http.get("http://example.com/", {
      headers: {
        "upgrade-insecure-requests": "1",
      },
    });
  });

  // Automatically added sleep
  sleep(1);
}
