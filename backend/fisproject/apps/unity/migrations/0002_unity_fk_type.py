# Generated by Django 4.2.1 on 2023-05-27 18:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('type', '0001_initial'),
        ('unity', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='unity',
            name='fk_type',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='type.type'),
        ),
    ]
