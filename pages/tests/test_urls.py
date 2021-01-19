
from django.test import TestCase
from django.urls import reverse, resolve
from pages.views import index, info, posts, photos, base
import re


class YourTestClass(TestCase):

    def test_base(self):
        url = reverse('base')
        self.assertEquals(resolve(url).func, base)

    def test_index(self):
        url = reverse('index')
        self.assertEquals(resolve(url).func, index)

    def test_info(self):
        url = reverse('info')
        self.assertEquals(resolve(url).func, info)

    def test_posts(self):
        url = reverse('posts')
        self.assertEquals(resolve(url).func, posts)

    def test_photos(self):
        url = reverse('photos')
        self.assertEquals(resolve(url).func, photos)

