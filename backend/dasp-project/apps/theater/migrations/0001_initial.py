# Generated by Django 4.2.2 on 2023-06-23 19:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('cinema', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Theater',
            fields=[
                ('pk_i', models.AutoField(primary_key=True, serialize=False)),
                ('b_estado', models.BooleanField(default=False)),
                ('fk_cinema', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Cinema', to='cinema.cinema')),
            ],
        ),
    ]
