from django.shortcuts import render, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse

# Create your views here.
def userlogin(request):
    print(request.method)
    if request.user.is_authenticated():
        return HttpResponseRedirect(reverse('website__editor'))
    if request.method == 'POST':
        user = authenticate(username=request.POST.get('username',''), password=request.POST.get('password',''))
        print(user)
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse('website__editor'))
        else:
            return render(request, 'login/login.html', {
                'message': 'Incorrect Username or Password'
            })
    return render(request, 'login/login.html', {
        'message': None
    })

def userlogout(request):
    logout(request)
    return HttpResponseRedirect(reverse('website__index'))