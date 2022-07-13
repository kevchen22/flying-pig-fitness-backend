# flying-pig-fitness-backend

## Description
Exercise and food database using exerciseDB, YouTube Search and Download, and CalorieNinja API's

## Technologies


1. Express
2. Mongoose
3. bcrypt
4. jsonwebtoken

## Routes

1. Workouts (to log workouts): '/api/v1/workouts'
2. Food Log (food diary): 'api/v1/foodlog'
3. Home Page (home): '/api/v1/home

## Stretch Goals


- In long run, syncing app with a fitbit/Apple Watch that can track workouts and calories burned, instead of manually entering in the information.
- Combine the food diary and food search onto one page to allow the user for easier access to nutrition.
- Make the data unique to each user.
- Combining the exercises with the workout tracker, so users can specifically select which workout they did from the exerciseDB API.
- Incorporate recommended workouts: If a user is tracking their workouts daily and only doing upper body every day, they may get an alert like ‘Don’t forget leg day, trust me!’ or ‘Don’t forget to do core’ etc.
- Incorporate calculations based off of user entered data. For example, using weight, heart rate, age to calculate calories burned. A lot of people don't have fitbit/heart rate monitors to accurately know how many calories were burned. 
