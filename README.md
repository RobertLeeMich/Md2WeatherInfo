# Weather App
This app is used for checking the weather in the Newnan, GA Area. It is used as an example of an API call.

# Technologies Used:
HTML5, CSS3, JavaScript, React

# Approach Taken:
I knew I just wanted to return some specifics from the Weather API, so I used Postman to analyze the API returns. After that I coded out the specific API call using a geolocation, but unfortunately that API call didn't return what I wanted, even though it returned the location I wanted. 

I still needed the Temperature and the Weather itself. So I had to go find my longitude and latitude on Google Maps and use their other API call for that and have those be variables for input into the API call. I also had to look at what VITE used for the .env file, as it wasn't REACT_APP, it was VITE_.

I also struggled to get the tabs working correctly for the 3 hour, 5 day forecast, especially using CSS. That took me quite a while to set up. Especially because the styling to have items show up, I forgot was inside the code, and not the CSS.

Also having the idea to have the background "roll" between gradient colors based on the time of day took me a while to understand and implement.

# Link to Live Site: https://64e7b751a5b1ad008bab928a--deft-chaja-ad7c37.netlify.app/

# Installation Instructions: Just click the link above.

# Unsolved Problems:
Adding more functionality later on.