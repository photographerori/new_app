<template>
  <div>
    <div>{{ teamInfo }}</div>
    <div>{{ teamLogos }}</div>
    <div>{{ teamNames }}</div>
    <div>{{ teamCountries }}</div>
    <div>{{ teamFoundationYears }}</div>
    <div>
      <img :src="teamLogo" alt v-for="teamLogo in teamLogos" />
      <h3 v-for="teamName in teamNames" :key="teamName">{{ teamName }}</h3>
      <p v-for="teamCountry in teamCountries" :key="teamCountry">{{ teamCountry }}</p>
      <p
        v-for="teamFoundationYear in teamFoundationYears"
        :key="teamFoundationYear"
      >{{ teamFoundationYear }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamInfo: [],
      teamLogos: [],
      teamNames: [],
      teamCountries: [],
      teamFoundationYears: [],
    };
  },
  computed: {
    getTeamInfo() {
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
          console.log(data);
          this.teamInfo.push(data.response[0]);
          for (let i = 0; i < data.response.length; i++) {
            this.teamLogos.push(data.response[i].team.logo);
            this.teamNames.push(data.response[i].team.name);
            this.teamCountries.push(data.response[i].team.country);
            this.teamFoundationYears.push(data.response[i].team.country);
          }
        })
        .catch(err => {
          console.log(err);
          alert("Error!");
        }),
    }
  },
};
</script>

<style scoped>
button {
  margin: 10px;
}
</style>
