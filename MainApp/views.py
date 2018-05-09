from django.shortcuts import render
from .models import *
from .forms import *
from django.template import RequestContext
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def main(request):
    if request.method == 'POST':
        if request.is_ajax():
            if request.POST.get('done'):
                obj = DoList.objects.get(pk=request.POST['id'])
                obj.done = True if request.POST['done'] == 'true' else False
                obj.save()
            elif request.POST.get('text'):
                form = PostForm(request.POST)
                if form.is_valid():
                    form.save()
            else:
                obj = DoList.objects.get(pk=request.POST['id'])
                obj.delete()

    form = PostForm()
    todo = DoList.objects.all().values()
    return render(request, 'index.html', {'todo': todo, 'form': form}, RequestContext(request))
