# CS50-WEB-FINAL-PROJECT
 This is a simple quiz app using Django framework and Javascript

## Features

- Authentication
- Choose quiz category
- Shows quiz time taken

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