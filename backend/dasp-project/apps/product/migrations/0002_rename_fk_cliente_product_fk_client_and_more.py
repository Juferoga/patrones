# Generated by Django 4.2.2 on 2023-06-24 17:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='fk_cliente',
            new_name='fk_client',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='n_precio',
            new_name='n_price',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='n_valoracion',
            new_name='n_ranking',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='t_descripcion',
            new_name='t_description',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='t_tipo',
            new_name='t_type',
        ),
    ]
