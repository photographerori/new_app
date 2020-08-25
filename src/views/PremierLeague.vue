<template>
  <div>
    <p class="title">Premier League</p>
    <div class="container">
      <div class="content" v-for="teamInfo in teamInfos" :key="teamInfo.id">
        <h3>{{ teamInfo.team.name }}</h3>
        <img :src="teamInfo.team.logo" alt="チームのロゴ" />
        <p>{{ teamInfo.team.country }}</p>
        <p>{{ teamInfo.team.founded }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamInfos: [],
    };
  },
  created() {
    fetch(
      "https://api-football-beta.p.rapidapi.com/teams?league=39&season=2019",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
          "x-rapidapi-key":
            "8437eddafemsh1a80b58d214b1f8p184cb8jsn9af6525635b1",
        },
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        for (let i = 0; i < data.response.length; i++) {
          this.teamInfos.push(data.response[i]);
        }
      })
      .catch(err => {
        console.log(err);
        alert("Error!");
      });
  },
};
</script>

<style scoped>
.title {
  font-size: 48px;
  color: rgba(38, 153, 251, 100%);
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.content {
  margin: 15px;
  flex-basis: content;
  background-color: rgba(241, 249, 255, 100%);
  border-radius: 5%;
}
</style>
