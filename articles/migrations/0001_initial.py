# Generated by Django 3.2 on 2021-04-24 15:44

import articles.models
from django.db import migrations, models
import django.db.models.deletion
import froala_editor.fields
import image_cropping.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, default='images/authors/default.png', null=True, upload_to='images/authors/%Y/%m/%d/D12g0grtT_OIq0OdQouRtA/')),
                ('cropping', image_cropping.fields.ImageRatioField('image', '200x200', adapt_rotation=False, allow_fullsize=False, free_crop=False, help_text=None, hide_image_field=False, size_warning=False, verbose_name='cropping')),
                ('name', models.TextField(max_length=200, unique=True)),
                ('description', models.TextField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, default='images/categories/default.png', null=True, upload_to='images/categories/%Y/%m/%d/hLIc1dkARIuonUgMLNllNA/')),
                ('cropping', image_cropping.fields.ImageRatioField('image', '400x200', adapt_rotation=False, allow_fullsize=False, free_crop=False, help_text=None, hide_image_field=False, size_warning=False, verbose_name='cropping')),
                ('name', models.TextField(max_length=200, unique=True)),
                ('description', models.TextField(max_length=200)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Feature_Request',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=250)),
                ('subject', models.CharField(max_length=100)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='FeatureRequests',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=250)),
                ('subject', models.CharField(max_length=1000)),
                ('description', models.TextField()),
                ('created_on', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'FeatureRequest',
                'verbose_name_plural': 'FeatureRequests',
            },
        ),
        migrations.CreateModel(
            name='GainerLoser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('currency_name', models.CharField(max_length=100)),
                ('currency_symbol', models.CharField(max_length=100)),
                ('percentage_change', models.CharField(max_length=100)),
                ('currency_change', models.CharField(max_length=100)),
                ('category', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Subscriber',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subscrib_email', models.EmailField(max_length=250)),
                ('news_email', models.EmailField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Subscribers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=250)),
                ('source', models.CharField(max_length=500)),
            ],
            options={
                'verbose_name': 'Subscriber',
                'verbose_name_plural': 'Subscribers',
            },
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=200, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.TextField(max_length=2000)),
                ('image', models.ImageField(default='images/articles/default.png', upload_to='images/articles/%Y/%m/%d/yV-Y1K4fTHOnQIrTKbQ92g/')),
                ('cropping', image_cropping.fields.ImageRatioField('image', '700x500', adapt_rotation=False, allow_fullsize=False, free_crop=False, help_text=None, hide_image_field=False, size_warning=False, verbose_name='cropping')),
                ('description', models.TextField()),
                ('content', froala_editor.fields.FroalaField()),
                ('date', models.DateField(default=articles.models.return_date_time)),
                ('priority', models.IntegerField(default=0)),
                ('featured', models.BooleanField(default=False)),
                ('link', models.TextField(default=None, null=True)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='articles.author')),
                ('categories', models.ManyToManyField(to='articles.Category')),
                ('tags', models.ManyToManyField(to='articles.Tag')),
            ],
        ),
    ]
