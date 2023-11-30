from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from .views import RegistrationView, UsernameValidationView, EmailValidationView, LoginView, LogoutView, home_page, take_quiz


urlpatterns = [
    # path('home', home, name='home'),
    
    path('', home_page, name='home_page'),
    path('category/<int:pk>/', take_quiz, name='take_quiz'),
    
    path('register', RegistrationView.as_view(), name='register'),
    path('validate-username/', csrf_exempt(UsernameValidationView.as_view()) , name='validate-username'),
    path('validate-email/', csrf_exempt(EmailValidationView.as_view()) , name='validate-email'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    

]
