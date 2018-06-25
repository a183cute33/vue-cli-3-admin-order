<template>
  <div id="main">
    <div class="container">
      <div class="info">
        <div class="left">OVERVIEW</div>
        <div class="right">
          <div class="unit">
            <span>Weekly</span>
            <i class="fas fa-caret-down"></i>

            <div class="list">
              <span>Daily</span>
              <span class="active">Weekly</span>
              <span>Monthly</span>
              <span>Yearly</span>
              <span>Custom</span>
            </div>
          </div>

           <div class="dates">
            <span>2018/6/6</span>
            <i class="fas fa-caret-right"></i>
            <span>2018/6/13</span>
          </div>

        </div>
      </div>

      <div class="n3">
        <div class="panel">
          <div class="fas fa-hand-holding-usd">TOTAL REVENUE</div>
          <b class="green">54,540</b>
        </div>
        <div class="panel">
          <div class="fas fa-boxes">TOTAL COST</div>
          <b class="red">12,660</b>
        </div>
        <div class="panel">
          <div class="fas fa-money-bill">NET INCOME</div>
          <b class="blue">41,880</b>
        </div>
      </div>

      <div class="n1">
        <div id="chart" class="panel"></div>
      </div>

      <div class="n2">
        <div class="panel left">
          <b>Transaction Website</b>
          <div class="list">
            <div class="item">
              <span class="fab fa-facebook-square"></span>
              <span class="name">Facebook.com</span>
              <span class="num">45,836</span>
              <span class="rate green fas fa-arrow-up">20%
                <div class="tip">
                  <div>INCREASE<b class="green">899</b> VIEWS
                    <i>last week: 44,937</i>
                  </div>
                </div>
              </span>
            </div>
            <div class="item">
              <span class="fab fa-google"></span>
              <span class="name">google.com</span>
              <span class="num">23,582</span>
              <span class="rate green fas fa-arrow-up">12%
                  <div class="tip">
                  <div>INCREASE<b class="green">899</b> VIEWS
                    <i>last week: 44,937</i>
                  </div>
                </div>
              </span>
            </div>
            <div class="item">
              <span class="fab fa-speakap"></span>
              <span class="name">Shopify.com</span>
              <span class="num">2,489</span>
              <span class="rate red fas fa-arrow-down">15%
                  <div class="tip">
                  <div>INCREASE<b class="green">899</b> VIEWS
                    <i>last week: 44,937</i>
                  </div>
                </div>
              </span>
            </div>
            <div class="item">
              <span class="fab fa-wordpress"></span>
              <span class="name">Wordpress.com</span>
              <span class="num">1,057</span>
              <span class="rate red fas fa-arrow-down">30%
                  <div class="tip">
                  <div>INCREASE<b class="green">899</b> VIEWS
                    <i>last week: 44,937</i>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="panel right">
          <b>Latest Orders</b>
          <div class="list">
            <div class="item">
              <div class="pic">
                <img :src="require(`@/assets/logo.png`)" alt="">
              </div>
              <div class="info">
                <b>Vintage T-shirt</b>
                <span class="fas fa-clock">2018/6/13  13:42</span>
                <span class="fas fa-male">Belle Willis</span>
              </div>
              <div class="total">
                <b>3,200</b>
              </div>
            </div>
            <div class="item">
              <div class="pic">
                <img :src="require(`@/assets/logo.png`)" alt="">
              </div>
              <div class="info">
                <b>Cowboy Jacket</b>
                <span class="fas fa-clock">2018/6/13  10:45</span>
                <span class="fas fa-male">Adrian Cummings</span>
              </div>
              <div class="total">
                <b>2,800</b>
              </div>
            </div>
            <div class="item">
              <div class="pic">
                <img :src="require(`@/assets/logo.png`)" alt="">
              </div>
              <div class="info">
                <b>Coach Coat</b>
                <span class="fas fa-clock">2018/6/13  8:26</span>
                <span class="fas fa-male">Lura Holland</span>
              </div>
              <div class="total">
                <b>1,600</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(this.drawChart);
  },
  methods: {
    drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Year", "Sales", "Expenses"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540]
      ]);

      var options = {
        title: "Activity",
        curveType: "function",
        legend: { position: "bottom" }
      };

      var chart = new google.visualization.LineChart(
        document.getElementById("chart")
      );

      chart.draw(data, options);
    }
  }
};
</script>
<style lang="scss">
@import "../assets/css/home";
</style>
