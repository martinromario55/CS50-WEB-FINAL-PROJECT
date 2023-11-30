# CS50-WEB-FINAL-PROJECT
 Welcome to my final CS50 Web project, an innovative quiz web app designed to revolutionize the way users engage with knowledge assessment. Whether you're a student preparing for exams or a lifelong learner seeking to expand your horizons, This offers a unique and interactive platform for testing and enhancing your knowledge.


### Unique Features

1.  **Interactive User Interface:** This app boasts a sleek and intuitive user interface that seamlessly guides users through the quiz experience. The minimalist design ensures focus on content, while subtle functioning enhance user engagement without compromising simplicity.
    
2.  **Adaptive Questioning:** This app goes beyond traditional quizzes by dynamically adjusting question difficulty based on user performance. This adaptive approach ensures that users are consistently challenged, promoting continuous learning and improvement.
    
3.  **Real-time Updates:** Experience instant feedback and real-time scoring as you progress through the quiz. The app keeps users motivated by providing immediate results, fostering a sense of accomplishment and encouraging further participation.  
4. **Gamification Elements:** Engage in friendly competition with friends or global participants through our gamification features. Earn badges for achievements, climb the leaderboard, and unlock special challenges, turning learning into a fun and rewarding experience.

### Technical Complexity

1.  **Backend Complexity:** The backend of this app employs advanced algorithms for question generation and difficulty calibration. Our sophisticated database ensures efficient storage and retrieval of vast question databases, contributing to a seamless user experience.
    
2.  **Frontend Dynamics:** Implementing a responsive frontend, this app utilizes asynchronous JavaScript techniques for dynamic content loading. This not only enhances the user interface but also ensures smooth interactions, even with slower internet connections.
3. **Security Measures:** User data security is our top priority. I employ robust encryption protocols and secure authentication mechanisms to safeguard user information, for example I use ```validate_email 1.3``` ensuring a secure and trustworthy environment for knowledge exploration.

### Technology Stack

The app leverages a powerful technology stack, including Django for the backend, [Validate_email 1.3](https://pypi.org/project/validate_email/) for email address validation, and a dynamic frontend powered by Bootstrap 4 and JavaScript. The use of SQLite as the database ensures efficient data management.

### Future Enhancements

Looking ahead, Myself or anyone else that may work with this app might aim to introduce personalized learning paths, allowing users to focus on specific topics of interest. Integration with external learning resources and expanded collaboration features are also on my roadmap, ensuring the app remains an interactive and adaptive learning platform.

By combining these unique features, addressing technical complexities, and adopting a forward-looking approach, The app stands out as a comprehensive and innovative quiz web app.

## Installation

- Clone the repository
```sh
	git cone https://github.com/martinromario55/CS50-WEB-FINAL-PROJECT.git
```
- Open folder
```sh
	cd CS50-WEB-FINAL-PROJECT
```
- Create a virtual environment using a terminal or bash
```sh
	python3 -m virtualenv <enter_environment_name> 
```
>For windows users, please look for how to create a virtual enviroment on Windows
- Install the requirements
```sh
	pip install -r requirements.txt
```
- cd to the path where ```manage.py``` exists and run the following commands.
```sh
    cd Quizapp
```
- Run the following commands in your terminal
```sh
    python manage.py makemigrations
    python manage.py migrate

    #creating superuser
    python manage.py createsuperuser

    #Run development server
    python manage.py runserver
```

## How to use the APP
1. **Register** for an account.
![image](https://raw.githubusercontent.com/martinromario55/MEDIAFILES/main/Images/CS50%20Web%20Images/registration.png)
2. **Login** to your account.
![image](https://raw.githubusercontent.com/martinromario55/MEDIAFILES/main/Images/CS50%20Web%20Images/login.png)
3. You will then see the home page. Read the instructions then click on **Start Quiz**.
![image](https://raw.githubusercontent.com/martinromario55/MEDIAFILES/main/Images/CS50%20Web%20Images/home.png)
4. Select a **Quiz Category**.
![image](https://raw.githubusercontent.com/martinromario55/MEDIAFILES/main/Images/CS50%20Web%20Images/categories.png)
5. Answer **all** the questions.
![image](https://raw.githubusercontent.com/martinromario55/MEDIAFILES/main/Images/CS50%20Web%20Images/quiz.png)
6. After ever guess, click on **Check** to see if you have guessed **right** or **wrong**. Then click on **Next** to continue.
![image](https://raw.githubusercontent.com/martinromario55/MEDIAFILES/main/Images/CS50%20Web%20Images/check.png)
7. After checking the final guess, click on **Finish** to see your score. Each correct answer carries one point.
![image](https://raw.githubusercontent.com/martinromario55/MEDIAFILES/main/Images/CS50%20Web%20Images/results.png)
8. Click on **Go Back** to return to the home page.
9. Add your own Quiz categories and Questions from the ```Admin``` section and have fun!!!