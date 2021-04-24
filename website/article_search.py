import json
from articles.models import Article
from django.contrib.postgres.search import SearchVector, SearchRank, SearchVector
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_protect

@csrf_protect
def article_search_view(request):

    if request.is_ajax():
        # without ranking
        data = json.loads(request.body)
        result = Article.objects.annotate(search=SearchVector('heading'),).filter(search=data['input']).values()[:10]

        # with ranking
        #vector = SearchVector('body_text')
        #query = SearchQuery(data['input'])
        #result = Article.objects.annotate(rank=SearchRank(vector, query)).order_by('-rank')[:10]

        return Response(result)