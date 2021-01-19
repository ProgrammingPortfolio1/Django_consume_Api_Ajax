
from django.http import HttpResponse, JsonResponse, request
from django.shortcuts import render
import requests
from django.template import RequestContext
import json
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from types import SimpleNamespace


def base(request):
    return render(request, 'base.html')


def index(request):
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        responseData = requests.get(
            'https://jsonplaceholder.typicode.com/users/').json()

        return JsonResponse(responseData, safe=False)


def info(request):
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        userid = request.GET['userid']

        responseData = requests.get(
            'https://jsonplaceholder.typicode.com/users/' + userid).json()

        return JsonResponse(responseData)


def posts(request):
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        userid = request.GET['userid']

        user = requests.get(
            'https://jsonplaceholder.typicode.com/users/' + userid).json()

        posts = requests.get(
            'https://jsonplaceholder.typicode.com/users/' + userid + '/posts').json()

        responseData = {"user": user, "posts": posts}
        return JsonResponse(responseData)


def photos(request):
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        userid = request.GET['userid']
        currentPage = request.GET['page']

        user = requests.get(
            'https://jsonplaceholder.typicode.com/users/' + userid).json()

        # We retrieve all the albums that belong to a specific user
        albums = requests.get(
            'https://jsonplaceholder.typicode.com/users/' + userid + '/albums/').json()

        # Serialize obj to a JSON formatted str
        albumsStr = json.dumps(albums)

        # Deserialize str instance containing a JSON document to a Python object
        almbumsObj = json.loads(
            albumsStr, object_hook=lambda d: SimpleNamespace(**d))

        # Initialize a list in which we store specific user's photos
        photosList = []

        for album in almbumsObj:
            response = requests.get(
                'https://jsonplaceholder.typicode.com/albums/' + str(album.id) + '/photos').json()

            photosList.extend(response)

        resultsPerPage = 24
        paginatorObj = Paginator(photosList, resultsPerPage)
        photosList = paginatorObj.page(int(currentPage)+1)

        responseData = {"hasnext": photosList.has_next(
        ), "photosList": photosList.object_list, "user": user}

        return JsonResponse(responseData)
