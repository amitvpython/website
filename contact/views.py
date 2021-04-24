from django.shortcuts import render
import json

# Create your views here.

from rest_framework.response import Response
from rest_framework.generics import GenericAPIView


def Form(request):

    print("***********")
    if request.is_ajax():
        print('*********************')
        # try:
        #     data = json.loads(request.body)
        #     print(data)
        #     name = data['name']
        #     email = data['email']
        #     subject = data['subject']
        #     description = data['message']
        #     obj = ContactForm()
        #     obj.name = name
        #     obj.email = email
        #     obj.subject = subject
        #     obj.description = description
        #     obj.save()
        #     result = {'Success':1,'data':'Thanks for your Request. We will get back to you'}
        #     print(result)
        #     return Response(result)
        #
        # except Exception as e:

        return Response({'Success':-1,'data':str('')})

