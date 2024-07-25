"use strict";

// geolocation
function success(pos) {
  ajaxRequest(pos.coords.latitude, pos.coords.longitude);
}

function fail(error) {
  alert("位置情報の取得に失敗しました。エラーコード: " + error.code);
  console.log(error);
}

navigator.geolocation.getCurrentPosition(success, fail);

//UTCをミリ秒に変換
function utcToJSTime(utcTime) {
  return utcTime * 10000;
}

//データ取得
function ajaxRequest(lat, long) {
  const url = "http://api.openweathermap.org/data/2.5/forecast";
  const appId = "ここにトークン";

  $.ajax({
    url: url,
    data: {
      appid: appId,
      lat: lat,
      lon: long,
      units: "metric",
      lang: "ja",
    },
  })
    .done(function (data) {
      console.log(data);

      //都市名、国名
      // console.log("都市名: " + data.city.name);
      // console.log("国名: " + data.city.country);
      $("#place").text(data.city.name + ", " + data.city.country);

      //天気予報データ
      data.list.forEach(function (forecast, index) {
        //Dateオブジェクトを初期化
        //UNIX UTC時間は、1970/1/1 午前0時から経過の"秒"を表す
        //Dateオブジェクトに指定できるのはミリ秒だから、秒→ミリ秒に変換
        const dateTime = new Date(utcToJSTime(forecast.dt));
        const month = dateTime.getMonth() + 1;
        const date = dateTime.getDate();
        const hours = dateTime.getHours();
        const min = String(dateTime.getMinutes()).padStart(2, "0");
        //四捨五入して気温を取得
        const temparature = Math.round(forecast.main.temp);
        const description = forecast.weather[0].description;
        //アイコン画像をimagesフォルダに保存
        console.log(forecast.weather[0].icon);
        const iconPath = `images/${forecast.weather[0].icon}.svg`;
        console.log(iconPath);

        // console.log("日時: " + `${month}/${date} ${hours}:${min}`);
        // console.log("気温: " + temparature);
        // console.log("天気: " + description);
        // console.log("画像パス: " + iconPath);

        //現在の天気とそれ以外で出力を変える
        if (index === 0) {
          const currentWeather = `
          <div class="icon"><img src="${iconPath}"></div>
          <div class="info">
            <p>
              <span class="description">現在の天気: ${description}</span>
              <span class="temp">${temparature}</span>
            </p>
          </div>`;

          //取得した#weather要素のコンテンツをHTMLで書き換え
          $("#weather").html(currentWeather);
        } else {
          const tableRow = `
          <tr>
            <td class="info">
              ${month}/${date} ${hours}:${min}
            </td>
            <td class="icon><img src="${iconPath}"></td>
            <td><span class="description">${description}</span></td>
            <td><span class="class">${temparature}</span>℃</td>
          </tr>`;
          //取得した#forecast要素の中にHTMLを挿入
          $("#forecast").append(tableRow);
        }
      });
    })
    .fail(function () {
      console.log("$.ajax failed!");
    });
}
