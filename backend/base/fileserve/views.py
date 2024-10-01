
import os
from django.conf import settings
from django.http import FileResponse, Http404

def download_file(request, filename):
    file_path = os.path.join(settings.ASSETS_ROOT, filename)
    if os.path.exists(file_path):
        print(True)
        return FileResponse(open(file_path, 'rb'), as_attachment=True, filename=filename)
    else:
        raise Http404("File does not exist")
